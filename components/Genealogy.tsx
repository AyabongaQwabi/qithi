'use client';

export default function Genealogy() {
  return (
    <section
      id="genealogy"
      className="cave-section cave-bg"
      style={{
        background: '#1A0F0A',
        padding: '100px 0',
        position: 'relative',
      }}
      aria-labelledby="genealogy-heading"
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
          Genealogy Project
        </p>

        <h2
          id="genealogy-heading"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--bone)',
            marginBottom: '20px',
            lineHeight: 1.1,
            maxWidth: '700px',
          }}
        >
          AmaQithi Genomy — Mapping the San lineage through science
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            marginBottom: '72px',
          }}
        >
          {/* Left: explanation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '1rem',
              color: 'var(--smoke)',
              lineHeight: 1.8,
            }}
          >
            <p>
              The AmaQithi are San (AbaThwa) descendants. The genetic evidence of that origin
              exists in our DNA. This project is how we find it, document it, and preserve it
              before it is further diluted or forgotten.
            </p>
            <p>
              The names Qwabi, Qithi, and Mqithi all carry the palatal click consonant Q — a
              Khoisan linguistic marker. Click consonants are not native to Bantu languages. They
              entered Nguni languages through centuries of deep contact with San and Khoe peoples.
              The Q in our names is where our San origin lives in language. The DNA project is the
              scientific parallel.
            </p>
            <p>
              What participants do: sign up via the form below, receive a test kit (logistics
              being finalised), submit a sample, and become part of the first AmaQithi genetic
              database.
            </p>
            <p>
              What happens with the data: stored securely, used exclusively to map the AmaQithi
              lineage, never sold or shared with external parties for any purpose.
            </p>

            <div
              style={{
                background: 'rgba(196, 98, 45, 0.06)',
                border: '1px solid rgba(196, 98, 45, 0.3)',
                padding: '24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  marginBottom: '10px',
                }}
              >
                Future implication
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: 'var(--smoke)',
                  lineHeight: 1.7,
                }}
              >
                In the future, only people with confirmed AmaQithi DNA will be eligible to apply
                for clan support, trust resources, and full platform access. This is not in effect
                yet. We are building the database first. The DNA tier will be introduced once the
                genetic map has sufficient depth. This is serious, irreversible, important work.
              </p>
            </div>

            <p>
              If you believe you carry Qithi blood but cannot trace your lineage in writing,
              the DNA project is for you too. Come forward. Submit what you know. Let the science
              do the rest.
            </p>
          </div>

          {/* Right: details + oral history stub */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Key facts */}
            {[
              {
                label: 'What we are mapping',
                text: 'The AmaQithi San genetic signature across all known family lines — Lady Frere, Ngcobo, Cofimvaba, Free State, and beyond.',
              },
              {
                label: 'The linguistic anchor',
                text: 'Q (palatal click) in Qwabi, Qithi, Mqithi — a Khoisan phonetic root surviving in Xhosa orthography. Linguistic fossil. Scientific confirmation is the next step.',
              },
              {
                label: 'Your participation',
                text: 'Voluntary. Confidential. You receive a test kit, return a sample, and are notified of results as the database is built.',
              },
              {
                label: 'Data sovereignty',
                text: 'Your data belongs to the AmaQithi community. It will not be shared, sold, or used for any purpose outside this project.',
              },
              {
                label: 'Why now',
                text: 'Every generation of assimilation dilutes the San genetic signal. The people alive today are the best chance we have.',
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderLeft: '2px solid var(--ochre)',
                  paddingLeft: '20px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ochre)',
                    marginBottom: '6px',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.88rem',
                    color: 'var(--smoke)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}

            {/* Oral History Archive stub */}
            <div className="section-rule" style={{ margin: '8px 0' }} />
            <div
              style={{
                border: '1px solid rgba(196, 98, 45, 0.4)',
                padding: '24px',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  marginBottom: '10px',
                }}
              >
                Oral History Archive
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.82rem',
                  color: 'var(--smoke)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                Do you have photographs, stories, or documents about AmaQithi history? Submit
                them here. Every contribution builds the record. The Wall of Remembrance grows
                from this.
              </p>
              <a
                href="#apply"
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
                }}
              >
                Submit oral history →
              </a>
            </div>
          </div>
        </div>

        {/* DNA sign-up form CTA */}
        <div className="section-rule" style={{ marginBottom: '40px' }} />
        <p
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            color: 'var(--sand)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: 1.5,
          }}
        >
          If you carry Qithi blood, we need to find it. Sign up below.
        </p>
        <div style={{ textAlign: 'center' }}>
          <a
            href="#apply"
            style={{
              display: 'inline-block',
              background: '#C4622D',
              color: '#F5E6C8',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 40px',
              border: '1px solid #C4622D',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B5571F';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(196, 98, 45, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C4622D';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Sign Up — AmaQithi Genomy
          </a>
        </div>
      </div>
    </section>
  );
}
