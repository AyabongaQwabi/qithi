import Link from 'next/link';

const surnames = [
  'Qwabi', 'Tshabe', 'Manimani', 'Skampula', 'Mgengwana',
  'Mbaba', 'Ngubo', 'Shumana', 'Khethelo', 'Mhlungulwa',
  'Ngqela', 'Plata',
];

export default function FamiliesTeaser() {
  return (
    <section
      className="cave-section cave-bg"
      style={{ background: '#2C1810', padding: '88px 0', position: 'relative' }}
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
          Families
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
          The AmaQithi are not one village.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '1rem',
            color: '#D4A96A',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '36px',
          }}
        >
          Five regions. Twenty villages. Dozens of surnames. Different branches, same blood —
          from Lady Frere and Cacadu to Ngcobo, Cofimvaba, and the Free State.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {surnames.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 500,
                color: '#C4622D',
                background: 'rgba(196, 98, 45, 0.07)',
                border: '1px solid rgba(196, 98, 45, 0.4)',
                padding: '5px 14px',
                letterSpacing: '0.04em',
              }}
            >
              {s}
            </span>
          ))}
          <span
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.82rem',
              color: '#9E8C7A',
              padding: '5px 14px',
              fontStyle: 'italic',
            }}
          >
            and many more…
          </span>
        </div>

        <Link
          href="/families"
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
          See all families and villages →
        </Link>
      </div>
    </section>
  );
}
