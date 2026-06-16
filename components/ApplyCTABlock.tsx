import Link from 'next/link';

const tracks = [
  {
    label: 'Descendants',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Your surname or your family\'s comes from these villages',
    body: 'Qwabi, Tshabe, Manimani, Skampula, Mgengwana, Ngubo, Shumana, Khethelo, Ngqela — and more. If the name in your family tree traces back to Lady Frere, Ngcobo, Cofimvaba, or the Free State branches, you are in the right place.',
    href: '/apply',
  },
  {
    label: 'Extended family',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Married into the clan or raised among these families',
    body: 'You grew up in one of these villages, or your spouse is AmaQithi. You know the funerals, the celebrations, the way things work. You are part of this in every practical sense — a current member can speak for you when you apply.',
    href: '/apply',
  },
  {
    label: 'Researchers',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Researching San history, the Eastern Cape, or Khoisan heritage',
    body: 'Academic researchers, journalists, oral historians, and documentary makers have found their way here through the historical record. If your work touches AmaQithi, Chief Madolo, Rhodana, or San assimilation in the Eastern Cape, we are open to collaboration that serves the community.',
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
          Join the Clan Portal
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 600,
            color: '#E8A857',
            lineHeight: 1.05,
            marginBottom: '16px',
            maxWidth: '680px',
          }}
        >
          If this history sounds familiar, there is probably a reason.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '1rem',
            color: '#D4A96A',
            lineHeight: 1.8,
            maxWidth: '580px',
            marginBottom: '56px',
          }}
        >
          AmaQithi families spread across provinces over generations. Surnames changed. Villages were left behind. Some people grew up knowing the full story; others only heard fragments — a grandmother&apos;s maiden name, a village nobody visits anymore. You do not need to have all the pieces. Apply with what you know, and we will help you find the rest.
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
              <div style={{ marginBottom: '16px' }}>{t.icon}</div>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  marginBottom: '10px',
                }}
              >
                {t.label}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.35rem',
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
                  fontSize: '0.88rem',
                  color: '#9E8C7A',
                  lineHeight: 1.7,
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#1A0F0A',
            background: '#E8A857',
            padding: '16px 36px',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(196, 98, 45, 0.35)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A0F0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          Apply Now
        </Link>
      </div>
    </section>
  );
}
