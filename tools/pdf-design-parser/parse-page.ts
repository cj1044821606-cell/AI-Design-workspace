/* ------------------------------------------------------------------ */
/*  PDF Design Parser - Single Page Parser                            */
/*                                                                    */
/*  Walks the pdfjs operatorList for one page, collecting every       */
/*  visible element with position, paint order, color, and font info. */
/* ------------------------------------------------------------------ */

import type {
  PageReport, DesignElement, TextElement, ImageElement, RectElement, PathElement, NativeColorMode,
  FontStyleKind,
} from './types.ts';
import {
  ptToMm, flipY, round, type Matrix6, cloneMatrix, ctmToRect, intersectRects,
} from './coord.ts';
import { GraphicsStateTracker, OPS } from './graphics-state.ts';

/* ------------------------------------------------------------------ */
/*  Font resolution helpers                                           */
/* ------------------------------------------------------------------ */

async function buildFontMap(page: any): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  const ops = await page.getOperatorList();

  const fontNamesUsed = new Set<string>();
  for (let i = 0; i < ops.fnArray.length; i++) {
    if (ops.fnArray[i] === OPS.setFont) fontNamesUsed.add(ops.argsArray[i][0]);
  }

  for (const internalName of fontNamesUsed) {
    try {
      const fontObj = await new Promise<any>((resolve) => {
        const timeout = setTimeout(() => resolve(null), 3000);
        const trySource = (src: any) => {
          try {
            src.get(internalName, (obj: any) => { clearTimeout(timeout); resolve(obj); });
          } catch { clearTimeout(timeout); resolve(null); }
        };
        if (page.commonObjs._objs?.has?.(internalName) || page.commonObjs.has?.(internalName)) {
          trySource(page.commonObjs);
        } else {
          trySource(page.objs);
        }
      });

      if (fontObj?.name) {
        let realName = fontObj.name as string;
        const plusIdx = realName.indexOf('+');
        if (plusIdx > 0 && plusIdx <= 6) realName = realName.substring(plusIdx + 1);
        map.set(internalName, realName);
      }
    } catch { /* skip */ }
  }

  return map;
}

function inferFontFamily(postScriptName: string, styleFontFamily: string): string {
  const normalizedStyleFamily = styleFontFamily?.trim().toLowerCase();
  if (normalizedStyleFamily && !['sans-serif', 'serif', 'monospace', 'system-ui'].includes(normalizedStyleFamily)) {
    return styleFontFamily.trim();
  }
  const [family] = postScriptName.split('-');
  return family || postScriptName;
}

function inferFontStyle(postScriptName: string): FontStyleKind {
  const lower = postScriptName.toLowerCase();
  if (lower.includes('italic')) return 'italic';
  if (lower.includes('oblique')) return 'oblique';
  return 'normal';
}

function inferFontWeight(postScriptName: string): number {
  const lower = postScriptName.toLowerCase();
  if (lower.includes('thin')) return 100;
  if (lower.includes('extralight') || lower.includes('ultralight')) return 200;
  if (lower.includes('light')) return 300;
  if (lower.includes('medium')) return 500;
  if (lower.includes('semibold') || lower.includes('demibold')) return 600;
  if (lower.includes('bold')) return 700;
  if (lower.includes('heavy') || lower.includes('extrabold') || lower.includes('ultrabold')) return 800;
  if (lower.includes('black')) return 900;
  return 400;
}

/* ------------------------------------------------------------------ */
/*  constructPath parser                                              */
/* ------------------------------------------------------------------ */

interface ParsedPath {
  subOps: number[];
  allCoords: number[][];
}

function parseInterleavedPath(data: any): ParsedPath {
  const subOps: number[] = [];
  const allCoords: number[][] = [];
  const len = data.length ?? Object.keys(data).length;
  let i = 0;

  while (i < len) {
    const op = Number(data[i]);
    i++;
    subOps.push(op);

    if (op === 0 || op === 1) {
      allCoords.push([Number(data[i]), Number(data[i + 1])]);
      i += 2;
    } else if (op === 2) {
      allCoords.push([
        Number(data[i]), Number(data[i + 1]),
        Number(data[i + 2]), Number(data[i + 3]),
        Number(data[i + 4]), Number(data[i + 5]),
      ]);
      i += 6;
    } else if (op === 3) {
      allCoords.push([]);
    } else {
      allCoords.push([]);
    }
  }

  return { subOps, allCoords };
}

function isSimpleRect(parsed: ParsedPath): boolean {
  const { subOps } = parsed;
  return subOps.length === 5 &&
    subOps[0] === 0 && subOps[1] === 1 && subOps[2] === 1 &&
    subOps[3] === 1 && subOps[4] === 3;
}

function pathToSvgD(parsed: ParsedPath, ctm: Matrix6, pageH: number): string {
  const parts: string[] = [];

  const tx = (x: number, y: number): string => {
    const ax = ctm[0] * x + ctm[2] * y + ctm[4];
    const ay = ctm[1] * x + ctm[3] * y + ctm[5];
    return `${round(ptToMm(ax))} ${round(ptToMm(flipY(ay, pageH)))}`;
  };

  for (let i = 0; i < parsed.subOps.length; i++) {
    const op = parsed.subOps[i];
    const c = parsed.allCoords[i];
    switch (op) {
      case 0: parts.push(`M ${tx(c[0], c[1])}`); break;
      case 1: parts.push(`L ${tx(c[0], c[1])}`); break;
      case 2: parts.push(`C ${tx(c[0], c[1])} ${tx(c[2], c[3])} ${tx(c[4], c[5])}`); break;
      case 3: parts.push('Z'); break;
    }
  }

  return parts.join(' ');
}

function pathBoundingBox(parsed: ParsedPath, ctm: Matrix6, pageH: number) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  const proc = (x: number, y: number) => {
    const ax = ctm[0] * x + ctm[2] * y + ctm[4];
    const ay = ctm[1] * x + ctm[3] * y + ctm[5];
    const mx = ptToMm(ax);
    const my = ptToMm(flipY(ay, pageH));
    if (mx < minX) minX = mx;
    if (my < minY) minY = my;
    if (mx > maxX) maxX = mx;
    if (my > maxY) maxY = my;
  };

  for (let i = 0; i < parsed.subOps.length; i++) {
    const c = parsed.allCoords[i];
    if (parsed.subOps[i] === 0 || parsed.subOps[i] === 1) {
      proc(c[0], c[1]);
    } else if (parsed.subOps[i] === 2) {
      proc(c[0], c[1]);
      proc(c[2], c[3]);
      proc(c[4], c[5]);
    }
  }

  if (!isFinite(minX)) return { x_mm: 0, y_mm: 0, width_mm: 0, height_mm: 0 };
  return {
    x_mm: round(minX),
    y_mm: round(minY),
    width_mm: round(maxX - minX),
    height_mm: round(maxY - minY),
  };
}

/* ------------------------------------------------------------------ */
/*  Main page parser                                                  */
/* ------------------------------------------------------------------ */

export interface ImagePosition {
  name: string;
  ctm: Matrix6;
  index: number;
}

export interface ParsePageOptions {
  minRectMm: number;
}

interface TextDrawMeta {
  paintOrder: number;
  zIndex: number;
  graphicsStackDepth: number;
  fillColor: string;
  nativeColorMode: NativeColorMode;
  strokeColor: string | null;
  opacity: number;
  fillOpacity: number;
  strokeOpacity: number;
  blendMode: string;
  clip: ReturnType<GraphicsStateTracker['getCurrent']>['clip'];
}

interface TextColorSegment {
  text: string;
  fillColor: string;
  nativeColorMode: NativeColorMode;
}

interface ElementBounds {
  x_mm: number;
  y_mm: number;
  width_mm: number;
  height_mm: number;
}

function withClipBounds(
  state: Pick<ReturnType<GraphicsStateTracker['getCurrent']>, 'clip'>,
  bounds: ElementBounds,
) {
  const clip = state.clip;
  if (!clip) {
    return {
      isClipped: false,
      clipPathId: null,
      clipBoundingBox: null,
      visibleBoundingBox: bounds,
    };
  }

  const sameAsBounds = Math.abs(clip.boundingBox.x_mm - bounds.x_mm) < 0.01 &&
    Math.abs(clip.boundingBox.y_mm - bounds.y_mm) < 0.01 &&
    Math.abs(clip.boundingBox.width_mm - bounds.width_mm) < 0.01 &&
    Math.abs(clip.boundingBox.height_mm - bounds.height_mm) < 0.01;
  if (sameAsBounds) {
    return {
      isClipped: false,
      clipPathId: null,
      clipBoundingBox: null,
      visibleBoundingBox: bounds,
    };
  }

  const visibleBoundingBox = intersectRects(bounds, clip.boundingBox);
  const sameVisibleBounds = visibleBoundingBox &&
    Math.abs(visibleBoundingBox.x_mm - bounds.x_mm) < 0.01 &&
    Math.abs(visibleBoundingBox.y_mm - bounds.y_mm) < 0.01 &&
    Math.abs(visibleBoundingBox.width_mm - bounds.width_mm) < 0.01 &&
    Math.abs(visibleBoundingBox.height_mm - bounds.height_mm) < 0.01;
  if (sameVisibleBounds) {
    return {
      isClipped: false,
      clipPathId: null,
      clipBoundingBox: null,
      visibleBoundingBox: bounds,
    };
  }

  return {
    isClipped: true,
    clipPathId: clip.clipPathId,
    clipBoundingBox: clip.boundingBox,
    visibleBoundingBox,
  };
}

export async function parsePage(
  page: any,
  pageNumber: number,
  options: ParsePageOptions,
): Promise<{ report: PageReport; imagePositions: ImagePosition[] }> {
  const viewport = page.getViewport({ scale: 1 });
  const pageH_pt = viewport.height;

  const textContent = await page.getTextContent({ includeMarkedContent: false });
  const ops = await page.getOperatorList();
  const { fnArray, argsArray } = ops;
  const fontMap = await buildFontMap(page);

  const gst = new GraphicsStateTracker();
  const elements: DesignElement[] = [];
  const imagePositions: ImagePosition[] = [];
  const textColorByPos = new Map<string, TextDrawMeta>();
  const textColorSegments = new Map<string, TextColorSegment[]>();
  let clipRequested = false;
  const MIN_USEFUL_CLIP_MM = 2;
  const smaskGroupDepth: boolean[] = [];
  const groupOpacityStack: number[] = [];
  let awaitingFirstShowText = false;
  let lastTextMatrixE = 0;
  let lastTextMatrixF = 0;

  let elementCounter = 0;
  const nextId = (prefix: string) =>
    `${prefix}_p${pageNumber}_${String(++elementCounter).padStart(3, '0')}`;

  for (let i = 0; i < fnArray.length; i++) {
    const op = fnArray[i];
    const args = argsArray[i];

    switch (op) {
      case OPS.save: gst.save(); break;
      case OPS.restore: gst.restore(); break;
      case OPS.beginGroup: {
        const info = args?.[0];
        const hasSmask = info?.smask != null && info.smask !== false;
        smaskGroupDepth.push(hasSmask);
        groupOpacityStack.push(gst.getCurrent().fillOpacity);
        break;
      }
      case OPS.endGroup: {
        smaskGroupDepth.pop();
        groupOpacityStack.pop();
        break;
      }
      case OPS.clip:
      case OPS.eoClip:
        clipRequested = true;
        break;
      case OPS.endPath:
        break;
      case OPS.setGState: gst.setGState(args); break;
      case OPS.transform: gst.transform(args as Matrix6); break;
      case OPS.setLineWidth: gst.setLineWidth(args[0]); break;
      case OPS.setLineCap: gst.setLineCap(args[0]); break;
      case OPS.setLineJoin: gst.setLineJoin(args[0]); break;
      case OPS.setDash: gst.setDash(args[0] ?? [], args[1] ?? 0); break;

      case OPS.setFillRGBColor: gst.setFillColor(args); break;
      case OPS.setStrokeRGBColor: gst.setStrokeColor(args); break;
      case OPS.setFillGray: gst.setFillGray(args); break;
      case OPS.setStrokeGray: gst.setStrokeGray(args); break;
      case OPS.setFillCMYKColor: gst.setFillCMYK(args); break;
      case OPS.setStrokeCMYKColor: gst.setStrokeCMYK(args); break;

      case OPS.setFont: gst.setFont(args[0], args[1]); break;

      case OPS.beginText:
        awaitingFirstShowText = true;
        break;
      case OPS.endText:
        break;
      case OPS.setTextMatrix: {
        const tm = args[0];
        lastTextMatrixE = tm[4];
        lastTextMatrixF = tm[5];
        awaitingFirstShowText = true;
        break;
      }
      case OPS.moveText:
      case OPS.setLeadingMoveText: {
        lastTextMatrixE += args[0];
        lastTextMatrixF += args[1];
        awaitingFirstShowText = true;
        break;
      }
      case OPS.nextLine: {
        awaitingFirstShowText = true;
        break;
      }

      case OPS.showText:
      case OPS.showSpacedText: {
        const state = gst.getCurrent();
        const posKey = `${round(lastTextMatrixE, 1)}_${round(lastTextMatrixF, 1)}`;

        if (awaitingFirstShowText) {
          const textGroupOpacity = groupOpacityStack.length > 0
            ? groupOpacityStack.reduce((a, b) => a * b, 1)
            : 1;
          textColorByPos.set(posKey, {
            paintOrder: i,
            zIndex: i,
            graphicsStackDepth: gst.depth(),
            fillColor: state.fillColor,
            nativeColorMode: state.fillColorMode,
            strokeColor: state.strokeColor || null,
            opacity: round(state.opacity * textGroupOpacity, 4),
            fillOpacity: round(state.fillOpacity * textGroupOpacity, 4),
            strokeOpacity: round(state.strokeOpacity * textGroupOpacity, 4),
            blendMode: state.blendMode,
            clip: state.clip,
          });
          textColorSegments.set(posKey, []);
          awaitingFirstShowText = false;
        }

        let glyphText = '';
        const glyphs = args[0];
        if (Array.isArray(glyphs)) {
          for (const g of glyphs) {
            if (g && typeof g === 'object' && 'unicode' in g) glyphText += g.unicode;
            else if (typeof g === 'string') glyphText += g;
          }
        }
        if (glyphText) {
          const segs = textColorSegments.get(posKey);
          if (segs) {
            const last = segs[segs.length - 1];
            if (last && last.fillColor === state.fillColor) {
              last.text += glyphText;
            } else {
              segs.push({ text: glyphText, fillColor: state.fillColor, nativeColorMode: state.fillColorMode });
            }
          }
        }
        break;
      }

      case OPS.nextLineShowText:
      case OPS.nextLineSetSpacingShowText: {
        const state = gst.getCurrent();
        const textGroupOpacity2 = groupOpacityStack.length > 0
          ? groupOpacityStack.reduce((a, b) => a * b, 1)
          : 1;
        const posKey = `${round(lastTextMatrixE, 1)}_${round(lastTextMatrixF, 1)}`;
        textColorByPos.set(posKey, {
          paintOrder: i,
          zIndex: i,
          graphicsStackDepth: gst.depth(),
          fillColor: state.fillColor,
          nativeColorMode: state.fillColorMode,
          strokeColor: state.strokeColor || null,
          opacity: round(state.opacity * textGroupOpacity2, 4),
          fillOpacity: round(state.fillOpacity * textGroupOpacity2, 4),
          strokeOpacity: round(state.strokeOpacity * textGroupOpacity2, 4),
          blendMode: state.blendMode,
          clip: state.clip,
        });
        awaitingFirstShowText = false;
        break;
      }

      case OPS.paintImageXObject:
      case OPS.paintInlineImageXObject: {
        // Include images inside SMask groups (needed for gradient-masked product composites and New badges)
        const imgName = args[0] as string;
        const state = gst.getCurrent();
        const imgCtm = cloneMatrix(state.ctm);
        imagePositions.push({ name: imgName, ctm: imgCtm, index: i });
        const imgRect = ctmToRect(imgCtm, pageH_pt);
        const clipInfo = withClipBounds(state, imgRect);
        const imgGroupOpacity = groupOpacityStack.length > 0
          ? groupOpacityStack.reduce((a, b) => a * b, 1)
          : 1;
        elements.push({
          type: 'image',
          id: nextId('img'),
          paintOrder: i,
          zIndex: i,
          graphicsStackDepth: gst.depth(),
          opacity: round(state.opacity * imgGroupOpacity, 4),
          fillOpacity: round(state.fillOpacity * imgGroupOpacity, 4),
          strokeOpacity: round(state.strokeOpacity * imgGroupOpacity, 4),
          blendMode: state.blendMode,
          ...clipInfo,
          assetPath: `__pending__:${imgName}`,
          x_mm: imgRect.x_mm,
          y_mm: imgRect.y_mm,
          display_width_mm: imgRect.width_mm,
          display_height_mm: imgRect.height_mm,
          original_px: [0, 0],
        } satisfies ImageElement);
        break;
      }

      case OPS.constructPath: {
        const paintMode = args[0] as number;
        const rawPathData = args[1];
        const pathData = Array.isArray(rawPathData) ? rawPathData[0] : rawPathData;
        const state = gst.getCurrent();
        const ctm = cloneMatrix(state.ctm);

        const isFill = paintMode === OPS.fill || paintMode === OPS.eoFill ||
          paintMode === OPS.fillStroke || paintMode === OPS.eoFillStroke ||
          paintMode === OPS.closeFillStroke || paintMode === OPS.closeEOFillStroke;
        const isStroke = paintMode === OPS.stroke || paintMode === OPS.closeStroke ||
          paintMode === OPS.fillStroke || paintMode === OPS.eoFillStroke ||
          paintMode === OPS.closeFillStroke || paintMode === OPS.closeEOFillStroke;

        const parsed = parseInterleavedPath(pathData);
        const bbox = pathBoundingBox(parsed, ctm, pageH_pt);

        if (clipRequested) {
          if (
            bbox.width_mm >= MIN_USEFUL_CLIP_MM &&
            bbox.height_mm >= MIN_USEFUL_CLIP_MM
          ) {
            gst.setClip({ clipPathId: nextId('clip'), boundingBox: bbox });
          } else {
            gst.setClip(null);
          }
          clipRequested = false;
        }

        if (paintMode === OPS.endPath || (!isFill && !isStroke)) break;
        if (bbox.width_mm < options.minRectMm && bbox.height_mm < options.minRectMm) break;

        const groupOpacity = groupOpacityStack.length > 0
          ? groupOpacityStack.reduce((a, b) => a * b, 1)
          : 1;

        const base = {
          paintOrder: i,
          zIndex: i,
          graphicsStackDepth: gst.depth(),
          opacity: round(state.opacity * groupOpacity, 4),
          fillOpacity: round(state.fillOpacity * groupOpacity, 4),
          strokeOpacity: round(state.strokeOpacity * groupOpacity, 4),
          blendMode: state.blendMode,
          ...withClipBounds(state, bbox),
        };

        const strokeStyleFields = isStroke ? {
          dashArray_mm: state.dashArray.map(v => round(ptToMm(v), 3)),
          dashOffset_mm: round(ptToMm(state.dashOffset), 3),
          lineCap: state.lineCap,
          lineJoin: state.lineJoin,
        } : {
          dashArray_mm: [] as number[],
          dashOffset_mm: 0,
          lineCap: 0,
          lineJoin: 0,
        };

        if (isSimpleRect(parsed)) {
          elements.push({
            type: 'rect',
            id: nextId('rect'),
            ...base,
            ...bbox,
            fillColor: isFill ? state.fillColor : null,
            fillColorMode: isFill ? state.fillColorMode : 'Unknown',
            strokeColor: isStroke ? state.strokeColor : null,
            strokeColorMode: isStroke ? state.strokeColorMode : 'Unknown',
            strokeWidth_mm: isStroke ? round(ptToMm(state.lineWidth)) : 0,
            ...strokeStyleFields,
          } satisfies RectElement);
        } else {
          const d = pathToSvgD(parsed, ctm, pageH_pt);
          elements.push({
            type: 'path',
            id: nextId('path'),
            ...base,
            d,
            boundingBox: bbox,
            fillColor: isFill ? state.fillColor : null,
            fillColorMode: isFill ? state.fillColorMode : 'Unknown',
            strokeColor: isStroke ? state.strokeColor : null,
            strokeColorMode: isStroke ? state.strokeColorMode : 'Unknown',
            strokeWidth_mm: isStroke ? round(ptToMm(state.lineWidth)) : 0,
            ...strokeStyleFields,
          } satisfies PathElement);
        }
        break;
      }
    }
  }

  for (const item of textContent.items) {
    if (!('str' in item) || !item.str.trim()) continue;

    const [a, b, c, d, e, f] = item.transform as Matrix6;
    const fontSize = Math.sqrt(a * a + b * b);
    const styleInfo = textContent.styles?.[item.fontName] ?? {};
    const ascent = typeof styleInfo.ascent === 'number' ? styleInfo.ascent : 0.8;
    const descent = typeof styleInfo.descent === 'number' ? styleInfo.descent : -0.2;
    const textWidthPt = item.width || 0;
    const textHeightPt = Math.max(item.height || 0, (ascent - descent) * fontSize);
    const baselineXPt = e;
    const baselineYPt = f;
    const xPt = e;
    const topPt = f + ascent * fontSize;
    const yPt = flipY(topPt, pageH_pt);
    const styleFontFamily = styleInfo.fontFamily ?? '';
    const resolvedFont = fontMap.get(item.fontName) || styleFontFamily || item.fontName;
    const posKey = `${round(e, 1)}_${round(f, 1)}`;
    let meta = textColorByPos.get(posKey);
    if (!meta) {
      let bestDist = Infinity;
      for (const [key, entry] of textColorByPos) {
        const [ke, kf] = key.split('_').map(Number);
        const dist = (ke - e) ** 2 + (kf - f) ** 2;
        if (dist < bestDist) {
          bestDist = dist;
          meta = entry;
        }
      }
    }
    if (!meta) {
      meta = {
        paintOrder: Number.MAX_SAFE_INTEGER,
        zIndex: Number.MAX_SAFE_INTEGER,
        graphicsStackDepth: 0,
        fillColor: '#000000',
        nativeColorMode: 'Unknown' as NativeColorMode,
        strokeColor: null,
        opacity: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        blendMode: 'normal',
        clip: null,
      };
    }

    let segments = textColorSegments.get(posKey);
    if (!segments) {
      let bestDist = Infinity;
      for (const [key, segs] of textColorSegments) {
        const [ke, kf] = key.split('_').map(Number);
        const dist = (ke - e) ** 2 + (kf - f) ** 2;
        if (dist < bestDist) {
          bestDist = dist;
          segments = segs;
        }
      }
      if (bestDist > 25) segments = undefined;
    }
    let matchedSegments: TextColorSegment[] | null = null;
    if (segments && segments.length > 1) {
      const itemText = item.str;
      const joined = segments.map(s => s.text).join('');
      const startIdx = joined.indexOf(itemText);
      if (startIdx >= 0) {
        let pos = 0;
        let segStart = -1, charStart = 0;
        for (let si = 0; si < segments.length; si++) {
          if (pos + segments[si].text.length > startIdx && segStart < 0) {
            segStart = si;
            charStart = startIdx - pos;
          }
          pos += segments[si].text.length;
        }
        if (segStart >= 0) {
          const matched: TextColorSegment[] = [];
          let remaining = itemText.length;
          let si = segStart;
          let cOff = charStart;
          while (remaining > 0 && si < segments.length) {
            const seg = segments[si];
            const available = seg.text.length - cOff;
            const take = Math.min(available, remaining);
            matched.push({
              text: seg.text.substring(cOff, cOff + take),
              fillColor: seg.fillColor,
              nativeColorMode: seg.nativeColorMode,
            });
            remaining -= take;
            si++;
            cOff = 0;
          }
          if (matched.length > 1 && matched.some(s => s.fillColor !== matched[0].fillColor)) {
            matchedSegments = matched;
          }
        }
      }
    }

    if (matchedSegments) {
      const charWidthPt = item.str.length > 0 ? textWidthPt / item.str.length : 0;
      let charOffset = 0;

      for (const seg of matchedSegments) {
        const segXPt = xPt + charOffset * charWidthPt;
        const segWidthPt = seg.text.length * charWidthPt;
        const segTopPt = f + ascent * fontSize;
        const segYPt = flipY(segTopPt, pageH_pt);

        elements.push({
          type: 'text',
          id: nextId('text'),
          paintOrder: meta.paintOrder,
          zIndex: meta.zIndex,
          graphicsStackDepth: meta.graphicsStackDepth,
          opacity: meta.opacity,
          fillOpacity: meta.fillOpacity,
          strokeOpacity: meta.strokeOpacity,
          blendMode: meta.blendMode,
          ...withClipBounds({ clip: meta.clip }, {
            x_mm: round(ptToMm(segXPt)),
            y_mm: round(ptToMm(segYPt)),
            width_mm: round(ptToMm(segWidthPt)),
            height_mm: round(ptToMm(textHeightPt)),
          }),
          content: seg.text,
          x_mm: round(ptToMm(segXPt)),
          y_mm: round(ptToMm(segYPt)),
          width_mm: round(ptToMm(segWidthPt)),
          height_mm: round(ptToMm(textHeightPt)),
          x_pt: round(segXPt, 2),
          y_pt: round(segYPt, 2),
          width_pt: round(segWidthPt, 2),
          height_pt: round(textHeightPt, 2),
          baseline_x_mm: round(ptToMm(segXPt)),
          baseline_y_mm: round(ptToMm(flipY(baselineYPt, pageH_pt))),
          baseline_x_pt: round(segXPt, 2),
          baseline_y_pt: round(flipY(baselineYPt, pageH_pt), 2),
          rotation_deg: round(Math.atan2(b, a) * 180 / Math.PI, 2),
          transform: [round(a, 4), round(b, 4), round(c, 4), round(d, 4), round(segXPt, 4), round(f, 4)],
          font: resolvedFont,
          fontFamily: inferFontFamily(resolvedFont, styleFontFamily),
          fontPostScriptName: resolvedFont,
          fontWeight: inferFontWeight(resolvedFont),
          fontStyle: inferFontStyle(resolvedFont),
          fontSize_pt: round(fontSize, 1),
          color: seg.fillColor,
          nativeColorMode: seg.nativeColorMode,
          fillColor: seg.fillColor,
          strokeColor: meta.strokeColor,
          direction: item.dir || 'ltr',
        } satisfies TextElement);

        charOffset += seg.text.length;
      }
    } else {
    elements.push({
      type: 'text',
      id: nextId('text'),
      paintOrder: meta.paintOrder,
      zIndex: meta.zIndex,
      graphicsStackDepth: meta.graphicsStackDepth,
      opacity: meta.opacity,
      fillOpacity: meta.fillOpacity,
      strokeOpacity: meta.strokeOpacity,
      blendMode: meta.blendMode,
      ...withClipBounds({ clip: meta.clip }, {
        x_mm: round(ptToMm(xPt)),
        y_mm: round(ptToMm(yPt)),
        width_mm: round(ptToMm(textWidthPt)),
        height_mm: round(ptToMm(textHeightPt)),
      }),
      content: item.str,
      x_mm: round(ptToMm(xPt)),
      y_mm: round(ptToMm(yPt)),
      width_mm: round(ptToMm(textWidthPt)),
      height_mm: round(ptToMm(textHeightPt)),
      x_pt: round(xPt, 2),
      y_pt: round(yPt, 2),
      width_pt: round(textWidthPt, 2),
      height_pt: round(textHeightPt, 2),
      baseline_x_mm: round(ptToMm(baselineXPt)),
      baseline_y_mm: round(ptToMm(flipY(baselineYPt, pageH_pt))),
      baseline_x_pt: round(baselineXPt, 2),
      baseline_y_pt: round(flipY(baselineYPt, pageH_pt), 2),
      rotation_deg: round(Math.atan2(b, a) * 180 / Math.PI, 2),
      transform: [round(a, 4), round(b, 4), round(c, 4), round(d, 4), round(e, 4), round(f, 4)],
      font: resolvedFont,
      fontFamily: inferFontFamily(resolvedFont, styleFontFamily),
      fontPostScriptName: resolvedFont,
      fontWeight: inferFontWeight(resolvedFont),
      fontStyle: inferFontStyle(resolvedFont),
      fontSize_pt: round(fontSize, 1),
      color: meta.fillColor,
      nativeColorMode: meta.nativeColorMode,
      fillColor: meta.fillColor,
      strokeColor: meta.strokeColor,
      direction: item.dir || 'ltr',
    } satisfies TextElement);
    }
  }

  elements.sort((a, b) => a.paintOrder - b.paintOrder || a.id.localeCompare(b.id));

  return {
    report: {
      pageNumber,
      width_mm: round(ptToMm(viewport.width)),
      height_mm: round(ptToMm(pageH_pt)),
      elements,
      groups: [],
    },
    imagePositions,
  };
}
