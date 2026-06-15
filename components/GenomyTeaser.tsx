import Link from 'next/link';

export default function GenomyTeaser() {
  return (
    <section
      className="cave-section cave-bg"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)',
        padding: '96px 0',
        position: 'relative',
      }}
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
              AmaQithi Genomy
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontWeight: 600,
                color: '#E8A857',
                lineHeight: 1.05,
                marginBottom: '24px',
              }}
            >
              We are mapping<br />the AmaQithi<br />bloodline.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.75,
                marginBottom: '16px',
              }}
            >
              The AmaQithi Genomy project is building the first scientific map of San genetic heritage
              within the AmaQithi clan — using voluntary DNA tests submitted by verified family members.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#9E8C7A',
                lineHeight: 1.75,
                marginBottom: '36px',
              }}
            >
              The oral history says we are San. The genetic record will prove it — and show how
              far the bloodline has spread across generations and geography.
            </p>
            <Link
              href="/genealogy"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1A0F0A',
                background: '#C4622D',
                padding: '12px 28px',
                textDecoration: 'none',
                boxShadow: '0 0 16px rgba(196, 98, 45, 0.4)',
              }}
            >
              Join the Genomy Project
            </Link>
          </div>

          <div>
            <div
              style={{
                border: '1px solid rgba(196, 98, 45, 0.35)',
                padding: '36px',
                background: 'rgba(26, 15, 10, 0.6)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  marginBottom: '20px',
                }}
              >
                Project Status
              </p>
              {[
                { label: 'Phase', value: 'Recruitment open' },
                { label: 'Participants enrolled', value: '—' },
                { label: 'Haplogroups tracked', value: 'L0, L1 (San lineages)' },
                { label: 'Kit', value: 'Voluntary · AmaQithi members only' },
                { label: 'Data ownership', value: 'Participant + AmaQithi Trust' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(196, 98, 45, 0.1)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.75rem',
                      color: '#9E8C7A',
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.8rem',
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
