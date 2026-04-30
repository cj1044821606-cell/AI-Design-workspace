#!/usr/bin/env tsx
/* ------------------------------------------------------------------ */
/*  PDF Design Parser — CLI Entry Point                                */
/*                                                                     */
/*  Usage:                                                             */
/*    npx tsx tools/pdf-design-parser/index.ts -i <pdf> [-o <dir>]     */
/* ------------------------------------------------------------------ */

import node_fs from 'node:fs';
import node_path from 'node:path';
import node_url from 'node:url';

import type { DesignReport, AssetInfo } from './types.ts';
import { parsePage } from './parse-page.ts';
import { extractEmbeddedImages, renderFullPage } from './extract-images.ts';
import { buildPageGroups } from './group-page.ts';

/* ------------------------------------------------------------------ */
/*  CLI argument parsing (minimal, no deps)                            */
/* ------------------------------------------------------------------ */

function parseArgs() {
  const args = process.argv.slice(2);
  const opts: Record<string, string> = {};
  const flags = new Set<string>();

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--render-pages') {
      flags.add('render-pages');
    } else if (arg.startsWith('--') || arg.startsWith('-')) {
      const key = arg.replace(/^-+/, '');
      const next = args[i + 1];
      if (next && !next.startsWith('-')) {
        opts[key] = next;
        i++;
      } else {
        flags.add(key);
      }
    }
  }

  const input = opts['input'] || opts['i'];
  if (!input) {
    console.error('Usage: npx tsx tools/pdf-design-parser/index.ts -i <pdf> [-o <dir>] [--render-pages] [--scale N] [--min-rect-mm N]');
    console.error('\nOptions:');
    console.error('  -i, --input          PDF file path (required)');
    console.error('  -o, --output         Output directory (default: auto-generated)');
    console.error('  --render-pages       Also render full pages as high-DPI PNG');
    console.error('  --scale              Render scale for full-page PNG (default: 4)');
    console.error('  --min-rect-mm        Ignore rectangles smaller than this (default: 1)');
    process.exit(1);
  }

  return {
    input: node_path.resolve(input),
    output: opts['output'] || opts['o'] || '',
    renderPages: flags.has('render-pages'),
    scale: parseFloat(opts['scale'] || '4'),
    minRectMm: parseFloat(opts['min-rect-mm'] || '1'),
  };
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

async function main() {
  const opts = parseArgs();

  // Validate input file
  if (!node_fs.existsSync(opts.input)) {
    console.error(`Error: File not found: ${opts.input}`);
    process.exit(1);
  }

  const inputName = node_path.basename(opts.input, '.pdf');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const outputDir = opts.output
    ? node_path.resolve(opts.output)
    : node_path.resolve(`output/pdf-parse-${timestamp}`);

  node_fs.mkdirSync(node_path.join(outputDir, 'images'), { recursive: true });

  console.log(`\n╔══════════════════════════════════════════════╗`);
  console.log(`║  PDF Design Parser                           ║`);
  console.log(`╚══════════════════════════════════════════════╝`);
  console.log(`  Input:  ${opts.input}`);
  console.log(`  Output: ${outputDir}`);
  console.log(`  Scale:  ${opts.scale}x | Min rect: ${opts.minRectMm}mm`);
  console.log('');

  // --- Load PDF via pdfjs-dist ---
  console.log('Loading PDF...');
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');

  const data = new Uint8Array(node_fs.readFileSync(opts.input));
  const loadingTask = pdfjs.getDocument({
    data,
    verbosity: 0, // ERRORS only
    useSystemFonts: false,
  });

  const doc = await loadingTask.promise;
  console.log(`  Pages: ${doc.numPages}`);

  // --- Get metadata ---
  let creator = '';
  try {
    const meta = await doc.getMetadata();
    creator = (meta?.info as any)?.Creator || '';
    if (creator) console.log(`  Creator: ${creator}`);
  } catch { /* ignore */ }

  // --- Process each page ---
  const report: DesignReport = {
    source: node_path.basename(opts.input),
    createdAt: new Date().toISOString(),
    pages: [],
    extractedAssets: {},
  };

  for (let p = 1; p <= doc.numPages; p++) {
    console.log(`\n── Page ${p} ──`);
    const page = await doc.getPage(p);
    const viewport = page.getViewport({ scale: 1 });

    // Extract embedded images FIRST — pdfjs resolves image data during the
    // first getOperatorList() call.  If parsePage runs first it consumes
    // the cached operator list and late-arriving image data callbacks
    // (e.g. group-internal images like g_d0_*) may never fire.
    const { imageAssets } = await extractEmbeddedImages(
      page, p, viewport.height, outputDir, opts.input,
    );

    // Parse elements (text, rects, paths, image positions)
    const { report: pageReport, imagePositions } = await parsePage(page, p, {
      minRectMm: opts.minRectMm,
    });
    console.log(`  Dimensions: ${pageReport.width_mm} × ${pageReport.height_mm} mm`);

    // Update placeholder image elements with real asset data (preserves z-order)
    for (const el of pageReport.elements) {
      if (el.type === 'image' && el.assetPath.startsWith('__pending__:')) {
        const imgName = el.assetPath.slice('__pending__:'.length);
        let asset = imageAssets.get(imgName);
        // pdfjs may prefix group-internal image names with g_d0_ etc.
        if (!asset) {
          const stripped = imgName.replace(/^(g_d\d+_)+/, '');
          if (stripped !== imgName) asset = imageAssets.get(stripped);
        }
        if (asset) {
          el.assetPath = asset.assetPath;
          el.original_px = asset.info.originalSize;
        } else {
          el.assetPath = '__unresolved__';
        }
      }
    }
    // Remove unresolved image placeholders
    pageReport.elements = pageReport.elements.filter(
      el => !(el.type === 'image' && el.assetPath === '__unresolved__'),
    );

    // Record asset info
    for (const [name, { assetPath, info }] of imageAssets) {
      report.extractedAssets[assetPath] = info;
    }

    // Optional: render full page as high-DPI PNG
    if (opts.renderPages) {
      console.log(`  Rendering page at ${opts.scale}x...`);
      const fullPagePath = await renderFullPage(page, p, opts.scale, outputDir);
      report.extractedAssets[fullPagePath] = {
        originalSize: [
          Math.round(viewport.width * opts.scale),
          Math.round(viewport.height * opts.scale),
        ],
        format: 'RGBA_PNG',
        source: 'rasterized_region',
        renderScale: opts.scale,
      };
    }

    // Count by type
    const counts = { text: 0, image: 0, rect: 0, path: 0 };
    for (const el of pageReport.elements) {
      counts[el.type as keyof typeof counts]++;
    }
    console.log(`  Elements: ${pageReport.elements.length} total`);
    console.log(`    text: ${counts.text} | image: ${counts.image} | rect: ${counts.rect} | path: ${counts.path}`);

    pageReport.groups = buildPageGroups(pageReport);
    console.log(`  Groups: ${pageReport.groups.length}`);

    report.pages.push(pageReport);
    page.cleanup();
  }

  // --- Write report ---
  const reportPath = node_path.join(outputDir, 'report.json');
  node_fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');

  // --- Summary ---
  const totalElements = report.pages.reduce((sum, p) => sum + p.elements.length, 0);
  const totalImages = Object.keys(report.extractedAssets).length;

  console.log(`\n╔══════════════════════════════════════════════╗`);
  console.log(`║  Done!                                       ║`);
  console.log(`╚══════════════════════════════════════════════╝`);
  console.log(`  Report: ${reportPath}`);
  console.log(`  Elements: ${totalElements} across ${doc.numPages} pages`);
  console.log(`  Images extracted: ${totalImages}`);
  console.log('');

  // Cleanup
  await doc.destroy();
}

main().catch((err) => {
  console.error('\nFatal error:', err);
  process.exit(1);
});
