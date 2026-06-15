'use client';

import Link from 'next/link';

interface PageCTAProps {
  headline: string;
  body?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function PageCTA({
  headline,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section
      className="cave-section cave-bg"
      style={{
        background: '#C4622D',
        padding: '72px 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 600,
            color: '#F5E6C8',
            marginBottom: body ? '14px' : '32px',
            lineHeight: 1.15,
          }}
        >
          {headline}
        </h2>
        {body && (
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '1rem',
              color: 'rgba(245, 230, 200, 0.8)',
              marginBottom: '32px',
              maxWidth: '560px',
              margin: '0 auto 32px',
              lineHeight: 1.65,
            }}
          >
            {body}
          </p>
        )}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href={primaryHref}
            style={{
              display: 'inline-block',
              background: '#F5E6C8',
              color: '#1A0F0A',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 36px',
              border: '1px solid #F5E6C8',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#F5E6C8',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '14px 36px',
                border: '1px solid rgba(245, 230, 200, 0.6)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
