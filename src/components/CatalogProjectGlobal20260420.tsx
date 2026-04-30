import React, { type ComponentType } from 'react';
import CatalogSpreadPageNumbers, {
  getCatalogSpreadPageNumbers,
} from './CatalogSpreadPageNumbers';
import { catalogColumnsUZ } from './CatalogProjectUZ';
import type { SpreadEntry } from './catalogEditionConfig';

const globalSpreadModules = import.meta.glob<{ default: ComponentType }>(
  './CatalogSpreadGlobal20260420_*.tsx',
  { eager: true },
);

function getGlobalSpread(spreadId: string): ComponentType {
  const module = globalSpreadModules[`./CatalogSpreadGlobal20260420_${spreadId}.tsx`];
  if (!module) {
    throw new Error(`Missing global spread component for ${spreadId}`);
  }
  return module.default;
}

const hiddenIds = new Set(['UZ19', 'UZ31', 'UZ33', 'UZ35', 'UZ36']);
const ciReassignedIds = new Set(['UZ14E', 'UZ14C', 'UZ14D']);
const inverterOrder = new Map(
  [
    'UZ05',
    'UZ07',
    'UZ08',
    'UZ09',
    'UZ12',
    'UZ06',
    'UZ10',
    'UZ11',
    'UZ14B',
    'UZ13',
    'UZ14E',
    'UZ15',
    'UZ14C',
    'UZ14',
    'UZ14D',
  ].map((id, index) => [id, index]),
);
const batteryOrder = new Map(
  ['UZ16', 'UZ20', 'UZ18', 'UZ21', 'UZ25B', 'UZ19', 'UZ23', 'UZ22', 'UZ17'].map((id, index) => [
    id,
    index,
  ]),
);
const ciOrder = new Map(
  ['UZ30', 'UZ30B', 'UZ31C', 'UZ14E', 'UZ31B', 'UZ14C', 'UZ14D', 'UZ32'].map((id, index) => [
    id,
    index,
  ]),
);

const extraInverterSpread: SpreadEntry = {
  id: 'UZ07',
  component: getGlobalSpread('07'),
};

const restoredInverterSpread: SpreadEntry = {
  id: 'UZ10',
  component: getGlobalSpread('10'),
};

const extraBatterySpread: SpreadEntry = {
  id: 'UZ17B',
  component: getGlobalSpread('17B'),
};

const extraCiLowSpread: SpreadEntry = {
  id: 'UZ30B',
  component: getGlobalSpread('30B'),
};

const extraCiMidSpread: SpreadEntry = {
  id: 'UZ31C',
  component: getGlobalSpread('31C'),
};

const extraCiHighSpread: SpreadEntry = {
  id: 'UZ31B',
  component: getGlobalSpread('31B'),
};

const reassignedCiSpreads: SpreadEntry[] = ['14E', '14C', '14D'].map((spreadId) => ({
  id: `UZ${spreadId}`,
  component: getGlobalSpread(spreadId),
}));

export const catalogColumnsGlobal20260420 = catalogColumnsUZ
  .map((column) => ({
    ...column,
    spreads: column.spreads
      .map((spread) => ({
        id: spread.id,
        component: getGlobalSpread(spread.id.replace(/^UZ/, '')),
      }))
      .filter((spread) => !hiddenIds.has(spread.id)) satisfies SpreadEntry[],
  }))
  .map((column) => {
    if (column.title === 'Inverter') {
      return {
        ...column,
        spreads: [
          ...column.spreads.filter((spread) => !ciReassignedIds.has(spread.id)),
          extraInverterSpread,
          restoredInverterSpread,
        ].sort((a, b) => (inverterOrder.get(a.id) ?? 999) - (inverterOrder.get(b.id) ?? 999)) satisfies SpreadEntry[],
      };
    }

    if (column.title === 'Battery') {
      return {
        ...column,
        spreads: [
          ...[...column.spreads].sort(
            (a, b) => (batteryOrder.get(a.id) ?? 999) - (batteryOrder.get(b.id) ?? 999),
          ),
          extraBatterySpread,
        ] satisfies SpreadEntry[],
      };
    }

    if (column.title === 'C&I ESS') {
      return {
        ...column,
        spreads: [
          ...column.spreads,
          extraCiLowSpread,
          extraCiMidSpread,
          extraCiHighSpread,
          ...reassignedCiSpreads,
        ].sort((a, b) => (ciOrder.get(a.id) ?? 999) - (ciOrder.get(b.id) ?? 999)) satisfies SpreadEntry[],
      };
    }

    return column;
  });

export default function CatalogProjectGlobal20260420() {
  const visibleColumns = catalogColumnsGlobal20260420.filter((column) => column.spreads.length > 0);
  const totalSpreads = visibleColumns.reduce((acc, col) => acc + col.spreads.length, 0);

  return (
    <div className="flex flex-row gap-24 items-start pb-16 px-24 min-h-screen bg-neutral-100 pt-16">
      {visibleColumns.map((col, colIndex) => {
        const previousSpreadsCount = visibleColumns
          .slice(0, colIndex)
          .reduce((acc, c) => acc + c.spreads.length, 0);

        return (
          <div
            key={colIndex}
            className="flex flex-col gap-16"
            data-minimap-column="true"
            data-column-title={col.title}
          >
            <div className="text-2xl font-bold text-neutral-400 mb-4">{col.title}</div>
            {col.spreads.map(({ id, component: SpreadComponent }, spreadIndex) => {
              const currentIndex = previousSpreadsCount + spreadIndex;
              const spreadLabel = `Spread ${currentIndex + 1}`;
              const { leftPageNumber, rightPageNumber } = getCatalogSpreadPageNumbers(
                currentIndex,
                totalSpreads,
              );
              const label =
                currentIndex === 0
                  ? `${spreadLabel} | Cover / Back (P1/P${totalSpreads * 2})`
                  : `${spreadLabel} | P${currentIndex * 2} / P${currentIndex * 2 + 1}`;

              return (
                <div
                  key={currentIndex}
                  className="relative group flex flex-col gap-2"
                  data-spread-id={id}
                  data-edition-id="global-20260420"
                  data-template-component={SpreadComponent.name || id}
                >
                  <div className="text-sm font-bold text-neutral-400 whitespace-nowrap">{label}</div>
                  <div className="relative shadow-xl ring-1 ring-black/5 bg-white">
                    <SpreadComponent />
                    {id !== 'UZ03' ? (
                      <CatalogSpreadPageNumbers
                        leftPageNumber={leftPageNumber}
                        rightPageNumber={rightPageNumber}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
