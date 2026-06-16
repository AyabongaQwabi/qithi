import Link from 'next/link';

export default function IdentityTeaser() {
  return (
    <section
      className="cave-section cave-bg"
      style={{ background: '#2C1810', padding: '88px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Cave art background — right half only */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          backgroundImage: 'url(/bg-square.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          background: 'linear-gradient(to right, #2C1810 0%, transparent 30%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ marginBottom: '20px' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4622D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>

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
              Who We Are
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
              San people who became part of the Thembu nation — but were never Thembu.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.85,
                marginBottom: '14px',
              }}
            >
              The AmaQithi are San (AbaThwa) people whose roots can be traced back to the banks of the White Kei River basin in Lady Frere, the Cacadu mountains, and the surrounding territory. Their leader, Mqithi, was granted land directly adjacent to the Thembu royal residence at Rhodana. That placement was not coincidence. It marked the rank of a senior counselor and ritual specialist.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.85,
                marginBottom: '14px',
              }}
            >
              The AmaQithi served the Thembu as rainmakers during droughts, scouts who knew the mountain passes, and elite marksmen during the War of Mlanjeni (1850–1853). They were not servants. They were partners — bringing the knowledge of people who had lived on that land for millennia.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.85,
                marginBottom: '32px',
              }}
            >
              The Q in Qithi is a palatal click — a sound indigenous to Khoisan languages, not Bantu ones. Xhosa absorbed clicks over centuries of contact with San people. That click in our name is a linguistic record of who we are. Researchers describe &ldquo;Mqithi&rdquo; as a linguistic fossil: a standard Xhosa prefix grafted onto an older San root.
            </p>
            <Link
              href="/who-we-are"
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
              Read the full history of the AmaQithi →
            </Link>
          </div>

          {/* Stanford quote */}
          <blockquote
            style={{
              borderLeft: '3px solid #C4622D',
              paddingLeft: '28px',
              margin: 0,
            }}
          >
            <div style={{ marginBottom: '16px', opacity: 0.5 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#C4622D">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontStyle: 'italic',
                color: '#E8A857',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              "At about this time a number of Thembu groups living on the White Kei, including
              &lsquo;Jumba&rsquo;, were on comparatively friendly terms with San families and clans
              living in that area."
            </p>
            <cite
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.75rem',
                color: '#9E8C7A',
                fontStyle: 'normal',
                display: 'block',
                marginBottom: '32px',
              }}
            >
              — Silayi, subject of Chief Jumba, recorded by Sir Walter Stanford (Macquarrie 1962:31)
            </cite>

            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.9rem',
              color: '#9E8C7A',
              lineHeight: 1.75,
              fontStyle: 'italic',
            }}>
              This is a colonial-era witness account placing San families along the White Kei River at the exact time and place the AmaQithi oral history describes. Qwabi Joka — the ancestor from whom the Qwabi surname descends — was born on that same river in 1842.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
