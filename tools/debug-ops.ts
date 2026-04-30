#!/usr/bin/env tsx
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import node_fs from 'node:fs';

async function main() {
  const doc = await pdfjsLib.getDocument({
    data: new Uint8Array(node_fs.readFileSync("C:/Users/Administrator.SZESCAOJUN6571.000/Downloads/【俄语】itel Energy_folding(L)_乌兹别克斯坦_Final_20251201(1).pdf")),
    verbosity: 0,
  }).promise;

  // Check Page 2
  const page = await doc.getPage(2);
  const ops = await page.getOperatorList();
  const { fnArray, argsArray } = ops;

  const OPS_REV: Record<number, string> = {};
  for (const [name, val] of Object.entries(pdfjsLib.OPS)) {
    OPS_REV[val as number] = name;
  }

  console.log('Page 2: total ops:', fnArray.length);

  // Find all beginGroup (76) and check for smask
  console.log('\n=== beginGroup ops on Page 2 ===');
  let groupCount = 0;
  for (let i = 0; i < fnArray.length; i++) {
    if (fnArray[i] === 76) { // beginGroup
      groupCount++;
      const args = argsArray[i];
      const groupInfo = args?.[0];
      const hasSmask = groupInfo?.smask != null && groupInfo.smask !== false;
      if (hasSmask || groupCount <= 5) {
        console.log(`  op ${i}: beginGroup smask=${hasSmask ? 'YES' : 'no'} isolated=${groupInfo?.isolated} knockout=${groupInfo?.knockout}`);
        if (hasSmask) {
          console.log(`    smask detail:`, JSON.stringify(groupInfo.smask).slice(0, 300));
        }
        // Show nearby ops
        for (let j = i + 1; j < Math.min(i + 10, fnArray.length); j++) {
          const n = OPS_REV[fnArray[j]] || `?${fnArray[j]}`;
          const a = argsArray[j] != null ? JSON.stringify(argsArray[j]).slice(0, 100) : 'null';
          console.log(`    op ${j}: ${n} ${a}`);
        }
      }
    }
  }
  console.log(`\nTotal beginGroup: ${groupCount}`);

  // Count paintImageXObject to understand image rendering
  console.log('\n=== paintImageXObject on Page 2 ===');
  let imgCount = 0;
  for (let i = 0; i < fnArray.length; i++) {
    if (fnArray[i] === 85) { // paintImageXObject
      imgCount++;
      const name = argsArray[i][0];
      // Find the preceding beginGroup if within 20 ops
      let inGroup = false;
      for (let j = i - 1; j >= Math.max(0, i - 20); j--) {
        if (fnArray[j] === 76) { // beginGroup
          const smask = argsArray[j]?.[0]?.smask;
          inGroup = true;
          if (smask != null && smask !== false) {
            console.log(`  op ${i}: ${name} (in SMask group from op ${j})`);
          }
          break;
        }
        if (fnArray[j] === 77) break; // endGroup - not in a group
      }
      if (imgCount <= 5 || !inGroup) {
        // Show first 5 regardless
        if (imgCount <= 5) {
          console.log(`  op ${i}: ${name} [${argsArray[i][1]}x${argsArray[i][2]}] inGroup=${inGroup}`);
        }
      }
    }
  }
  console.log(`Total images: ${imgCount}`);

  // Check setGState for SMask references
  console.log('\n=== setGState with SMask on Page 2 ===');
  for (let i = 0; i < fnArray.length; i++) {
    if (fnArray[i] === 9) { // setGState
      const entries = Array.isArray(argsArray[i]?.[0]) ? argsArray[i][0] : argsArray[i];
      if (!Array.isArray(entries)) continue;
      for (const entry of entries) {
        if (Array.isArray(entry) && entry[0] === 'SMask' && entry[1] !== false) {
          console.log(`  op ${i}: setGState SMask =`, JSON.stringify(entry[1]).slice(0, 200));
          // Show next few ops
          for (let j = i + 1; j < Math.min(i + 5, fnArray.length); j++) {
            const n = OPS_REV[fnArray[j]] || `?${fnArray[j]}`;
            console.log(`    op ${j}: ${n}`);
          }
        }
      }
    }
  }

  process.exit(0);
}
main();
