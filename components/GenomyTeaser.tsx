import Link from 'next/link';

export default function GenomyTeaser() {
  return (
    <section
      className="cave-section cave-bg"
      style={{
        position: 'relative',
        padding: '96px 0',
        overflow: 'hidden',
      }}
    >
      {/* Cave art — full background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/bg-square.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />
      {/* Dark radial overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 60% 40%, rgba(61,32,16,0.92) 0%, rgba(44,24,16,0.96) 50%, rgba(26,15,10,0.98) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
            {/* DNA icon */}
            <div style={{ marginBottom: '20px' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 15c6.667-6 13.333 0 20-6" />
                <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
                <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
                <path d="m17 6-2.5-2.5" />
                <path d="m14 8-1-1" />
                <path d="m7 18 2.5 2.5" />
                <path d="m3.5 14.5.5.5" />
                <path d="m20 9 .5.5" />
                <path d="m6.5 12.5 1 1" />
                <path d="m16.5 10.5 1 1" />
                <path d="m10 16 1.5 1.5" />
                <path d="M2 9c6.667 6 13.333 0 20 6" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '16px',
              }}
            >
              AmaQithi Genomy — DNA Project
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontWeight: 600,
                color: '#E8A857',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              The oral history has always been there. Now the science is catching up.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              AmaQithi elders have told the same story for generations: San people and Thembu royalty, fused at the White Kei River. Colonial records from 1839 and 1842 place San families exactly where those stories say they were. The Thembu royal lineage is traceable to Njanya (c. 1307). Place names, click consonants, and oral history all point the same direction.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              The Genomy project adds a scientific layer: DNA. We are building a genetic map of AmaQithi ancestry — focusing on the L0 and L1 haplogroups that trace our San roots, alongside the Nguni lineage markers from the Thembu side. Each family member who takes part makes the record stronger and harder to dismiss.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#9E8C7A',
                lineHeight: 1.8,
                marginBottom: '36px',
              }}
            >
              Participation is voluntary. Your results belong to you. The data stays within the AmaQithi community — it is never sold or shared with outside parties.
            </p>
            <Link
              href="/genealogy"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#F5E6C8',
                background: '#C4622D',
                padding: '14px 30px',
                textDecoration: 'none',
                boxShadow: '0 0 20px rgba(196, 98, 45, 0.4)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
              Join the Project
            </Link>
          </div>

          {/* Status panel */}
          <div>
            <div
              style={{
                border: '1px solid rgba(196, 98, 45, 0.35)',
                padding: '36px',
                background: 'rgba(26, 15, 10, 0.7)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#C4622D',
                    margin: 0,
                  }}
                >
                  Project Status
                </p>
              </div>
              {[
                { label: 'Current phase', value: 'Open — accepting sign-ups' },
                { label: 'People signed up', value: 'Recruiting now' },
                { label: 'DNA lineages tracked', value: 'L0/L1 (San) + Nguni markers' },
                { label: 'How to join', value: 'Free · AmaQithi members only' },
                { label: 'Who owns the data', value: 'You + the AmaQithi Trust' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(196, 98, 45, 0.1)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.78rem',
                      color: '#9E8C7A',
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.82rem',
                      color: '#D4A96A',
                      textAlign: 'right',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
