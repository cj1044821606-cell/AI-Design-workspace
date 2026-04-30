/* ------------------------------------------------------------------ */
/*  PDF Design Parser - Page Grouping                                 */
/* ------------------------------------------------------------------ */

import type {
  BoundingBox, DesignElement, ElementGroup, GroupRole, PageReport, TextElement,
} from './types.ts';
import { round } from './coord.ts';

function getBounds(element: DesignElement): BoundingBox {
  switch (element.type) {
    case 'text':
      return {
        x_mm: element.x_mm,
        y_mm: element.y_mm,
        width_mm: element.width_mm,
        height_mm: element.height_mm,
      };
    case 'image':
      return {
        x_mm: element.x_mm,
        y_mm: element.y_mm,
        width_mm: element.display_width_mm,
        height_mm: element.display_height_mm,
      };
    case 'rect':
      return {
        x_mm: element.x_mm,
        y_mm: element.y_mm,
        width_mm: element.width_mm,
        height_mm: element.height_mm,
      };
    case 'path':
      return element.boundingBox;
  }
}

function unionBounds(boundsList: BoundingBox[]): BoundingBox {
  const minX = Math.min(...boundsList.map(b => b.x_mm));
  const minY = Math.min(...boundsList.map(b => b.y_mm));
  const maxX = Math.max(...boundsList.map(b => b.x_mm + b.width_mm));
  const maxY = Math.max(...boundsList.map(b => b.y_mm + b.height_mm));
  return {
    x_mm: round(minX),
    y_mm: round(minY),
    width_mm: round(maxX - minX),
    height_mm: round(maxY - minY),
  };
}

function overlapsOrNear(a: BoundingBox, b: BoundingBox, gapX = 8, gapY = 8) {
  const ax2 = a.x_mm + a.width_mm;
  const ay2 = a.y_mm + a.height_mm;
  const bx2 = b.x_mm + b.width_mm;
  const by2 = b.y_mm + b.height_mm;

  return (
    a.x_mm - gapX <= bx2 &&
    ax2 + gapX >= b.x_mm &&
    a.y_mm - gapY <= by2 &&
    ay2 + gapY >= b.y_mm
  );
}

function clusterElements(elements: DesignElement[], gapX = 8, gapY = 8): DesignElement[][] {
  const ordered = [...elements].sort((a, b) => a.paintOrder - b.paintOrder);
  const visited = new Set<string>();
  const clusters: DesignElement[][] = [];

  for (const seed of ordered) {
    if (visited.has(seed.id)) continue;
    const queue = [seed];
    const cluster: DesignElement[] = [];

    while (queue.length) {
      const current = queue.shift()!;
      if (visited.has(current.id)) continue;
      visited.add(current.id);
      cluster.push(current);

      const currentBounds = getBounds(current);
      for (const candidate of ordered) {
        if (visited.has(candidate.id)) continue;
        if (!overlapsOrNear(currentBounds, getBounds(candidate), gapX, gapY)) continue;
        queue.push(candidate);
      }
    }

    clusters.push(cluster);
  }

  return clusters;
}

function summarizeGroup(role: GroupRole, elements: DesignElement[]) {
  const textPreview = elements
    .filter((el): el is TextElement => el.type === 'text')
    .slice(0, 3)
    .map(el => el.content.trim())
    .filter(Boolean)
    .join(' | ');

  if (textPreview) return `${role}: ${textPreview}`;
  return `${role}: ${elements.length} elements`;
}

function roleForTextCluster(elements: TextElement[], page: PageReport): { role: GroupRole; confidence: number } {
  const bounds = unionBounds(elements.map(getBounds));
  const maxFont = Math.max(...elements.map(el => el.fontSize_pt), 0);
  const avgFont = elements.reduce((sum, el) => sum + el.fontSize_pt, 0) / elements.length;
  const isRightColumn = bounds.x_mm > page.width_mm * 0.45;

  if (maxFont >= 20 || (elements.length <= 3 && avgFont >= 14)) {
    return { role: 'title_block', confidence: 0.9 };
  }

  if (elements.length >= 10 || (isRightColumn && elements.length >= 6)) {
    return { role: 'table_block', confidence: 0.82 };
  }

  return { role: 'text_block', confidence: 0.72 };
}

export function buildPageGroups(page: PageReport): ElementGroup[] {
  const groups: ElementGroup[] = [];
  let seq = 0;
  const pageArea = page.width_mm * page.height_mm;

  const textElements = page.elements.filter((el): el is TextElement => el.type === 'text');
  const imageElements = page.elements.filter(el => el.type === 'image');
  const decorationElements = page.elements.filter(el => el.type === 'rect' || el.type === 'path')
    .filter(el => {
      const b = getBounds(el);
      return (b.width_mm * b.height_mm) / pageArea < 0.6;
    });

  for (const image of imageElements) {
    const bounds = getBounds(image);
    const areaRatio = (bounds.width_mm * bounds.height_mm) / pageArea;
    const role: GroupRole = areaRatio > 0.08 ? 'product_image_block' : 'image_block';
    groups.push({
      groupId: `group_p${page.pageNumber}_${String(++seq).padStart(3, '0')}`,
      role,
      confidence: role === 'product_image_block' ? 0.84 : 0.8,
      elementIds: [image.id],
      boundingBox: bounds,
      summary: summarizeGroup(role, [image]),
    });
  }

  for (const cluster of clusterElements(textElements, 10, 8)) {
    const textCluster = cluster.filter((el): el is TextElement => el.type === 'text');
    if (textCluster.length === 0) continue;
    const roleMeta = roleForTextCluster(textCluster, page);
    groups.push({
      groupId: `group_p${page.pageNumber}_${String(++seq).padStart(3, '0')}`,
      role: roleMeta.role,
      confidence: roleMeta.confidence,
      elementIds: textCluster.map(el => el.id),
      boundingBox: unionBounds(textCluster.map(getBounds)),
      summary: summarizeGroup(roleMeta.role, textCluster),
    });
  }

  for (const cluster of clusterElements(decorationElements, 6, 6)) {
    groups.push({
      groupId: `group_p${page.pageNumber}_${String(++seq).padStart(3, '0')}`,
      role: 'decoration_block',
      confidence: 0.65,
      elementIds: cluster.map(el => el.id),
      boundingBox: unionBounds(cluster.map(getBounds)),
      summary: summarizeGroup('decoration_block', cluster),
    });
  }

  return groups.sort((a, b) => a.boundingBox.y_mm - b.boundingBox.y_mm || a.boundingBox.x_mm - b.boundingBox.x_mm);
}
