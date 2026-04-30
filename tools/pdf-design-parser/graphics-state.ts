/* ------------------------------------------------------------------ */
/*  PDF Design Parser - Graphics State Tracker                        */
/*                                                                    */
/*  Walks the pdfjs-dist operator list and maintains a state stack    */
/*  that mirrors the PDF graphics state (CTM, colors, opacity, etc.)  */
/* ------------------------------------------------------------------ */

import {
  type Matrix6, IDENTITY, cloneMatrix, multiplyMatrix,
  rgbToHex, grayToHex, cmykToHex,
} from './coord.ts';
import type { ClipReference, NativeColorMode } from './types.ts';

export interface GraphicsState {
  ctm: Matrix6;
  fillColor: string;
  fillColorMode: NativeColorMode;
  strokeColor: string;
  strokeColorMode: NativeColorMode;
  lineWidth: number;
  lineCap: number;
  lineJoin: number;
  dashArray: number[];
  dashOffset: number;
  fontName: string;
  fontSize: number;
  opacity: number;
  fillOpacity: number;
  strokeOpacity: number;
  blendMode: string;
  clip: ClipReference | null;
}

function cloneState(s: GraphicsState): GraphicsState {
  return {
    ctm: cloneMatrix(s.ctm),
    fillColor: s.fillColor,
    fillColorMode: s.fillColorMode,
    strokeColor: s.strokeColor,
    strokeColorMode: s.strokeColorMode,
    lineWidth: s.lineWidth,
    lineCap: s.lineCap,
    lineJoin: s.lineJoin,
    dashArray: [...s.dashArray],
    dashOffset: s.dashOffset,
    fontName: s.fontName,
    fontSize: s.fontSize,
    opacity: s.opacity,
    fillOpacity: s.fillOpacity,
    strokeOpacity: s.strokeOpacity,
    blendMode: s.blendMode,
    clip: s.clip ? {
      clipPathId: s.clip.clipPathId,
      boundingBox: { ...s.clip.boundingBox },
    } : null,
  };
}

function parseColorArgs(args: any[], fallbackMode: NativeColorMode): { color: string; mode: NativeColorMode } {
  if (typeof args[0] === 'string') {
    return { color: args[0], mode: fallbackMode };
  }

  if (args.length >= 3) {
    return { color: rgbToHex(args[0], args[1], args[2]), mode: 'RGB' };
  }

  return { color: '#000000', mode: 'Unknown' };
}

function setExtGStateValue(target: GraphicsState, key: string, value: unknown) {
  if (typeof value === 'number') {
    if (key === 'ca') target.fillOpacity = value;
    if (key === 'CA') target.strokeOpacity = value;
  }
  if (typeof value === 'string' && key === 'BM') {
    target.blendMode = value;
  }
}

export class GraphicsStateTracker {
  private stack: GraphicsState[] = [];
  private current: GraphicsState;

  constructor() {
    this.current = {
      ctm: [...IDENTITY],
      fillColor: '#000000',
      fillColorMode: 'Unknown',
      strokeColor: '#000000',
      strokeColorMode: 'Unknown',
      lineWidth: 1,
      lineCap: 0,
      lineJoin: 0,
      dashArray: [],
      dashOffset: 0,
      fontName: '',
      fontSize: 0,
      opacity: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      blendMode: 'normal',
      clip: null,
    };
  }

  /* ---- State stack ---- */

  save() {
    this.stack.push(cloneState(this.current));
  }

  restore() {
    const prev = this.stack.pop();
    if (prev) this.current = prev;
  }

  depth(): number {
    return this.stack.length;
  }

  /* ---- Transform ---- */

  transform(matrix: Matrix6) {
    this.current.ctm = multiplyMatrix(this.current.ctm, matrix);
  }

  /* ---- Color setters ---- */

  setFillColor(args: any[]) {
    const parsed = parseColorArgs(args, 'RGB');
    this.current.fillColor = parsed.color;
    this.current.fillColorMode = parsed.mode;
  }

  setStrokeColor(args: any[]) {
    const parsed = parseColorArgs(args, 'RGB');
    this.current.strokeColor = parsed.color;
    this.current.strokeColorMode = parsed.mode;
  }

  setFillGray(args: any[]) {
    const g = typeof args[0] === 'string' ? args[0] : grayToHex(args[0]);
    this.current.fillColor = g;
    this.current.fillColorMode = 'Gray';
  }

  setStrokeGray(args: any[]) {
    const g = typeof args[0] === 'string' ? args[0] : grayToHex(args[0]);
    this.current.strokeColor = g;
    this.current.strokeColorMode = 'Gray';
  }

  setFillCMYK(args: any[]) {
    this.current.fillColor = typeof args[0] === 'string'
      ? args[0]
      : cmykToHex(args[0], args[1], args[2], args[3]);
    this.current.fillColorMode = 'CMYK';
  }

  setStrokeCMYK(args: any[]) {
    this.current.strokeColor = typeof args[0] === 'string'
      ? args[0]
      : cmykToHex(args[0], args[1], args[2], args[3]);
    this.current.strokeColorMode = 'CMYK';
  }

  setGState(args: any[]) {
    const entries = Array.isArray(args?.[0]) ? args[0] : args;
    if (!Array.isArray(entries)) return;

    for (const entry of entries) {
      if (!Array.isArray(entry) || entry.length < 2) continue;
      const [key, value] = entry;
      if (typeof key !== 'string') continue;
      setExtGStateValue(this.current, key, value);
    }

    this.current.opacity = Math.min(this.current.fillOpacity, this.current.strokeOpacity);
  }

  setClip(clip: ClipReference | null) {
    this.current.clip = clip;
  }

  /* ---- Font ---- */

  setFont(name: string, size: number) {
    this.current.fontName = name;
    this.current.fontSize = size;
  }

  /* ---- Line width ---- */

  setLineWidth(w: number) {
    this.current.lineWidth = w;
  }

  setLineCap(cap: number) {
    this.current.lineCap = cap;
  }

  setLineJoin(join: number) {
    this.current.lineJoin = join;
  }

  setDash(dashArray: number[], dashOffset: number) {
    this.current.dashArray = dashArray;
    this.current.dashOffset = dashOffset;
  }

  /* ---- Read current state ---- */

  getCurrent(): Readonly<GraphicsState> {
    return this.current;
  }

  snapshot(): GraphicsState {
    return cloneState(this.current);
  }
}

/* ------------------------------------------------------------------ */
/*  OPS code constants (from pdfjs-dist)                              */
/* ------------------------------------------------------------------ */

export const OPS = {
  // Graphics state
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setDash: 6,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,

  // Path
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,

  // Text
  beginText: 31,
  endText: 32,
  setFont: 37,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,

  // Color
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,

  // Images
  paintXObject: 66,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  paintImageMaskXObject: 83,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintImageXObjectRepeat: 88,

  // Transparency groups
  beginGroup: 76,
  endGroup: 77,

  // Compound path
  constructPath: 91,
} as const;

export const DrawOPS = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3,
} as const;
