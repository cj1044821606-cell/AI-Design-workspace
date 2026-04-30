import React from 'react';
import CatalogSpread01 from './CatalogSpread01';
import CatalogSpread02 from './CatalogSpread02';
import CatalogSpread03 from './CatalogSpread03';
import CatalogSpread04 from './CatalogSpread04';
import CatalogSpread05 from './CatalogSpread05';
import CatalogSpread06 from './CatalogSpread06';
import CatalogSpread07 from './CatalogSpread07';
import CatalogSpread08 from './CatalogSpread08';
import CatalogSpread09 from './CatalogSpread09';
import CatalogSpread10 from './CatalogSpread10';
import CatalogSpread11 from './CatalogSpread11';
import CatalogSpread12 from './CatalogSpread12';
import CatalogSpread13 from './CatalogSpread13';
import CatalogSpread14 from './CatalogSpread14';
import CatalogSpread14B from './CatalogSpread14B';
import CatalogSpread14C from './CatalogSpread14C';
import CatalogSpread14D from './CatalogSpread14D';
import CatalogSpread15 from './CatalogSpread15';
import CatalogSpread16 from './CatalogSpread16';
import CatalogSpread17 from './CatalogSpread17';
import CatalogSpread18 from './CatalogSpread18';
import CatalogSpread19 from './CatalogSpread19';
import CatalogSpread20 from './CatalogSpread20';
import CatalogSpread21 from './CatalogSpread21';
import CatalogSpread22 from './CatalogSpread22';
import CatalogSpread23 from './CatalogSpread23';
import CatalogSpread24 from './CatalogSpread24';
import CatalogSpread25 from './CatalogSpread25';
import CatalogSpread25B from './CatalogSpread25B';
import CatalogSpread26 from './CatalogSpread26';
import CatalogSpread27 from './CatalogSpread27';
import CatalogSpread28 from './CatalogSpread28';
import CatalogSpread29 from './CatalogSpread29';
import CatalogSpread30 from './CatalogSpread30';
import CatalogSpread31 from './CatalogSpread31';
import CatalogSpread32 from './CatalogSpread32';
import CatalogSpread33 from './CatalogSpread33';
import CatalogSpread34 from './CatalogSpread34';
import CatalogSpread35 from './CatalogSpread35';
import CatalogSpread36 from './CatalogSpread36';
import CatalogSpread37 from './CatalogSpread37';
import CatalogSpread38 from './CatalogSpread38';
import CatalogSpread39 from './CatalogSpread39';
import CatalogSpread40 from './CatalogSpread40';
import CatalogSpreadPageNumbers, { getCatalogSpreadPageNumbers } from './CatalogSpreadPageNumbers';

export const catalogColumns = [
  {
    title: 'Intro',
    spreads: [CatalogSpread01, CatalogSpread02, CatalogSpread03, CatalogSpread04],
  },
  {
    title: 'Inverter',
    spreads: [CatalogSpread05, CatalogSpread06, CatalogSpread07, CatalogSpread08, CatalogSpread09, CatalogSpread10, CatalogSpread11, CatalogSpread12, CatalogSpread13, CatalogSpread14, CatalogSpread14B, CatalogSpread14C, CatalogSpread14D, CatalogSpread15],
  },
  {
    title: 'Battery',
    spreads: [CatalogSpread16, CatalogSpread17, CatalogSpread18, CatalogSpread19, CatalogSpread20, CatalogSpread21, CatalogSpread22, CatalogSpread23, CatalogSpread25B],
  },
  {
    title: 'All-in-One',
    spreads: [CatalogSpread24, CatalogSpread28, CatalogSpread29, CatalogSpread27, CatalogSpread26, CatalogSpread25],
  },
  {
    title: 'C&I ESS',
    spreads: [CatalogSpread30, CatalogSpread31, CatalogSpread32, CatalogSpread33],
  },
  {
    title: 'PV Modules',
    spreads: [CatalogSpread34, CatalogSpread35, CatalogSpread36, CatalogSpread37, CatalogSpread38, CatalogSpread39, CatalogSpread40],
  },
];

export default function CatalogProject() {
  const totalSpreads = catalogColumns.reduce((acc, col) => acc + col.spreads.length, 0);

  return (
    <div className="flex flex-row gap-24 items-start pb-16 px-24 min-h-screen bg-neutral-100 pt-16">
      {catalogColumns.map((col, colIndex) => {
        const previousSpreadsCount = catalogColumns.slice(0, colIndex).reduce((acc, c) => acc + c.spreads.length, 0);

        return (
          <div key={colIndex} className="flex flex-col gap-16" data-minimap-column="true" data-column-title={col.title}>
            <div className="text-2xl font-bold text-neutral-400 mb-4">{col.title}</div>
            {col.spreads.map((SpreadComponent, spreadIndex) => {
              const currentIndex = previousSpreadsCount + spreadIndex;
              const spreadId = `GLOBAL-${String(currentIndex + 1).padStart(2, '0')}`;
              const { leftPageNumber, rightPageNumber } = getCatalogSpreadPageNumbers(currentIndex, totalSpreads);
              const label =
                currentIndex === 0
                  ? `Cover / Back (P1/P${totalSpreads * 2})`
                  : `P${currentIndex * 2} / P${currentIndex * 2 + 1}`;

              return (
                <div
                  key={currentIndex}
                  className="relative group flex flex-col gap-2"
                  data-spread-id={spreadId}
                  data-edition-id="global"
                  data-template-component={SpreadComponent.name || spreadId}
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
