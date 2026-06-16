interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subheading?: string;
  intro?: string;
  bg?: boolean;
}

export default function PageHero({ eyebrow, headline, subheading, intro, bg }: PageHeroProps) {
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
            }}
          >
            {intro}
          </p>
        )}
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
