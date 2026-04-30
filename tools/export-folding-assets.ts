#!/usr/bin/env tsx
/* ------------------------------------------------------------------ */
/*  Export Folding Brochure Assets  (v3 — unified render list)         */
/*                                                                     */
/*  Generates a unified render list per page where SVG vector chunks,  */
/*  images, and text are interleaved by paintOrder for correct z-order */
/* ------------------------------------------------------------------ */

import node_fs from 'node:fs';
import node_path from 'node:path';

const ROOT = node_path.resolve(import.meta.dirname, '..');
const REPORT = node_path.join(ROOT, 'output/folding-ru-parsed/report.json');
const IMAGES_SRC = node_path.join(ROOT, 'output/folding-ru-parsed/images');
const PUBLIC_OUT = node_path.join(ROOT, 'public/folding-assets');
const DATA_OUT = node_path.join(ROOT, 'src/data/folding-ru-page-data.ts');

/* ---- Types ---- */

interface BBox { x_mm: number; y_mm: number; width_mm: number; height_mm: number }

interface BaseEl {
  type: string; id: string; paintOrder: number; zIndex: number;
  opacity: number; fillOpacity: number; strokeOpacity: number;
  blendMode: string; isClipped: boolean;
  clipPathId: string | null; clipBoundingBox: BBox | null;
  visibleBoundingBox: BBox | null;
}
interface PathEl extends BaseEl { type: 'path'; d: string; boundingBox: BBox; fillColor: string | null; fillColorMode: string; strokeColor: string | null; strokeColorMode: string; strokeWidth_mm: number; dashArray_mm: number[]; dashOffset_mm: number; lineCap: number; lineJoin: number }
interface RectEl extends BaseEl { type: 'rect'; x_mm: number; y_mm: number; width_mm: number; height_mm: number; fillColor: string | null; fillColorMode: string; strokeColor: string | null; strokeColorMode: string; strokeWidth_mm: number; dashArray_mm: number[]; dashOffset_mm: number; lineCap: number; lineJoin: number }
interface TextEl extends BaseEl {
  type: 'text'; content: string;
  x_mm: number; y_mm: number; width_mm: number; height_mm: number;
  baseline_x_mm: number; baseline_y_mm: number; rotation_deg: number;
  font: string; fontFamily: string; fontPostScriptName: string;
  fontWeight: number; fontStyle: string; fontSize_pt: number;
  color: string; nativeColorMode: string; fillColor: string;
  strokeColor: string | null; direction: string;
}
interface ImageEl extends BaseEl {
  type: 'image'; assetPath: string;
  x_mm: number; y_mm: number; display_width_mm: number; display_height_mm: number;
  original_px: [number, number];
}
type El = PathEl | RectEl | TextEl | ImageEl;
interface Page { pageNumber: number; width_mm: number; height_mm: number; elements: El[] }
interface Report { source: string; pages: Page[] }

/* ---- SVG helpers ---- */

function escAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function vectorToSvgInner(el: PathEl | RectEl): string {
  const fillOpAttr = el.fillOpacity < 1 ? ` fill-opacity="${el.fillOpacity}"` : '';
  const strokeOpAttr = el.strokeOpacity < 1 ? ` stroke-opacity="${el.strokeOpacity}"` : '';
  const opAttr = (el.opacity < 1 && el.fillOpacity >= 1 && el.strokeOpacity >= 1)
    ? ` opacity="${el.opacity}"` : '';

  let dashAttrs = '';
  if (el.dashArray_mm && el.dashArray_mm.length > 0) {
    dashAttrs += ` stroke-dasharray="${el.dashArray_mm.join(' ')}"`;
    if (el.dashOffset_mm) dashAttrs += ` stroke-dashoffset="${el.dashOffset_mm}"`;
  }
  if (el.lineCap && el.lineCap !== 0) {
    const capNames = ['butt', 'round', 'square'];
    dashAttrs += ` stroke-linecap="${capNames[el.lineCap] || 'butt'}"`;
  }
  if (el.lineJoin && el.lineJoin !== 0) {
    const joinNames = ['miter', 'round', 'bevel'];
    dashAttrs += ` stroke-linejoin="${joinNames[el.lineJoin] || 'miter'}"`;
  }

  if (el.type === 'rect') {
    const fill = el.fillColor ? `fill="${el.fillColor}"` : 'fill="none"';
    const stroke = el.strokeColor ? `stroke="${el.strokeColor}" stroke-width="${el.strokeWidth_mm}"` : '';
    return `<rect x="${el.x_mm}" y="${el.y_mm}" width="${el.width_mm}" height="${el.height_mm}" ${fill} ${stroke}${fillOpAttr}${strokeOpAttr}${opAttr}${dashAttrs}/>`;
  }
  const fill = el.fillColor ? `fill="${el.fillColor}"` : 'fill="none"';
  const stroke = el.strokeColor ? `stroke="${el.strokeColor}" stroke-width="${el.strokeWidth_mm}"` : '';
  return `<path d="${escAttr(el.d)}" ${fill} ${stroke}${fillOpAttr}${strokeOpAttr}${opAttr}${dashAttrs}/>`;
}

/* ---- Build unified render list ---- */

interface SvgChunk { type: 'svg'; zIndex: number; content: string; clipId?: string; clipBounds?: BBox }
interface ImgItem { type: 'image'; zIndex: number; id: string; asset: string; x: number; y: number; w: number; h: number; opacity: number; isClipped: boolean; clipBounds: { x: number; y: number; w: number; h: number } | null }
interface TxtItem {
  type: 'text'; zIndex: number; id: string; content: string;
  x: number; y: number; w: number; h: number;
  baselineX: number; baselineY: number; rotation: number;
  fontFamily: string; fontWeight: number; fontStyle: string;
  size: number; fillColor: string; strokeColor: string | null;
  opacity: number;
}
type RenderItem = SvgChunk | ImgItem | TxtItem;

function buildRenderList(page: Page): RenderItem[] {
  const sorted = [...page.elements].sort((a, b) => a.paintOrder - b.paintOrder);
  const items: RenderItem[] = [];
  let zCounter = 0;

  // Snap clip edges that nearly touch the page boundary (avoid subpixel gaps)
  const PAGE_SNAP_MM = 0.5;
  function snapClip(cb: BBox): BBox {
    const result = { ...cb };
    if (result.x_mm < PAGE_SNAP_MM) result.x_mm = 0;
    if (result.y_mm < PAGE_SNAP_MM) result.y_mm = 0;
    const rightGap = page.width_mm - (result.x_mm + result.width_mm);
    if (rightGap > 0 && rightGap < PAGE_SNAP_MM) result.width_mm = page.width_mm - result.x_mm;
    const bottomGap = page.height_mm - (result.y_mm + result.height_mm);
    if (bottomGap > 0 && bottomGap < PAGE_SNAP_MM) result.height_mm = page.height_mm - result.y_mm;
    return result;
  }

  function isFullPageClip(cb: BBox | null | undefined): boolean {
    if (!cb) return false;
    return cb.x_mm <= PAGE_SNAP_MM && cb.y_mm <= PAGE_SNAP_MM &&
      (cb.x_mm + cb.width_mm) >= page.width_mm - PAGE_SNAP_MM &&
      (cb.y_mm + cb.height_mm) >= page.height_mm - PAGE_SNAP_MM;
  }

  let pendingVectors: (PathEl | RectEl)[] = [];
  let pendingClipId: string | null = null;
  let pendingClipBounds: BBox | null = null;

  function flushVectors() {
    if (pendingVectors.length === 0) return;

    // Group by clip path — full-page clips are treated as unclipped
    const byClip = new Map<string, { clipId?: string; clipBounds?: BBox; els: (PathEl | RectEl)[] }>();
    for (const v of pendingVectors) {
      const effectivelyClipped = v.isClipped && !isFullPageClip(v.clipBoundingBox);
      const key = effectivelyClipped ? (v.clipPathId || 'clipped') : '__none__';
      let group = byClip.get(key);
      if (!group) {
        group = {
          clipId: effectivelyClipped ? v.clipPathId || undefined : undefined,
          clipBounds: effectivelyClipped && v.clipBoundingBox ? v.clipBoundingBox : undefined,
          els: [],
        };
        byClip.set(key, group);
      }
      group.els.push(v);
    }

    for (const [, group] of byClip) {
      let innerSvg = '';
      if (group.clipId && group.clipBounds) {
        const b = group.clipBounds;
        innerSvg += `<defs><clipPath id="${group.clipId}"><rect x="${b.x_mm}" y="${b.y_mm}" width="${b.width_mm}" height="${b.height_mm}"/></clipPath></defs>`;
        innerSvg += `<g clip-path="url(#${group.clipId})">`;
      }
      for (const v of group.els) {
        innerSvg += vectorToSvgInner(v);
      }
      if (group.clipId && group.clipBounds) {
        innerSvg += '</g>';
      }
      items.push({
        type: 'svg',
        zIndex: zCounter++,
        content: innerSvg,
        ...(group.clipId ? { clipId: group.clipId, clipBounds: group.clipBounds } : {}),
      });
    }

    pendingVectors = [];
  }

  const pendingTexts: TxtItem[] = [];

  for (const el of sorted) {
    if (el.type === 'path' || el.type === 'rect') {
      pendingVectors.push(el);
      continue;
    }

    if (el.type === 'text') {
      const t = el as TextEl;
      pendingTexts.push({
        type: 'text',
        zIndex: -1,
        id: t.id,
        content: t.content,
        x: t.x_mm,
        y: t.y_mm,
        w: t.width_mm,
        h: t.height_mm,
        baselineX: t.baseline_x_mm,
        baselineY: t.baseline_y_mm,
        rotation: t.rotation_deg,
        fontFamily: t.fontFamily,
        fontWeight: t.fontWeight,
        fontStyle: t.fontStyle,
        size: t.fontSize_pt,
        fillColor: t.fillColor,
        strokeColor: t.strokeColor || null,
        opacity: t.opacity,
      });
      continue;
    }

    // Image: flush vectors first, then emit image
    flushVectors();

    if (el.type === 'image') {
      const img = el as ImageEl;
      const rawCb = img.clipBoundingBox;
      const snapped = rawCb ? snapClip(rawCb) : null;
      items.push({
        type: 'image',
        zIndex: zCounter++,
        id: img.id,
        asset: img.assetPath.replace('images/', ''),
        x: img.x_mm,
        y: img.y_mm,
        w: img.display_width_mm,
        h: img.display_height_mm,
        opacity: img.opacity,
        isClipped: img.isClipped,
        clipBounds: snapped ? {
          x: snapped.x_mm,
          y: snapped.y_mm,
          w: snapped.width_mm,
          h: snapped.height_mm,
        } : null,
      });
    }
  }
  flushVectors();

  // Append text items after all SVG chunks, with ascending z-index
  for (const t of pendingTexts) {
    t.zIndex = zCounter++;
    items.push(t);
  }

  return items;
}

/* ---- Data file generation ---- */

function generateDataFile(report: Report): string {
  const lines: string[] = [];
  lines.push('/* Auto-generated — do not edit. Run: npx tsx tools/export-folding-assets.ts */');
  lines.push('');

  lines.push('export type RenderItem =');
  lines.push("  | { type: 'svg'; zIndex: number; content: string }");
  lines.push("  | { type: 'image'; zIndex: number; id: string; asset: string; x: number; y: number; w: number; h: number; opacity: number; isClipped: boolean; clipBounds: { x: number; y: number; w: number; h: number } | null }");
  lines.push("  | { type: 'text'; zIndex: number; id: string; content: string; x: number; y: number; w: number; h: number; baselineX: number; baselineY: number; rotation: number; fontFamily: string; fontWeight: number; fontStyle: string; size: number; fillColor: string; strokeColor: string | null; opacity: number };");
  lines.push('');

  for (const page of report.pages) {
    const pn = page.pageNumber;
    const renderList = buildRenderList(page);

    const svgChunks = renderList.filter(r => r.type === 'svg').length;
    const imgCount = renderList.filter(r => r.type === 'image').length;
    const txtCount = renderList.filter(r => r.type === 'text').length;
    console.log(`  Page ${pn}: ${renderList.length} render items (${svgChunks} svg chunks, ${imgCount} images, ${txtCount} texts)`);

    lines.push(`export const PAGE${pn}_RENDER: RenderItem[] = ${JSON.stringify(renderList)};`);
    lines.push('');
  }

  lines.push('export const PAGE_DIMS = {');
  for (const page of report.pages) {
    lines.push(`  page${page.pageNumber}: { width: ${page.width_mm}, height: ${page.height_mm} },`);
  }
  lines.push('} as const;');

  return lines.join('\n');
}

/* ---- Main ---- */

async function main() {
  console.log('Reading report...');
  const report: Report = JSON.parse(node_fs.readFileSync(REPORT, 'utf-8'));

  node_fs.mkdirSync(PUBLIC_OUT, { recursive: true });
  node_fs.mkdirSync(node_path.dirname(DATA_OUT), { recursive: true });

  // Copy images
  console.log('\n--- Copying images ---');
  const imageFiles = node_fs.readdirSync(IMAGES_SRC).filter(f => f.endsWith('.png'));
  let totalSize = 0;
  for (const file of imageFiles) {
    const src = node_path.join(IMAGES_SRC, file);
    const dst = node_path.join(PUBLIC_OUT, file);
    node_fs.copyFileSync(src, dst);
    totalSize += node_fs.statSync(dst).size;
  }
  console.log(`  ${imageFiles.length} files, ${(totalSize / 1024 / 1024).toFixed(1)} MB`);

  // Generate data file
  console.log('\n--- Generating unified render data ---');
  const dataContent = generateDataFile(report);
  node_fs.writeFileSync(DATA_OUT, dataContent, 'utf-8');
  console.log(`  Written to ${DATA_OUT}`);
  console.log(`  File size: ${(Buffer.byteLength(dataContent) / 1024).toFixed(0)} KB`);

  console.log('\nDone!');
}

main();
