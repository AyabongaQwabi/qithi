'use client';

const WHATSAPP_URL = 'https://wa.me/27603116777';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 30% 70%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Cave painting motif — very faint, right-side */}
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
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(26,15,10,0.95) 40%, rgba(26,15,10,0.6) 100%)',
          pointerEvents: 'none',
        }}
      />
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
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C4622D',
            marginBottom: '24px',
          }}
        >
          AbaThembu · AbaThwa (San) · White Kei River · Eastern Cape
        </p>

        <h1
          id="hero-heading"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(5rem, 14vw, 10rem)',
            fontWeight: 600,
            color: '#E8A857',
            lineHeight: 0.93,
            letterSpacing: '-0.02em',
            marginBottom: '32px',
          }}
        >
          AmaQithi.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#D4A96A',
            maxWidth: '620px',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          A Thembu–San clan from the White Kei River, Lady Frere — recognised by the mark of ingqithi.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="/who-we-are"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#C4622D',
              color: '#F5E6C8',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 36px',
              border: '1px solid #C4622D',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B5571F';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(196, 98, 45, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C4622D';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Our Story
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: '#E8A857',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 36px',
              border: '1px solid rgba(232, 168, 87, 0.5)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(232, 168, 87, 0.07)';
              e.currentTarget.style.borderColor = '#E8A857';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(232, 168, 87, 0.5)';
            }}
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
