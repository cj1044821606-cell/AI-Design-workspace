/* ------------------------------------------------------------------ */
/*  PDF Design Parser — Coordinate Utilities                           */
/* ------------------------------------------------------------------ */

/** PDF point → millimetres */
export function ptToMm(pt: number): number {
  return pt * 25.4 / 72;
}

/** Millimetres → PDF point */
export function mmToPt(mm: number): number {
  return mm * 72 / 25.4;
}

/** Flip Y axis: PDF origin is bottom-left, we want top-left */
export function flipY(y_pt: number, pageHeight_pt: number): number {
  return pageHeight_pt - y_pt;
}

/** Round to N decimal places */
export function round(n: number, decimals = 2): number {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

/* ---- 2D Affine Matrix (6-element: [a, b, c, d, e, f]) ---- */
// Represents:  | a  b  0 |
//              | c  d  0 |
//              | e  f  1 |

export type Matrix6 = [number, number, number, number, number, number];

export const IDENTITY: Matrix6 = [1, 0, 0, 1, 0, 0];

/** Multiply two 6-element affine matrices: result = m1 × m2 */
export function multiplyMatrix(m1: Matrix6, m2: Matrix6): Matrix6 {
  const [a1, b1, c1, d1, e1, f1] = m1;
  const [a2, b2, c2, d2, e2, f2] = m2;
  return [
    a1 * a2 + b1 * c2,
    a1 * b2 + b1 * d2,
    c1 * a2 + d1 * c2,
    c1 * b2 + d1 * d2,
    e1 * a2 + f1 * c2 + e2,
    e1 * b2 + f1 * d2 + f2,
  ];
}

/** Apply matrix to a point → transformed (x, y) */
export function applyMatrix(m: Matrix6, x: number, y: number): [number, number] {
  return [
    m[0] * x + m[2] * y + m[4],
    m[1] * x + m[3] * y + m[5],
  ];
}

/** Clone a matrix */
export function cloneMatrix(m: Matrix6): Matrix6 {
  return [m[0], m[1], m[2], m[3], m[4], m[5]];
}

/**
 * Extract display size and position from a CTM (used for images).
 *
 * When painting an image, the image is conceptually 1×1 unit square.
 * The CTM scales+positions it:
 *   width  = sqrt(a² + b²)  (horizontal scale)
 *   height = sqrt(c² + d²)  (vertical scale)
 *   x = e, y = f            (bottom-left corner in PDF space)
 *
 * We convert to mm with y flipped so origin is top-left.
 */
export function ctmToRect(ctm: Matrix6, pageHeight_pt: number) {
  const corners: [number, number][] = [
    [0, 0], [1, 0], [1, 1], [0, 1],
  ];
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const [cx, cy] of corners) {
    const px = ctm[0] * cx + ctm[2] * cy + ctm[4];
    const py = ctm[1] * cx + ctm[3] * cy + ctm[5];
    const mx = ptToMm(px);
    const my = ptToMm(flipY(py, pageHeight_pt));
    if (mx < minX) minX = mx;
    if (my < minY) minY = my;
    if (mx > maxX) maxX = mx;
    if (my > maxY) maxY = my;
  }
  return {
    x_mm: round(minX),
    y_mm: round(minY),
    width_mm: round(maxX - minX),
    height_mm: round(maxY - minY),
  };
}

export function intersectRects(
  a: { x_mm: number; y_mm: number; width_mm: number; height_mm: number },
  b: { x_mm: number; y_mm: number; width_mm: number; height_mm: number },
) {
  const x1 = Math.max(a.x_mm, b.x_mm);
  const y1 = Math.max(a.y_mm, b.y_mm);
  const x2 = Math.min(a.x_mm + a.width_mm, b.x_mm + b.width_mm);
  const y2 = Math.min(a.y_mm + a.height_mm, b.y_mm + b.height_mm);

  if (x2 <= x1 || y2 <= y1) return null;

  return {
    x_mm: round(x1),
    y_mm: round(y1),
    width_mm: round(x2 - x1),
    height_mm: round(y2 - y1),
  };
}

/** Extract font size from a text matrix (scale component) */
export function fontSizeFromMatrix(m: Matrix6): number {
  return Math.sqrt(m[0] ** 2 + m[1] ** 2);
}

/* ---- Color conversion ---- */

/** [0..1] float RGB → "#RRGGBB" */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (v: number) => Math.round(Math.max(0, Math.min(1, v)) * 255)
    .toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Grayscale [0..1] → "#RRGGBB" */
export function grayToHex(g: number): string {
  return rgbToHex(g, g, g);
}

/** CMYK [0..1] → "#RRGGBB" (simple conversion, adequate for screen) */
export function cmykToHex(c: number, m: number, y: number, k: number): string {
  const r = (1 - c) * (1 - k);
  const g = (1 - m) * (1 - k);
  const b = (1 - y) * (1 - k);
  return rgbToHex(r, g, b);
}
