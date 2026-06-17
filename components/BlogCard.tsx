'use client';

import Link from 'next/link';

type Props = {
  href: string;
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  excerpt: string;
  delayClass: string;
  variant?: 'default' | 'compact';
  author?: { name: string; url: string };
};

export default function BlogCard({ href, category, categoryColor, date, title, excerpt, delayClass, variant = 'default', author }: Props) {
  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className={`reveal card-lift ${delayClass}`}
        style={{
          display: 'block',
          background: '#1A0F0A',
          padding: '28px',
          textDecoration: 'none',
          borderTop: `2px solid ${categoryColor}`,
          transition: 'background 0.25s ease, transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, opacity 0.65s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#221209')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#1A0F0A')}
      >
        <span style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: categoryColor,
          display: 'block',
          marginBottom: '10px',
        }}>
          {category}
        </span>
        <h3 style={{
          fontFamily: 'var(--font-display), Cormorant Garamond, serif',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#E8A857',
          lineHeight: 1.2,
          marginBottom: '10px',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.84rem',
          color: '#9E8C7A',
          lineHeight: 1.65,
        }}>
          {excerpt.slice(0, 100)}…
        </p>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`reveal card-lift ${delayClass}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'start',
        gap: '24px',
        background: '#2C1810',
        padding: '32px 36px',
        textDecoration: 'none',
        borderLeft: `3px solid ${categoryColor}`,
        transition: 'background 0.25s ease, transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, opacity 0.65s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#3a1f10')}
      onMouseLeave={(e) => (e.currentTarget.style.background = '#2C1810')}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: categoryColor,
          }}>
            {category}
          </span>
          <span style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.68rem',
            color: '#6B5A4E',
          }}>
            {date}
          </span>
          {author && (
            <>
              <span style={{ color: 'rgba(196,98,45,0.3)', fontSize: '0.6rem' }}>·</span>
              <a
                href={author.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.68rem',
                  color: '#9E8C7A',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(158,140,122,0.3)',
                }}
              >
                {author.name}
              </a>
            </>
          )}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display), Cormorant Garamond, serif',
          fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
          fontWeight: 600,
          color: '#E8A857',
          lineHeight: 1.15,
          marginBottom: '12px',
        }}>
          {title}
        </h2>
        <p style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.92rem',
          color: '#9E8C7A',
          lineHeight: 1.7,
          maxWidth: '640px',
        }}>
          {excerpt}
        </p>
      </div>
      <span style={{
        fontFamily: 'var(--font-body), Inter, sans-serif',
        fontSize: '1.2rem',
        color: '#C4622D',
        alignSelf: 'center',
        flexShrink: 0,
      }}>
        →
      </span>
    </Link>
  );
}
