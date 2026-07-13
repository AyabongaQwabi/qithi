import type { Metadata } from 'next';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import Nav from '@/components/Nav';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';
const ORAL_HISTORY_DIR = path.join(process.cwd(), 'public', 'oral-history');

const SAN_LINKED_SET = [
  'UMQITHI',
  'NDINGA',
  'RHADU',
  'MNONO',
  'NOMSOBONDWANA',
  'UMLEBE',
  'U NKOMO AYIZALI IZALA NGOKU MISELWA',
];

const NTANDE_LINKED_SET = [
  'SOPITSHO',
  'YEM YEM',
  'NGQOLOMSILA',
  'VELA BAMBHENTSELE',
  'AMANTANDE',
];

const FULL_SET = [
  ...SAN_LINKED_SET,
  ...NTANDE_LINKED_SET,
  'NGAMAQITHI AMAHLE NEENZIPHO ZAWO',
];

type AudioItem = {
  fileName: string;
  url: string;
};

async function getAudioFiles(): Promise<AudioItem[]> {
  try {
    const files = await readdir(ORAL_HISTORY_DIR, { withFileTypes: true });
    return files
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => /\.(mp3|wav|m4a|ogg)$/i.test(name))
      .sort((a, b) => a.localeCompare(b))
      .map((fileName) => ({ fileName, url: `/oral-history/${fileName}` }));
  } catch {
    return [];
  }
}

export const metadata: Metadata = {
  title: 'AmaQithi Iziduko & Izibongo Clan Names — Umqithi, Ndinga, Rhadu',
  description:
    'The authority page for AmaQithi iziduko and izibongo clan names: Umqithi, Ndinga, Rhadu, Mnono, Nomsobondwana, Umlebe, U Nkomo ayizali izala ngoku miselwa, Sopitsho, Yem Yem, Ngqolomsila, Vela Bambhentsele, Amantande.',
  keywords: [
    'AmaQithi iziduko',
    'AmaQithi izibongo',
    'AmaQithi clan names',
    'Umqithi',
    'Ndinga',
    'Rhadu',
    'Mnono',
    'Nomsobondwana',
    'Umlebe',
    'Sopitsho',
    'Yem Yem',
    'Ngqolomsila',
    'Vela Bambhentsele',
    'Amantande',
  ],
  alternates: { canonical: `${BASE}/iziduko-izibongo-clan-names` },
  openGraph: {
    title: 'AmaQithi Iziduko & Izibongo Clan Names',
    description:
      'A single source page for AmaQithi clan names and praise names, with San-linked and Ntande-linked grouped reading.',
    url: `${BASE}/iziduko-izibongo-clan-names`,
    type: 'article',
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
  },
};

const section: React.CSSProperties = { padding: '72px 0' };
const inner: React.CSSProperties = { maxWidth: '1080px', margin: '0 auto', padding: '0 24px' };
const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.68rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#C4622D',
  marginBottom: '14px',
};
const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
  fontWeight: 600,
  color: '#E8A857',
  lineHeight: 1.15,
  marginBottom: '18px',
};
const body: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '1rem',
  color: '#D4A96A',
  lineHeight: 1.75,
  marginBottom: '14px',
  maxWidth: '760px',
};

const bigCaps: React.CSSProperties = {
  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
  fontSize: 'clamp(1.6rem, 3.1vw, 2.6rem)',
  fontWeight: 700,
  color: '#F5E6C8',
  lineHeight: 1.25,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  marginBottom: '8px',
};

export default async function IzidukoAuthorityPage() {
  const audioFiles = await getAudioFiles();
  const reasonAudio = audioFiles.find((item) =>
    /reason-why-we-use-thembu-clan-names/i.test(item.fileName),
  );

  return (
    <>
      <SchemaOrg
        schemas={[
          orgSchema,
          breadcrumbSchema([{ name: 'Iziduko & Izibongo Clan Names', url: '/iziduko-izibongo-clan-names' }]),
        ]}
      />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <section style={{ ...section, background: '#2C1810', paddingTop: '110px' }}>
          <div style={inner}>
            <p style={eyebrow}>Authority Page</p>
            <h1
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#E8A857',
                lineHeight: 1.08,
                marginBottom: '16px',
              }}
            >
              AmaQithi Iziduko and Izibongo Clan Names
            </h1>
            <p style={body}>
              This is the single source page for AmaQithi clan names and praises. It keeps the names in one place, in one reading format, and in the same wording across the site.
            </p>
            <p style={{ ...body, color: '#9E8C7A' }}>
              The list below combines names indigenous to the Qithi line and names linked to Thembu mixing through Ntande-era memory.
            </p>
          </div>
        </section>

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Iziduko & Izibongo Clan Names' }]} />
        </div>

        <section style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Full Set</p>
            <h2 style={h2}>All names in one sequence</h2>
            <div style={{ display: 'grid', gap: '6px', maxWidth: '920px' }}>
              {FULL_SET.map((name) => (
                <p key={name} style={bigCaps}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        <section style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Grouped Reading</p>
            <h2 style={h2}>Qithi-linked set and Ntande-linked set</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
              <div style={{ background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.24)', padding: '22px' }}>
                <p style={{ ...eyebrow, marginBottom: '10px' }}>Likely Qithi-line cluster</p>
                {SAN_LINKED_SET.map((name) => (
                  <p key={name} style={bigCaps}>
                    {name}
                  </p>
                ))}
              </div>
              <div style={{ background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.24)', padding: '22px' }}>
                <p style={{ ...eyebrow, marginBottom: '10px' }}>Ntande-linked mix cluster</p>
                {NTANDE_LINKED_SET.map((name) => (
                  <p key={name} style={bigCaps}>
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        <section style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Oral History Audio</p>
            <h2 style={h2}>Recording on why Thembu clan names are used</h2>
            {reasonAudio ? (
              <div style={{ maxWidth: '860px', background: '#2C1810', border: '1px solid rgba(196,98,45,0.24)', padding: '18px' }}>
                <p style={{ ...body, marginBottom: '10px' }}>{reasonAudio.fileName}</p>
                <audio controls preload="none" style={{ width: '100%' }}>
                  <source src={reasonAudio.url} />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : (
              <p style={{ ...body, color: '#9E8C7A' }}>
                The file `reason-why-we-use-thembu-clan-names-by-krauseb-runtu.mp3` was not found yet in `public/oral-history`.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
