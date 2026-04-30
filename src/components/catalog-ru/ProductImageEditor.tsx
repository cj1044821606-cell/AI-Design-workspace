import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Check, RotateCcw, SlidersHorizontal } from 'lucide-react';

interface ProductImageEditorProps {
  src: string;
  componentName: string;
  initialX: number;
  initialY: number;
  initialScale: number;
  defaultHeight?: string;
  defaultMarginLeft?: string;
}

export function ProductImageEditor({
  src,
  componentName,
  initialX,
  initialY,
  initialScale,
  defaultHeight = '340.562px',
  defaultMarginLeft = '25px',
}: ProductImageEditorProps) {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);
  const [scale, setScale] = useState(initialScale);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setX(initialX);
    setY(initialY);
    setScale(initialScale);
  }, [initialX, initialY, initialScale]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/save-image-transform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ componentName, componentPath: `catalog-ru/${componentName}.tsx`, x, y, scale }),
      });
      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error('Failed to save transform');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setX(0);
    setY(0);
    setScale(1);
  };

  return (
    <div className="relative w-full h-full group">
      <div
        className="relative w-full h-full transition-transform duration-200 design-group-wrapper"
        style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}
      >
        <div
          className="design-group-label"
          style={{ transform: `scale(${1 / scale})`, transformOrigin: 'top left' }}
        >
          Главное изображение продукта
        </div>
        <img
          src={src}
          alt="Product"
          className="w-full object-contain drop-shadow-2xl"
          style={{
            height: defaultHeight,
            marginLeft: defaultMarginLeft,
          }}
          referrerPolicy="no-referrer"
        />
      </div>

      {!isEditing && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
          onPointerDown={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-neutral-600 hover:text-blue-600 z-50 pointer-events-auto print:hidden"
          title="Настроить изображение"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      )}

      {isEditing &&
        createPortal(
          <div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-neutral-200 p-4 w-80 z-[9999] pointer-events-auto print:hidden"
            onPointerDown={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-neutral-500 w-8">X</span>
                <input type="range" min="-200" max="200" value={x} onChange={(e) => setX(Number(e.target.value))} className="flex-1" />
                <span className="text-xs text-neutral-700 w-8 text-right">{x}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-neutral-500 w-8">Y</span>
                <input type="range" min="-200" max="200" value={y} onChange={(e) => setY(Number(e.target.value))} className="flex-1" />
                <span className="text-xs text-neutral-700 w-8 text-right">{y}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-neutral-500 w-8">Масш.</span>
                <input type="range" min="0.5" max="2" step="0.05" value={scale} onChange={(e) => setScale(Number(e.target.value))} className="flex-1" />
                <span className="text-xs text-neutral-700 w-8 text-right">{scale.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-neutral-100">
                <button
                  onClick={handleReset}
                  className="p-1.5 text-neutral-500 hover:bg-neutral-100 rounded-md transition-colors"
                  title="Сбросить"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="p-1.5 bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors disabled:opacity-50"
                  title="Сохранить"
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
