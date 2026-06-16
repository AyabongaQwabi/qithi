import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import DirectoryInterestForm from '@/components/DirectoryInterestForm';
import SchemaOrg, { orgSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi Skills Directory — Find AmaQithi Professionals First',
  description:
    'The AmaQithi Skills Directory: a verified, searchable listing of AmaQithi professionals across all trades and fields — plumbers, lawyers, nurses, developers, builders, teachers. Before hiring outside, look inside. Register your skills now.',
  keywords: [
    'AmaQithi skills directory', 'AmaQithi professionals', 'AmaQithi plumbers',
    'AmaQithi lawyers Eastern Cape', 'San professionals South Africa',
    'AmaQithi tradespeople', 'AmaQithi employment', 'AmaQithi skills development',
  ],
  openGraph: {
    title: 'AmaQithi Skills Directory — AmaQithi Professionals',
    description: 'Verified listing of AmaQithi members across all trades and professions. Before hiring outside, look inside.',
    url: `${BASE}/directory`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi directory' }],
  },
  alternates: { canonical: `${BASE}/directory` },
};

export default function DirectoryPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          eyebrow="AmaQithi — Skills Directory"
          headline="Before hiring outside, look inside."
          subheading="The AmaQithi Skills Directory: a searchable, verified list of AmaQithi members across every trade and profession. Coming soon."
          intro="Register your skills now. When the directory launches, your profile is already in it."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Skills Directory' }]} />
        </div>

        <section
          className="cave-section cave-bg"
          style={{ background: '#2C1810', padding: '72px 0', position: 'relative' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '64px',
              }}
            >
              <div>
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
                  What It Is
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                    fontWeight: 600,
                    color: '#E8A857',
                    lineHeight: 1.1,
                    marginBottom: '20px',
                  }}
                >
                  Find an AmaQithi professional first.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '1rem',
                    color: '#D4A96A',
                    lineHeight: 1.75,
                    marginBottom: '16px',
                  }}
                >
                  The Skills Directory is a verified, searchable database of AmaQithi members across
                  every trade and profession — plumbers, lawyers, architects, developers, nurses,
                  teachers, builders, mechanics.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '1rem',
                    color: '#9E8C7A',
                    lineHeight: 1.75,
                    marginBottom: '16px',
                  }}
                >
                  Once the directory is live, verified members can search by skill, region, or name. Looking for a plumber, a lawyer, a builder? Check here first before you go outside the family.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '1rem',
                    color: '#9E8C7A',
                    lineHeight: 1.75,
                  }}
                >
                  The directory is the foundation of the skills development initiative. It becomes
                  an active pipeline — connecting AmaQithi professionals to contracts, mentorship,
                  and community projects sourced from within the clan.
                </p>

                <div style={{ margin: '32px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Trades & construction',
                    'Legal & financial',
                    'Healthcare & education',
                    'Technology & engineering',
                    'Agriculture & environment',
                    'Creative & media',
                  ].map((field) => (
                    <div
                      key={field}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.85rem',
                        color: '#D4A96A',
                      }}
                    >
                      <span style={{ color: '#C4622D', fontSize: '0.7rem' }}>›</span>
                      {field}
                    </div>
                  ))}
                </div>
              </div>

              <div>
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
                  Register Your Interest
                </p>
                <div
                  style={{
                    border: '1px solid rgba(196, 98, 45, 0.4)',
                    padding: '36px',
                    background: 'rgba(26, 15, 10, 0.5)',
                  }}
                >
                  <DirectoryInterestForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
