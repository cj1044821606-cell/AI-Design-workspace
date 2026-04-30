#!/usr/bin/env node
/**
 * Batch fix report.json: correct all known color/element issues from parser.
 * Run after each re-parse to restore fixes that were lost.
 */
const fs = require('fs');
const path = require('path');

const reportPath = path.resolve(__dirname, '../../output/folding-ru-parsed/report.json');
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

let fixCount = 0;
function fix(label) { fixCount++; console.log(`  [${fixCount}] ${label}`); }

// ===== PAGE 2 FIXES =====
const p2 = report.pages[1].elements;

// --- Fix 1: Pro badge texts should always be white ---
const proBadgeIds = new Set();
p2.filter(e => e.type === 'text' && e.content === 'Pro')
  .forEach(e => {
    proBadgeIds.add(e.id);
    if (e.fillColor !== '#ffffff') {
      fix(`${e.id} "Pro" ${e.fillColor} → #ffffff`);
      e.fillColor = '#ffffff';
      e.color = '#ffffff';
    }
  });

// --- Fix 2: Product spec texts incorrectly white → #4d5759 ---
// Warranty badge texts: keep white
const isWarranty = e => {
  if (/^-?(ЛЕТ|ЗАМЕНА|ГАРАНТИЯ)/.test(e.content)) return true;
  if (e.fontSize_pt >= 12 && /^\d$/.test(e.content.trim())) return true;
  return false;
};

// Category bar model names and compact specs: keep white
const catBarYRanges = [
  [61, 67],   // top row
  [71, 73],   // top row alt (IPL-51200, IPL-25200X)
  [118, 121], // left stacked
  [155, 175], // bottom row (wider range for various cards)
];
const isCatBar = e => {
  if (/^I[A-Z]{1,3}-/.test(e.content)) return true;
  const inCatBarY = catBarYRanges.some(([lo, hi]) => e.y_mm >= lo && e.y_mm <= hi);
  if (inCatBarY && /[кВ].*[тА]|Вт|В$|кВт·ч/.test(e.content)) return true;
  if (e.content === 'от 30 до 50 кВт') return true;
  return false;
};

const specToFix = p2.filter(e =>
  e.type === 'text' &&
  e.fillColor === '#ffffff' &&
  !proBadgeIds.has(e.id) &&
  !isWarranty(e) &&
  !isCatBar(e)
);
specToFix.forEach(e => {
  fix(`${e.id} "${e.content.slice(0, 30)}" #ffffff → #4d5759`);
  e.fillColor = '#4d5759';
  e.color = '#4d5759';
});

// --- Fix 3: Page 2 title "itel" and "Energy: замена" → red ---
p2.filter(e => e.type === 'text' && e.y_mm < 15 && (e.content === 'itel' || e.content.startsWith('Energy:')))
  .forEach(e => {
    if (e.fillColor !== '#e83049') {
      fix(`${e.id} "${e.content}" ${e.fillColor} → #e83049`);
      e.fillColor = '#e83049';
      e.color = '#e83049';
    }
  });

// --- Fix 4: "от 30 до 70 кВт·ч" should be white (on gray category bar) ---
p2.filter(e => e.type === 'text' && e.content === 'от 30 до 70 кВт·ч')
  .forEach(e => {
    if (e.fillColor !== '#ffffff') {
      fix(`${e.id} "${e.content}" ${e.fillColor} → #ffffff`);
      e.fillColor = '#ffffff';
      e.color = '#ffffff';
    }
  });

// --- Fix 5: Remove product shadow images (opacity < 0.5) ---
const shadowsBefore = report.pages[1].elements.length;
report.pages[1].elements = report.pages[1].elements.filter(
  e => !(e.type === 'image' && e.opacity < 0.5)
);
const shadowsRemoved = shadowsBefore - report.pages[1].elements.length;
if (shadowsRemoved > 0) {
  fix(`Remove ${shadowsRemoved} shadow images (opacity < 0.5)`);
}

// --- Fix 7: Remove настенный/напольный stroke outline paths ---
const outlinePathsToRemove = new Set();
p2.forEach(e => {
  if (e.type !== 'path') return;
  if (e.strokeColor !== '#4e5759' && e.strokeColor !== '#4d5759' && e.strokeColor !== '#4f575a') return;
  if (e.fillColor) return;
  const bb = e.boundingBox;
  if (!bb || bb.width_mm > 4 || bb.height_mm > 4) return;
  outlinePathsToRemove.add(e.id);
});

if (outlinePathsToRemove.size > 0) {
  fix(`Remove ${outlinePathsToRemove.size} stroke outline paths (настенный/напольный)`);
  report.pages[1].elements = report.pages[1].elements.filter(
    e => !outlinePathsToRemove.has(e.id)
  );
}

// ===== PAGE 1 FIXES =====
const p1 = report.pages[0].elements;

// --- Fix 6: Page 1 text color corrections ---
// "Живите лучше" should NOT be italic (fontStyle check)
// Check for any texts that need color correction on page 1
// text_p1_354: should be a specific color (from memory: needs checking)
p1.filter(e => e.type === 'text' && e.content.includes('СОЛНЕЧНОЙ'))
  .forEach(e => {
    // Check if the Е in СОЛНЕЧНОЙ should have mixed colors
    // For now, just log
    console.log(`  [info] P1 text: ${e.id} "${e.content}" color: ${e.fillColor}`);
  });

// ===== SAVE =====
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
console.log(`\nDone! Applied ${fixCount} fixes.`);
console.log(`Elements after fix: P1=${report.pages[0].elements.length}, P2=${report.pages[1].elements.length}`);
