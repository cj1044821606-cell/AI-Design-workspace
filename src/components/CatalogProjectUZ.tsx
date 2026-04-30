import React from 'react';
import CatalogSpreadUZ01 from './CatalogSpreadUZ01';
import CatalogSpreadUZ02 from './CatalogSpreadUZ02';
import CatalogSpreadUZ03 from './CatalogSpreadUZ03';
import CatalogSpreadUZ04 from './CatalogSpreadUZ04';
import CatalogSpreadUZ05 from './CatalogSpreadUZ05';
import CatalogSpreadUZ06 from './CatalogSpreadUZ06';
import CatalogSpreadUZ08 from './CatalogSpreadUZ08';
import CatalogSpreadUZ09 from './CatalogSpreadUZ09';
import CatalogSpreadUZ10 from './CatalogSpreadUZ10';
import CatalogSpreadUZ11 from './CatalogSpreadUZ11';
import CatalogSpreadUZ12 from './CatalogSpreadUZ12';
import CatalogSpreadUZ13 from './CatalogSpreadUZ13';
import CatalogSpreadUZ14 from './CatalogSpreadUZ14';
import CatalogSpreadUZ14B from './CatalogSpreadUZ14B';
import CatalogSpreadUZ14C from './CatalogSpreadUZ14C';
import CatalogSpreadUZ14D from './CatalogSpreadUZ14D';
import CatalogSpreadUZ14E from './CatalogSpreadUZ14E';
import CatalogSpreadUZ15 from './CatalogSpreadUZ15';
import CatalogSpreadUZ16 from './CatalogSpreadUZ16';
import CatalogSpreadUZ17 from './CatalogSpreadUZ17';
import CatalogSpreadUZ18 from './CatalogSpreadUZ18';
import CatalogSpreadUZ19 from './CatalogSpreadUZ19';
import CatalogSpreadUZ20 from './CatalogSpreadUZ20';
import CatalogSpreadUZ21 from './CatalogSpreadUZ21';
import CatalogSpreadUZ22 from './CatalogSpreadUZ22';
import CatalogSpreadUZ23 from './CatalogSpreadUZ23';
import CatalogSpreadUZ24 from './CatalogSpreadUZ24';
import CatalogSpreadUZ25 from './CatalogSpreadUZ25';
import CatalogSpreadUZ25B from './CatalogSpreadUZ25B';
import CatalogSpreadUZ26 from './CatalogSpreadUZ26';
import CatalogSpreadUZ27 from './CatalogSpreadUZ27';
import CatalogSpreadUZ28 from './CatalogSpreadUZ28';
import CatalogSpreadUZ29 from './CatalogSpreadUZ29';
import CatalogSpreadUZ30 from './CatalogSpreadUZ30';
import CatalogSpreadUZ31 from './CatalogSpreadUZ31';
import CatalogSpreadUZ32 from './CatalogSpreadUZ32';
import CatalogSpreadUZ33 from './CatalogSpreadUZ33';
import CatalogSpreadUZ34 from './CatalogSpreadUZ34';
import CatalogSpreadUZ35 from './CatalogSpreadUZ35';
import CatalogSpreadUZ36 from './CatalogSpreadUZ36';
import CatalogSpreadUZ37 from './CatalogSpreadUZ37';
import CatalogSpreadUZ38 from './CatalogSpreadUZ38';
import CatalogSpreadUZ39 from './CatalogSpreadUZ39';
import CatalogSpreadUZ40 from './CatalogSpreadUZ40';
import { filterSpreadEntries, type SpreadEntry } from './catalogEditionConfig';
import CatalogSpreadPageNumbers, { getCatalogSpreadPageNumbers } from './CatalogSpreadPageNumbers';

export const catalogColumnsUZ = [
  {
    title: 'Intro',
    spreads: [
      { id: 'UZ01', component: CatalogSpreadUZ01 },
      { id: 'UZ02', component: CatalogSpreadUZ02 },
      { id: 'UZ03', component: CatalogSpreadUZ03 },
      { id: 'UZ04', component: CatalogSpreadUZ04 },
    ] satisfies SpreadEntry[],
  },
  {
    title: 'Inverter',
    spreads: [
      { id: 'UZ05', component: CatalogSpreadUZ05 },
      { id: 'UZ08', component: CatalogSpreadUZ08 },
      { id: 'UZ09', component: CatalogSpreadUZ09 },
      { id: 'UZ12', component: CatalogSpreadUZ12 },
      { id: 'UZ06', component: CatalogSpreadUZ06 },
      { id: 'UZ11', component: CatalogSpreadUZ11 },
      { id: 'UZ14B', component: CatalogSpreadUZ14B },
      { id: 'UZ13', component: CatalogSpreadUZ13 },
      { id: 'UZ14E', component: CatalogSpreadUZ14E },
      { id: 'UZ15', component: CatalogSpreadUZ15 },
      { id: 'UZ14C', component: CatalogSpreadUZ14C },
      { id: 'UZ14', component: CatalogSpreadUZ14 },
      { id: 'UZ14D', component: CatalogSpreadUZ14D },
    ] satisfies SpreadEntry[],
  },
  {
    title: 'Battery',
    spreads: [
      { id: 'UZ16', component: CatalogSpreadUZ16 },
      { id: 'UZ17', component: CatalogSpreadUZ17 },
      { id: 'UZ18', component: CatalogSpreadUZ18 },
      { id: 'UZ19', component: CatalogSpreadUZ19 },
      { id: 'UZ20', component: CatalogSpreadUZ20 },
      { id: 'UZ21', component: CatalogSpreadUZ21 },
      { id: 'UZ22', component: CatalogSpreadUZ22 },
      { id: 'UZ23', component: CatalogSpreadUZ23 },
      { id: 'UZ25B', component: CatalogSpreadUZ25B },
    ] satisfies SpreadEntry[],
  },
  {
    title: 'All-in-One',
    spreads: [
      { id: 'UZ24', component: CatalogSpreadUZ24 },
      { id: 'UZ28', component: CatalogSpreadUZ28 },
      { id: 'UZ29', component: CatalogSpreadUZ29 },
      { id: 'UZ27', component: CatalogSpreadUZ27 },
      { id: 'UZ26', component: CatalogSpreadUZ26 },
      { id: 'UZ25', component: CatalogSpreadUZ25 },
    ] satisfies SpreadEntry[],
  },
  {
    title: 'C&I ESS',
    spreads: [
      { id: 'UZ30', component: CatalogSpreadUZ30 },
      { id: 'UZ31', component: CatalogSpreadUZ31 },
      { id: 'UZ32', component: CatalogSpreadUZ32 },
      { id: 'UZ33', component: CatalogSpreadUZ33 },
    ] satisfies SpreadEntry[],
  },
  {
    title: 'PV Modules',
    spreads: [
      { id: 'UZ34', component: CatalogSpreadUZ34 },
      { id: 'UZ39', component: CatalogSpreadUZ39 },
      { id: 'UZ37', component: CatalogSpreadUZ37 },
      { id: 'UZ38', component: CatalogSpreadUZ38 },
      { id: 'UZ40', component: CatalogSpreadUZ40 },
      { id: 'UZ35', component: CatalogSpreadUZ35 },
      { id: 'UZ36', component: CatalogSpreadUZ36 },
    ] satisfies SpreadEntry[],
  },
];

export default function CatalogProjectUZ() {
  const visibleColumns = catalogColumnsUZ
    .map((column) => ({
      ...column,
      spreads: filterSpreadEntries('uz-en', column.spreads),
    }))
    .filter((column) => column.spreads.length > 0);

  const totalSpreads = visibleColumns.reduce((acc, col) => acc + col.spreads.length, 0);

  return (
    <div className="flex flex-row gap-24 items-start pb-16 px-24 min-h-screen bg-neutral-100 pt-16">
      {visibleColumns.map((col, colIndex) => {
        const previousSpreadsCount = visibleColumns.slice(0, colIndex).reduce((acc, c) => acc + c.spreads.length, 0);

        return (
          <div key={colIndex} className="flex flex-col gap-16" data-minimap-column="true" data-column-title={col.title}>
            <div className="text-2xl font-bold text-neutral-400 mb-4">{col.title}</div>
            {col.spreads.map(({ id, component: SpreadComponent }, spreadIndex) => {
              const currentIndex = previousSpreadsCount + spreadIndex;
              const spreadLabel = `${currentIndex + 1}面`;
              const { leftPageNumber, rightPageNumber } = getCatalogSpreadPageNumbers(currentIndex, totalSpreads);
              const label =
                currentIndex === 0
                  ? `${spreadLabel} | Cover / Back (P1/P${totalSpreads * 2})`
                  : `${spreadLabel} | P${currentIndex * 2} / P${currentIndex * 2 + 1}`;

              return (
                <div
                  key={currentIndex}
                  className="relative group flex flex-col gap-2"
                  data-spread-id={id}
                  data-edition-id="uz-en"
                  data-template-component={SpreadComponent.name || id}
                >
                  <div className="text-sm font-bold text-neutral-400 whitespace-nowrap">{label}</div>
                  <div className="relative shadow-xl ring-1 ring-black/5 bg-white">
                    <SpreadComponent />
                    <CatalogSpreadPageNumbers
                      leftPageNumber={leftPageNumber}
                      rightPageNumber={rightPageNumber}
                    />
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




