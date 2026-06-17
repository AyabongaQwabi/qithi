'use client';

type Card = {
  href: string;
  label: string;
  teaser: string;
  accent: string;
};

export default function WayfindingCards({ cards }: { cards: Card[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '2px',
      }}
    >
      {cards.map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          className={`reveal card-lift delay-${i + 1}`}
          style={{
            display: 'block',
            background: '#2C1810',
            padding: '32px 28px',
            textDecoration: 'none',
            borderTop: `2px solid ${item.accent}`,
            transition: 'background 0.25s ease, transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, opacity 0.65s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#3a1f10')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#2C1810')}
        >
          <p
            style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: '1.35rem',
              fontWeight: 600,
              color: '#E8A857',
              marginBottom: '10px',
              lineHeight: 1.2,
            }}
          >
            {item.label}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.88rem',
              color: '#9E8C7A',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {item.teaser}
          </p>
        </a>
      ))}
    </div>
  );
}
