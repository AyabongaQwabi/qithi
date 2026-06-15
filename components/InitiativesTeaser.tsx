import Link from 'next/link';

const three = [
  {
    status: 'Forming',
    title: 'The AmaQithi Trust',
    body: 'A formal trust to pool resources across all AmaQithi families — funding bursaries, seeding businesses, covering community infrastructure. Every contributing family holds a stake.',
    href: '/trust',
  },
  {
    status: 'Active',
    title: 'Education Support',
    body: 'From Grade 6 through university. Mentorship, study support, and connections to AmaQithi professionals. First-generation university students specifically called out.',
    href: '/initiatives',
  },
  {
    status: 'Recruiting',
    title: 'AmaQithi Genomy',
    body: 'We are mapping the AmaQithi lineage through voluntary DNA testing. The first scientific map of the AmaQithi San genetic profile. The most important long-term project on this platform.',
    href: '/genealogy',
  },
];

export default function InitiativesTeaser() {
  return (
    <section
      className="cave-section cave-bg"
      style={{ background: '#1A0F0A', padding: '88px 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '48px',
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
                marginBottom: '12px',
              }}
            >
              What We Are Building
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 600,
                color: '#E8A857',
                lineHeight: 1.1,
              }}
            >
              Six initiatives. All for AmaQithi only.
            </h2>
          </div>
          <Link
            href="/initiatives"
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C4622D',
              textDecoration: 'none',
              borderBottom: '1px solid #C4622D',
              paddingBottom: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            See all six →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(196, 98, 45, 0.3)',
          }}
        >
          {three.map((ini) => (
            <div
              key={ini.title}
              style={{
                background: '#1A0F0A',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  border: '1px solid rgba(196, 98, 45, 0.5)',
                  padding: '3px 10px',
                  width: 'fit-content',
                  marginBottom: '16px',
                }}
              >
                {ini.status}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  marginBottom: '10px',
                  lineHeight: 1.2,
                }}
              >
                {ini.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#9E8C7A',
                  lineHeight: 1.65,
                  flex: 1,
                  marginBottom: '20px',
                }}
              >
                {ini.body}
              </p>
              <Link
                href={ini.href}
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(196, 98, 45, 0.5)',
                  paddingBottom: '2px',
                  width: 'fit-content',
                }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
