'use client';

import Image from 'next/image';

const stats = [
  { value: '1841', label: 'Qithi at Rhodana — documented' },
  { value: '5+', label: 'Provinces with AmaQithi families' },
  { value: '180+', label: 'Years of recorded history' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="cave-section cave-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 40% 60%, #3D2010 0%, #2C1810 45%, #1A0F0A 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
      aria-labelledby="hero-heading"
    >
      {/* Cave painting background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/bg_rectangular.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      />

      {/* Dark overlay for readability */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(26,15,10,0.92) 40%, rgba(26,15,10,0.65) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: 'linear-gradient(to bottom, transparent, #1A0F0A)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          width: '100%',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C4622D',
            marginBottom: '20px',
          }}
        >
          San (AbaThwa) · White Kei River · Lady Frere · Eastern Cape
        </p>

        <h1
          id="hero-heading"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            fontWeight: 600,
            color: '#E8A857',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          AmaQithi
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#E8A857',
            marginBottom: '36px',
            maxWidth: '680px',
          }}
        >
          When Queen Nonesi moved the Thembu Great Place to Rhodana in 1841, she found our people already there.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#D4A96A',
            maxWidth: '580px',
            lineHeight: 1.85,
            marginBottom: '44px',
          }}
        >
          The AmaQithi are San (AbaThwa) people of the White Kei River basin. We were hunters, rainmakers, and frontier scouts — absorbed into the Thembu nation but never erased. Our names, our villages, and our oral history have kept the record. This site makes it accessible.
        </p>


        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '72px' }}>
          <a
            href="/apply"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#C4622D',
              color: '#F5E6C8',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 32px',
              border: '1px solid #C4622D',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B5571F';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(196, 98, 45, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C4622D';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Join the Clan
          </a>
          <a
            href="/who-we-are"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: '#E8A857',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 32px',
              border: '1px solid rgba(232, 168, 87, 0.6)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(232, 168, 87, 0.08)';
              e.currentTarget.style.borderColor = '#E8A857';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(232, 168, 87, 0.6)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Our History
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(196, 98, 45, 0.35)',
            paddingTop: '32px',
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '2.4rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#9E8C7A',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
