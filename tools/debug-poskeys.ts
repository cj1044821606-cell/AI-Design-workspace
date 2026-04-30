import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import node_fs from 'node:fs';

function round(v: number, dp = 2): number { const m = 10**dp; return Math.round(v * m) / m; }

async function main() {
  const doc = await pdfjsLib.getDocument({
    data: new Uint8Array(node_fs.readFileSync("C:/Users/Administrator.SZESCAOJUN6571.000/Downloads/【俄语】itel Energy_folding(L)_乌兹别克斯坦_Final_20251201(1).pdf")),
    verbosity: 0,
  }).promise;
  const page = await doc.getPage(1);
  const ops = await page.getOperatorList();
  const { fnArray, argsArray } = ops;
  const textContent = await page.getTextContent({ includeMarkedContent: false });

  // Collect setTextMatrix positions
  console.log('=== setTextMatrix positions (e, f) ===');
  let count = 0;
  for (let i = 0; i < fnArray.length; i++) {
    if (fnArray[i] === 42) { // setTextMatrix
      const args = argsArray[i];
      if (count < 20) {
        console.log(`  op[${i}] e=${args[4]} f=${args[5]} (key: ${round(args[4],1)}_${round(args[5],1)})`);
      }
      count++;
    }
  }
  console.log(`  Total: ${count} setTextMatrix ops`);

  // Collect textContent item positions
  console.log('\n=== textContent item positions ===');
  const nonEmpty = textContent.items.filter((t: any) => ('str' in t) && t.str.trim());
  for (let i = 0; i < Math.min(20, nonEmpty.length); i++) {
    const item = nonEmpty[i];
    const [a, b, c, d, e, f] = item.transform;
    console.log(`  item[${i}] "${item.str.slice(0,25)}" e=${e} f=${f} (key: ${round(e,1)}_${round(f,1)})`);
  }

  // Check specific back panel items
  console.log('\n=== Back panel items ===');
  for (const item of nonEmpty) {
    if (item.str.includes('Живите') || item.str.includes('itel') && item.str.includes('Energy')) {
      const [a, b, c, d, e, f] = item.transform;
      console.log(`  "${item.str}" e=${e} f=${f} (key: ${round(e,1)}_${round(f,1)})`);
    }
  }

  process.exit(0);
}
main();
