import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi Initiatives — Education, Trust, Genealogy and Skills Support for AmaQithi Families',
  description:
    'Six AmaQithi community projects: the AmaQithi Trust (forming), Education Support (active), AmaQithi Genomy DNA project (recruiting), Skills Development, Cultural Preservation, and the IsiQithi Language Programme. Built by and for AmaQithi families.',
  keywords: [
    'AmaQithi support', 'AmaQithi community initiatives', 'AmaQithi trust',
    'AmaQithi education support', 'San community support Eastern Cape',
    'AmaQithi bursaries', 'AmaQithi skills development', 'AmaQithi cultural preservation',
    'AmaQithi membership', 'clan support Eastern Cape', 'IsiQithi language',
  ],
  openGraph: {
    title: 'AmaQithi Initiatives — Community Support Exclusively for AmaQithi',
    description:
      'Six initiatives for AmaQithi families: Trust, Education, Genomy DNA project, Skills Directory, Cultural Preservation, and IsiQithi Language Programme.',
    url: `${BASE}/initiatives`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi initiatives' }],
  },
  alternates: { canonical: `${BASE}/initiatives` },
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

const initiatives = [
  {
    status: 'Forming',
    title: 'The AmaQithi Trust',
    href: '/trust',
    body: 'A formal trust to pool resources across all AmaQithi families. Funding bursaries, seeding businesses, covering community infrastructure. Every contributing family holds a stake in governance.',
    detail: 'The Trust is the financial and institutional backbone of everything else on this list. It is what turns individual contributions into collective capability.',
  },
  {
    status: 'Active',
    title: 'Education Support Programme',
    href: '/initiatives',
    body: 'From Grade 6 through university. Mentorship, study support, and direct connections to AmaQithi professionals and alumni. First-generation university students are specifically called out — they are the priority.',
    detail: 'Any verified AmaQithi member or their child can request support. Applications reviewed quarterly.',
  },
  {
    status: 'Recruiting',
    title: 'AmaQithi Genomy',
    href: '/genealogy',
    body: 'Voluntary DNA testing to map the AmaQithi San genetic profile. The first scientific map of San heritage within the clan. L0 and L1 haplogroups tracked — the deep San maternal lineages.',
    detail: 'Participants retain data ownership. Results shared with the AmaQithi Trust. Open to all verified members.',
  },
  {
    status: 'Planning',
    title: 'Skills Development & Employment',
    href: '/directory',
    body: 'A structured programme connecting AmaQithi members in trades, construction, IT, finance, and other fields — to each other, to contracts, and to mentorship from within the clan.',
    detail: 'The Skills Directory (launching soon) is the first phase. The programme builds on that data to create active pipeline and placement.',
  },
  {
    status: 'Planning',
    title: 'Cultural Preservation',
    href: '/initiatives',
    body: 'Audio, video, and written archiving of izibongo, oral history, village accounts, and elders\' testimony before it is lost. The Oral History Archive form is live now for any member to contribute.',
    detail: 'Every family account submitted is preserved. Priority given to accounts from elders, accounts of named individuals, and accounts that reference specific villages or events.',
  },
  {
    status: 'Planning',
    title: 'IsiQithi Language',
    href: '/initiatives',
    body: 'Documenting and teaching the click consonants and Khoisan linguistic elements embedded in AmaQithi names, place names, and oral tradition. A language programme that begins with the Q.',
    detail: 'The palatal click is not extinct in this clan. It is in every name on this platform. IsiQithi makes that explicit.',
  },
];

const tiers = [
  {
    level: 'Community Member',
    desc: 'Verified AmaQithi descendant or approved family member. Access to directory, initiatives, and family archive.',
    perks: ['Community directory access', 'Initiative participation', 'Family archive access', 'Voting rights on Trust matters'],
  },
  {
    level: 'Contributing Member',
    desc: 'Active contributor — financial, skills, or time. Additional governance weight and priority on bursary applications.',
    perks: ['All Community Member rights', 'Trust stake', 'Bursary application priority', 'Increased governance weight'],
  },
  {
    level: 'Trustee / Council',
    desc: 'Elected by the membership. Responsible for Trust governance, initiative oversight, and member disputes.',
    perks: ['All Contributing Member rights', 'Trust governance authority', 'Initiative leadership', 'Dispute resolution'],
  },
];

export default function InitiativesPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          bg
          eyebrow="AmaQithi — Initiatives"
          headline="Six things being built, right now, for this community."
          subheading="A trust to pool our money. Education support for our children. A DNA project. A skills directory. And two programmes to protect our language and culture before they disappear."
          intro="None of this was built by outsiders. It was built by AmaQithi, for AmaQithi. That is what makes it different."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Initiatives' }]} />
        </div>

        {/* Six cards */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1px',
                background: 'rgba(196, 98, 45, 0.25)',
              }}
            >
              {initiatives.map((ini) => (
                <div
                  key={ini.title}
                  style={{ background: '#1A0F0A', padding: '36px 32px' }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#C4622D',
                      border: '1px solid rgba(196, 98, 45, 0.45)',
                      padding: '3px 10px',
                      marginBottom: '16px',
                    }}
                  >
                    {ini.status}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {ini.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: '#D4A96A',
                      lineHeight: 1.65,
                      marginBottom: '12px',
                    }}
                  >
                    {ini.body}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: '#9E8C7A',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    {ini.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Three-tier membership */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Membership Tiers</p>
            <h2 style={h2}>How participation works.</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1px',
                background: 'rgba(196, 98, 45, 0.25)',
              }}
            >
              {tiers.map((tier, i) => (
                <div key={tier.level} style={{ background: '#2C1810', padding: '32px' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#C4622D',
                      marginBottom: '8px',
                    }}
                  >
                    Tier {i + 1}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '10px',
                    }}
                  >
                    {tier.level}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.85rem',
                      color: '#9E8C7A',
                      lineHeight: 1.65,
                      marginBottom: '16px',
                    }}
                  >
                    {tier.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tier.perks.map((p) => (
                      <li
                        key={p}
                        style={{
                          fontFamily: 'var(--font-body), Inter, sans-serif',
                          fontSize: '0.8rem',
                          color: '#D4A96A',
                          lineHeight: 1.8,
                          paddingLeft: '12px',
                          position: 'relative',
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0, color: '#C4622D' }}>›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Skills directory teaser */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Coming Soon</p>
            <h2 style={h2}>The AmaQithi Skills Directory.</h2>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.75,
                maxWidth: '620px',
                marginBottom: '32px',
              }}
            >
              A searchable, verified directory of AmaQithi members across all trades and professions —
              so that when an AmaQithi family needs a plumber, lawyer, architect, or developer,
              they find one of their own first.
            </p>
            <a
              href="/directory"
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C4622D',
                textDecoration: 'none',
                borderBottom: '1px solid #C4622D',
                paddingBottom: '2px',
              }}
            >
              Register your interest →
            </a>
          </div>
        </section>

        <PageCTA
          headline="Ready to be part of this?"
          body="Apply to join and get access to the Trust, the Skills Directory, education support, and everything being built here."
          primaryLabel="Apply Now"
          primaryHref="/apply"
          secondaryLabel="About the Trust"
          secondaryHref="/trust"
        />
      </main>
      <Footer />
    </>
  );
}
