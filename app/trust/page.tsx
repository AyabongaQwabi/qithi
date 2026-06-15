import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The AmaQithi Trust — AmaQithi',
  description:
    'A formal trust pooling resources across all AmaQithi families — funding bursaries, seeding businesses, covering community infrastructure. Every contributing family holds a stake.',
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

const pillars = [
  {
    label: 'Bursaries',
    body: 'Education funding for AmaQithi members from Grade 6 through postgraduate. First-generation university students are the priority. Applications open to verified members and their children.',
  },
  {
    label: 'Business Seeding',
    body: 'Micro-grants and interest-free loans for AmaQithi-owned businesses. Priority given to businesses that employ or supply other AmaQithi families.',
  },
  {
    label: 'Community Infrastructure',
    body: 'Co-funding for water, housing, road access, and connectivity projects in AmaQithi villages — starting with the Rhodana and Lady Frere areas.',
  },
  {
    label: 'Emergency Relief',
    body: 'Fast-disbursement fund for verified members facing crisis: medical, fire, flood, death in family. Administered by the council within 72 hours.',
  },
];

const faqs = [
  {
    q: 'Who governs the Trust?',
    a: 'An elected council drawn from the Contributing Member tier. Elections are held annually at the AmaQithi gathering. Every Contributing Member has a vote.',
  },
  {
    q: 'How do contributions work?',
    a: 'Contributing Members commit a monthly amount — any amount. Contributions are pooled, not tracked individually. There is no minimum, but the council publishes collective totals quarterly.',
  },
  {
    q: 'Can I apply for a bursary if I am just a Community Member?',
    a: 'Yes. Community Members can apply. Contributing Members receive priority processing and a higher funding ceiling.',
  },
  {
    q: 'What is the legal structure?',
    a: 'The Trust is being registered as a formal Deed of Trust under South African law with a minimum of three registered trustees. Formation is in progress.',
  },
  {
    q: 'Can the Trust fund projects in the Free State or other provinces?',
    a: 'Yes. AmaQithi families are in five regions across two provinces. The Trust is a national clan structure, not a local committee.',
  },
  {
    q: 'How do I become a trustee?',
    a: 'Trustees are elected from Contributing Members by Contributing Members. Nominations open 30 days before each annual gathering.',
  },
];

export default function TrustPage() {
  return (
    <>
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          eyebrow="The AmaQithi Trust"
          headline="The financial backbone of the clan."
          subheading="Not a donation. Not charity. A pooled resource owned by every contributing AmaQithi family — governed by an elected council, disbursed according to clan priorities."
          intro="Status: Forming. The Trust deed is being prepared. Contributing Member registrations are open now."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Initiatives', href: '/initiatives' }, { label: 'The Trust' }]} />
        </div>

        {/* What the Trust does */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>What It Funds</p>
            <h2 style={h2}>Four pillars. All for AmaQithi.</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1px',
                background: 'rgba(196, 98, 45, 0.25)',
              }}
            >
              {pillars.map((p) => (
                <div key={p.label} style={{ background: '#2C1810', padding: '32px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '10px',
                    }}
                  >
                    {p.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: '#9E8C7A',
                      lineHeight: 1.65,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Governance */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Governance</p>
            <h2 style={h2}>How it works.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={bodyText}>
                  The Trust is governed by an elected council drawn exclusively from Contributing Members.
                  Every Contributing Member — regardless of the size of their contribution — holds one vote
                  in annual elections.
                </p>
                <p style={bodyText}>
                  The council meets quarterly. Decisions on major disbursements require a majority vote.
                  Emergency disbursements (medical, bereavement, fire, flood) are handled by a smaller
                  executive committee within 72 hours.
                </p>
                <p style={{ ...bodyText, color: '#9E8C7A' }}>
                  All financial records are published to verified members. The Trust does not operate
                  opaquely. Every rand that comes in and goes out is accounted for and shared.
                </p>
              </div>
              <div>
                <p style={eyebrow}>Formation Status</p>
                {[
                  { step: 'Draft Trust Deed', status: 'In progress' },
                  { step: 'Trustee nominations', status: 'Open' },
                  { step: 'Legal registration', status: 'Pending deed finalisation' },
                  { step: 'First contribution round', status: 'On registration' },
                  { step: 'First bursary disbursement', status: 'Q4 2026 (target)' },
                ].map(({ step, status }) => (
                  <div
                    key={step}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(196, 98, 45, 0.1)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.85rem',
                        color: '#D4A96A',
                      }}
                    >
                      {step}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.75rem',
                        color: '#9E8C7A',
                        fontStyle: 'italic',
                        textAlign: 'right',
                      }}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* FAQ */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Questions</p>
            <h2 style={h2}>FAQ</h2>
            <div style={{ maxWidth: '720px' }}>
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  style={{
                    borderBottom: '1px solid rgba(196, 98, 45, 0.15)',
                    padding: '24px 0',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '8px',
                    }}
                  >
                    {q}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: '#9E8C7A',
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          headline="Become a Contributing Member."
          body="Verified AmaQithi members can register as Contributing Members now. The Trust opens for contributions on formal registration."
          primaryLabel="Apply for Membership"
          primaryHref="/apply"
          secondaryLabel="All Initiatives"
          secondaryHref="/initiatives"
        />
      </main>
      <Footer />
    </>
  );
}
