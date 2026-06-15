import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px 0',
      }}
    >
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          listStyle: 'none',
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.72rem',
          color: '#9E8C7A',
          alignItems: 'center',
        }}
      >
        <li>
          <Link
            href="/"
            style={{
              color: '#9E8C7A',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'rgba(158,140,122,0.4)' }}>›</span>
            {item.href ? (
              <Link
                href={item.href}
                style={{ color: '#9E8C7A', textDecoration: 'none' }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#C4622D' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
