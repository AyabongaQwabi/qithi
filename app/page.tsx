import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, websiteSchema, homeFaqSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi — AbaThembu, AbaThwa Heritage | White Kei River, Eastern Cape',
  description:
    'AmaQithi: a Thembu clan born of an ancient San-Bantu matrix. San (AbaThwa) First People of the White Kei River basin and Thembu royal counsellors at Rhodana since 1841. Documented history, families across South Africa, oral history, and DNA research to preserve the dual San-Thembu heritage of the AmaQithi.',
  keywords: [
    'AmaQithi', 'Qithi clan', 'AmaQithi history', 'AmaQithi families', 'AmaQithi clan history',
    'Mqithi', 'Qwabi', 'San people Lady Frere', 'AbaThwa Eastern Cape',
    'White Kei River San', 'Cacadu mountains San history', 'Qithi village Lady Frere',
    'AmaQithi support', 'AmaQithi trust', 'San First People Eastern Cape',
    'San Thembu history', 'Rhodana history', 'Queen Nonesi Rhodana', 'Stormberg san people',
    'AbaThembu history', 'Thembu San matrix', 'Ingqithi ritual', 'Tambookie',
    'Rhadu', 'Mnono', 'AmaLebe', 'Amaqithi clan history', 'Amaqithi clan families',
    'Amaqithi clan villages', 'Amaqithi clan heritage', 'Amaqithi clan identity',
    'beNgqithi', 'AmaQithi DNA', 'AmaQithi genealogy',
  ],
  openGraph: {
    title: 'AmaQithi — AbaThembu, AbaThwa — ubabona nge beNgqithi',
    description:
      'The authoritative source on AmaQithi clan history. A Thembu clan born of the ancient San-Bantu matrix — San First People of Lady Frere and the Cacadu mountains, royal counsellors at Rhodana since 1841.',
    url: BASE,
    siteName: 'AmaQithi',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: `${BASE}/logo.png`,
        width: 1024,
        height: 1024,
        alt: 'AmaQithi clan seal — AbaThembu, AbaThwa, White Kei River',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmaQithi — AbaThembu · AbaThwa · Eastern Cape',
    description: 'The authoritative source on AmaQithi clan history, families, and dual San-Thembu heritage.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: BASE },
};

const wayfinding = [
  {
    href: '/who-we-are',
    label: 'Who We Are',
    teaser: 'The origin story — Lesotho, the White Kei River, and what the San-Thembu alliance left behind.',
    accent: '#C4622D',
  },
  {
    href: '/families',
    label: 'Our Families',
    teaser: 'Surnames, villages, and dispersal routes from Lady Frere to the rest of South Africa.',
    accent: '#E8A857',
  },
  {
    href: '/amaqithi',
    label: 'The Clan',
    teaser: 'AmaQithi in depth — identity, izibongo, and the ingqithi mark that connects it all.',
    accent: '#D4A96A',
  },
  {
    href: '/thesis',
    label: 'The Research',
    teaser: 'Original research, oral history, DNA findings, and 47 primary sources.',
    accent: '#9E8C7A',
  },
];

export default function Home() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, websiteSchema, homeFaqSchema]} />
      <Nav />
      <main>
        <Hero />

        {/* Wayfinding */}
        <section
          aria-label="Site navigation"
          style={{
            background: '#1A0F0A',
            padding: '80px 0',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 24px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '40px',
              }}
            >
              Where to go
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2px',
              }}
            >
              {wayfinding.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    background: '#2C1810',
                    padding: '32px 28px',
                    textDecoration: 'none',
                    borderTop: `2px solid ${item.accent}`,
                    transition: 'background 0.2s',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: '#9E8C7A',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.teaser}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Pull-quote */}
        <section
          aria-label="Historical record"
          style={{
            background: '#2C1810',
            padding: '80px 24px',
          }}
        >
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '2px',
                background: '#C4622D',
                marginBottom: '32px',
              }}
            />
            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#E8A857',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                &ldquo;At about this time a number of Thembu groups living on the White Kei, including
                &lsquo;Jumba&rsquo;, were on comparatively friendly terms with San families and
                clans living in that area.&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: '#9E8C7A',
                  fontStyle: 'normal',
                  display: 'block',
                }}
              >
                — Silayi, recorded by Sir Walter Stanford (Macquarrie 1962:31)
              </cite>
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
