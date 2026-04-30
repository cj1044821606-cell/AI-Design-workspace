/* ------------------------------------------------------------------ */
/*  PDF Design Parser - Report Types                                  */
/* ------------------------------------------------------------------ */

export type NativeColorMode = 'RGB' | 'CMYK' | 'Gray' | 'Unknown';
export type FontStyleKind = 'normal' | 'italic' | 'oblique';

export interface DesignReport {
  source: string;
  createdAt: string;
  pages: PageReport[];
  extractedAssets: Record<string, AssetInfo>;
}

export interface PageReport {
  pageNumber: number;
  width_mm: number;
  height_mm: number;
  elements: DesignElement[];
  groups: ElementGroup[];
}

export interface BoundingBox {
  x_mm: number;
  y_mm: number;
  width_mm: number;
  height_mm: number;
}

export interface ClipReference {
  clipPathId: string;
  boundingBox: BoundingBox;
}

export interface BaseElement {
  id: string;
  paintOrder: number;
  zIndex: number;
  graphicsStackDepth: number;
  opacity: number;
  fillOpacity: number;
  strokeOpacity: number;
  blendMode: string;
  isClipped: boolean;
  clipPathId: string | null;
  clipBoundingBox: BoundingBox | null;
  visibleBoundingBox: BoundingBox | null;
}

export type DesignElement =
  | TextElement
  | ImageElement
  | RectElement
  | PathElement;

/* ---- Element types ---- */

export interface TextElement extends BaseElement {
  type: 'text';
  content: string;
  x_mm: number;
  y_mm: number;
  width_mm: number;
  height_mm: number;
  x_pt: number;
  y_pt: number;
  width_pt: number;
  height_pt: number;
  baseline_x_mm: number;
  baseline_y_mm: number;
  baseline_x_pt: number;
  baseline_y_pt: number;
  rotation_deg: number;
  transform: [number, number, number, number, number, number];
  font: string;
  fontFamily: string;
  fontPostScriptName: string;
  fontWeight: number;
  fontStyle: FontStyleKind;
  fontSize_pt: number;
  color: string;
  nativeColorMode: NativeColorMode;
  fillColor: string;
  strokeColor: string | null;
  direction: string;
}

export interface ImageElement extends BaseElement {
  type: 'image';
  assetPath: string;
  x_mm: number;
  y_mm: number;
  display_width_mm: number;
  display_height_mm: number;
  original_px: [number, number];
}

export interface RectElement extends BaseElement {
  type: 'rect';
  x_mm: number;
  y_mm: number;
  width_mm: number;
  height_mm: number;
  fillColor: string | null;
  fillColorMode: NativeColorMode;
  strokeColor: string | null;
  strokeColorMode: NativeColorMode;
  strokeWidth_mm: number;
  dashArray_mm: number[];
  dashOffset_mm: number;
  lineCap: number;
  lineJoin: number;
}

export interface PathElement extends BaseElement {
  type: 'path';
  d: string;
  boundingBox: BoundingBox;
  fillColor: string | null;
  fillColorMode: NativeColorMode;
  strokeColor: string | null;
  strokeColorMode: NativeColorMode;
  strokeWidth_mm: number;
  dashArray_mm: number[];
  dashOffset_mm: number;
  lineCap: number;
  lineJoin: number;
}

export type GroupRole =
  | 'background_block'
  | 'image_block'
  | 'product_image_block'
  | 'title_block'
  | 'text_block'
  | 'table_block'
  | 'decoration_block'
  | 'mixed_block';

export interface ElementGroup {
  groupId: string;
  role: GroupRole;
  confidence: number;
  elementIds: string[];
  boundingBox: BoundingBox;
  summary: string;
}

/* ---- Asset info ---- */

export interface AssetInfo {
  originalSize: [number, number];
  format: string;
  source: 'embedded_xobject' | 'rasterized_region';
  renderScale?: number;
}
