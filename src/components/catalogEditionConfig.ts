import type { ComponentType } from 'react';

export type CatalogEdition = 'global' | 'uz-en' | 'uz-ru';

export type SpreadEntry<T extends ComponentType = ComponentType> = {
  id: string;
  component: T;
};

// Soft archive only. We keep the spread source files so products can be restored
// later by removing ids from this config instead of recreating deleted pages.
const archivedSpreadIdsByEdition: Record<CatalogEdition, readonly string[]> = {
  global: [],
  'uz-en': ['UZ10', 'UZ19', 'UZ20', 'UZ21', 'UZ35', 'UZ36'],
  'uz-ru': ['UZ10', 'UZ19', 'UZ20', 'UZ21', 'UZ35', 'UZ36'],
};

export const archivedSpreadNotes: Record<string, string> = {
  UZ10: 'Archive IPV-8K48U & IPV-12K48U for Uzbekistan editions only.',
  UZ19: 'Archive IPL-51200 & IPL-51280 for Uzbekistan editions only.',
  UZ20: 'Archive IPL-51628H for Uzbekistan editions only.',
  UZ21: 'Archive IPL-51314Y for Uzbekistan editions only.',
  UZ35: 'Archive PV Modules-410/N for Uzbekistan editions only.',
  UZ36: 'Archive PV Modules-550/N for Uzbekistan editions only.',
};

export function filterSpreadEntries<T extends ComponentType>(
  edition: CatalogEdition,
  spreads: readonly SpreadEntry<T>[],
): SpreadEntry<T>[] {
  const hiddenIds = new Set(archivedSpreadIdsByEdition[edition]);
  return spreads.filter((spread) => !hiddenIds.has(spread.id));
}
