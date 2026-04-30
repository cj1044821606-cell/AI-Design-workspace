#!/usr/bin/env tsx
/**
 * Debug script: dump all paintImageXObject ops for a given page,
 * check whether each image resource can be fetched from pdfjs object stores.
 */
import node_fs from 'node:fs';
import node_path from 'node:path';
import { OPS } from './graphics-state.ts';
import { ctmToRect, type Matrix6 } from './coord.ts';
import { GraphicsStateTracker } from './graphics-state.ts';

const pdfPath = process.argv[2];
const pageNum = parseInt(process.argv[3] || '2', 10);
if (!pdfPath) { console.error('Usage: npx tsx debug-images.ts <pdf> [page]'); process.exit(1); }

async function main() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(node_fs.readFileSync(pdfPath));
  const doc = await (pdfjs as any).getDocument({ data, verbosity: 0 }).promise;
  const page = await doc.getPage(pageNum);
  const viewport = page.getViewport({ scale: 1 });
  const pageH = viewport.height;
  const ops = await page.getOperatorList();
  const { fnArray, argsArray } = ops;

  const gst = new GraphicsStateTracker();
  let groupDepth = 0;
  const smaskStack: boolean[] = [];

  console.log(`Page ${pageNum}: ${fnArray.length} operators, ${viewport.width}x${pageH} pt`);
  console.log('');

  const imgOps: { idx: number; name: string; opType: string; inSmask: boolean; groupDepth: number; ctm: Matrix6 }[] = [];

  for (let i = 0; i < fnArray.length; i++) {
    const op = fnArray[i];
    const args = argsArray[i];

    switch (op) {
      case OPS.save: gst.save(); break;
      case OPS.restore: gst.restore(); break;
      case OPS.setGState: gst.setGState(args); break;
      case OPS.transform: gst.transform(args as Matrix6); break;
      case OPS.beginGroup: {
        const info = args?.[0];
        const hasSmask = info?.smask != null && info.smask !== false;
        smaskStack.push(hasSmask);
        groupDepth++;
        break;
      }
      case OPS.endGroup: {
        smaskStack.pop();
        groupDepth--;
        break;
      }
    }

    if (op === OPS.paintImageXObject || op === OPS.paintInlineImageXObject ||
        op === OPS.paintImageMaskXObject || op === OPS.paintImageXObjectRepeat) {
      const name = args[0] as string;
      const ctm = [...gst.getCurrent().ctm] as Matrix6;
      const inSmask = smaskStack.some(v => v);
      const opName = op === OPS.paintImageXObject ? 'paintImageXObject'
        : op === OPS.paintInlineImageXObject ? 'paintInlineImage'
        : op === OPS.paintImageMaskXObject ? 'paintImageMask'
        : 'paintImageRepeat';
      imgOps.push({ idx: i, name, opType: opName, inSmask, groupDepth, ctm });
    }
  }

  console.log(`Found ${imgOps.length} image paint operations:\n`);

  for (const img of imgOps) {
    const rect = ctmToRect(img.ctm, pageH);
    let dataStatus = 'UNKNOWN';
    try {
      const imgData = await new Promise<any>((resolve) => {
        const timeout = setTimeout(() => resolve(null), 5000);
        const handleObj = (obj: any) => {
          clearTimeout(timeout);
          resolve(obj);
        };
        try {
          page.objs.get(img.name, handleObj);
        } catch {
          try {
            page.commonObjs.get(img.name, handleObj);
          } catch {
            clearTimeout(timeout);
            resolve(null);
          }
        }
      });
      if (imgData && imgData.data && imgData.width && imgData.height) {
        dataStatus = `OK (${imgData.width}x${imgData.height}, kind=${imgData.kind})`;
      } else if (imgData) {
        dataStatus = `OBJ_NO_DATA (keys: ${Object.keys(imgData).join(',')})`;
      } else {
        dataStatus = 'NULL (timeout or not found)';
      }
    } catch (e: any) {
      dataStatus = `ERROR: ${e.message}`;
    }

    console.log(`  op[${img.idx}] ${img.opType} "${img.name}"`);
    console.log(`    CTM: [${img.ctm.map(v => v.toFixed(1)).join(', ')}]`);
    console.log(`    Rect: x=${rect.x_mm}mm y=${rect.y_mm}mm w=${rect.width_mm}mm h=${rect.height_mm}mm`);
    console.log(`    inSmask=${img.inSmask} groupDepth=${img.groupDepth}`);
    console.log(`    Data: ${dataStatus}`);
    console.log('');
  }

  await doc.destroy();
}

main().catch(e => { console.error(e); process.exit(1); });
