'use client';

const WHATSAPP_URL = 'https://wa.me/27603116777';

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subheading?: string;
  intro?: string;
  bg?: boolean;
  researchHref?: string;
  lineageHref?: string;
}

export default function PageHero({ eyebrow, headline, subheading, intro, bg, researchHref, lineageHref }: PageHeroProps) {
  return (
    <section
      className="cave-section cave-bg"
      style={{
        background: 'radial-gradient(ellipse at 30% 70%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)',
        paddingTop: '120px',
        paddingBottom: '72px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Optional cave painting background */}
      {bg && (
        <>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/bg_rectangular.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.09,
              pointerEvents: 'none',
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(26,15,10,0.9) 35%, rgba(26,15,10,0.6) 100%)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C4622D',
            marginBottom: '18px',
          }}
        >
          {eyebrow}
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 600,
            color: '#E8A857',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: subheading ? '16px' : intro ? '24px' : '0',
            maxWidth: '820px',
          }}
        >
          {headline}
        </h1>
        {subheading && (
          <p
            style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#D4A96A',
              marginBottom: intro ? '24px' : '0',
              maxWidth: '720px',
            }}
          >
            {subheading}
          </p>
        )}
        {intro && (
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: '#9E8C7A',
              maxWidth: '660px',
              lineHeight: 1.75,
              marginBottom: '32px',
            }}
          >
            {intro}
          </p>
        )}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginTop: intro ? '0' : '28px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: '#5BB85A',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '12px 28px',
              border: '1px solid rgba(91, 184, 90, 0.5)',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
          {researchHref && (
            <a
              href={researchHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#E8A857',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '12px 28px',
                border: '1px solid rgba(232, 168, 87, 0.45)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              The Research
            </a>
          )}
          {lineageHref && (
            <a
              href={lineageHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#9E8C7A',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '12px 28px',
                border: '1px solid rgba(158, 140, 122, 0.35)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
              </svg>
              Lineage
            </a>
          )}
        </div>
      </div>
      {/* Bottom fade into next section */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, #1A0F0A)',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
