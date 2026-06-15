'use client';

const stats = [
  { value: '5+', label: 'Regions' },
  { value: '1842', label: 'Earliest documented ancestor' },
  { value: '∞', label: 'Generations of San heritage' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="cave-section cave-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        /* Radial warm patch at 40% 60% — firelight on uneven rock */
        background: 'radial-gradient(ellipse at 40% 60%, #3D2010 0%, #2C1810 45%, #1A0F0A 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
      aria-labelledby="hero-heading"
    >
      {/* San rock art watermark — ochre archer figure, matches logo San figures */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <svg
          width="640"
          height="640"
          viewBox="0 0 200 200"
          style={{ opacity: 0.04, transform: 'translateX(18%)' }}
          fill="#C4622D"
          aria-hidden
        >
          {/* San archer — matches the logo's archer figure */}
          <ellipse cx="100" cy="28" rx="11" ry="13" />
          <line x1="100" y1="41" x2="100" y2="98" stroke="#C4622D" strokeWidth="6" />
          <line x1="100" y1="58" x2="70" y2="82" stroke="#C4622D" strokeWidth="5" />
          <line x1="100" y1="58" x2="130" y2="46" stroke="#C4622D" strokeWidth="5" />
          <line x1="100" y1="98" x2="78" y2="148" stroke="#C4622D" strokeWidth="5" />
          <line x1="100" y1="98" x2="124" y2="150" stroke="#C4622D" strokeWidth="5" />
          <line x1="78" y1="148" x2="62" y2="175" stroke="#C4622D" strokeWidth="4" />
          <line x1="124" y1="150" x2="140" y2="176" stroke="#C4622D" strokeWidth="4" />
          {/* Bow */}
          <path d="M130 46 Q154 34 142 74" stroke="#C4622D" strokeWidth="3.5" fill="none" />
          <line x1="130" y1="46" x2="142" y2="74" stroke="#C4622D" strokeWidth="1.5" />
          {/* Arrow */}
          <line x1="70" y1="82" x2="118" y2="54" stroke="#C4622D" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Tonal vignette — deepens the cave edges */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(15, 7, 5, 0.5) 100%)',
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
        {/* Subheading */}
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
          AbaThwa · San People · Eastern Cape · Lady Frere
        </p>

        {/* H1 — full amber, no opacity */}
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

        {/* Italic subtitle — full amber, matches logo text weight */}
        <p
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#E8A857',
            marginBottom: '32px',
          }}
        >
          The Clan. The Lineage. The Future.
        </p>

        {/* Body — warmer sand, not grey-brown */}
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#D4A96A',
            maxWidth: '600px',
            lineHeight: 1.75,
            marginBottom: '16px',
          }}
        >
          The AmaQithi are San (AbaThwa) First People of the White Kei River basin — the Cacadu
          mountains, Lady Frere, and the Eastern Cape. Mqithi was already at Rhodana before
          Queen Nonesi arrived in 1841. The AmaQithi assimilated into the Thembu nation over
          generations, but they are not Thembu by origin.
        </p>

        {/* Exclusivity notice */}
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.85rem',
            color: '#D4A96A',
            maxWidth: '560px',
            lineHeight: 1.65,
            marginBottom: '44px',
            borderLeft: '2px solid #C4622D',
            paddingLeft: '16px',
          }}
        >
          This platform is exclusively for AmaQithi families and verified descendants. If you
          carry Qithi blood, you belong here. If you do not, this is not for you.
        </p>

        {/* CTAs — ember glow on primary */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '72px' }}>
          <a
            href="#apply"
            style={{
              display: 'inline-block',
              background: '#C4622D',
              color: '#F5E6C8',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 32px',
              border: '1px solid #C4622D',
              transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B5571F';
              e.currentTarget.style.borderColor = '#B5571F';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(196, 98, 45, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C4622D';
              e.currentTarget.style.borderColor = '#C4622D';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Join the Clan Portal
          </a>
          <a
            href="#who-we-are"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#E8A857',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
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
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
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
