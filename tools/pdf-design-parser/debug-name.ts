#!/usr/bin/env tsx
/**
 * Debug: check operator list around op[680] with useSystemFonts:false
 */
import node_fs from 'node:fs';
import { OPS } from './graphics-state.ts';

const pdfPath = process.argv[2];
if (!pdfPath) process.exit(1);

async function main() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(node_fs.readFileSync(pdfPath));

  // Match exact parser settings
  const doc = await (pdfjs as any).getDocument({ data, verbosity: 0, useSystemFonts: false }).promise;
  const page = await doc.getPage(2);
  const ops = await page.getOperatorList();
  const { fnArray, argsArray } = ops;

  console.log(`Total ops: ${fnArray.length}`);

  // Find all paintImageXObject ops and their nearby dependency ops
  for (let i = 0; i < fnArray.length; i++) {
    if (fnArray[i] === OPS.paintImageXObject || fnArray[i] === 85) {
      const name = argsArray[i]?.[0];
      // Look backwards for dependency (fn=1)
      let depName = '';
      for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
        if (fnArray[j] === 1) { // dependency
          depName = argsArray[j]?.[0] || '';
          break;
        }
      }
      if (String(name).includes('15') || String(depName).includes('15')) {
        console.log(`op[${i}] paintImageXObject name="${name}" nearbyDep="${depName}"`);
      }
    }
  }

  // Also find ALL dependency ops with img in name
  console.log('\n--- All dependency ops with "img" ---');
  for (let i = 0; i < fnArray.length; i++) {
    if (fnArray[i] === 1) {
      const name = argsArray[i]?.[0];
      if (typeof name === 'string' && name.includes('img')) {
        console.log(`op[${i}] dependency "${name}"`);
      }
    }
  }

  // Try getting img_p1_15 data with callback
  console.log('\n--- Trying to get img_p1_15 ---');
  const result = await new Promise<string>((resolve) => {
    const timeout = setTimeout(() => resolve('TIMEOUT'), 15000);
    try {
      page.objs.get('img_p1_15', (obj: any) => {
        clearTimeout(timeout);
        if (obj && obj.data) {
          resolve(`OK: ${obj.width}x${obj.height} kind=${obj.kind}`);
        } else {
          resolve(`OBJ_BUT_NO_DATA: ${JSON.stringify(obj)?.slice(0, 100)}`);
        }
      });
    } catch (e: any) {
      clearTimeout(timeout);
      resolve(`ERROR: ${e.message}`);
    }
  });
  console.log(`img_p1_15: ${result}`);

  await doc.destroy();
}

main().catch(e => { console.error(e); process.exit(1); });
