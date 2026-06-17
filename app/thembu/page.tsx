import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, thembuSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AbaThembu — The Royal Nation | AmaQithi Heritage',
  description:
    'The complete history of the abaThembu nation: the oldest Nguni royal lineage, tracing from Njanya (c. 1307) through Ntande, Nxego, Dlomo, Ngubengcuka and King Buyelekhaya. Their ancient fusion with the San people, the Ingqithi ritual, and the lineage of the AmaQithi within the Thembu Great House.',
  keywords: [
    'AbaThembu history', 'Thembu nation', 'Thembu royal lineage', 'Thembu kings',
    'Ngubengcuka', 'Mtirara', 'Dalindyebo', 'King Buyelekhaya', 'Ntande Thembu',
    'Thembu San fusion', 'Ingqithi ritual', 'Tambookie', 'Thembu Eastern Cape',
    'AbaThembu Great House', 'Thembu genealogy',
  ],
  openGraph: {
    title: 'AbaThembu — The Royal Nation',
    description:
      'The oldest Nguni royal lineage, tracing from Njanya (c. 1307) to the present. Their ancient fusion with the San people and the lineage of the AmaQithi within the Thembu Great House.',
    url: `${BASE}/thembu`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/thembu` },
};

const section: React.CSSProperties = { padding: '72px 0' };
const inner: React.CSSProperties = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
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
const body: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '1rem',
  color: '#D4A96A',
  lineHeight: 1.75,
  marginBottom: '16px',
  maxWidth: '680px',
};

const lineage = [
  { name: 'Njanya', date: 'c. 1307', note: 'Foundational ancestor shared by the Mpondo, Thembu, and Xhosa nations.', citation: 'PDF pp. 1 [5–7]' },
  { name: 'Malandela', date: '', note: 'First-born of Njanya. The Thembu are considered senior to the Xhosa because they descend from this senior line.', citation: 'PDF pp. 1 [8–9]' },
  { name: 'Bomoyi', date: 'c. 1517', note: 'His death triggered a succession crisis between sons Zima and Ntande.', citation: 'PDF pp. 1 [5, 9]' },
  { name: 'Ntande', date: '', note: 'The rightful heir of the Great House. His uncles fought to secure his throne from his older brother Zima.', citation: 'PDF pp. 1 [9]' },
  { name: 'Nxego', date: 'c. 1600', note: 'His grave at the Msana River marks the earliest traceable burial site in central Thembuland.', citation: 'PDF pp. 1 [10, 11]' },
  { name: 'Hlanga & Dlomo', date: 'c. 1650', note: 'Brothers who split the nation. The AmaDlomo became the ruling Great House; Hlanga\'s descendants became the AmaQiya.', citation: 'PDF pp. 1 [10, 12, 13]' },
  { name: 'Tato', date: 'c. 1700', note: 'His grave marks the continued expansion of the Thembu in central Thembuland.', citation: 'PDF pp. 1 [12, 14]' },
  { name: 'Zondwa', date: 'c. 1725', note: '', citation: 'PDF pp. 1 [12, 14]' },
  { name: 'Ndaba', date: 'c. 1756', note: '', citation: 'PDF pp. 1 [12, 14]' },
  { name: 'Ngubengcuka (Vusani)', date: 'd. 1833', note: 'Paramount Chief during the early 19th-century frontier conflicts. He raised the heir Mtirara.', citation: 'PDF pp. 1 [15, 16]' },
  { name: 'Mtirara', date: '', note: 'Son of Ngubengcuka, raised by the regent Queen Nonesi at Rhodana. His establishment of the Great Place at Rhodana in 1841 brought the Thembu into direct alliance with the AmaQithi San.', citation: 'PDF pp. 1 [16]' },
  { name: 'Ngangelizwe (Qeya)', date: '', note: 'Son of Mtirara, ruled during late 19th-century colonial expansion.', citation: 'PDF pp. 1 [16]' },
  { name: 'Dalindyebo', date: 'c. 1920', note: 'His reign marked the transition into the modern administrative era.', citation: 'PDF pp. 1 [17, 18]' },
  { name: 'Sabata Jonguhlanga Dalindyebo', date: '1954–1986', note: 'A popular monarch who opposed the apartheid-era Bantustan system. He was deposed and died in exile.', citation: 'PDF pp. 1 [18, 23, 24]' },
  { name: 'King Buyelekhaya Dalindyebo', date: '1992–Present', note: 'Proclaimed heir in 1987 and officially appointed in 1992, after a period under the houses of Bambilanga and Zondwa.', citation: 'PDF pp. 1 [25–27]' },
];

const sanFusionFacts = [
  {
    title: 'The "Tambookie" Matrix',
    body: 'The name "Tambookie" is a colonial version of the Khoisan term Tam\'bou\'ci — used to describe the mixed San-Thembu groups living along the Tsomo and Kei rivers. The Thembu were historically a creolised population formed by the fusion of immigrant Nguni groups and indigenous San communities.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [28, 30, 31]',
  },
  {
    title: 'Praise of the Tiny Man',
    body: 'One of the official traditional praises (iziduko) of the Thembu is "the tiny man" — a direct linguistic acknowledgment of their ancestral San integration, embedded permanently in oral culture.',
    citation: 'update1.md §2 (AmaQithi Research Archive, 2026)',
  },
  {
    title: 'The Ingqithi Ritual',
    body: 'The Thembu adopted the San custom of amputating the first joint of the little finger (ingqithi) as a tribal marker. This shared ritual is described in historical records as definitive proof of the "friendly amalgamation" between the two peoples. Other major Nguni groups do not practice this.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [32–34]; also 28/396, 388',
  },
  {
    title: 'Respect for San Precedence',
    body: 'Early Thembu chiefs gave San hunters precedence over themselves at large game kills, recognising the San as the original owners of the land — a protocol that encoded the equality of the alliance.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [32, 34, 35]',
  },
  {
    title: 'San Chiefs in Thembu Territory',
    body: 'Leaders like Madolo (Madoor) and Madakane managed territories at the White Kei confluence, interacting with Thembu leaders like Jumba to form multi-ethnic sanctuaries — including the Bushman School established in 1842.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [23, 28/399, 110, 390]',
  },
];

export default function ThembuPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, thembuSchema, breadcrumbSchema([{ name: 'AbaThembu', url: '/thembu' }])]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          bg
          eyebrow="Heritage — AbaThembu"
          headline="The Royal Nation of the Thembu."
          subheading="Senior to the Xhosa by lineage. Ancient partners of the San. The Great House whose descendants became AmaQithi."
          intro="The abaThembu are one of the oldest Nguni royal nations. Their lineage is traceable to the 14th century — predating other Nguni nations including the Zulu. Their history is inseparable from the San people, with whom they forged the ancient fusion that defines the AmaQithi."
          researchHref="/thesis"
          lineageHref="/lineage"
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'AbaThembu' }]} />
        </div>

        {/* The Ancient Lineage */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>The Royal Lineage · c. 1307 – Present</p>
            <h2 style={h2}>From Njanya to King Buyelekhaya.</h2>
            <p style={{ ...body, marginBottom: '40px' }}>
              Historical research identifies <strong style={{ color: '#E8A857' }}>Zwide</strong> as the point where ancestor-praises (unqulo) for Ntu-speaking nations often end. The Thembu lineage through the Great House is traceable from there across more than 700 years.
            </p>

            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'rgba(196, 98, 45, 0.3)' }} />
              {lineage.map((item, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: '32px', paddingLeft: '24px' }}>
                  <div style={{ position: 'absolute', left: '-4px', top: '6px', width: '8px', height: '8px', background: '#C4622D', transform: 'rotate(45deg)' }} />
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: '#E8A857' }}>
                      {item.name}
                    </span>
                    {item.date && (
                      <span style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#C4622D', letterSpacing: '0.08em' }}>
                        {item.date}
                      </span>
                    )}
                  </div>
                  {item.note && (
                    <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.65, marginBottom: '4px' }}>
                      {item.note}
                    </p>
                  )}
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', color: '#6B5A4E', fontStyle: 'italic' }}>
                    Source: {item.citation}
                  </p>
                </div>
              ))}
            </div>

            {/* Lineage image */}
            <div style={{ marginTop: '40px', border: '1px solid rgba(196,98,45,0.25)', overflow: 'hidden', maxWidth: '720px' }}>
              <img
                src="/thembuline.png"
                alt="Ama-Tembu royal genealogy chart from colonial records"
                style={{ width: '100%', display: 'block', filter: 'brightness(0.92) contrast(1.1)' }}
                loading="lazy"
              />
            </div>
            <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#9E8C7A', marginTop: '8px', lineHeight: 1.5, fontStyle: 'italic', maxWidth: '720px' }}>
              Ama-Tembu royal genealogy from colonial-era records. The full lineage traces from Njanya (c. 1307) through Ntande, Nxego, Dlomo, Ngubengcuka and Mtirara to the modern era.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* San-Thembu Fusion */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>The San-Thembu Matrix</p>
            <h2 style={h2}>How the Thembu became who they are.</h2>
            <p style={{ ...body, marginBottom: '40px' }}>
              The abaThembu are historically a <strong style={{ color: '#E8A857' }}>creolised population</strong> — formed by the fusion of immigrant Nguni groups and indigenous San communities. This is not contested: it is recorded in their praise names, their ritual practices, and the name by which outsiders knew them.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(196,98,45,0.2)' }}>
              {sanFusionFacts.map((fact) => (
                <div key={fact.title} style={{ background: '#1A0F0A', padding: '28px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#E8A857', marginBottom: '10px' }}>
                    {fact.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.7, marginBottom: '10px' }}>
                    {fact.body}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5 }}>
                    {fact.citation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Mfecane & Lesotho */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Migration · The Lesotho Homelands</p>
            <h2 style={h2}>The Thembu in Lesotho — a return, not a flight.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={body}>
                  Between 1600 and 1650, a line of the Thembu under Chief <strong style={{ color: '#E8A857' }}>Mnguti</strong> left the Lesotho territories, moving toward Herschel in the Eastern Cape and establishing a path toward eNgcobo. This ancient movement established the Thembu&apos;s deep historical roots in the mountain territories long before the colonial era.
                </p>
                <p style={body}>
                  When the <em>Mfecane</em> wars (c. 1816–1835) erupted due to Shaka&apos;s Zulu expansions, Thembu communities who fled northward were <strong style={{ color: '#E8A857' }}>returning to ancient homelands</strong>, not entering foreign territory. They sought refuge in the high valleys of <strong style={{ color: '#E8A857' }}>Quthing</strong> — a name combining an ancient San click root (Q-) and a Sotho locative suffix (-ing, &ldquo;place of&rdquo;).
                </p>
              </div>
              <div>
                <p style={body}>
                  In Quthing, the returning Thembu integrated with the local Baphuthi and remaining mountain San networks under the protection of King Moorosi. This highland sanctuary sheltered the alliance until the catastrophic fall of <strong style={{ color: '#E8A857' }}>Mount Moorosi on 20 November 1879</strong>.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  After the fall, the AmaQithi and their Thembu compatriots dispersed across eNgcobo, Cofimvaba, and the secluded valley of <strong style={{ color: '#D4A96A' }}>Mkapusi</strong> in Lady Frere — where they founded Mqithi Village (also known as Mawhumawhu).
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5 }}>
                  Source: The Archive of AmaQithi (update1.md), §§ 3–4 (AmaQithi Research Archive, 2026)
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Insights link — village anatomy */}
        <section style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>AmaQithi Insights — AbaThembu Geography</p>
            <h2 style={h2}>Why the same village names appear everywhere.</h2>
            <p style={{ ...body, maxWidth: '640px', marginBottom: '32px' }}>
              Komkhulu. Elalini. Emthonjeni. Ngaphezulu. We mapped 278+ GPS coordinates across
              Thembu country and found something remarkable: every Thembu village cluster follows
              the same hidden grammar — a blueprint written in place-names. The Komkhulu anchors
              authority. The Elalini holds the households. The spring gets named. The pass gets
              named. The field gets named.
            </p>
            <p style={{ ...body, color: '#9E8C7A', maxWidth: '600px', marginBottom: '40px' }}>
              And yes — Qithi is one of those recurring names. It means a cleared agricultural
              patch. It appears in Sakhisizwe, in Intsika Yethu, in OR Tambo. In eight separate
              locations we can point to on a map.
            </p>
            <a
              href="/insights/thembu-village-anatomy"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#E8A857',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid rgba(232,168,87,0.4)',
                padding: '14px 32px',
              }}
            >
              Read: The Anatomy of a Thembu Village
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </section>

        <div className="section-rule" />

        <PageCTA
          headline="The Thembu lineage is your lineage. Come find your place in it."
          body="AmaQithi are Thembu and San. Join the clan register and connect with your extended family."
          primaryLabel="Apply to Join"
          primaryHref="/apply"
          secondaryLabel="Our San Heritage"
          secondaryHref="/san"
        />
      </main>
      <Footer />
    </>
  );
}
