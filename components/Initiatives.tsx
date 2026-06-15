'use client';

const initiatives = [
  {
    id: 'trust',
    status: 'Forming',
    statusColor: '#E8A857',
    title: 'The AmaQithi Trust',
    body: 'A formal trust to pool resources across all AmaQithi families. It funds bursaries, seeds businesses, and covers community infrastructure. Every contributing AmaQithi family holds a stake. The trust is the foundation on which everything else is built.',
    cta: 'Join the founding committee',
    href: '#apply',
  },
  {
    id: 'network',
    status: 'Active',
    statusColor: '#C4622D',
    title: 'Business Collaboration Network',
    body: 'AmaQithi entrepreneurs and professionals connecting to build internally first. You need a partner, a supplier, a co-founder — you look inside the family before going outside. Ukwakha: building together. A skills directory where every registered member lists their profession.',
    cta: 'Register your skills',
    href: '#apply',
  },
  {
    id: 'education',
    status: 'Active',
    statusColor: '#C4622D',
    title: 'Education Support',
    body: 'From Grade 6 through university. Study support, mentorship, and connections to AmaQithi professionals in your field. First-generation university students from AmaQithi families are specifically called out. Applications require proof of enrolment and Qithi descent.',
    cta: 'Apply for support',
    href: '#apply',
  },
  {
    id: 'genomy',
    status: 'Recruiting',
    statusColor: '#9E8C7A',
    title: 'AmaQithi Genomy — Genealogy Project',
    body: 'We are mapping the AmaQithi lineage through DNA testing and oral history collection. This is the most important long-term project on this platform. Results will build the first scientific map of the AmaQithi San genetic profile. In the future, confirmed AmaQithi DNA will be required for full platform access.',
    cta: 'Sign up for DNA testing',
    href: '#genealogy',
  },
  {
    id: 'land',
    status: 'Planning',
    statusColor: '#9E8C7A',
    title: 'Land & Heritage',
    body: 'The AmaQithi were among the First People of the Cacadu basin. We are documenting land claims, historical sites, and cultural preservation. Qithi Village, Agnes, Rhodana, the cave paintings of the Xonxa mountains. These must be documented before they are lost.',
    cta: 'Learn more',
    href: '#apply',
  },
  {
    id: 'emergency',
    status: 'Active',
    statusColor: '#C4622D',
    title: 'Emergency Assistance',
    body: 'AmaQithi in crisis — medical, financial, disaster — can apply for help from the community pool. Applications reviewed by the clan committee. Proof of Qithi descent required. We take care of our own.',
    cta: 'Apply for assistance',
    href: '#apply',
  },
];

export default function Initiatives() {
  return (
    <section
      id="initiatives"
      className="cave-section cave-bg"
      style={{
        background: '#2C1810',
        padding: '100px 0',
        position: 'relative',
      }}
      aria-labelledby="initiatives-heading"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ochre)',
            marginBottom: '16px',
          }}
        >
          Initiatives
        </p>

        <h2
          id="initiatives-heading"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--bone)',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}
        >
          Building something worthy of the inheritance
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '1rem',
            color: 'var(--smoke)',
            maxWidth: '600px',
            lineHeight: 1.7,
            marginBottom: '64px',
          }}
        >
          Six active and forming initiatives — all for AmaQithi families only.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1px',
            background: 'rgba(196, 98, 45, 0.3)',
            marginBottom: '80px',
          }}
        >
          {initiatives.map((ini) => (
            <div
              key={ini.id}
              style={{
                background: 'rgba(44, 24, 16, 0.97)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Status badge */}
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: ini.statusColor,
                  border: `1px solid ${ini.statusColor}`,
                  padding: '3px 10px',
                  width: 'fit-content',
                  marginBottom: '20px',
                }}
              >
                {ini.status}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  marginBottom: '14px',
                  lineHeight: 1.2,
                }}
              >
                {ini.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: 'var(--smoke)',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: '28px',
                }}
              >
                {ini.body}
              </p>

              <a
                href={ini.href}
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ochre)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--ochre)',
                  paddingBottom: '2px',
                  width: 'fit-content',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E8A857';
                  e.currentTarget.style.borderColor = '#E8A857';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--ochre)';
                  e.currentTarget.style.borderColor = 'var(--ochre)';
                }}
              >
                {ini.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div className="section-rule" style={{ marginBottom: '56px' }} />
        <blockquote style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: '#E8A857',
              lineHeight: 1.5,
            }}
          >
            "Our ancestors were rainmakers, marksmen, herbalists, and counsellors to royalty.
            The least we can do is build something worthy of that inheritance."
          </p>
        </blockquote>

        {/* Annual Gathering teaser */}
        <div className="section-rule" style={{ margin: '56px 0 48px' }} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {/* IsiQithi Gathering */}
          <div
            style={{
              border: '1px solid rgba(196, 98, 45, 0.25)',
              padding: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ochre)',
                marginBottom: '10px',
                fontWeight: 500,
              }}
            >
              Annual Gathering
            </p>
            <h4
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--bone)',
                marginBottom: '12px',
              }}
            >
              IsiQithi
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.85rem',
                color: 'var(--smoke)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              An annual clan gathering, rotating between Lady Frere, Ngcobo, and wherever the
              community decides. DNA testing kits available on the day. Business pitches happen.
              The trust committee reports. Elders speak. Children learn who they are. Not yet
              dated.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.75rem',
                color: 'var(--ochre)',
                fontWeight: 500,
                letterSpacing: '0.06em',
              }}
            >
              Watch this space. Register via the Apply section to be notified.
            </p>
          </div>

          {/* Membership tiers */}
          <div
            style={{
              border: '1px solid rgba(196, 98, 45, 0.25)',
              padding: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ochre)',
                marginBottom: '10px',
                fontWeight: 500,
              }}
            >
              Coming: Three-Tier Membership
            </p>
            <h4
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--bone)',
                marginBottom: '20px',
              }}
            >
              Levels of Access
            </h4>
            {[
              { tier: 'Registered', desc: 'Applied and accepted. Access to the directory and trust updates.' },
              { tier: 'Verified', desc: 'Two members have vouched. Access to support programs and voting on clan decisions.' },
              { tier: 'DNA Verified', desc: 'Future tier. Confirmed genetic match to the AmaQithi profile via the Genomy project.' },
            ].map((t) => (
              <div
                key={t.tier}
                style={{
                  borderLeft: '2px solid rgba(196, 98, 45, 0.3)',
                  paddingLeft: '16px',
                  marginBottom: '14px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#E8A857',
                    marginBottom: '4px',
                  }}
                >
                  {t.tier}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.8rem',
                    color: 'var(--smoke)',
                    lineHeight: 1.5,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
