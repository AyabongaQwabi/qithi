import Link from 'next/link';
import Image from 'next/image';

const surnames = [
  'Qwabi', 'Tshabe', 'Manimani', 'Skampula', 'Mgengwana',
  'Mbaba', 'Ngubo', 'Shumana', 'Khethelo', 'Mhlungulwa',
  'Ngqela', 'Plata',
];

const regions = [
  { name: 'Lady Frere', detail: 'Mkapusi · KwaTshatshu (emaQithini) · Hala 1 · Hala 2' },
  { name: 'Ngcobo', detail: 'Line of Ngcongolo · post-1879' },
  { name: 'Cofimvaba', detail: 'Post-1879 dispersal line' },
  { name: 'Queenstown & Ezibeleni', detail: 'Sons of Qwabi Joka · post-1915' },
  { name: 'Steynsburg & Ndlovukazi', detail: 'Qwabi line · scattered families' },
];

export default function FamiliesTeaser() {
  return (
    <section
      className="cave-section cave-bg"
      style={{ background: '#1A0F0A', padding: '88px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Cave art background — full section, very subtle */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/bg_rectangular.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(26, 15, 10, 0.88)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Logo + headline row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
          <Image
            src="/logo_transparent.png"
            alt="AmaQithi"
            width={64}
            height={64}
            style={{ borderRadius: '50%', border: '1px solid rgba(196, 98, 45, 0.3)', flexShrink: 0 }}
          />
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '6px',
              }}
            >
              Our Families
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
              One clan. Different towns. Same story going back to the White Kei.
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.8,
                marginBottom: '12px',
              }}
            >
              After the fall of Mount Moorosi in 1879, the AmaQithi scattered deliberately — fracturing into separate family lines for safety against colonial tracking. Three main routes carried the clan south: the line of Ngcongolo went to eNgcobo, other families fled to Cofimvaba, and the line of Qhwabi (Qwabi) settled at Mkapusi in Lady Frere, founding Mqithi Village — also remembered in oral geography as Mawhumawhu.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.8,
                marginBottom: '28px',
              }}
            >
              Work, apartheid-era displacement, and migration scattered families further — to Queenstown, East London, the Free State, and the mines. The surnames below are the ones we have traced so far. The list is not complete. If you know one not listed, tell us.
            </p>

            {/* Surname chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
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
                  padding: '5px 4px',
                  fontStyle: 'italic',
                }}
              >
                and more…
              </span>
            </div>

            <Link
              href="/families"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
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

          {/* Right — region list */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '20px',
              }}
            >
              Where We Are
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {regions.map((r, i) => (
                <div
                  key={r.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(196, 98, 45, 0.12)',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.65rem',
                        color: '#C4622D',
                        fontWeight: 600,
                        minWidth: '18px',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: '#E8A857',
                      }}
                    >
                      {r.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.78rem',
                      color: '#9E8C7A',
                      textAlign: 'right',
                    }}
                  >
                    {r.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
