import Link from 'next/link';

export default function IdentityTeaser() {
  return (
    <section
      className="cave-section cave-bg"
      style={{ background: '#2C1810', padding: '88px 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
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
              Identity
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 600,
                color: '#E8A857',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              Not Thembu by origin.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.75,
                marginBottom: '12px',
              }}
            >
              The AmaQithi are San (AbaThwa) First People of the White Kei River basin. The name
              Qithi carries a palatal click consonant indigenous to Khoisan languages — a
              linguistic fossil that survived long after everything else was absorbed.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.75,
                marginBottom: '12px',
              }}
            >
              Mqithi was at Rhodana before Queen Nonesi arrived in 1841. The AmaQithi assimilated
              into the Thembu nation over generations. But that is not where they began.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.75,
                marginBottom: '32px',
              }}
            >
              Every surname in this clan — Qwabi, Qithi, Mqithi — carries the same Q click. That
              click is where the story starts.
            </p>
            <Link
              href="/who-we-are"
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C4622D',
                textDecoration: 'none',
                borderBottom: '1px solid #C4622D',
                paddingBottom: '2px',
              }}
            >
              Read the full history →
            </Link>
          </div>

          {/* Stanford quote */}
          <blockquote
            style={{
              borderLeft: '3px solid #C4622D',
              paddingLeft: '28px',
              margin: 0,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontStyle: 'italic',
                color: '#E8A857',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}
            >
              "At about this time a number of Thembu groups living on the White Kei, including
              &lsquo;Jumba&rsquo;, father of the Thembu chief, &lsquo;Umgudhluwa&rsquo;, were on
              comparatively friendly terms with San &lsquo;families and clans&rsquo; living in
              that area."
            </p>
            <cite
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.75rem',
                color: '#9E8C7A',
                fontStyle: 'normal',
              }}
            >
              — Silayi, subject of Chief Jumba, recorded by Sir Walter Stanford (Macquarrie
              1962:31)
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
