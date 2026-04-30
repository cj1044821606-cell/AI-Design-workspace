import React, { useEffect, useRef, useState } from 'react';
import type { AuditIssue } from '../catalog-operations/audit-types';

interface CatalogMinimapProps {
  pan: { x: number; y: number };
  setPan: (pan: { x: number; y: number }) => void;
  scale: number;
  setScale: (scale: number) => void;
  contentRef: React.RefObject<HTMLDivElement>;
  canvasRef: React.RefObject<HTMLDivElement>;
  projectType?: string;
  issues?: AuditIssue[];
}

type MinimapSpread = {
  id: string;
};

type MinimapColumn = {
  title: string;
  spreads: MinimapSpread[];
};

export default function CatalogMinimap({
  pan,
  setPan,
  scale,
  setScale,
  contentRef,
  canvasRef,
  issues = [],
}: CatalogMinimapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentRect, setContentRect] = useState({ width: 0, height: 0 });
  const [viewportRect, setViewportRect] = useState({ width: 0, height: 0 });
  const [columns, setColumns] = useState<MinimapColumn[]>([]);

  useEffect(() => {
    const updateSnapshot = () => {
      if (contentRef.current && canvasRef.current) {
        setContentRect({
          width: contentRef.current.scrollWidth,
          height: contentRef.current.scrollHeight,
        });
        setViewportRect({
          width: canvasRef.current.clientWidth,
          height: canvasRef.current.clientHeight,
        });

        const nextColumns = Array.from(
          contentRef.current.querySelectorAll<HTMLElement>('[data-minimap-column="true"]'),
        )
          .map((columnNode) => ({
            title: columnNode.dataset.columnTitle ?? 'Catalog',
            spreads: Array.from(columnNode.querySelectorAll<HTMLElement>('[data-spread-id]'))
              .map((spreadNode) => ({ id: spreadNode.dataset.spreadId ?? '' }))
              .filter((spread) => spread.id),
          }))
          .filter((column) => column.spreads.length > 0);

        setColumns(nextColumns);
      }
    };

    updateSnapshot();
    window.addEventListener('resize', updateSnapshot);

    const resizeObserver = new ResizeObserver(updateSnapshot);
    const mutationObserver = new MutationObserver(updateSnapshot);

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
      mutationObserver.observe(contentRef.current, { childList: true, subtree: true, attributes: true });
    }
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateSnapshot);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [contentRef, canvasRef]);

  if (contentRect.width === 0 || contentRect.height === 0 || columns.length === 0) return null;

  const containerWidth = 270;
  const minimapScale = containerWidth / contentRect.width;
  const minimapHeight = contentRect.height * minimapScale;

  const viewportX = (-viewportRect.width / 2 - pan.x) / scale + contentRect.width / 2;
  const viewportY = (-viewportRect.height / 2 - pan.y) / scale + contentRect.height / 2;
  const viewportW = viewportRect.width / scale;
  const viewportH = viewportRect.height / scale;

  const handleMinimapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const clickXInContent = clickX / minimapScale;
    const clickYInContent = clickY / minimapScale;

    setPan({
      x: (contentRect.width / 2 - clickXInContent) * scale,
      y: (contentRect.height / 2 - clickYInContent) * scale,
    });
  };

  const handleMinimapDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    handleMinimapClick(e);
  };

  const zoomLevels = [4, 50, 100, 150];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
          全局预览视图
        </h2>
        <span className="text-xs text-neutral-500 font-medium">{Math.round(scale * 100)}%</span>
      </div>

      <div
        ref={containerRef}
        className="relative bg-neutral-100 border border-neutral-200 rounded-lg overflow-hidden cursor-crosshair shadow-inner"
        style={{ width: containerWidth, height: minimapHeight }}
        onMouseDown={handleMinimapClick}
        onMouseMove={handleMinimapDrag}
      >
        <div
          className="absolute top-0 left-0 flex flex-row items-start pointer-events-none"
          style={{
            transform: `scale(${minimapScale})`,
            transformOrigin: 'top left',
            gap: '96px',
            padding: '64px 96px 64px 96px',
          }}
        >
          {columns.map((col, colIndex) => {
            const previousSpreadsCount = columns.slice(0, colIndex).reduce((acc, currentColumn) => acc + currentColumn.spreads.length, 0);
            return (
              <div key={colIndex} className="flex flex-col" style={{ gap: '64px' }}>
                <div style={{ height: '32px', marginBottom: '16px', backgroundColor: '#e5e5e5', borderRadius: '4px', width: '200px' }} />
                {col.spreads.map((spread, spreadIndex) => {
                  const currentIndex = previousSpreadsCount + spreadIndex;
                  const label = currentIndex === 0 ? 'Cover' : `P${currentIndex * 2}-${currentIndex * 2 + 1}`;
                  const spreadIssues = issues.filter((issue) => issue.location.spreadId === spread.id);

                  return (
                    <div key={spread.id} className="flex flex-col" style={{ gap: '8px' }}>
                      <div style={{ height: '20px', backgroundColor: '#e5e5e5', borderRadius: '4px', width: '150px' }} />
                      <div
                        style={{
                          width: '420mm',
                          height: '297mm',
                          backgroundColor: 'white',
                          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                          border: '4px solid #e5e5e5',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >
                        <span style={{ fontSize: '160px', fontWeight: 'bold', color: '#cbd5e1' }}>{label}</span>
                        <span style={{ fontSize: '80px', fontWeight: '500', color: '#94a3b8', marginTop: '40px' }}>{col.title}</span>
                        {spreadIssues.slice(0, 8).map((issue, issueIndex) => (
                          <div
                            key={issue.issueId}
                            title={issue.message}
                            style={{
                              position: 'absolute',
                              top: `${14 + Math.floor(issueIndex / 4) * 16}px`,
                              right: `${14 + (issueIndex % 4) * 16}px`,
                              width: '10px',
                              height: '10px',
                              borderRadius: '999px',
                              backgroundColor: '#E60027',
                              boxShadow: '0 0 0 2px rgba(255,255,255,0.9)',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div
          className="absolute border-2 border-[#E60027] bg-[#E60027]/10 pointer-events-none transition-all duration-75"
          style={{
            left: viewportX * minimapScale,
            top: viewportY * minimapScale,
            width: viewportW * minimapScale,
            height: viewportH * minimapScale,
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs text-neutral-500 text-center">点击或拖动小地图快速定位</p>

        <div className="flex items-center justify-between bg-neutral-50 p-1 rounded-lg border border-neutral-200 mt-1">
          {zoomLevels.map((pct) => {
            const isActive = Math.round(scale * 100) === pct;
            return (
              <button
                key={pct}
                onClick={() => setScale(pct / 100)}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? 'bg-white shadow-sm text-[#E60027] ring-1 ring-black/5'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {pct}%
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
