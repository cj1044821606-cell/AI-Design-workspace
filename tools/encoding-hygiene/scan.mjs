import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, 'src');
const outputDir = path.join(projectRoot, 'output');
const aliasPrefix = '@/';

const suspiciousSnippets = [
  '鐢',
  '鍦',
  '闂',
  '閸',
  '娴',
  '鏍',
  '缁',
  '鍙',
  '顣',
  '鎺矯',
  '卤',
  '鍗',
  '鈮',
  '掳C',
  '??',
  '???',
];

const textNeedles = [
  '6,000 Cycle Life',
  'Multi-Function Output',
  'Anti-Dust and Waterproof',
  'Anti-Dust & Waterproof',
  '鎺矯',
  '卤',
  '鍗',
  '鈮',
  '掳C',
  'Dimensions闁',
  'Dimensions锛',
  'Dimensions閿',
  'Power Derating',
  'Strong Overload Capability and Smart Overload Protection',
];

function walk(dir, matcher, bucket = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, matcher, bucket);
      continue;
    }
    if (entry.isFile() && matcher(fullPath)) {
      bucket.push(fullPath);
    }
  }
  return bucket;
}

function toPosix(relativePath) {
  return relativePath.split(path.sep).join('/');
}

function isSuspicious(value) {
  return suspiciousSnippets.some((snippet) => value.includes(snippet));
}

function resolveAliasImport(specifier) {
  if (!specifier.startsWith(aliasPrefix)) return null;
  return path.join(projectRoot, specifier.slice(aliasPrefix.length));
}

function collectImports(content) {
  const importRegex = /import\s+.+?\s+from\s+['"]([^'"]+)['"]/g;
  return [...content.matchAll(importRegex)]
    .filter((match) => {
      const lineStart = content.lastIndexOf('\n', match.index) + 1;
      const line = content.slice(lineStart, content.indexOf('\n', match.index) === -1 ? content.length : content.indexOf('\n', match.index));
      return !line.trim().startsWith('//');
    })
    .map((match) => match[1]);
}

function collectLabels(content) {
  const labelRegex = /<div className="design-group-label">([\s\S]*?)<\/div>/g;
  return [...content.matchAll(labelRegex)].map((match) => match[1]);
}

function main() {
  const files = walk(
    srcRoot,
    (fullPath) => fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx'),
  );

  const report = {
    generatedAt: new Date().toISOString(),
    importIssues: [],
    labelIssues: [],
    textIssues: [],
  };

  for (const file of files) {
    const relativeFile = toPosix(path.relative(projectRoot, file));
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split(/\r?\n/);

    for (const specifier of collectImports(content)) {
      const resolved = resolveAliasImport(specifier);
      const exists = resolved ? fs.existsSync(resolved) : true;
      if (isSuspicious(specifier) || !exists) {
        report.importIssues.push({
          file: relativeFile,
          specifier,
          resolved: resolved ? toPosix(path.relative(projectRoot, resolved)) : null,
          exists,
        });
      }
    }

    collectLabels(content).forEach((label) => {
      if (!isSuspicious(label)) return;
      report.labelIssues.push({
        file: relativeFile,
        label,
      });
    });

    lines.forEach((line, index) => {
      if (!textNeedles.some((needle) => line.includes(needle))) return;
      report.textIssues.push({
        file: relativeFile,
        lineNumber: index + 1,
        line: line.trim(),
      });
    });
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(
    path.join(outputDir, 'encoding-hygiene-report.json'),
    JSON.stringify(report, null, 2),
    'utf8',
  );

  const summaryLines = [
    `generatedAt: ${report.generatedAt}`,
    `importIssues: ${report.importIssues.length}`,
    `labelIssues: ${report.labelIssues.length}`,
    `textIssues: ${report.textIssues.length}`,
    '',
    '[Import Issues]',
    ...report.importIssues.map((issue) => `${issue.file} :: ${issue.specifier} :: exists=${issue.exists}`),
    '',
    '[Label Issues]',
    ...report.labelIssues.map((issue) => `${issue.file} :: ${issue.label}`),
    '',
    '[Text Issues]',
    ...report.textIssues.map((issue) => `${issue.file}:${issue.lineNumber} :: ${issue.line}`),
  ];

  fs.writeFileSync(path.join(outputDir, 'encoding-hygiene-report.txt'), summaryLines.join('\n'), 'utf8');

  console.log(
    JSON.stringify(
      {
        importIssues: report.importIssues.length,
        labelIssues: report.labelIssues.length,
        textIssues: report.textIssues.length,
      },
      null,
      2,
    ),
  );
}

main();
