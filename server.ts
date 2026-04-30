import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import os from "os";
import { PDFDocument } from "pdf-lib";
import { chromium, type LaunchOptions } from "playwright";

type AuditIssueStatus = "open" | "ignored" | "applied" | "invalidated";

interface AuditCandidate {
  candidateId: string;
  label: string;
  value: string;
  explanation?: string;
}

interface AuditLocation {
  editionId?: string;
  projectType?: string;
  spreadId?: string;
  componentName?: string;
  sourceLayer: "catalog-data" | "catalog-layouts" | "catalog-editions" | "legacy-spread";
  sourcePath: string;
  anchorLabel?: string;
  textQuery?: string;
  occurrenceIndex?: number;
  areaType?: string;
}

interface AuditIssue {
  issueId: string;
  issueType: string;
  severity: string;
  message: string;
  why: string;
  location: AuditLocation;
  currentValue: string;
  candidates: AuditCandidate[];
  recommendedCandidateId: string;
  ignoreSignature: string;
  status?: AuditIssueStatus;
  appliedCandidateId?: string;
  appliedAt?: string;
}

interface AuditSession {
  schema: "catalog_audit_report_v1";
  auditId: string;
  materialType: string;
  projectType?: string;
  range?: Record<string, unknown>;
  issues: AuditIssue[];
  createdAt?: string;
  importedAt?: string;
}

interface AuditIgnoreRule {
  signature: string;
  createdAt: string;
  sourceIssueId: string;
  sourceAuditId: string;
}

interface AuditCheckpoint {
  checkpointId: string;
  createdAt: string;
  auditId: string;
  issueId: string;
  targetFiles: string[];
  beforeSnapshots: Array<{ filePath: string; content: string }>;
  summary: string;
  restoredAt?: string;
}

interface AuditIssueStore {
  latestAuditId: string | null;
  sessions: AuditSession[];
}

function getBrowserLaunchOptions(): LaunchOptions {
  const candidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ];

  const executablePath = candidates.find((candidate) => fs.existsSync(candidate));
  if (executablePath) {
    return { headless: true, executablePath };
  }

  return { headless: true, channel: "chrome" };
}

function ensureJsonFile<T>(filePath: string, initialValue: T) {
  const directory = path.dirname(filePath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(initialValue, null, 2), "utf-8");
  }
}

function readJsonFile<T>(filePath: string, initialValue: T) {
  ensureJsonFile(filePath, initialValue);
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

function writeJsonFile<T>(filePath: string, value: T) {
  ensureJsonFile(filePath, value);
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), "utf-8");
}

function decodeMaybeMojibake(value: string) {
  if (!value.includes('?')) return value;
  try {
    return Buffer.from(value, 'latin1').toString('utf8');
  } catch {
    return value;
  }
}

function normalizeAuditTextNode<T>(value: T): T {
  if (typeof value === 'string') {
    return decodeMaybeMojibake(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((entry) => normalizeAuditTextNode(entry)) as T;
  }

  if (value && typeof value === 'object') {
    const next: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
      next[key] = normalizeAuditTextNode(entry);
    }
    return next as T;
  }

  return value;
}

function parseJsonRequestBody(req: express.Request) {
  const payloadBuffer = Buffer.isBuffer(req.body)
    ? req.body
    : (req as express.Request & { rawBody?: Buffer }).rawBody;

  if (payloadBuffer?.length) {
    return JSON.parse(payloadBuffer.toString('utf8'));
  }

  return req.body;
}

function isAuditSession(value: unknown): value is AuditSession {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<AuditSession>;
  return candidate.schema === "catalog_audit_report_v1" && typeof candidate.auditId === "string" && Array.isArray(candidate.issues);
}

function decorateSession(session: AuditSession | undefined, ignoreRules: AuditIgnoreRule[]) {
  if (!session) return null;
  const ignored = new Set(ignoreRules.map((rule) => rule.signature));
  return {
    ...session,
    issues: session.issues.map((issue) => {
      if (issue.status === "applied") return issue;
      if (ignored.has(issue.ignoreSignature)) {
        return { ...issue, status: "ignored" as const };
      }
      return { ...issue, status: issue.status ?? "open" };
    }),
  };
}

function resolveAuditPaths(rootDir: string) {
  const auditDir = path.join(rootDir, "data", "audit");
  return {
    auditDir,
    issuesFile: path.join(auditDir, "issues.json"),
    ignoreRulesFile: path.join(auditDir, "ignore-rules.json"),
    checkpointsFile: path.join(auditDir, "checkpoints.json"),
  };
}

function loadAuditBundle(rootDir: string) {
  const paths = resolveAuditPaths(rootDir);
  const issues = readJsonFile<AuditIssueStore>(paths.issuesFile, { latestAuditId: null, sessions: [] });
  const ignoreRules = readJsonFile<AuditIgnoreRule[]>(paths.ignoreRulesFile, []);
  const checkpoints = readJsonFile<AuditCheckpoint[]>(paths.checkpointsFile, []);
  return { paths, issues, ignoreRules, checkpoints };
}

function saveAuditBundle(
  paths: ReturnType<typeof resolveAuditPaths>,
  issues: AuditIssueStore,
  ignoreRules: AuditIgnoreRule[],
  checkpoints: AuditCheckpoint[],
) {
  writeJsonFile(paths.issuesFile, issues);
  writeJsonFile(paths.ignoreRulesFile, ignoreRules);
  writeJsonFile(paths.checkpointsFile, checkpoints);
}

function buildAuditResponse(rootDir: string, auditId?: string | null) {
  const { issues, ignoreRules, checkpoints } = loadAuditBundle(rootDir);
  const targetAuditId = auditId === "latest" || !auditId ? issues.latestAuditId : auditId;
  const session = decorateSession(
    issues.sessions.find((candidate) => candidate.auditId === targetAuditId),
    ignoreRules,
  );

  return { session, ignoreRules, checkpoints };
}

function createCheckpoint(
  checkpoints: AuditCheckpoint[],
  auditId: string,
  issueId: string,
  summary: string,
  snapshots: Array<{ filePath: string; content: string }>,
) {
  const checkpoint: AuditCheckpoint = {
    checkpointId: `checkpoint_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    auditId,
    issueId,
    targetFiles: snapshots.map((snapshot) => snapshot.filePath),
    beforeSnapshots: snapshots,
    summary,
  };
  checkpoints.unshift(checkpoint);
  return checkpoint;
}

function resolveWritableFile(rootDir: string, issue: AuditIssue) {
  const normalized = path.normalize(issue.location.sourcePath);
  const filePath = path.join(rootDir, normalized);
  const relative = path.relative(rootDir, filePath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Invalid source path");
  }

  const allowedRoots = {
    "catalog-data": path.join("src", "catalog-data"),
    "catalog-layouts": path.join("src", "catalog-layouts"),
    "catalog-editions": path.join("src", "catalog-editions"),
    "legacy-spread": path.join("src", "components"),
  } as const;

  const allowedRoot = allowedRoots[issue.location.sourceLayer];
  if (!relative.startsWith(allowedRoot)) {
    throw new Error("Source path is outside of allowed layer");
  }

  if (!fs.existsSync(filePath)) {
    throw new Error("Target source file not found");
  }

  return filePath;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT ?? "3000");
  const HMR_PORT = Number(process.env.VITE_HMR_PORT ?? String(PORT + 1));

  app.use(express.raw({ type: "application/json", limit: "250mb", verify: (req, res, buf) => { (req as express.Request & { rawBody?: Buffer }).rawBody = Buffer.from(buf); } }));
  app.use(express.json({ limit: "250mb" }));

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/audit/session/:auditId", (req, res) => {
    try {
      const bundle = buildAuditResponse(process.cwd(), req.params.auditId);
      res.json(bundle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to read audit session" });
    }
  });

  app.post("/api/audit/report", (req, res) => {
    let payload: unknown;

    try {
      payload = parseJsonRequestBody(req);
    } catch (parseError) {
      console.error(parseError);
      return res.status(400).json({ error: "Invalid UTF-8 audit payload" });
    }

    if (!isAuditSession(payload)) {
      return res.status(400).json({ error: "Invalid audit report schema" });
    }

    try {
      const { paths, issues, ignoreRules, checkpoints } = loadAuditBundle(process.cwd());
      const normalizedPayload = normalizeAuditTextNode(payload);
      const session: AuditSession = {
        ...normalizedPayload,
        importedAt: new Date().toISOString(),
        issues: normalizedPayload.issues.map((issue) => ({
          ...issue,
          status: issue.status ?? "open",
        })),
      };

      const existingIndex = issues.sessions.findIndex((candidate) => candidate.auditId === session.auditId);
      if (existingIndex >= 0) {
        issues.sessions[existingIndex] = session;
      } else {
        issues.sessions.unshift(session);
      }
      issues.latestAuditId = session.auditId;

      saveAuditBundle(paths, issues, ignoreRules, checkpoints);
      res.json(buildAuditResponse(process.cwd(), session.auditId));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to save audit report" });
    }
  });

  app.post("/api/audit/ignore", (req, res) => {
    let payload: { auditId?: string; issueId?: string; ignoreSignature?: string };

    try {
      payload = parseJsonRequestBody(req) as { auditId?: string; issueId?: string; ignoreSignature?: string };
    } catch (parseError) {
      console.error(parseError);
      return res.status(400).json({ error: "Invalid audit ignore payload" });
    }

    const { auditId, issueId, ignoreSignature } = payload;

    if (!auditId || !issueId || !ignoreSignature) {
      return res.status(400).json({ error: "Missing audit ignore parameters" });
    }

    try {
      const { paths, issues, ignoreRules, checkpoints } = loadAuditBundle(process.cwd());
      const session = issues.sessions.find((candidate) => candidate.auditId === auditId);
      const issue = session?.issues.find((candidate) => candidate.issueId === issueId);

      if (!session || !issue) {
        return res.status(404).json({ error: "Audit issue not found" });
      }

      if (!ignoreRules.find((rule) => rule.signature === ignoreSignature)) {
        ignoreRules.unshift({
          signature: ignoreSignature,
          createdAt: new Date().toISOString(),
          sourceIssueId: issueId,
          sourceAuditId: auditId,
        });
      }

      issue.status = "ignored";
      createCheckpoint(checkpoints, auditId, issueId, `Ignore audit issue ${issueId}`, []);
      saveAuditBundle(paths, issues, ignoreRules, checkpoints);
      res.json(buildAuditResponse(process.cwd(), auditId));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to ignore audit issue" });
    }
  });

  app.post("/api/audit/restore-checkpoint", (req, res) => {
    const payload = req.body as { checkpointId?: string };
    const { checkpointId } = payload;

    if (!checkpointId) {
      return res.status(400).json({ error: "Missing checkpointId" });
    }

    try {
      const { paths, issues, ignoreRules, checkpoints } = loadAuditBundle(process.cwd());
      const checkpoint = checkpoints.find((entry) => entry.checkpointId === checkpointId);

      if (!checkpoint) {
        return res.status(404).json({ error: "Checkpoint not found" });
      }

      for (const snapshot of checkpoint.beforeSnapshots) {
        fs.writeFileSync(snapshot.filePath, snapshot.content, "utf-8");
      }

      const session = issues.sessions.find((entry) => entry.auditId === checkpoint.auditId);
      const issue = session?.issues.find((entry) => entry.issueId === checkpoint.issueId);
      if (issue) {
        issue.status = "open";
        delete issue.appliedCandidateId;
        delete issue.appliedAt;
      }

      checkpoint.restoredAt = new Date().toISOString();
      issues.latestAuditId = checkpoint.auditId;
      saveAuditBundle(paths, issues, ignoreRules, checkpoints);
      res.json(buildAuditResponse(process.cwd(), checkpoint.auditId));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error instanceof Error ? error.message : "Failed to restore checkpoint" });
    }
  });

  app.post("/api/audit/apply", (req, res) => {
    let payload: { auditId?: string; issueId?: string; candidateId?: string };

    try {
      payload = parseJsonRequestBody(req) as { auditId?: string; issueId?: string; candidateId?: string };
    } catch (parseError) {
      console.error(parseError);
      return res.status(400).json({ error: "Invalid audit apply payload" });
    }

    const { auditId, issueId, candidateId } = payload;

    if (!auditId || !issueId || !candidateId) {
      return res.status(400).json({ error: "Missing audit apply parameters" });
    }

    try {
      const { paths, issues, ignoreRules, checkpoints } = loadAuditBundle(process.cwd());
      const session = issues.sessions.find((candidate) => candidate.auditId === auditId);
      const issue = session?.issues.find((candidate) => candidate.issueId === issueId);
      const candidate = issue?.candidates.find((entry) => entry.candidateId === candidateId);

      if (!session || !issue || !candidate) {
        return res.status(404).json({ error: "Audit issue or candidate not found" });
      }

      const filePath = resolveWritableFile(process.cwd(), issue);
      const originalContent = fs.readFileSync(filePath, "utf-8");
      const occurrences = originalContent.split(issue.currentValue).length - 1;

      if (occurrences !== 1) {
        return res.status(400).json({
          error: `Current value must match exactly once before apply. Found ${occurrences} matches.`,
        });
      }

      createCheckpoint(checkpoints, auditId, issueId, `Apply audit issue ${issueId}`, [{ filePath, content: originalContent }]);
      const nextContent = originalContent.replace(issue.currentValue, candidate.value);
      fs.writeFileSync(filePath, nextContent, "utf-8");

      issue.status = "applied";
      issue.appliedCandidateId = candidateId;
      issue.appliedAt = new Date().toISOString();

      saveAuditBundle(paths, issues, ignoreRules, checkpoints);
      res.json(buildAuditResponse(process.cwd(), auditId));
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to apply audit issue",
      });
    }
  });

  app.post("/api/save-image-transform", (req, res) => {
    const payload = parseJsonRequestBody(req) as {
      componentName?: string;
      componentPath?: string;
      x?: number;
      y?: number;
      scale?: number;
    };
    const { componentName, componentPath, x, y, scale } = payload;
    
    if (!componentName || typeof x !== 'number' || typeof y !== 'number' || typeof scale !== 'number') {
      return res.status(400).json({ error: "Invalid parameters" });
    }

    const normalizedComponentPath = typeof componentPath === "string" && componentPath.length > 0
      ? path.normalize(componentPath)
      : `${componentName}.tsx`;

    const componentsRoot = path.join(process.cwd(), "src", "components");
    const filePath = path.join(componentsRoot, normalizedComponentPath);
    const relativePath = path.relative(componentsRoot, filePath);

    if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
      return res.status(400).json({ error: "Invalid component path" });
    }
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Component not found" });
    }

    try {
      let content = fs.readFileSync(filePath, "utf-8");
      
      // Regex to find the transform props comments and replace the values
      const regexX = /initialX=\{([^}]+)\}\s*\/\*\s*IMAGE_TRANSFORM_X\s*\*\//g;
      const regexY = /initialY=\{([^}]+)\}\s*\/\*\s*IMAGE_TRANSFORM_Y\s*\*\//g;
      const regexScale = /initialScale=\{([^}]+)\}\s*\/\*\s*IMAGE_TRANSFORM_SCALE\s*\*\//g;
      
      let updated = false;
      if (regexX.test(content) && regexY.test(content) && regexScale.test(content)) {
        content = content.replace(regexX, `initialX={${x}} /* IMAGE_TRANSFORM_X */`);
        content = content.replace(regexY, `initialY={${y}} /* IMAGE_TRANSFORM_Y */`);
        content = content.replace(regexScale, `initialScale={${scale}} /* IMAGE_TRANSFORM_SCALE */`);
        fs.writeFileSync(filePath, content, "utf-8");
        res.json({ success: true });
      } else {
        res.status(400).json({ error: "Transform markers not found in component" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to save file" });
    }
  });

  app.post("/api/export-low-quality-pdf", async (req, res) => {
    const { html, fileName } = req.body;

    if (typeof html !== "string" || html.trim().length === 0) {
      return res.status(400).json({ error: "Invalid HTML payload" });
    }

    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-lowpdf-"));
    const htmlPath = path.join(tempRoot, "render.html");
    const pdfName = typeof fileName === "string" && fileName.trim().length > 0
      ? fileName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
      : "catalog-low-quality.pdf";

    fs.writeFileSync(htmlPath, html, "utf-8");

    let browser: Awaited<ReturnType<typeof chromium.launch>> | null = null;

    try {
      browser = await chromium.launch(getBrowserLaunchOptions());
      const page = await browser.newPage({
        viewport: { width: 1800, height: 1400 },
        deviceScaleFactor: 1,
      });

      await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
      await page.waitForSelector(".page-container", { timeout: 30000 });

      const pageCount = await page.locator(".page-container").count();

      await page.evaluate(async () => {
        const images = Array.from(document.images);
        await Promise.all(images.map((image) => {
          if (image.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          });
        }));

        if ("fonts" in document) {
          await (document as Document & { fonts: FontFaceSet }).fonts.ready;
        }
      });

      await page.addStyleTag({
        content: `
          html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; }
          body { display: block !important; }
          .page-container {
            box-shadow: none !important;
            margin: 0 !important;
            transform: none !important;
            page-break-after: always !important;
          }
        `,
      });

      const pdfDoc = await PDFDocument.create();

      for (let index = 0; index < pageCount; index += 1) {
        const locator = page.locator(".page-container").nth(index);
        const box = await locator.boundingBox();
        if (!box) continue;

        const imageBuffer = await locator.screenshot({
          type: "png",
          animations: "disabled",
        });
        const embeddedImage = await pdfDoc.embedPng(imageBuffer);
        const pdfPage = pdfDoc.addPage([box.width, box.height]);
        pdfPage.drawImage(embeddedImage, {
          x: 0,
          y: 0,
          width: box.width,
          height: box.height,
        });
      }

      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(pdfName)}"`);
      res.send(Buffer.from(pdfBytes));
    } catch (error) {
      console.error("Low quality PDF export failed:", error);
      res.status(500).json({ error: "Low quality PDF export failed" });
    } finally {
      if (browser) {
        await browser.close();
      }
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: { port: HMR_PORT } },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
