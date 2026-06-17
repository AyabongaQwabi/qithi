import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import LineageGallery from '@/components/LineageGallery';
import SchemaOrg, { orgSchema, lineageSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'The Royal Lineage — AbaThembu & AmaQithi | From Njanya to the Present',
  description:
    'The full royal lineage of the abaThembu nation and the place of the AmaQithi within it. From Njanya (c. 1307) through Ntande, Nxego, Dlomo, Ngubengcuka, Mtirara, and Queen Nonesi at Rhodana — with the San-Thembu matrix that runs through the entire line.',
  keywords: [
    'Thembu royal lineage', 'AbaThembu genealogy', 'Njanya Thembu', 'Ntande Thembu',
    'Ngubengcuka', 'Mtirara Thembu', 'Queen Nonesi', 'Dalindyebo lineage',
    'AmaQithi lineage', 'Thembu San lineage', 'AmaQithi royal line',
    'Thembu kings history', 'Eastern Cape royal lineage',
  ],
  openGraph: {
    title: 'The Royal Lineage — AbaThembu & AmaQithi',
    description:
      'From Njanya (c. 1307) to King Buyelekhaya — the full Thembu royal lineage and the place of the AmaQithi San within it.',
    url: `${BASE}/lineage`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/lineage` },
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

const greatHouseLineage = [
  {
    name: 'Zwide',
    era: 'Ancient',
    desc: 'The point where ancestor-praises (unqulo) for Ntu-speaking nations often end. The common root of the broader Nguni family.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [3, 4]',
    highlight: false,
  },
  {
    name: 'Njanya',
    era: 'c. 1307',
    desc: 'A foundational ancestor common to the Mpondo, Thembu, and Xhosa nations. The Thembu trace their seniority from this point.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [5–7]',
    highlight: false,
  },
  {
    name: 'Malandela',
    era: '',
    desc: 'First-born son of Njanya. The Thembu are considered senior to the Xhosa because they descend from this senior line.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [8, 9]',
    highlight: false,
  },
  {
    name: 'Bomoyi',
    era: 'c. 1517',
    desc: 'A key figure whose death triggered a succession crisis between his sons Zima and Ntande — a contest that shaped the Thembu Great House.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [5, 9]',
    highlight: false,
  },
  {
    name: 'Ntande',
    era: 'c. 1517–1560s',
    desc: 'The rightful heir of the Great House. His uncles fought to secure his throne from his older brother Zima. Some accounts name a "son of Ntande" as the origin of the AmaQithi clan name — but Ntande\'s era predates the Thembu presence in the Cacadu basin by more than two centuries.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [9]; update1.md §2',
    highlight: true,
    note: 'The AmaQithi are Thembu through this line, but the specific village naming belongs to the San leader Mqithi, who was present at Rhodana in 1841.',
  },
  {
    name: 'Nxego',
    era: 'c. 1600',
    desc: 'His grave at the Msana River marks the earliest traceable burial site in central Thembuland — the foundational anchor of the Thembu ancestral landscape.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [10, 11]',
    highlight: false,
  },
  {
    name: 'Hlanga & Dlomo',
    era: 'c. 1650',
    desc: 'Brothers who split the Thembu nation. The AmaDlomo became the ruling Great House. Hlanga\'s descendants became the AmaQiya. A major battle for supremacy was fought at Msana around this time.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [10, 12, 13]',
    highlight: false,
  },
  {
    name: 'Tato',
    era: 'c. 1700',
    desc: 'His grave marks the continued expansion and consolidation of the Thembu between the Bashee and Umtata rivers.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [12, 14]',
    highlight: false,
  },
  {
    name: 'Zondwa',
    era: 'c. 1725',
    desc: '',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [12, 14]',
    highlight: false,
  },
  {
    name: 'Ndaba',
    era: 'c. 1756',
    desc: '',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [12, 14]',
    highlight: false,
  },
  {
    name: 'Ngubengcuka (Vusani)',
    era: 'd. 1833',
    desc: 'Paramount Chief during the early 19th-century frontier conflicts. He raised the heir Mtirara, who would bring the Thembu into permanent alliance with the AmaQithi at Rhodana.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [15, 16]',
    highlight: false,
  },
  {
    name: 'Mtirara',
    era: 'fl. 1841',
    desc: 'Son of Ngubengcuka, raised by the regent Queen Nonesi. When he and Nonesi established the Thembu Great Place at Rhodana in 1841, they entered into formal alliance with the AmaQithi San — integrating the clan as senior counsellors and ritual specialists.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [16]',
    highlight: true,
    note: 'The moment of Mtirara\'s establishment at Rhodana is when the AmaQithi\'s dual Thembu-San identity became formally recorded in history.',
  },
  {
    name: 'Ngangelizwe (Qeya)',
    era: 'late 1800s',
    desc: 'Son of Mtirara, ruled during the late 19th-century colonial expansion into Thembuland.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [16]',
    highlight: false,
  },
  {
    name: 'Dalindyebo',
    era: 'c. 1920',
    desc: 'His reign marked the transition into the modern administrative era of the Thembu chieftainship.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [17, 18]',
    highlight: false,
  },
  {
    name: 'Sampu Jongilizwe Dalindyebo',
    era: '1924–1928',
    desc: 'Succeeded his father but died early without a Great Wife, leading to a long era of regencies.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [19, 20]',
    highlight: false,
  },
  {
    name: 'Regents: Jongintaba (Daweti) & Dabulamanzi',
    era: '1928–1954',
    desc: 'Held the chieftainship while the heir was of age. Jongintaba Dalindyebo was the guardian of Nelson Mandela during his youth at the Great Place.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [21, 22]',
    highlight: false,
  },
  {
    name: 'Sabata Jonguhlanga Dalindyebo',
    era: '1954–1986',
    desc: 'A popular and widely respected monarch who opposed the apartheid-era Bantustan system. He was deposed and died in exile in Zambia in 1986.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [18, 23, 24]',
    highlight: false,
  },
  {
    name: 'King Buyelekhaya Zwelibanzi Dalindyebo',
    era: '1992–Present',
    desc: 'After the death of Sabata and a brief period under the houses of Bambilanga and Zondwa, Buyelekhaya was proclaimed heir in 1987 and officially appointed as king in 1992. The current king of the abaThembu nation.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 1 [25–27]',
    highlight: false,
  },
];

export default function LineagePage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, lineageSchema, breadcrumbSchema([{ name: 'Royal Lineage', url: '/lineage' }])]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          bg
          eyebrow="The Royal Lineage"
          headline="From Njanya to the present — 700 years of recorded history."
          subheading="The abaThembu are the oldest Nguni royal nation. Their lineage predates the Zulu, and it runs through the AmaQithi clan as a living thread."
          intro="This page documents the full Thembu Great House lineage from its earliest traceable ancestor (c. 1307) to the current king — and shows exactly where the AmaQithi sit within it, as Thembu by lineage and San by heritage."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'The Royal Lineage' }]} />
        </div>

        {/* Context */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Context</p>
            <h2 style={h2}>Senior by lineage. Fused with the San from the beginning.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={body}>
                  The Thembu lineage traces its seniority back to the 14th century — predating other Nguni nations including the Zulu. Historical research identifies <strong style={{ color: '#E8A857' }}>Zwide</strong> as the point where ancestor-praises (unqulo) for Ntu-speaking nations often end.
                </p>
                <p style={body}>
                  The Thembu are considered senior to the Xhosa because they descend from <strong style={{ color: '#E8A857' }}>Malandela</strong>, the first-born son of Njanya. This seniority is embedded in praise names and acknowledged in regional protocol.
                </p>
              </div>
              <div>
                <p style={body}>
                  The abaThembu are historically a <strong style={{ color: '#E8A857' }}>creolised population</strong> — formed by the fusion of immigrant Nguni groups and indigenous San communities. This is embedded in their identity from their earliest formation: their praise names include &ldquo;the tiny man&rdquo; (a direct acknowledgment of San ancestry), and the <em>Ingqithi</em> finger-cut ritual they inherited from the San is documented as proof of the &ldquo;friendly amalgamation.&rdquo;
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5 }}>
                  Source: The Royal Lineage and San Heritage of the abaThembu (AmaQithi Research Archive, 2026); update1.md §2
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Full lineage */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>The Great House · Full Lineage</p>
            <h2 style={h2}>The line, from root to present.</h2>
            <p style={{ ...body, marginBottom: '40px' }}>
              Each generation is cited from primary sources. Entries marked in amber are key intersection points with AmaQithi history.
            </p>

            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'rgba(196, 98, 45, 0.3)' }} />
              {greatHouseLineage.map((entry, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    marginBottom: '36px',
                    paddingLeft: '24px',
                    ...(entry.highlight ? { borderLeft: '2px solid rgba(232,168,87,0.3)', paddingLeft: '28px', marginLeft: '-4px' } : {}),
                  }}
                >
                  <div style={{ position: 'absolute', left: entry.highlight ? '-8px' : '-4px', top: '6px', width: entry.highlight ? '10px' : '8px', height: entry.highlight ? '10px' : '8px', background: entry.highlight ? '#E8A857' : '#C4622D', transform: 'rotate(45deg)' }} />
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: entry.highlight ? '#E8A857' : '#D4A96A' }}>
                      {entry.name}
                    </span>
                    {entry.era && (
                      <span style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#C4622D', letterSpacing: '0.08em' }}>
                        {entry.era}
                      </span>
                    )}
                  </div>
                  {entry.desc && (
                    <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.65, marginBottom: '4px' }}>
                      {entry.desc}
                    </p>
                  )}
                  {entry.note && (
                    <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.85rem', color: '#D4A96A', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '4px', borderLeft: '2px solid rgba(232,168,87,0.3)', paddingLeft: '12px' }}>
                      {entry.note}
                    </p>
                  )}
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', color: '#6B5A4E', fontStyle: 'italic' }}>
                    {entry.citation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Lineage gallery — full-width lightbox */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Visual Record</p>
            <h2 style={h2}>The genealogy — documented in full.</h2>
            <p style={{ ...body, marginBottom: '32px' }}>
              These charts trace the Thembu Great House from Zwide and Njanya (c. 1307) through Ntande, Nxego, Dlomo, Ngubengcuka, Mtirara, and Nonesi. Click any panel to view full size. Use arrow keys or buttons to navigate.
            </p>
          </div>

          {/* Gallery bleeds full width */}
          <LineageGallery />

          <div style={inner}>
            {/* Incomplete research notice + collaboration invite */}
            <div style={{ marginTop: '40px', borderLeft: '3px solid rgba(232,168,87,0.4)', paddingLeft: '20px', maxWidth: '820px' }}>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#E8A857', lineHeight: 1.75, marginBottom: '10px', fontWeight: 500 }}>
                These charts are incomplete. This is a living research document — not a finished record.
              </p>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.85rem', color: '#9E8C7A', lineHeight: 1.75, marginBottom: '20px' }}>
                The documented son of Ntande in the written record is Mnguti — but the investigation into the AmaQithi&apos;s precise place in the tree continues. If your family carries knowledge about this lineage, we want to hear it. The full working board is open for community collaboration.
              </p>
              <a
                href="https://miro.com/welcomeonboard/TXlmSXhFTStpUENIL3p4ZHZNZkROd2lyODJ2b3pYSk1SeW5FQ1N4WU92UWIvNE02Q0Y3TGlkV3FVeHJOaW1vVHNKbk9CNWFyYVgyYkc0MndPY29RZSt5M0I0dHlESkxSSGpqNFpqV3pCaGs2NzRjMnlQVjVqdk5uelZBSElMS2JyVmtkMG5hNDA3dVlncnBvRVB2ZXBnPT0hdjE=?share_link_id=274299635695"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#E8A857',
                  textDecoration: 'none',
                  border: '1px solid rgba(232,168,87,0.4)',
                  padding: '10px 20px',
                  transition: 'background 0.2s',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Help complete the lineage board
              </a>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* AmaQithi position summary */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>The AmaQithi in the Lineage</p>
            <h2 style={h2}>Where we stand in the tree.</h2>
            <div
              style={{
                borderLeft: '3px solid #C4622D',
                paddingLeft: '28px',
                maxWidth: '720px',
                marginBottom: '40px',
              }}
            >
              <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontStyle: 'italic', color: '#E8A857', lineHeight: 1.65, marginBottom: '12px' }}>
                &ldquo;We are a Thembu nation whose identity is historically rooted in an ancient San-Bantu matrix. Born of a friendly amalgamation between early Nguni pioneers and the indigenous ǀXam hunter-gatherers, our people have carried the physical and cultural traditions of both worlds through centuries of shifting frontiers.&rdquo;
              </p>
              <cite style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.78rem', color: '#9E8C7A', fontStyle: 'normal' }}>
                — The Archive of AmaQithi (update1.md §1, AmaQithi Research Archive, 2026)
              </cite>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                { label: 'Thembu by lineage', text: 'The AmaQithi are a derived branch of the Thembu Great House, formed within the San-Bantu matrix that the Thembu nation was built upon.' },
                { label: 'San by heritage', text: 'Their direct ancestor Mqithi was a San captain at Rhodana before the Thembu arrived. The click in the name, the Ingqithi ritual, and the izibongo carry the San root.' },
                { label: 'Royal counsellors by rank', text: 'Mqithi\'s clan was placed adjacent to the royal residence at Rhodana — a position equivalent to a senior counsellor in the Thembu court.' },
                { label: 'Diaspora by history', text: 'After the fall of Mount Moorosi (1879), the clan dispersed across eNgcobo, Cofimvaba, and Mkapusi — but the lineage, the name, and the izibongo survived.' },
              ].map((point) => (
                <div key={point.label} style={{ background: '#2C1810', padding: '24px', border: '1px solid rgba(196,98,45,0.2)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, color: '#E8A857', marginBottom: '8px' }}>
                    {point.label}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.85rem', color: '#9E8C7A', lineHeight: 1.65 }}>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        <PageCTA
          headline="Know the lineage. Find your place in it."
          body="The AmaQithi genealogy project is active. Join the register and trace your line through the Thembu-San matrix."
          primaryLabel="Join the Clan"
          primaryHref="/apply"
          secondaryLabel="AmaQithi Genealogy"
          secondaryHref="/genealogy"
        />
      </main>
      <Footer />
    </>
  );
}
