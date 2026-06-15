'use client';

import Link from 'next/link';

const linkGroups = [
  {
    label: 'About',
    links: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'Families', href: '/families' },
    ],
  },
  {
    label: 'Community',
    links: [
      { label: 'Initiatives', href: '/initiatives' },
      { label: 'The Trust', href: '/trust' },
      { label: 'Skills Directory', href: '/directory' },
    ],
  },
  {
    label: 'Action',
    links: [
      { label: 'Apply', href: '/apply' },
      { label: 'Genealogy Project', href: '/genealogy' },
    ],
  },
  {
    label: 'System',
    links: [
      { label: 'Admin', href: '/admin' },
      { label: 'Sitemap', href: '/sitemap.xml' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="cave-section cave-bg"
      style={{
        background: '#0F0705',
        borderTop: '1px solid rgba(196, 98, 45, 0.35)',
        padding: '60px 0 40px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '2rem',
                fontWeight: 600,
                color: '#E8A857',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              AmaQithi
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                color: '#9E8C7A',
                lineHeight: 1.65,
                maxWidth: '280px',
                marginBottom: '16px',
              }}
            >
              San (AbaThwa) First People of the White Kei River basin. Lady Frere. The Cacadu
              mountains. The Eastern Cape.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                color: 'rgba(158,140,122,0.5)',
              }}
            >
              For AmaQithi families and verified descendants only.
            </p>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.label}>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  marginBottom: '16px',
                }}
              >
                {group.label}
              </p>
              {group.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.85rem',
                    color: '#9E8C7A',
                    textDecoration: 'none',
                    marginBottom: '10px',
                    transition: 'color 0.2s',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Izibongo */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '16px',
              }}
            >
              Izibongo
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                color: 'rgba(158,140,122,0.6)',
                lineHeight: 1.7,
              }}
            >
              Ndinga, Mnono, Rhadu, Mlebe,<br />
              Nomsobodwana,<br />
              Sopitsho Ngqolomsila,<br />
              Yemyem.<br />
              NgamaQithi amahle neenzipho zawo.
            </p>
          </div>
        </div>

        <div className="section-rule" style={{ marginBottom: '24px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(158,140,122,0.4)' }}>
            © {year} AmaQithi. San (AbaThwa) First People of the Eastern Cape.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(158,140,122,0.3)' }}>
            Lady Frere · Cacadu · White Kei River
          </p>
        </div>
      </div>
    </footer>
  );
}
