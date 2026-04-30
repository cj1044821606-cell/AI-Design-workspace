import {
  PAGE1_RENDER, PAGE2_RENDER, PAGE_DIMS,
  type RenderItem,
} from '@/src/data/folding-ru-page-data';

const COVER_WAVE_CLIP = 'M0 0 L0 154.22 C32.98 124.99 74.25 109.42 113.28 109.42 C125.30 109.42 137.08 111.04 148.55 114.14 L148.55 0 Z';

const QR_ASSETS = new Set(['img_p1_003.png', 'img_p1_004.png', 'img_p1_005.png']);

const COMPOSITE_ASSET = 'img_p2_024.png';
const COMPOSITE_BORDER_RADIUS = 4.2; // mm, matches PDF rounded clip

const P2_PRODUCT_SHADOW = 'drop-shadow(1px 3px 4px rgba(0,0,0,0.22)) drop-shadow(0 1px 2px rgba(0,0,0,0.12))';

{/* ================================================================== */}
{/*  Render a single element from the unified render list               */}
{/* ================================================================== */}

function RenderElement({ item, pageWidth, pageHeight }: {
  item: RenderItem;
  pageWidth: number;
  pageHeight: number;
}) {
  if (item.type === 'svg') {
    return (
      <svg
        viewBox={`0 0 ${pageWidth} ${pageHeight}`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: item.zIndex,
          pointerEvents: 'none',
        }}
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    );
  }

  if (item.type === 'image') {
    if (item.asset === 'img_p1_001.png' && item.isClipped && item.clipBounds) {
      const cb = item.clipBounds;
      return (
        <svg
          viewBox={`0 0 ${cb.w} ${cb.h}`}
          style={{
            position: 'absolute',
            left: `${cb.x}mm`,
            top: `${cb.y}mm`,
            width: `${cb.w}mm`,
            height: `${cb.h}mm`,
            zIndex: item.zIndex,
            overflow: 'hidden',
          }}
        >
          <defs>
            <clipPath id="cover-wave-clip">
              <path d={COVER_WAVE_CLIP} />
            </clipPath>
          </defs>
          <image
            href={`/folding-assets/${item.asset}`}
            x={item.x - cb.x}
            y={item.y - cb.y}
            width={item.w}
            height={item.h}
            clipPath="url(#cover-wave-clip)"
            preserveAspectRatio="none"
            opacity={item.opacity}
          />
        </svg>
      );
    }

    if (QR_ASSETS.has(item.asset)) {
      const size = 19.5;
      const pad = 0.8;
      const radius = 1.2;
      const cb = item.isClipped && item.clipBounds ? item.clipBounds : null;
      const cx = cb ? cb.x + cb.w / 2 : item.x + item.w / 2;
      const cy = cb ? cb.y + cb.h / 2 : item.y + item.h / 2;
      return (
        <div
          style={{
            position: 'absolute',
            left: `${cx - size / 2 - pad}mm`,
            top: `${cy - size / 2 - pad}mm`,
            width: `${size + pad * 2}mm`,
            height: `${size + pad * 2}mm`,
            background: '#ffffff',
            borderRadius: `${radius}mm`,
            zIndex: item.zIndex,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={`/folding-assets/${item.asset}`}
            alt=""
            loading="lazy"
            style={{
              width: `${size}mm`,
              height: `${size}mm`,
              objectFit: 'contain',
            }}
          />
        </div>
      );
    }

    if (item.asset === COMPOSITE_ASSET && item.isClipped && item.clipBounds) {
      const cb = item.clipBounds;
      return (
        <div
          style={{
            position: 'absolute',
            left: `${cb.x}mm`,
            top: `${cb.y}mm`,
            width: `${cb.w}mm`,
            height: `${cb.h}mm`,
            overflow: 'hidden',
            borderRadius: `${COMPOSITE_BORDER_RADIUS}mm`,
            zIndex: item.zIndex,
          }}
        >
          <img
            src={`/folding-assets/${item.asset}`}
            alt=""
            loading="lazy"
            style={{
              position: 'absolute',
              left: `${item.x - cb.x}mm`,
              top: `${item.y - cb.y}mm`,
              width: `${item.w}mm`,
              height: `${item.h}mm`,
              opacity: item.opacity,
            }}
          />
        </div>
      );
    }

    const isP2Product = item.asset.startsWith('img_p2_') && item.asset !== COMPOSITE_ASSET;

    if (item.isClipped && item.clipBounds) {
      const cb = item.clipBounds;
      return (
        <div
          style={{
            position: 'absolute',
            left: `${cb.x}mm`,
            top: `${cb.y}mm`,
            width: `${cb.w}mm`,
            height: `${cb.h}mm`,
            overflow: 'hidden',
            zIndex: item.zIndex,
          }}
        >
          <img
            src={`/folding-assets/${item.asset}`}
            alt=""
            loading="lazy"
            style={{
              position: 'absolute',
              left: `${item.x - cb.x}mm`,
              top: `${item.y - cb.y}mm`,
              width: `${item.w}mm`,
              height: `${item.h}mm`,
              opacity: item.opacity,
            }}
          />
        </div>
      );
    }

    return (
      <img
        src={`/folding-assets/${item.asset}`}
        alt=""
        loading="lazy"
        style={{
          position: 'absolute',
          left: `${item.x}mm`,
          top: `${item.y}mm`,
          width: `${item.w}mm`,
          height: `${item.h}mm`,
          opacity: item.opacity,
          zIndex: item.zIndex,
          ...(isP2Product ? { filter: P2_PRODUCT_SHADOW } : {}),
        }}
      />
    );
  }

  // text
  const family = item.fontFamily === 'TimesNewRomanPS'
    ? "'Times New Roman', 'MiSans', serif"
    : item.fontFamily === 'TimesNewRomanPSMT'
      ? "'Times New Roman', 'MiSans', serif"
      : `'${item.fontFamily}', 'Times New Roman', 'MiSans', serif`;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${item.x}mm`,
        top: `${item.y}mm`,
        fontSize: `${item.size}pt`,
        fontFamily: family,
        fontWeight: item.fontWeight,
        fontStyle: item.fontStyle,
        color: item.fillColor,
        whiteSpace: 'nowrap',
        lineHeight: 1,
        opacity: item.opacity,
        zIndex: item.zIndex,
        ...(item.rotation !== 0 ? { transform: `rotate(${item.rotation}deg)`, transformOrigin: 'left top' } : {}),
      }}
    >
      {item.content}
    </div>
  );
}

{/* ================================================================== */}
{/*  Page component — unified paintOrder rendering                      */}
{/* ================================================================== */}

function Page({ items, width, height }: {
  items: readonly RenderItem[];
  width: number;
  height: number;
}) {
  return (
    <div
      className="shrink-0 print:break-after-page"
      style={{
        position: 'relative',
        width: `${width}mm`,
        height: `${height}mm`,
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      {items.map((item, i) => (
        <RenderElement
          key={item.type === 'svg' ? `svg-${i}` : ('id' in item ? item.id : `item-${i}`)}
          item={item}
          pageWidth={width}
          pageHeight={height}
        />
      ))}
    </div>
  );
}

{/* ================================================================== */}
{/*  Main exported component                                            */}
{/* ================================================================== */}

export default function FoldingBrochureUZ_RU() {
  return (
    <>
      <div style={{ position: 'relative', width: `${PAGE_DIMS.page1.width}mm`, height: `${PAGE_DIMS.page1.height}mm` }}>
        {/* Red background for left panel — prevents sub-pixel gap at bottom */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '148.5mm',
          height: '100%',
          background: '#e83049',
          zIndex: 0,
        }} />
        <Page
          items={PAGE1_RENDER}
          width={PAGE_DIMS.page1.width}
          height={PAGE_DIMS.page1.height}
        />
        {/* Brand logo overlay — replaces parsed SVG paths */}
        <img
          src="/folding-assets/itel-energy-logo.svg"
          alt="itel Energy"
          style={{
            position: 'absolute',
            left: '453.5mm',
            top: '8mm',
            width: '42.15mm',
            height: '10.44mm',
            zIndex: 50,
            pointerEvents: 'none',
          }}
        />
      </div>
      <div style={{ height: '10mm' }} />
      <Page
        items={PAGE2_RENDER}
        width={PAGE_DIMS.page2.width}
        height={PAGE_DIMS.page2.height}
      />
    </>
  );
}
