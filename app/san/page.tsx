import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, sanSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AbaThwa (San) — First People of the Land | AmaQithi Heritage',
  description:
    'The San (AbaThwa) heritage of the AmaQithi clan. The First People of the White Kei River basin — hunters, rainmakers, rock artists, and frontier counsellors. AmaQithi: a Thembu-San group from Quthini in Lesotho. San leaders Madolo, Madakane, Soai and their world. The Ingqithi ritual, the click consonant, and 10,000 years before the written record.',
  keywords: [
    'AbaThwa San heritage', 'San First People Eastern Cape', 'San Lady Frere',
    'White Kei River San', 'AmaQithi Quthini origin', 'Madolo San chief', 'Madakane San',
    'San rock art Eastern Cape', 'San rainmakers', 'Ingqithi ritual',
    'Khoisan Eastern Cape', 'San AmaQithi', 'AbaThwa history', 'San Thembu alliance',
    'Bushman School Lady Frere 1842',
  ],
  openGraph: {
    title: 'AbaThwa (San) — First People of the Land',
    description:
      'The San (AbaThwa) heritage of the AmaQithi. 10,000 years of presence in the White Kei River basin before the written record began.',
    url: `${BASE}/san`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/san` },
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

const sanRoles = [
  {
    title: 'Rainmakers',
    desc: 'The AmaQithi were described in historical records as "Royal San" who served as ritual specialists and rainmakers for the Thembu kings. Called upon during droughts to ensure the survival of royal cattle — drawing on their ritual seniority as original inhabitants of the land.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [History, 126]',
  },
  {
    title: 'Elite Marksmen',
    desc: 'San marksmen served as elite units alongside Thembu and Xhosa forces during the War of Mlanjeni (1850–1853). In 1879, San bowmen fought alongside Chief Moorosi. The password to Moorosi\'s mountain stronghold was "Moroa" — the Xhosa word for Bushman.',
    citation: 'update1.md §3; oral history archive',
  },
  {
    title: 'Frontier Scouts',
    desc: 'Their superior knowledge of the Xonxa and Cacadu mountain terrain made them irreplaceable for tracking colonial movements. No outsider could find their way through those paths without San guides.',
    citation: 'Oral history; Stanford (Macquarrie 1962:31)',
  },
  {
    title: 'Rock Artists',
    desc: 'The White Kei basin was a hub of San rock art activity. San painter \'Gcu-wa (brother of chief Mada\'kane) was still recorded in the area as late as 1869 — one of the last practising San artists in the Eastern Cape.',
    citation: 'update1.md §3; colonial records cited in who-we-are page',
  },
  {
    title: 'Herbalists',
    desc: 'Holders of medicinal knowledge from local flora. The First People of the land carried the deepest knowledge of what grew in it — knowledge that sustained both their own people and their Thembu allies.',
    citation: 'Oral history tradition',
  },
  {
    title: 'Counsellors to Royalty',
    desc: 'The AmaQithi — named for the valley of Quthini in Lesotho, not for any individual leader — held a position at the Rhodana royal court comparable to a senior counsellor. Early Thembu chiefs gave San hunters precedence over themselves at large game kills, recognising their authority as original landowners.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [32, 34, 35]',
  },
];

const sanChiefs = [
  {
    name: 'AmaQithi — the search for Qithi',
    region: 'Quthing (Lesotho) → White Kei River Basin',
    detail: 'No recorded history has yet confirmed a man named Qithi as a son of Thembu king Ntande. The research is ongoing. What is clear: the root "Qithi" connects the valley of Quthing in Lesotho (where San and Thembu lived together under Moorosi until 1879), the village emaQithini in Lady Frere, and the ritual Ingqithi — which contains the word "qithi" and was, according to George Stow, "almost universal" among San (Bushman) tribes. Whether Qithi was a man, a place, or a practice that named the clan — the San thread runs through all of it.',
    citation: 'The San-Phuti Matrix (AmaQithi Research Archive, 2026); Stow, The Native Races of South Africa, Ch. IX, p. 170; Stanford (Macquarrie 1962:31)',
  },
  {
    name: 'Madolo (Madura · Madoor)',
    region: 'Glen Grey · White Kei River Basin',
    detail: 'Chief of a powerful San tribe originally occupying the Klipplaats and Upper Black Kei Rivers. Relocated to Glen Grey around 1835, settling near the Bushman School on the White Kei River. Led 200 levies (San, Khoe, Mfengu, and Thembu) for the British in the War of the Axe (1846). Retreated to White Kei caves around 1850 after conflict with Thembu chief Ndhela. Last recorded at age approximately 80 in 1856, withdrawing into the Maloti-Drakensberg.',
    citation: 'Colonial frontier records; update1.md §4',
  },
  {
    name: "Mada'kane",
    region: 'Lower Black Kei · White Kei Junction',
    detail: "Chief of a San tribe in the valley of the Lower Black Kei, down to its junction with the White Kei. His final stronghold was an inaccessible glen near that junction which bears his name. His brother, 'Gcu-wa, was a noted San painter still active in 1869 — one of the last recorded practising San artists in the Eastern Cape.",
    citation: 'Colonial records; Stanford field notes (Macquarrie 1962)',
  },
  {
    name: 'Flux',
    region: 'White Kei River Basin',
    detail: 'Close associate of Madolo. Fought alongside him against the immigrant Thembu chief Ndhela around 1850. When colonial authorities moved against them, Flux and Madolo fled together to the caves on the White Kei River banks.',
    citation: 'Colonial frontier records',
  },
  {
    name: 'Soai',
    region: 'Maloti Mountains · Sehonghong Cave',
    detail: 'The last major San leader of the Maloti mountains. A close friend and ally of Phuthi chief Moorosi — the same Moorosi after whom Qwabi Joka named his son Molosi. Soai\'s people frequently intermarried with the Phuthi. Killed by Sotho forces in 1871–1872 in an ambush near a pool.',
    citation: 'update1.md §4; oral history',
  },
  {
    name: 'Quu',
    region: 'Difaqane-era Mountains',
    detail: "San leader who formalised the Phuthi-San alliance when Moorosi's father Mokuoane married his sister — making Moorosi himself part San. That kinship is why San fighters used 'Moroa' (Bushman) as the password to Moorosi's mountain stronghold in 1879.",
    citation: 'update1.md §4',
  },
  {
    name: 'Nqabayo (Ngqabayi)',
    region: 'Xuka & Mooi Rivers · Drakensberg Base',
    detail: 'Led a band of 43 men near the Xuka and Mooi Rivers. Notable for controlling the preparation of arrow poison. His people were attacked at Gubenxa in 1857 after a dispute with Thembu chief Mgudhluwa. Gubenxa is today one of the Ngcobo villages where AmaQithi families are documented to live.',
    citation: 'update1.md §4; Stanford records',
  },
  {
    name: 'Luhayi',
    region: 'Tsolo District',
    detail: 'Head of a main San family in the Tsolo district and the official rainmaker for Mpondomise chief Mditshwa. Photographed by Sir Walter Stanford in 1888 — one of the few photographic records of a San leader in this region. Held the same dual role the AmaQithi held at Rhodana: San ancestry performing rainmaking and healing for a neighbouring Nguni chief.',
    citation: 'Stanford (Macquarrie 1962); photograph collection',
  },
];

const timeline = [
  { year: '≥ 10,000 BCE', event: 'San First People occupy the White Kei River basin, Xonxa mountains, and Cacadu rock shelters. Their rock art is among the oldest in southern Africa.' },
  { year: 'c. 1835', event: 'San chief Madolo relocates his tribe from the Klipplaats and Upper Black Kei to the Glen Grey area near Lady Frere.' },
  { year: '1839', event: 'Missionary James Read establishes a Bushman School on the White Kei (Cacadu) River. By 1842 fifteen San families live there. Chief Madolo attends services.' },
  { year: '1841', event: 'Queen Nonesi establishes the Thembu Great Place at Rhodana. San people are documented in the White Kei basin. Qithi Village sits directly adjacent to the royal residence. Whether AmaQithi were present at Rhodana at this date, or arrived later after 1879, is not settled — the Qwabi and Joka lines are documented only after the 1879 war.' },
  { year: '1842', event: 'Qwabi Joka is born near Agnes, White Kei River, in the heart of documented San territory.' },
  { year: 'c. 1850', event: 'Sir Walter Stanford records Silayi\'s testimony: Thembu groups on the White Kei are on "comparatively friendly terms with San families and clans" in the area. Source: Macquarrie 1962:31.' },
  { year: '1850–1853', event: 'War of Mlanjeni. San marksmen serve as elite units alongside Thembu forces defending the Xonxa and Rhodana mountains.' },
  { year: '1856', event: 'Chief Madolo, aged approximately 80, retreats into the Maloti-Drakensberg with the remnant of his San band. They disappear from the colonial record.' },
  { year: '1869', event: 'San painter \'Gcu-wa (brother of chief Mada\'kane) is still recorded living in the White Kei area, carrying paint pots on his belt. One of the last recorded practising San artists in the Eastern Cape.' },
  { year: '1879', event: 'Moorosi\'s War. San bowmen fight alongside Moorosi\'s forces. The password to Moorosi\'s mountain stronghold is "Moroa" — Bushman. Qwabi Joka names his firstborn son Molosi in honour of Moorosi, and his youngest son outright Bushman (Boesman).' },
  { year: '1888', event: 'Sir Walter Stanford photographs San leader Luhayi in the Tsolo district — one of the last photographic records of a San leader in the Eastern Cape.' },
];

export default function SanPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, sanSchema, breadcrumbSchema([{ name: 'AbaThwa (San) Heritage', url: '/san' }])]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          bg
          eyebrow="Heritage — AbaThwa (San)"
          headline="The First People of this land."
          subheading="They were in the Cacadu mountains and the White Kei River basin long before anyone wrote anything down. Our San ancestors are why there is a Q in our name."
          intro="The AbaThwa (San) are the original inhabitants of southern Africa, with a presence in the Eastern Cape stretching back more than 10,000 years. The AmaQithi carry their heritage directly — through blood, through language, and through the ritual of the Ingqithi."
          researchHref="/thesis"
          lineageHref="/lineage"
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'AbaThwa (San)' }]} />
        </div>

        {/* Stanford primary source */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/bg-square.png)', backgroundSize: 'cover', backgroundPosition: 'center left', opacity: 0.06, pointerEvents: 'none' }} />
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(44,24,16,0.92)', pointerEvents: 'none' }} />
          <div style={{ ...inner, position: 'relative', zIndex: 1 }}>
            <p style={{ ...eyebrow, marginBottom: '24px' }}>Primary Source</p>
            <blockquote style={{ borderLeft: '3px solid #C4622D', paddingLeft: '28px', margin: '0', maxWidth: '720px' }}>
              <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)', fontStyle: 'italic', color: '#E8A857', lineHeight: 1.65, marginBottom: '16px' }}>
                &ldquo;At about this time a number of Thembu groups living on the White Kei, including &lsquo;Jumba&rsquo;, father of the Thembu chief, &lsquo;Umgudhluwa&rsquo;, were on comparatively friendly terms with San &lsquo;families and clans&rsquo; living in that area.&rdquo;
              </p>
              <cite style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.78rem', color: '#9E8C7A', fontStyle: 'normal' }}>
                — Silayi, subject of Chief Jumba, recorded by Sir Walter Stanford (Macquarrie 1962:31)
              </cite>
            </blockquote>
          </div>
        </section>

        <div className="section-rule" />

        {/* The Q click */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Linguistics · The Click Consonant</p>
            <h2 style={h2}>The Q in our name is San.</h2>
            <p style={body}>
              Bantu languages do not have click consonants. The Nguni people — Xhosa, Zulu — picked up the Q, C and X clicks from centuries of living alongside San people. That process of contact is exactly how the Thembu became a creolised San-Bantu population.
            </p>
            <p style={body}>
              <strong style={{ color: '#E8A857' }}>Qwabi. Qithi. Mqithi.</strong> Every core surname in this clan holds a palatal click. In the ancient !Ui-Taa (!Xam) and Central Khoe language groupings, these names carried authentic click symbols. European administrators who could not spell the click wrote: Kiti, Chiti, Xiti, Tshiti. If you search for AmaQithi in old archives, search for those too.
            </p>
            <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontStyle: 'italic', color: '#C4622D', marginBottom: '16px', marginLeft: '28px', borderLeft: '2px solid rgba(196,98,45,0.4)', paddingLeft: '20px' }}>
              !Qhiti → ‡Qiti → ||Giti
            </p>
            <p style={{ ...body, color: '#9E8C7A', fontStyle: 'italic' }}>
              You can change a name on paper. You cannot change the sound in the mouth of someone who has spoken it their whole life.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Roles */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>What the San Brought</p>
            <h2 style={h2}>The roles our San ancestors carried.</h2>
            <p style={{ ...body, marginBottom: '40px' }}>
              The AmaQithi were not subjects absorbed into the Thembu nation. They were partners. Their knowledge, their ritual authority, and their reading of the land were irreplaceable. These are the roles the archives and oral history confirm.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(196,98,45,0.2)' }}>
              {sanRoles.map((role) => (
                <div key={role.title} style={{ background: '#2C1810', padding: '28px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#E8A857', marginBottom: '10px' }}>
                    {role.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.7, marginBottom: '10px' }}>
                    {role.desc}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', color: '#6B5A4E', fontStyle: 'italic' }}>
                    {role.citation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* San chiefs */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>San Leadership · Eastern Cape & Lesotho</p>
            <h2 style={h2}>The San leaders of the AmaQithi world.</h2>
            <p style={{ ...body, marginBottom: '40px' }}>
              The AmaQithi were not alone. They were part of a wider network of San leaders navigating the same pressures — colonial expansion, Nguni settlement, and the loss of land they had held for millennia. These are the leaders the archives record.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(196,98,45,0.2)' }}>
              {sanChiefs.map((chief) => (
                <div key={chief.name} style={{ background: '#1A0F0A', padding: '28px 24px' }}>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4622D', marginBottom: '6px' }}>
                    {chief.region}
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#E8A857', marginBottom: '10px' }}>
                    {chief.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.7, marginBottom: '10px' }}>
                    {chief.detail}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', color: '#6B5A4E', fontStyle: 'italic' }}>
                    {chief.citation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Timeline */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Chronology</p>
            <h2 style={h2}>The San presence in the White Kei — the written record.</h2>
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'rgba(196, 98, 45, 0.3)' }} />
              {timeline.map((item, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: '36px', paddingLeft: '24px' }}>
                  <div style={{ position: 'absolute', left: '-4px', top: '6px', width: '8px', height: '8px', background: '#C4622D', transform: 'rotate(45deg)' }} />
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: '#C4622D', marginBottom: '4px' }}>
                    {item.year}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.9rem', color: '#D4A96A', lineHeight: 1.65 }}>
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Izibongo */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Izibongo</p>
            <h2 style={h2}>The praise names of AmaQithi — in our own voices.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontStyle: 'italic', color: '#E8A857', lineHeight: 2, marginBottom: '16px' }}>
                  Ndinga, Mnono, Rhadu, Mlebe,<br />
                  Nomsobodwana,<br />
                  Sopitsho Ngqolomsila,<br />
                  Yemyem.<br />
                  NgamaQithi amahle neenzipho zawo.
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.82rem', color: '#9E8C7A', fontStyle: 'italic', lineHeight: 1.7 }}>
                  &ldquo;The AmaQithi — beautiful, with their nails.&rdquo; You say this when you introduce yourself. You say it when you arrive somewhere and need to be known.
                </p>
              </div>
              <div>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  Izibongo are praise poems — the clan&apos;s memory spoken aloud. Names, events, the character of the people who came before. They were not written first. They were spoken. Passed from parents to children, said at gatherings, said to strangers who needed to know who you were.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The AmaQithi izibongo survived the colonial years, the forced moves, and everything done to make San people forget who they were. They are still being said today. That counts for something.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        <PageCTA
          headline="The San heritage in your blood is real. Let us help you trace it."
          body="Join the AmaQithi register, connect with family, and be part of the DNA research initiative to document our San ancestry."
          primaryLabel="Apply to Join"
          primaryHref="/apply"
          secondaryLabel="AmaQithi Clan"
          secondaryHref="/amaqithi"
        />
      </main>
      <Footer />
    </>
  );
}
