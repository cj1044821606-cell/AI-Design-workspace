import React from 'react';

export interface CatalogSpreadPageNumbersProps {
  leftPageNumber: number;
  rightPageNumber: number;
}

export function getCatalogSpreadPageNumbers(currentIndex: number, totalSpreads: number) {
  const totalPages = totalSpreads * 2;

  if (currentIndex === 0) {
    return {
      leftPageNumber: totalPages,
      rightPageNumber: 1,
    };
  }

  return {
    leftPageNumber: currentIndex * 2,
    rightPageNumber: currentIndex * 2 + 1,
  };
}

export default function CatalogSpreadPageNumbers({
  leftPageNumber,
  rightPageNumber,
}: CatalogSpreadPageNumbersProps) {
  const pageNumberClassName =
    'absolute bottom-[7.5mm] text-[8pt] font-normal leading-[1.4] text-[#4A4A4A]';

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[80]"
      aria-hidden="true"
      data-export-page-number-overlay="true"
    >
      <span
        className={`${pageNumberClassName} left-[12mm]`}
        style={{ fontFamily: '"MiSans", sans-serif' }}
      >
        {leftPageNumber}
      </span>
      <span
        className={`${pageNumberClassName} right-[12mm]`}
        style={{ fontFamily: '"MiSans", sans-serif' }}
      >
        {rightPageNumber}
      </span>
    </div>
  );
}
