#!/usr/bin/env tsx
/**
 * Debug: Check what image objects pdfjs has available after getOperatorList
 */
import node_fs from 'node:fs';

const pdfPath = process.argv[2];
const pageNum = parseInt(process.argv[3] || '2', 10);
if (!pdfPath) { console.error('Usage: npx tsx debug-objs.ts <pdf> [page]'); process.exit(1); }

async function main() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(node_fs.readFileSync(pdfPath));
  const doc = await (pdfjs as any).getDocument({ data, verbosity: 0 }).promise;
  const page = await doc.getPage(pageNum);

  // Trigger operator list processing (same as parser does)
  const ops = await page.getOperatorList();
  console.log(`Operator list: ${ops.fnArray.length} ops`);

  // Inspect page.objs internals
  const objs = page.objs as any;
  console.log('\npage.objs type:', typeof objs);
  console.log('page.objs keys:', Object.keys(objs));

  if (objs._objs) {
    console.log('page.objs._objs type:', typeof objs._objs);
    if (objs._objs instanceof Map) {
      const allKeys = [...objs._objs.keys()];
      console.log(`page.objs._objs: ${allKeys.length} entries`);
      const imgKeys = allKeys.filter((k: string) => k.includes('img') || k.includes('g_'));
      console.log(`Image-related keys: ${imgKeys.join(', ')}`);
    } else if (typeof objs._objs === 'object') {
      const allKeys = Object.keys(objs._objs);
      console.log(`page.objs._objs: ${allKeys.length} entries`);
      const imgKeys = allKeys.filter((k: string) => k.includes('img') || k.includes('g_'));
      console.log(`Image-related keys: ${imgKeys.join(', ')}`);
    }
  }

  // Try has() method
  if (typeof objs.has === 'function') {
    console.log(`\nhas('img_p1_15'): ${objs.has('img_p1_15')}`);
    console.log(`has('g_d0_img_p1_15'): ${objs.has('g_d0_img_p1_15')}`);
  }

  // Try direct get (sync, no callback)
  for (const name of ['img_p1_15', 'g_d0_img_p1_15']) {
    try {
      const obj = objs.get(name);
      if (obj && obj.data) {
        console.log(`\nget('${name}'): ${obj.width}x${obj.height}, kind=${obj.kind}`);
      } else if (obj) {
        console.log(`\nget('${name}'): exists but no data, keys: ${Object.keys(obj).join(',')}`);
      } else {
        console.log(`\nget('${name}'): null/undefined`);
      }
    } catch (e: any) {
      console.log(`\nget('${name}'): ERROR: ${e.message}`);
    }
  }

  // Check all operations at op[680] neighborhood
  console.log('\n--- Ops around 680 ---');
  for (let i = 675; i <= 685 && i < ops.fnArray.length; i++) {
    const op = ops.fnArray[i];
    const args = ops.argsArray[i];
    console.log(`op[${i}] fn=${op} args[0]=${typeof args[0] === 'string' ? args[0] : typeof args[0]}`);
  }

  await doc.destroy();
}

main().catch(e => { console.error(e); process.exit(1); });
