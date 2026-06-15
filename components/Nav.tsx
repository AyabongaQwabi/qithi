'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Families', href: '/families' },
  { label: 'Initiatives', href: '/initiatives' },
  { label: 'Trust', href: '/trust' },
  { label: 'Genealogy', href: '/genealogy' },
  { label: 'Apply', href: '/apply' },
  { label: 'Admin', href: '/admin' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(26, 15, 10, 0.97)' : 'rgba(26, 15, 10, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(196, 98, 45, 0.35)'
          : '1px solid rgba(196, 98, 45, 0.15)',
        boxShadow: scrolled ? '0 1px 20px rgba(196, 98, 45, 0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '1.6rem',
            fontWeight: 600,
            color: '#E8A857',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          AmaQithi
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            gap: '28px',
            listStyle: 'none',
            alignItems: 'center',
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: isActive(l.href) ? '#E8A857' : '#9E8C7A',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  borderBottom: isActive(l.href) ? '1px solid #C4622D' : '1px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#E8A857',
          }}
          className="show-mobile"
        >
          <span style={{ fontSize: '1.4rem' }}>{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: '#2C1810',
            borderTop: '1px solid rgba(196, 98, 45, 0.25)',
            padding: '16px 24px 24px',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: isActive(l.href) ? '#E8A857' : '#9E8C7A',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(196, 98, 45, 0.1)',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
