import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import node_fs from 'node:fs';

async function main() {
  const doc = await pdfjsLib.getDocument({
    data: new Uint8Array(node_fs.readFileSync("C:/Users/Administrator.SZESCAOJUN6571.000/Downloads/【俄语】itel Energy_folding(L)_乌兹别克斯坦_Final_20251201(1).pdf")),
    verbosity: 0,
  }).promise;

  const page = await doc.getPage(1);
  const ops = await page.getOperatorList();
  const { fnArray, argsArray } = ops;

  // Dump fill color changes and text-related ops from op 1200 onward (after red rect)
  // to find back panel text colors
  console.log('=== Ops from 1200 onward (after red background) ===');
  let fillColor = '?';
  for (let i = 1200; i < fnArray.length; i++) {
    const op = fnArray[i];
    const args = argsArray[i];
    
    if (op === 59) { fillColor = args[0]; console.log(`  [${i}] setFillRGB: ${args[0]}`); }
    else if (op === 57) { fillColor = typeof args[0] === 'string' ? args[0] : `gray(${args[0]})`; console.log(`  [${i}] setFillGray: ${fillColor}`); }
    else if (op === 61) { fillColor = typeof args[0] === 'string' ? args[0] : `cmyk(${args.join(',')})`; console.log(`  [${i}] setFillCMYK: ${fillColor}`); }
    else if (op === 54) { fillColor = `setFillColor(${JSON.stringify(args)})`; console.log(`  [${i}] setFillColor: ${JSON.stringify(args)}`); }
    else if (op === 55) { fillColor = `setFillColorN(${JSON.stringify(args)})`; console.log(`  [${i}] setFillColorN: ${JSON.stringify(args)}`); }
    else if (op === 31) { console.log(`  [${i}] beginText`); }
    else if (op === 32) { console.log(`  [${i}] endText`); }
    else if (op === 42) { console.log(`  [${i}] setTextMatrix: [${args.map((a:number) => Math.round(a*100)/100).join(', ')}]`); }
    else if (op === 44 || op === 45) {
      // Extract text from glyph array
      let text = '';
      const glyphs = args[0];
      if (Array.isArray(glyphs)) {
        for (const item of glyphs) {
          if (Array.isArray(item)) {
            for (const g of item) {
              if (typeof g === 'object' && g?.unicode) text += g.unicode;
            }
          } else if (typeof item === 'object' && item?.unicode) {
            text += item.unicode;
          }
        }
      }
      if (text.trim()) {
        console.log(`  [${i}] showText: "${text.slice(0,50)}" [fill=${fillColor}]`);
      }
    }
  }

  process.exit(0);
}
main();
