import Link from 'next/link';

const three = [
  {
    status: 'Forming',
    statusColor: '#E8A857',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'The AmaQithi Trust',
    body: 'A communal fund owned equally by all contributing families. It pays school fees, supports businesses, helps in emergencies, and fixes homes. Every family that puts in has a voice in how it is used.',
    href: '/trust',
  },
  {
    status: 'Active',
    statusColor: '#4CAF50',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'Education Support',
    body: 'Dumile Qwabi — a World War 2 veteran and son of the AmaQithi — came home and built a school. We are continuing that tradition. Financial support for AmaQithi children from Grade 6 through university, with first priority for first-generation students.',
    href: '/initiatives',
  },
  {
    status: 'Recruiting',
    statusColor: '#C4622D',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'AmaQithi Genomy — DNA Project',
    body: 'Oral history and place names already tell us who we are. Now we are building the scientific record to match. AmaQithi members can take a DNA test to map our San lineage — the L0 and L1 haplogroups that trace back to the oldest human communities on earth. Your results belong to you.',
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
              Knowing who we are is the start. Here is what we are doing with it.
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
              <div style={{ marginBottom: '16px' }}>{ini.icon}</div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: ini.statusColor,
                  border: `1px solid ${ini.statusColor}55`,
                  padding: '3px 10px',
                  width: 'fit-content',
                  marginBottom: '14px',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ini.statusColor, display: 'inline-block' }} />
                {ini.status}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.35rem',
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
                  fontSize: '0.88rem',
                  color: '#9E8C7A',
                  lineHeight: 1.7,
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
                Find out more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
