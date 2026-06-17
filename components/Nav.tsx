'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const WHATSAPP_URL = 'https://wa.me/27603116777';

const groups = [
  {
    label: 'Heritage',
    items: [
      { label: 'Who We Are', href: '/who-we-are', desc: 'The origin story' },
      { label: 'AmaQithi Clan', href: '/amaqithi', desc: 'Clan in depth' },
      { label: 'AbaThembu', href: '/thembu', desc: 'Thembu lineage' },
      { label: 'San Heritage', href: '/san', desc: 'AbaThwa roots' },
    ],
  },
  {
    label: 'Families',
    items: [
      { label: 'Our Families', href: '/families', desc: 'Villages & surnames' },
      { label: 'Genealogy', href: '/genealogy', desc: 'DNA project' },
      { label: 'Royal Lineage', href: '/lineage', desc: 'Full lineage charts' },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'Working Thesis', href: '/thesis', desc: 'Research notes' },
      { label: 'Sources', href: '/sources', desc: '47 primary sources' },
      { label: 'Village Anatomy', href: '/insights/thembu-village-anatomy', desc: 'Place-name study' },
      { label: 'Blog', href: '/blog', desc: 'Dispatches & updates' },
    ],
  },
  {
    label: 'Community',
    items: [
      { label: 'Apply', href: '/apply', desc: 'Join the register' },
      { label: 'Initiatives', href: '/initiatives', desc: 'Active projects' },
    ],
  },
];

function DropdownGroup({ group, isActive }: { group: typeof groups[0]; isActive: (href: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const anyActive = group.items.some((i) => isActive(i.href));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <li
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: 'relative', padding: '0 10px' }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.74rem',
          fontWeight: 500,
          color: anyActive ? '#E8A857' : '#9E8C7A',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '4px 0',
          borderBottom: anyActive ? '1px solid #C4622D' : '1px solid transparent',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#E8A857')}
        onMouseLeave={(e) => (e.currentTarget.style.color = anyActive ? '#E8A857' : '#9E8C7A')}
      >
        {group.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            marginTop: '1px',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown panel — top flush with li bottom, paddingTop bridges the gap inside the hover zone */}
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          paddingTop: '10px',
          pointerEvents: open ? 'auto' : 'none',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.18s ease',
          zIndex: 200,
        }}
      >
        <div
          style={{
            background: 'rgba(20, 11, 7, 0.98)',
            border: '1px solid rgba(196,98,45,0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            minWidth: '210px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            transform: open ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'transform 0.18s ease',
          }}
        >
        {/* Arrow */}
        <div style={{
          position: 'absolute',
          top: '5px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '9px',
          height: '9px',
          background: 'rgba(20,11,7,0.98)',
          border: '1px solid rgba(196,98,45,0.3)',
          borderBottom: 'none',
          borderRight: 'none',
        }} />
        {group.items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: 'block',
              padding: '12px 20px',
              borderBottom: i < group.items.length - 1 ? '1px solid rgba(196,98,45,0.1)' : 'none',
              textDecoration: 'none',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(196,98,45,0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: isActive(item.href) ? '#E8A857' : '#D4A96A',
              letterSpacing: '0.04em',
              marginBottom: '2px',
            }}>
              {item.label}
            </span>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.68rem',
              color: '#6B5A4E',
              letterSpacing: '0.02em',
            }}>
              {item.desc}
            </span>
          </Link>
        ))}
        </div>
      </div>
    </li>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
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
          boxShadow: scrolled ? '0 1px 24px rgba(196, 98, 45, 0.08)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
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
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <Image
              src="/logo_transparent.png"
              alt="AmaQithi"
              width={38}
              height={38}
              style={{ borderRadius: '50%' }}
              priority
            />
            <span
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '1.55rem',
                fontWeight: 600,
                color: '#E8A857',
                letterSpacing: '0.02em',
              }}
            >
              AmaQithi
            </span>
          </Link>

          {/* Desktop grouped nav */}
          <ul
            className="hidden-mobile"
            style={{ display: 'flex', gap: '0', listStyle: 'none', alignItems: 'center' }}
          >
            {groups.map((group) => (
              <DropdownGroup key={group.label} group={group} isActive={isActive} />
            ))}
            <li style={{ marginLeft: '12px' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#5BB85A',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(91,184,90,0.4)',
                  padding: '6px 14px',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(91,184,90,0.08)';
                  e.currentTarget.style.borderColor = '#5BB85A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(91,184,90,0.4)';
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(196,98,45,0.3)',
              cursor: 'pointer',
              padding: '8px 10px',
              color: '#E8A857',
              transition: 'border-color 0.2s',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer — full screen overlay */}
      <div
        aria-hidden={!mobileOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(10,6,3,0.6)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
        onClick={() => setMobileOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 88vw)',
          zIndex: 101,
          background: '#0F0705',
          borderLeft: '1px solid rgba(196,98,45,0.25)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
          paddingTop: '72px',
          paddingBottom: '32px',
        }}
      >
        {/* Close button inside drawer */}
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: '1px solid rgba(196,98,45,0.3)',
            color: '#E8A857',
            cursor: 'pointer',
            padding: '8px 10px',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {groups.map((group) => (
          <div key={group.label} style={{ borderBottom: '1px solid rgba(196,98,45,0.1)' }}>
            <button
              onClick={() => setExpandedGroup(expandedGroup === group.label ? null : group.label)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C4622D',
              }}
            >
              {group.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.2s', transform: expandedGroup === group.label ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div style={{
              overflow: 'hidden',
              maxHeight: expandedGroup === group.label ? '400px' : '0',
              transition: 'max-height 0.3s ease',
            }}>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 24px 12px 32px',
                    textDecoration: 'none',
                    borderTop: '1px solid rgba(196,98,45,0.07)',
                    background: isActive(item.href) ? 'rgba(196,98,45,0.06)' : 'transparent',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: isActive(item.href) ? '#E8A857' : '#D4A96A',
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.68rem',
                    color: '#6B5A4E',
                  }}>
                    {item.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div style={{ padding: '24px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#5BB85A',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '1px solid rgba(91,184,90,0.4)',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

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
    </>
  );
}
