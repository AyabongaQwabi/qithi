'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const images = [
  { src: '/geneology-abathembu-lineage-2.png', alt: 'AbaThembu lineage chart 2 — Thembu Great House genealogy from Njanya to Ngubengcuka', w: 2218, h: 1496 },
  { src: '/geneology-abathembu-3.png', alt: 'AbaThembu genealogy panel 3 — Thembu royal house branches and succession', w: 2218, h: 1496 },
  { src: '/geneology-abathembu-lineage-4.png', alt: 'AbaThembu lineage chart 4 — Thembu clans and AmaQithi placement in the royal tree', w: 2218, h: 1496 },
  { src: '/geneology-abathembu-amaxhosa-amampondo-amampondomise-lineage.png', alt: 'AbaThembu, AmaXhosa, AmaMpondo, and AmaMpondomise shared lineage from Njanya — Nguni nations genealogy', w: 2218, h: 1528 },
  { src: '/geneology-amaxhosa-lineage.png', alt: 'AmaXhosa lineage chart — Xhosa royal genealogy and relationship to AbaThembu and AmaQithi', w: 2218, h: 1528 },
  { src: '/geneology-amaxhosa-lineage-2.png', alt: 'AmaXhosa lineage chart 2 — extended Xhosa royal house genealogy', w: 2218, h: 1528 },
  { src: '/geneology-amaqwathi-lineage-qwati.png', alt: 'AmaQwathi lineage chart — Qwati clan genealogy and connection to AbaThembu and AmaQithi', w: 2494, h: 1528 },
  { src: '/geneology-amaxhosa-lineage-last.png', alt: 'AmaXhosa lineage final panel — Xhosa, Thembu, and AmaQithi convergence in Eastern Cape genealogy', w: 2218, h: 1528 },
  { src: '/lineage_full.png', alt: 'AmaQithi and AbaThembu full royal lineage from Njanya (c. 1307) to the present — working research chart', w: 2448, h: 1470 },
  { src: '/lineage_detail.png', alt: 'AbaThembu royal lineage detail — from Ntande through Ngubengcuka, Mtirara, and Queen Nonesi at Rhodana', w: 2206, h: 1470 },
];

export default function LineageGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? 0 : (i - 1 + images.length) % images.length)), []);
  const next = useCallback(() => setActive((i) => (i === null ? 0 : (i + 1) % images.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  return (
    <>
      {/* Filmstrip — full width, tall */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '3px',
          width: '100%',
        }}
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            aria-label={`View full size: ${img.alt}`}
            style={{
              position: 'relative',
              display: 'block',
              width: '100%',
              aspectRatio: `${img.w} / ${img.h}`,
              background: '#0F0705',
              border: 'none',
              cursor: 'zoom-in',
              overflow: 'hidden',
              padding: 0,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease',
                opacity: 0.9,
              }}
              quality={75}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                (e.currentTarget as HTMLImageElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLImageElement).style.opacity = '0.9';
              }}
            />
            {/* Hover overlay */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(26,15,10,0.7) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px',
                pointerEvents: 'none',
              }}
              className="gallery-overlay"
            />
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(0.8)',
                opacity: 0,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                background: 'rgba(196,98,45,0.9)',
                borderRadius: 0,
                padding: '8px 14px',
                pointerEvents: 'none',
              }}
              className="gallery-zoom-icon"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5E6C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Genealogy chart viewer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(10, 6, 3, 0.97)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={close}
        >
          {/* Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '88vh',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div
              style={{
                position: 'relative',
                maxHeight: '80vh',
                overflow: 'auto',
                border: '1px solid rgba(196,98,45,0.3)',
              }}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                width={images[active].w}
                height={images[active].h}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  animation: 'slideUp 0.25s ease',
                }}
                quality={95}
              />
            </div>

            {/* Caption */}
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.75rem',
                color: '#9E8C7A',
                letterSpacing: '0.06em',
                textAlign: 'center',
              }}
            >
              {active + 1} / {images.length} — {images[active].alt}
            </p>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            style={{
              position: 'fixed',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(196,98,45,0.15)',
              border: '1px solid rgba(196,98,45,0.4)',
              color: '#E8A857',
              cursor: 'pointer',
              padding: '16px 14px',
              fontSize: '1.2rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(196,98,45,0.35)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(196,98,45,0.15)')}
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            style={{
              position: 'fixed',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(196,98,45,0.15)',
              border: '1px solid rgba(196,98,45,0.4)',
              color: '#E8A857',
              cursor: 'pointer',
              padding: '16px 14px',
              fontSize: '1.2rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(196,98,45,0.35)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(196,98,45,0.15)')}
          >
            →
          </button>

          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: 'fixed',
              top: '16px',
              right: '16px',
              background: 'rgba(196,98,45,0.15)',
              border: '1px solid rgba(196,98,45,0.4)',
              color: '#E8A857',
              cursor: 'pointer',
              padding: '10px 14px',
              fontSize: '1rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(196,98,45,0.35)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(196,98,45,0.15)')}
          >
            ✕
          </button>
        </div>
      )}

      <style>{`
        .gallery-zoom-icon, .gallery-overlay { pointer-events: none; }
        button:hover .gallery-zoom-icon,
        button:focus-visible .gallery-zoom-icon {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1) !important;
        }
        button:hover .gallery-overlay,
        button:focus-visible .gallery-overlay {
          opacity: 1 !important;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
