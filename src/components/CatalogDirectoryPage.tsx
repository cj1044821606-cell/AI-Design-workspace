import React, { useLayoutEffect, useRef, useState } from 'react';
import bgImage from '@/画册素材库/背景素材/画册-03-目录背景图.png';

export interface DirectorySection {
  title?: string;
  items: Array<string | DirectoryItem>;
}

export interface DirectoryItem {
  label: string;
  pageLabel?: string;
}

export interface DirectoryGroup {
  key: string;
  title: string;
  icon: string;
  iconAlt: string;
  iconWidthClass: string;
  iconHeightClass?: string;
  iconOffsetClass?: string;
  sections: DirectorySection[];
}

interface CatalogDirectoryPageProps {
  groups: DirectoryGroup[];
  listTopMm?: number;
}

function DirectoryGroupBlock({
  group,
  rowRef,
}: {
  group: DirectoryGroup;
  rowRef?: (node: HTMLDivElement | null) => void;
}) {
  return (
    <div className="design-group-wrapper relative w-full">
      <div className="design-group-label">{group.title} 组</div>
      <div ref={rowRef} className="flex items-start gap-[8.358mm]">
        <div className="w-[28.392mm] shrink-0">
          <img
            src={group.icon}
            alt={group.iconAlt}
            className={[
              'block object-contain object-top',
              group.iconWidthClass,
              group.iconHeightClass ?? '',
              group.iconOffsetClass ?? '',
            ].join(' ').trim()}
          />
        </div>

        <div className="w-[75mm]">
          <h2
            className="mb-3 text-[14.16pt] font-bold leading-none text-[#585857]"
            style={{ fontFamily: '"Mark OT", sans-serif' }}
          >
            {group.title}
          </h2>

          {group.sections.map((section, sectionIndex) => {
            const isLastSection = sectionIndex === group.sections.length - 1;

            return (
              <div key={`${group.key}-section-${sectionIndex}`} className={isLastSection ? '' : 'mb-2'}>
                {section.title ? (
                  <h3
                    className="mb-1 text-[10pt] font-medium leading-[1.5] text-[#585857]"
                    style={{ fontFamily: '"Mark OT", sans-serif' }}
                  >
                    {section.title}
                  </h3>
                ) : null}

                <ul
                  className="m-0 list-none p-0 text-[10pt] font-normal leading-[1.5] text-[#585857]"
                  style={{ fontFamily: '"Mark OT", sans-serif' }}
                >
                  {section.items.map((item) => {
                    const entry = typeof item === 'string' ? { label: item } : item;

                    return (
                      <li
                        key={`${group.key}-${entry.label}`}
                        className={entry.pageLabel ? 'flex items-start justify-between gap-[4mm]' : undefined}
                      >
                        <span>{entry.label}</span>
                        {entry.pageLabel ? (
                          <span className="shrink-0 text-right">{entry.pageLabel}</span>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function CatalogDirectoryPage({ groups, listTopMm = 15 }: CatalogDirectoryPageProps) {
  const listRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [groupGapPx, setGroupGapPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const rows = rowRefs.current.filter((node): node is HTMLDivElement => Boolean(node));
      if (!list || rows.length === 0) return;

      const totalHeight = rows.reduce((sum, row) => sum + row.offsetHeight, 0);
      const nextGap = Math.max(0, (list.clientHeight - totalHeight) / rows.length);
      setGroupGapPx(nextGap);
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    if (listRef.current) observer.observe(listRef.current);
    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, [groups]);

  return (
    <div className="w-[420mm] h-[297mm] relative overflow-hidden bg-white shadow-sm">
      <div className="design-group-wrapper absolute left-0 top-0 z-0 h-[297mm] w-[420mm]">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 03 Background" className="h-full w-full object-cover" />
      </div>

      <div
        className="design-group-wrapper absolute left-[300.8mm] bottom-0 z-10 w-[111.75mm]"
        style={{ top: `${listTopMm}mm` }}
      >
        <div className="design-group-label">目录分组列表</div>
        <div
          ref={listRef}
          className="flex h-full flex-col"
          style={
            groupGapPx === null
              ? undefined
              : {
                  gap: `${groupGapPx}px`,
                  paddingBottom: `${groupGapPx}px`,
                }
          }
        >
          {groups.map((group, index) => (
              <DirectoryGroupBlock
                key={group.key}
                group={group}
                rowRef={(node) => {
                  rowRefs.current[index] = node;
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
