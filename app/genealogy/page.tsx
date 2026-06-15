import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import GenomySignupForm from '@/components/GenomySignupForm';
import SchemaOrg, { orgSchema, genealogySchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi Genealogy — San DNA Mapping Project | AmaQithi Genomy',
  description:
    'AmaQithi Genomy: the first scientific map of the AmaQithi San (AbaThwa) genetic profile. Voluntary DNA testing tracking L0 and L1 haplogroups — the oldest human mitochondrial lineages on Earth. Join the project to prove San ancestry through science.',
  keywords: [
    'AmaQithi genealogy', 'AmaQithi DNA project', 'AmaQithi Genomy',
    'San DNA South Africa', 'AbaThwa genetic heritage', 'Khoisan DNA testing',
    'L0 haplogroup San', 'L1 haplogroup southern Africa', 'San ancestry DNA',
    'AmaQithi ancestry', 'Qwabi genealogy', 'San genetic heritage Eastern Cape',
    'AmaQithi family tree', 'First People DNA South Africa',
  ],
  openGraph: {
    title: 'AmaQithi Genealogy — San DNA Mapping Project',
    description:
      'The first scientific map of AmaQithi San genetic heritage. Voluntary DNA testing tracking L0 and L1 haplogroups. The oral history says we are San. The DNA project proves it.',
    url: `${BASE}/genealogy`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi Genomy' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/genealogy` },
};

const section: React.CSSProperties = {
  position: 'relative',
  padding: '72px 0',
};
const inner: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};
const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#C4622D',
  marginBottom: '16px',
};
const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
  fontWeight: 600,
  color: '#E8A857',
  lineHeight: 1.1,
  marginBottom: '20px',
};
const bodyText: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '1rem',
  color: '#D4A96A',
  lineHeight: 1.75,
  marginBottom: '16px',
};

const keyFacts = [
  {
    label: 'What we are mapping',
    text: 'The AmaQithi San genetic signature across all known family lines — Lady Frere, Ngcobo, Cofimvaba, Free State, and beyond.',
  },
  {
    label: 'The linguistic anchor',
    text: 'Q (palatal click) in Qwabi, Qithi, Mqithi — a Khoisan phonetic root surviving in Xhosa orthography. Linguistic fossil. Scientific confirmation is the next step.',
  },
  {
    label: 'Haplogroups tracked',
    text: 'L0 and L1 — the deepest San maternal lineages. These are the oldest human mitochondrial lineages on Earth, concentrated in southern African San populations.',
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
];

export default function GenealogyPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, genealogySchema]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          eyebrow="AmaQithi Genomy"
          headline="Mapping the AmaQithi bloodline through science."
          subheading="The first scientific map of San genetic heritage within the AmaQithi clan. Voluntary DNA testing. L0 and L1 haplogroups. The most important long-term project on this platform."
          intro="If you carry Qithi blood but cannot trace your lineage in writing, the DNA project is for you. Come forward. Submit what you know. Let the science do the rest."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Genealogy Project' }]} />
        </div>

        {/* What and why */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>The Project</p>
            <h2 style={h2}>Why we are doing this.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={bodyText}>
                  The AmaQithi are San (AbaThwa) descendants. The genetic evidence of that origin
                  exists in our DNA. This project is how we find it, document it, and preserve it
                  before it is further diluted or forgotten.
                </p>
                <p style={bodyText}>
                  The names Qwabi, Qithi, and Mqithi carry the palatal click consonant Q — a
                  Khoisan linguistic marker not native to Bantu languages. The Q in our names is
                  where our San origin lives in language. The DNA project is the scientific parallel.
                </p>
                <p style={{ ...bodyText, color: '#9E8C7A' }}>
                  What participants do: sign up via the form below, receive a test kit (logistics
                  being finalised), submit a sample, and become part of the first AmaQithi genetic
                  database.
                </p>
              </div>
              <div>
                <div
                  style={{
                    background: 'rgba(196, 98, 45, 0.06)',
                    border: '1px solid rgba(196, 98, 45, 0.35)',
                    padding: '28px',
                    marginBottom: '24px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.15rem',
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
                      color: '#9E8C7A',
                      lineHeight: 1.65,
                    }}
                  >
                    In the future, only people with confirmed AmaQithi DNA will be eligible for
                    clan support, trust resources, and full platform access. This is not in effect
                    yet. We are building the database first. The DNA tier will be introduced once the
                    genetic map has sufficient depth. This is serious, irreversible, important work.
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: '#C4622D',
                    lineHeight: 1.65,
                    borderLeft: '2px solid rgba(196,98,45,0.4)',
                    paddingLeft: '16px',
                  }}
                >
                  If you believe you carry Qithi blood but cannot trace your lineage in writing,
                  the DNA project is for you too. Come forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Key facts */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>How It Works</p>
            <h2 style={h2}>What you need to know.</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '32px',
              }}
            >
              {keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    borderLeft: '2px solid rgba(196,98,45,0.4)',
                    paddingLeft: '20px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#C4622D',
                      marginBottom: '8px',
                    }}
                  >
                    {fact.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: '#9E8C7A',
                      lineHeight: 1.65,
                    }}
                  >
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Oral history archive */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Oral History Archive</p>
            <h2 style={h2}>Submit what you know.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={bodyText}>
                  The AmaQithi Genomy project is not only genetic. The oral record — izibongo,
                  family accounts, village histories, photographs, and stories — is equally
                  irreplaceable. Elders hold knowledge that does not exist anywhere in writing.
                </p>
                <p style={{ ...bodyText, color: '#9E8C7A' }}>
                  Submit what you know: names, villages, lineage chains, accounts of events,
                  descriptions of elders you remember. Every contribution is preserved and
                  attributed to the contributor.
                </p>
                <p style={{ ...bodyText, color: '#9E8C7A' }}>
                  Priority is given to accounts that: reference specific named individuals,
                  name specific villages or landmarks, document conflicts or alliances,
                  or extend the documented lineage back before Qwabi Joka (1842).
                </p>
              </div>
              <div>
                <OralHistoryForm />
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* DNA sign-up form */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Sign Up</p>
            <h2 style={h2}>Join the AmaQithi Genomy project.</h2>
            <div
              style={{
                maxWidth: '760px',
                border: '1px solid rgba(196, 98, 45, 0.4)',
                padding: '48px 40px',
                background: 'rgba(245, 230, 200, 0.01)',
              }}
            >
              <GenomySignupForm />
            </div>
          </div>
        </section>

        <PageCTA
          headline="Apply for clan membership."
          body="Genomy participants who are not yet verified members are encouraged to apply for membership in parallel."
          primaryLabel="Apply for Membership"
          primaryHref="/apply"
          secondaryLabel="Learn About Families"
          secondaryHref="/families"
        />
      </main>
      <Footer />
    </>
  );
}

function OralHistoryForm() {
  return (
    <div
      style={{
        border: '1px solid rgba(196, 98, 45, 0.35)',
        padding: '32px',
        background: 'rgba(26, 15, 10, 0.5)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#C4622D',
          marginBottom: '16px',
        }}
      >
        Submit Your Account
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.82rem',
          color: '#9E8C7A',
          lineHeight: 1.65,
          marginBottom: '20px',
        }}
      >
        Use the oral history form in the <a href="/apply" style={{ color: '#C4622D', textDecoration: 'none' }}>Apply</a> section
        to submit your account. Select &ldquo;Oral History Archive&rdquo; as your submission type.
        No membership is required to contribute oral history.
      </p>
      <a
        href="/apply"
        style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#C4622D',
          textDecoration: 'none',
          borderBottom: '1px solid #C4622D',
          paddingBottom: '2px',
        }}
      >
        Submit oral history →
      </a>
    </div>
  );
}
