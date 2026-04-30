/* ------------------------------------------------------------------ */
/*  PDF Design Parser — Image Extraction                               */
/*                                                                     */
/*  Extracts embedded raster images from a PDF page as PNG files.      */
/*  Also provides high-DPI region rendering for vector content.        */
/* ------------------------------------------------------------------ */

import node_fs from 'node:fs';
import node_path from 'node:path';
import type { AssetInfo, ImageElement } from './types.ts';
import { ctmToRect, intersectRects, round, type Matrix6 } from './coord.ts';
import { GraphicsStateTracker, OPS } from './graphics-state.ts';

/* ------------------------------------------------------------------ */
/*  Extract embedded raster images                                     */
/* ------------------------------------------------------------------ */

interface RawImageData {
  width: number;
  height: number;
  kind: number; // 1=GRAYSCALE_1BPP, 2=RGB_24BPP, 3=RGBA_32BPP
  data: Uint8Array | Uint8ClampedArray;
}

/**
 * Convert non-RGBA image data to RGBA.
 * pdfjs returns kind=1 (grayscale 1bpp), kind=2 (RGB 24bpp) or kind=3 (RGBA 32bpp).
 */
function toRGBA(img: RawImageData): Uint8ClampedArray {
  const { width, height, kind, data } = img;
  if (kind === 3) {
    // Already RGBA
    return data instanceof Uint8ClampedArray ? data : new Uint8ClampedArray(data);
  }

  const rgba = new Uint8ClampedArray(width * height * 4);

  if (kind === 2) {
    // RGB → RGBA
    for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
      rgba[j] = data[i];
      rgba[j + 1] = data[i + 1];
      rgba[j + 2] = data[i + 2];
      rgba[j + 3] = 255;
    }
  } else if (kind === 1) {
    // Grayscale 1BPP → RGBA
    for (let i = 0; i < data.length; i++) {
      const byte = data[i];
      for (let bit = 7; bit >= 0; bit--) {
        const pixelIdx = i * 8 + (7 - bit);
        if (pixelIdx >= width * height) break;
        const val = (byte >> bit) & 1 ? 0 : 255;
        const j = pixelIdx * 4;
        rgba[j] = val;
        rgba[j + 1] = val;
        rgba[j + 2] = val;
        rgba[j + 3] = 255;
      }
    }
  }

  return rgba;
}

/**
 * Extract all embedded raster images from a page's operator list.
 * Returns a map of imageName → { assetPath, assetInfo }.
 */
export async function extractEmbeddedImages(
  page: any,
  pageNumber: number,
  pageHeight_pt: number,
  outputDir: string,
  pdfFilePath?: string,
): Promise<{
  imageAssets: Map<string, { assetPath: string; info: AssetInfo }>;
  imageElements: ImageElement[];
}> {
  const ops = await page.getOperatorList();
  const { fnArray, argsArray } = ops;

  const imageAssets = new Map<string, { assetPath: string; info: AssetInfo }>();
  const imageElements: ImageElement[] = [];
  const imagesDir = node_path.join(outputDir, 'images');
  node_fs.mkdirSync(imagesDir, { recursive: true });

  // Track graphics state for image positioning
  const gst = new GraphicsStateTracker();

  let imgSeq = 0;

  for (let i = 0; i < fnArray.length; i++) {
    const op = fnArray[i];
    const args = argsArray[i];

    // Update graphics state
    switch (op) {
      case OPS.save: gst.save(); continue;
      case OPS.restore: gst.restore(); continue;
      case OPS.setGState: gst.setGState(args); continue;
      case OPS.transform: gst.transform(args as Matrix6); continue;
    }

    // Only handle image paint operations
    if (op !== OPS.paintImageXObject && op !== OPS.paintInlineImageXObject) continue;

    const imageName = args[0] as string;

    // Skip if we already extracted this image (same resource can appear multiple times)
    if (imageAssets.has(imageName)) {
      // Still record the position for this occurrence
      const existing = imageAssets.get(imageName)!;
      const rect = ctmToRect(gst.getCurrent().ctm as Matrix6, pageHeight_pt);
      imageElements.push({
        type: 'image',
        id: `img_p${pageNumber}_${String(++imgSeq).padStart(3, '0')}`,
        paintOrder: i,
        zIndex: i,
        graphicsStackDepth: gst.depth(),
        opacity: gst.getCurrent().opacity,
        fillOpacity: gst.getCurrent().fillOpacity,
        strokeOpacity: gst.getCurrent().strokeOpacity,
        blendMode: gst.getCurrent().blendMode,
        isClipped: Boolean(gst.getCurrent().clip),
        clipPathId: gst.getCurrent().clip?.clipPathId ?? null,
        clipBoundingBox: gst.getCurrent().clip?.boundingBox ?? null,
        visibleBoundingBox: gst.getCurrent().clip?.boundingBox
          ? intersectRects(rect, gst.getCurrent().clip!.boundingBox)
          : rect,
        assetPath: existing.assetPath,
        x_mm: rect.x_mm,
        y_mm: rect.y_mm,
        display_width_mm: rect.width_mm,
        display_height_mm: rect.height_mm,
        original_px: existing.info.originalSize,
      });
      continue;
    }

    // Try to get the image data from pdfjs objects.
    // pdfjs loads images lazily — .get() with callback triggers resolution.
    // pdfjs may prefix image names with group identifiers (e.g. "g_d0_img_p1_15")
    // when they appear inside transparency groups, but store the data under the
    // unprefixed name. Try both the original and stripped name.
    const namesToTry = [imageName];
    const stripped = imageName.replace(/^g_d\d+_/, '');
    if (stripped !== imageName) namesToTry.push(stripped);

    let imgData: RawImageData | null = null;
    for (const tryName of namesToTry) {
      try {
        imgData = await new Promise<RawImageData | null>((resolve) => {
          const timeout = setTimeout(() => resolve(null), 10000);

          const handleObj = (obj: any) => {
            clearTimeout(timeout);
            if (obj && obj.data && obj.width && obj.height) {
              resolve(obj as RawImageData);
            } else {
              resolve(null);
            }
          };

          try {
            page.objs.get(tryName, handleObj);
          } catch {
            try {
              page.commonObjs.get(tryName, handleObj);
            } catch {
              clearTimeout(timeout);
              resolve(null);
            }
          }
        });
      } catch {
        imgData = null;
      }
      if (imgData) break;
    }

    if (!imgData && pdfFilePath) {
      const baseName = imageName.replace(/^(g_d\d+_)+/, '');
      try {
        const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
        const freshData = new Uint8Array(node_fs.readFileSync(pdfFilePath));
        const freshDoc = await (pdfjs as any).getDocument({ data: freshData, verbosity: 0 }).promise;
        const freshPage = await freshDoc.getPage(pageNumber);
        await freshPage.getOperatorList();
        imgData = await new Promise<RawImageData | null>((resolve) => {
          const timeout = setTimeout(() => resolve(null), 15000);
          try {
            freshPage.objs.get(baseName, (obj: any) => {
              clearTimeout(timeout);
              if (obj && obj.data && obj.width && obj.height) {
                resolve(obj as RawImageData);
              } else {
                resolve(null);
              }
            });
          } catch {
            clearTimeout(timeout);
            resolve(null);
          }
        });
        freshPage.cleanup();
        await freshDoc.destroy();
        if (imgData) {
          console.log(`  [info] Resolved "${imageName}" via fresh document as "${baseName}" (${imgData.width}x${imgData.height})`);
        }
      } catch (e: any) {
        console.error(`  [warn] Fallback failed for "${imageName}": ${e.message}`);
      }
    }

    if (!imgData) {
      continue;
    }

    // Convert to RGBA and render to PNG via @napi-rs/canvas
    const rgba = toRGBA(imgData);
    const fileName = `img_p${pageNumber}_${String(++imgSeq).padStart(3, '0')}.png`;
    const filePath = node_path.join(imagesDir, fileName);
    const relativePath = `images/${fileName}`;

    try {
      const canvas = await import('@napi-rs/canvas');
      const cnv = canvas.createCanvas(imgData.width, imgData.height);
      const ctx = cnv.getContext('2d');
      const imageData = ctx.createImageData(imgData.width, imgData.height);
      imageData.data.set(rgba);
      ctx.putImageData(imageData, 0, 0);
      const pngBuffer = cnv.toBuffer('image/png');
      node_fs.writeFileSync(filePath, pngBuffer);
    } catch (err) {
      console.error(`  [warn] Failed to encode image ${imageName}:`, (err as Error).message);
      continue;
    }

    const assetInfo: AssetInfo = {
      originalSize: [imgData.width, imgData.height],
      format: 'RGBA_PNG',
      source: 'embedded_xobject',
    };
    imageAssets.set(imageName, { assetPath: relativePath, info: assetInfo });

    // Record element with position from CTM
    const rect = ctmToRect(gst.getCurrent().ctm as Matrix6, pageHeight_pt);
    imageElements.push({
      type: 'image',
      id: `img_p${pageNumber}_${String(imgSeq).padStart(3, '0')}`,
      paintOrder: i,
      zIndex: i,
      graphicsStackDepth: gst.depth(),
      opacity: gst.getCurrent().opacity,
      fillOpacity: gst.getCurrent().fillOpacity,
      strokeOpacity: gst.getCurrent().strokeOpacity,
      blendMode: gst.getCurrent().blendMode,
      isClipped: Boolean(gst.getCurrent().clip),
      clipPathId: gst.getCurrent().clip?.clipPathId ?? null,
      clipBoundingBox: gst.getCurrent().clip?.boundingBox ?? null,
      visibleBoundingBox: gst.getCurrent().clip?.boundingBox
        ? intersectRects(rect, gst.getCurrent().clip!.boundingBox)
        : rect,
      assetPath: relativePath,
      x_mm: rect.x_mm,
      y_mm: rect.y_mm,
      display_width_mm: rect.width_mm,
      display_height_mm: rect.height_mm,
      original_px: [imgData.width, imgData.height],
    });
  }

  return { imageAssets, imageElements };
}

/* ------------------------------------------------------------------ */
/*  Render full page at high DPI (for vector content fallback)         */
/* ------------------------------------------------------------------ */

export async function renderFullPage(
  page: any,
  pageNumber: number,
  scale: number,
  outputDir: string,
): Promise<string> {
  const viewport = page.getViewport({ scale });
  const canvas = await import('@napi-rs/canvas');
  const cnv = canvas.createCanvas(viewport.width, viewport.height);
  const ctx = cnv.getContext('2d');

  const renderContext = {
    canvasContext: ctx,
    viewport,
  };

  await page.render(renderContext).promise;

  const fileName = `page_${pageNumber}_full_${scale}x.png`;
  const filePath = node_path.join(outputDir, 'images', fileName);
  node_fs.writeFileSync(filePath, cnv.toBuffer('image/png'));

  return `images/${fileName}`;
}
