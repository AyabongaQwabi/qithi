import type { Metadata } from 'next';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import WayfindingCards from '@/components/WayfindingCards';
import SchemaOrg, { orgSchema, websiteSchema, homeFaqSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';
const ORAL_HISTORY_DIR = path.join(process.cwd(), 'public', 'oral-history');

type OralHistoryAudio = {
  fileName: string;
  url: string;
  title: string;
};

function toAudioTitle(fileName: string) {
  return fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

async function getOralHistoryAudioFiles(): Promise<OralHistoryAudio[]> {
  try {
    const files = await readdir(ORAL_HISTORY_DIR, { withFileTypes: true });
    return files
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => /\.(mp3|wav|m4a|ogg)$/i.test(fileName))
      .sort((a, b) => a.localeCompare(b))
      .map((fileName) => ({
        fileName,
        url: `/oral-history/${fileName}`,
        title: toAudioTitle(fileName),
      }));
  } catch {
    return [];
  }
}

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
    teaser: 'AmaQithi in depth — identity, izibongo, and ingqithi — the mark that connects it all.',
    accent: '#D4A96A',
  },
  {
    href: '/thesis',
    label: 'The Research',
    teaser: 'Original research, oral history, DNA findings, and 47 primary sources.',
    accent: '#9E8C7A',
  },
  {
    href: '/iziduko-izibongo-clan-names',
    label: 'Iziduko Authority',
    teaser: 'One authority page for AmaQithi iziduko, izibongo, and clan names in full caps.',
    accent: '#F5E6C8',
  },
];

export default async function Home() {
  const oralHistoryAudio = await getOralHistoryAudioFiles();
  const featuredConclusionAudio =
    oralHistoryAudio.find((item) => /conclusion/i.test(item.fileName)) ?? oralHistoryAudio[0];

  return (
    <>
      <SchemaOrg schemas={[orgSchema, websiteSchema, homeFaqSchema]} />
      <Nav />
      <main>
        <Hero />

        {/* Ingqithi mark visual anchor */}
        <ScrollReveal>
          <section
            aria-label="Ingqithi mark reference"
            style={{ background: '#2C1810', padding: '84px 0', borderTop: '1px solid rgba(196,98,45,0.2)' }}
          >
            <div
              style={{
                maxWidth: '1120px',
                margin: '0 auto',
                padding: '0 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '34px',
                alignItems: 'center',
              }}
            >
              <div className="reveal">
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#C4622D',
                    marginBottom: '12px',
                  }}
                >
                  The Mark of Ingqithi
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)',
                    color: '#E8A857',
                    lineHeight: 1.15,
                    marginBottom: '14px',
                  }}
                >
                  A visual memory carried on the hand.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.98rem',
                    color: '#D4A96A',
                    lineHeight: 1.75,
                    marginBottom: '12px',
                  }}
                >
                  Ingqithi is the little-finger joint-cut custom carried in San and Thembu memory. On this site, it is one of the clearest living markers of the San-Thembu matrix behind the AmaQithi name.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.82rem',
                    color: '#9E8C7A',
                    lineHeight: 1.7,
                  }}
                >
                  See deeper context on <a href="/amaqithi" style={{ color: '#C4622D', textDecoration: 'none', borderBottom: '1px solid rgba(196,98,45,0.5)' }}>The Clan</a> and <a href="/thembu" style={{ color: '#C4622D', textDecoration: 'none', borderBottom: '1px solid rgba(196,98,45,0.5)' }}>AbaThembu</a>.
                </p>
              </div>
              <figure
                className="reveal delay-1"
                style={{
                  margin: 0,
                  border: '1px solid rgba(196,98,45,0.32)',
                  background: '#1A0F0A',
                  padding: '10px',
                }}
              >
                <img
                  src="/ingqithi.jpg"
                  alt="Ingqithi mark reference image used in AmaQithi heritage context"
                  style={{
                    width: '100%',
                    display: 'block',
                    maxHeight: '520px',
                    objectFit: 'cover',
                    filter: 'brightness(0.93) contrast(1.06)',
                  }}
                  loading="lazy"
                />
                <figcaption
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.72rem',
                    color: '#9E8C7A',
                    lineHeight: 1.6,
                    marginTop: '10px',
                    fontStyle: 'italic',
                  }}
                >
                  Ingqithi visual reference: used where the mark is discussed in lineage evidence.
                </figcaption>
              </figure>
            </div>
          </section>
        </ScrollReveal>

        {/* Wayfinding */}
        <ScrollReveal>
          <section
            aria-label="Site navigation"
            style={{ background: '#1A0F0A', padding: '80px 0' }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
              <p
                className="reveal"
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

              <WayfindingCards cards={wayfinding} />
            </div>
          </section>
        </ScrollReveal>

        {/* Oral history audio */}
        <ScrollReveal>
          <section
            aria-label="Oral history audio archive"
            style={{ background: '#1A0F0A', padding: '80px 0', borderTop: '1px solid rgba(196,98,45,0.25)' }}
          >
            <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 24px' }}>
              <p
                className="reveal"
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  marginBottom: '14px',
                }}
              >
                Oral History Audio
              </p>

              <h2
                className="reveal delay-1"
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                  color: '#E8A857',
                  lineHeight: 1.2,
                  marginBottom: '18px',
                }}
              >
                Featured conclusion recording
              </h2>

              {featuredConclusionAudio ? (
                <div
                  className="reveal delay-2"
                  style={{
                    border: '1px solid rgba(196,98,45,0.35)',
                    background: '#2C1810',
                    padding: '20px',
                    marginBottom: '26px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.95rem',
                      color: '#D4A96A',
                      marginBottom: '14px',
                    }}
                  >
                    {featuredConclusionAudio.title}
                  </p>
                  <audio controls preload="none" style={{ width: '100%' }}>
                    <source src={featuredConclusionAudio.url} />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ) : (
                <p
                  className="reveal delay-2"
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.95rem',
                    color: '#9E8C7A',
                    lineHeight: 1.7,
                    marginBottom: '26px',
                  }}
                >
                  No audio files found in `public/oral-history` yet.
                </p>
              )}

              <h3
                className="reveal delay-3"
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  color: '#E8A857',
                  marginBottom: '12px',
                }}
              >
                Audio files in archive
              </h3>
              <ul className="reveal delay-3" style={{ margin: 0, paddingLeft: '20px' }}>
                {oralHistoryAudio.map((audio) => (
                  <li
                    key={audio.fileName}
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.92rem',
                      color: '#D4A96A',
                      lineHeight: 1.9,
                    }}
                  >
                    <a href={audio.url} style={{ color: '#C4622D', textDecoration: 'none', borderBottom: '1px solid rgba(196,98,45,0.4)' }}>
                      {audio.fileName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ScrollReveal>

        {/* Pull-quote */}
        <ScrollReveal>
          <section
            aria-label="Historical record"
            style={{ background: '#2C1810', padding: '80px 24px' }}
          >
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div
                className="reveal"
                style={{ width: '32px', height: '2px', background: '#C4622D', marginBottom: '32px' }}
              />
              <blockquote className="reveal delay-1" style={{ margin: 0 }}>
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
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
