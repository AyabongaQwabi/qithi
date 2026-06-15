import Link from 'next/link';

const tracks = [
  {
    label: 'Track 1',
    title: 'AmaQithi Descendants',
    body: 'You carry a surname or descend from a family documented in the AmaQithi genealogy. You know your village, your lineage, your connection.',
    href: '/apply',
  },
  {
    label: 'Track 2',
    title: 'Spouses & Extended Families',
    body: 'Married into an AmaQithi family or closely connected by blood, adoption, or long community relationship. Sponsored by a verified member.',
    href: '/apply',
  },
  {
    label: 'Track 3',
    title: 'Researchers & Allies',
    body: 'Historians, academics, or community workers seeking verified access to AmaQithi records and genealogy. Purpose-limited access only.',
    href: '/apply',
  },
];

export default function ApplyCTABlock() {
  return (
    <section
      className="cave-section cave-bg"
      style={{ background: '#1A0F0A', padding: '96px 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
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
          Membership
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 600,
            color: '#E8A857',
            lineHeight: 1.05,
            marginBottom: '16px',
            maxWidth: '700px',
          }}
        >
          This portal is not open to the public.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '1rem',
            color: '#D4A96A',
            lineHeight: 1.7,
            maxWidth: '580px',
            marginBottom: '56px',
          }}
        >
          Access is by verified application only. Three membership tracks.
          All applications are reviewed by the AmaQithi council.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(196, 98, 45, 0.3)',
            marginBottom: '48px',
          }}
        >
          {tracks.map((t) => (
            <div
              key={t.label}
              style={{
                background: '#1A0F0A',
                padding: '36px 32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  marginBottom: '12px',
                }}
              >
                {t.label}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#9E8C7A',
                  lineHeight: 1.65,
                }}
              >
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/apply"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A0F0A',
            background: '#E8A857',
            padding: '14px 32px',
            textDecoration: 'none',
            boxShadow: '0 0 16px rgba(196, 98, 45, 0.4)',
          }}
        >
          Begin Your Application
        </Link>
      </div>
    </section>
  );
}
