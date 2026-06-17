import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, whoWeAreSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi History — Who Are the AmaQithi? Thembu Clan with San Heritage',
  description:
    'The complete history of the AmaQithi clan: a Thembu clan born of an ancient San-Bantu matrix. Mqithi at Rhodana before 1841, Qwabi Joka (born 1842), the Q click consonant, Stanford\'s Silayi testimony, and the Ingqithi ritual that proves the San-Thembu fusion.',
  keywords: [
    'who is Qithi', 'who are AmaQithi', 'AmaQithi history', 'AmaQithi clan history',
    'Mqithi history', 'Mqithi San', 'Qwabi Joka', 'San Eastern Cape history',
    'AbaThwa Eastern Cape', 'Rhodana history', 'Queen Nonesi Rhodana',
    'San Thembu alliance', 'White Kei River San', 'click consonant San',
    'Khoisan Eastern Cape', 'AmaQithi origin', 'Lady Frere San history',
    'San First People Eastern Cape', 'Thembu San matrix', 'Ingqithi ritual', 'Tambookie',
  ],
  openGraph: {
    title: 'Who Are the AmaQithi? Thembu Clan with Deep San Heritage',
    description:
      'The AmaQithi are a Thembu clan born of the ancient San-Bantu matrix. San First People of the White Kei River basin, brought into the Thembu Great House at Rhodana in 1841. Full history with primary sources.',
    url: `${BASE}/who-we-are`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/who-we-are` },
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
const body: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '1rem',
  color: '#D4A96A',
  lineHeight: 1.75,
  marginBottom: '16px',
  maxWidth: '680px',
};

const timelineItems = [
  {
    year: '≥ 10,000 BCE',
    event: 'San First People occupy the White Kei River basin, Xonxa mountains, and Cacadu rock shelters.',
  },
  {
    year: '~1835',
    event: 'San chief Madolo leads his people to Glen Grey (Lady Frere area). The Bushman School on the White Kei (Cacadu) River is established by missionary James Read. Fifteen San families settle. Chief Madolo attends services.',
  },
  {
    year: '1841–1842',
    event: 'Queen Nonesi and heir Mtirara establish the Thembu Great Place at Rhodana, at the foot of the Cacadu mountains. They find the landscape already inhabited by San communities. Mqithi — San captain — is identified as ally, not subject. His clan is given Qithi Village adjacent to the royal residence.',
  },
  {
    year: '1842',
    event: 'Qwabi Joka is born in the White Kei basin, in immediate territorial proximity to documented San communities and the Mqithi clan settlement.',
  },
  {
    year: '~1850',
    event: 'Walter Stanford records Silayi\'s testimony: Thembu groups on the White Kei — including chief Jumba and chief Mgudlwa — are on "comparatively friendly terms with San families and clans" in the area.',
  },
  {
    year: '1850–1853',
    event: 'War of Mlanjeni. San marksmen serve as elite units alongside Thembu forces defending the Xonxa and Rhodana mountains.',
  },
  {
    year: '1856',
    event: 'Chief Madolo, aged approximately 80, retreats into the Maloti-Drakensberg with the remnant of his San band. They disappear from the colonial record.',
  },
  {
    year: '1869',
    event: 'San painter "\'Gcu-wa" (brother of chief Mada\'kane) is still recorded living in the White Kei area, carrying paint pots on his belt.',
  },
  {
    year: '1879',
    event: 'Moorosi\'s War. Qwabi Joka names his firstborn son Molosi — preserving the name of Phuthi chief Moorosi, whose closest allies were San bowmen. The password to Moorosi\'s mountain stronghold was "Moroa" — "Bushman." Joka\'s youngest son is later named Bushman (Boesman) outright.',
  },
  {
    year: '1880',
    event: 'Queen Nonesi is forcibly deported by the British colonial government after four decades defending the Rhodana Great Place.',
  },
  {
    year: '1915',
    event: 'Qwabi Joka dies in the White Kei basin. His son Bushman (Boesman) is recorded working the Steynsburg rails that same year.',
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, whoWeAreSchema]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          bg
          eyebrow="AmaQithi — Who We Are"
          headline="AbaThembu, AbaThwa — ubabona nge Ngqithi."
          subheading="One bloodline, two heritages — recognised by the mark of ingqithi."
          intro="We are not choosing between identities. We carry both. The Q in our name is a San click. Our lineage runs through the Thembu Great House. The archives confirm it, izibongo confirm it, and ingqithi — the finger-cut custom inherited from the San — confirms it."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Who We Are' }]} />
        </div>

        {/* Stanford quote */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/bg-square.png)', backgroundSize: 'cover', backgroundPosition: 'center left', opacity: 0.06, pointerEvents: 'none' }} />
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(44,24,16,0.92)', pointerEvents: 'none' }} />
          <div style={{ ...inner, position: 'relative', zIndex: 1 }}>
            <p style={{ ...eyebrow, marginBottom: '24px' }}>Primary Source</p>
            <blockquote
              style={{
                borderLeft: '3px solid #C4622D',
                paddingLeft: '28px',
                margin: '0',
                maxWidth: '720px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
                  fontStyle: 'italic',
                  color: '#E8A857',
                  lineHeight: 1.65,
                  marginBottom: '16px',
                }}
              >
                &ldquo;At about this time a number of Thembu groups living on the White Kei, including
                &lsquo;Jumba&rsquo;, father of the Thembu chief, &lsquo;Umgudhluwa&rsquo;, were on
                comparatively friendly terms with San &lsquo;families and clans&rsquo; living in that
                area.&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.78rem',
                  color: '#9E8C7A',
                  fontStyle: 'normal',
                }}
              >
                — Silayi, subject of Chief Jumba, recorded by Sir Walter Stanford (Macquarrie 1962:31)
              </cite>
            </blockquote>
            <p style={{ ...body, color: '#9E8C7A', fontStyle: 'italic', marginTop: '28px' }}>
              Silayi was a witness. He told a colonial magistrate — a man who had no reason to make San people look important — that the San and the Thembu were living side by side, on good terms, in the White Kei valley. That is the record we are standing on.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Click consonant section */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Linguistics</p>
            <h2 style={h2}>The Q in our name.</h2>
            <p style={body}>
              Bantu languages do not have click consonants. The Nguni people — Xhosa, Zulu — picked up the Q, C and X clicks from centuries of living alongside San people. That process is exactly how the Thembu became a creolised San-Bantu nation, known historically as the <em>Tambookie</em> (from the Khoisan term <em>Tam&#700;bou&#700;ci</em>). The clicks in our names are a fossil of that ancient fusion.
            </p>
            <p style={body}>
              <strong style={{ color: '#E8A857' }}>Qwabi. Qithi. Mqithi.</strong> Every core surname in this clan has that click. It was not borrowed. It was there from the start — in the original San language, the name probably sounded something like:
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontStyle: 'italic',
                color: '#C4622D',
                marginBottom: '16px',
                marginLeft: '28px',
                borderLeft: '2px solid rgba(196,98,45,0.4)',
                paddingLeft: '20px',
              }}
            >
              !Qhiti → ‡Qiti → ||Giti
            </p>
            <p style={body}>
              When European settlers wrote our names in official records, they could not spell the click. They wrote Kiti, Chiti, Xiti, Tshiti. If you are searching for AmaQithi in old archives, look for those too.
            </p>
            <p style={{ ...body, color: '#9E8C7A', fontStyle: 'italic' }}>
              You can change a name on paper. You cannot change the sound in the mouth of someone who has spoken it their whole life.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Name / Rhodana section */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>The Name · What We Know So Far</p>
            <h2 style={h2}>The search for Qithi is ongoing — and the clues are real.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={body}>
                  Contrary to what some oral accounts suggest, no recorded history has been found of a man named Qithi born as a son of Thembu king Ntande, and therefore no confirmed record of him as a brother of Mcube. The only well-documented son of Ntande in the written record is <strong style={{ color: '#E8A857' }}>Mnguti</strong>. But the colonial record is incomplete, and unrecorded sons were common. Mqithi may yet turn out to be a long-lost brother of Mnguti — we simply do not know yet.
                </p>
                <p style={body}>
                  What the evidence does show is a web of connections around the name <em>Qithi</em>. The valley of <strong style={{ color: '#E8A857' }}>Quthing</strong> in Lesotho — where Thembu, Phuthi, and San communities lived together under Chief Moorosi — is the Sotho way of saying <em>emaQithini</em> in Xhosa. The same root. The same sound. And the ritual of <strong style={{ color: '#E8A857' }}>Ingqithi</strong> — the finger-cut custom practised by this division of the Thembu — contains the word <em>qithi</em> inside it. George Stow wrote in the 1800s that this custom &ldquo;among the Bushman tribes was almost universal.&rdquo;
                </p>
              </div>
              <div>
                <p style={body}>
                  In 1841 Queen Nonesi moved the Thembu royal court to Rhodana. San people were present in the White Kei basin throughout this period — documented by colonial sources. Qithi Village sits directly next to the Rodana Clinic and Rodana PJS School today. That proximity is real.
                </p>
                <p style={body}>
                  The families we can trace — the Qwabi and Joka lines — arrived in the Lady Frere area after the 1879 war, coming from Quthing. Whether AmaQithi were already living at Rhodana before them is a question the record has not yet answered. San and Thembu people were on friendly terms on the White Kei throughout that century. The relationship was one of knowledge for protection — between equals.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The village in Lady Frere is called <strong style={{ color: '#D4A96A' }}>KwaTshatshu</strong> — locally known as <strong style={{ color: '#D4A96A' }}>emaQithini</strong>. Inhabited only by AmaQithi. If you know something about the origins of this name, or carry a family tradition about Qithi — tell us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Ntande / Thembu identity section */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>The Historical Record</p>
            <h2 style={h2}>We are Thembu. But not from Ntande in the 1500s.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={body}>
                  Some accounts describe Qithi as a son of the Thembu king Ntande, placing the AmaQithi inside the Thembu Great House from its earliest roots. We do not dispute the Thembu connection — the evidence for that is real. What the timeline cannot support is the specific claim that the village name comes from Ntande&#700;s time in the late 1500s.
                </p>
                <p style={body}>
                  The Ama-Tembu royal genealogy places Ntande more than two centuries before Queen Nonesi arrived at Rhodana. Village names in this region were given by living leaders present on the ground. KwaTshatshu nearby is named for chief Tshatshu who was there in the 1820s. That is how naming worked.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The AmaQithi connection to the Thembu runs through the San-Thembu matrix — the <em>Tambookie</em> creolised population that formed when pioneering Nguni clans and established San bands merged over generations. The AmaQithi are a product of that fusion, which means they are genuinely both.
                </p>
              </div>
              <div>
                <p style={body}>
                  The Thembu nation itself has always carried San heritage. Their praise names include <em>&ldquo;the tiny man&rdquo;</em> — a direct linguistic acknowledgment of San ancestry embedded in izibongo. Ingqithi finger-cut ritual, practiced by this division of the Thembu and inherited from the San, is described in historical records as definitive proof of the &ldquo;friendly amalgamation between the two races.&rdquo;
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The royal genealogy below shows where Ntande sits in the Thembu tree — many generations above Nonesi and Mtirara. Whether a man named Qithi sits in that tree as an unrecorded son of Ntande, a long-lost brother of Mnguti, is something the research has not yet resolved. The oral tradition points there; the written record has not confirmed it. Both things can be true at once.
                </p>

                {/* Thembu lineage image */}
                <div
                  style={{
                    marginTop: '24px',
                    border: '1px solid rgba(196,98,45,0.25)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/lineage_detail.png"
                    alt="Annotated Thembu royal genealogy chart showing the lineage from Njanya (c. 1307) through Ntande, Nxego, Dlomo to Ngubengcuka and Mtirara — with researcher notes"
                    style={{ width: '100%', display: 'block', filter: 'brightness(0.92) contrast(1.08)' }}
                    loading="lazy"
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.72rem',
                    color: '#9E8C7A',
                    marginTop: '8px',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}
                >
                  Ama-Tembu royal lineage from Njanya (c. 1307) to the modern era. The AmaQithi are part of this lineage through the San-Thembu matrix — not as descendants of Ntande in the 1500s, but as a clan formed in the ancient fusion that became the Thembu nation.
                </p>
              </div>
            </div>

            {/* Summary box */}
            <div
              style={{
                marginTop: '40px',
                borderLeft: '3px solid #C4622D',
                paddingLeft: '24px',
                maxWidth: '680px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontStyle: 'italic',
                  color: '#E8A857',
                  lineHeight: 1.65,
                  marginBottom: '10px',
                }}
              >
                The AmaQithi are Thembu. They are also San. These are not contradictory claims — they are both true because the Thembu nation was itself formed by the fusion of Nguni pioneers and San hunter-gatherers. Whether the name Qithi belongs to a man, a place, a practice, or all three is still being researched. What is not in question is who carries it today — and what they know about where they came from.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.78rem',
                  color: '#9E8C7A',
                }}
              >
                Sources: Genealogy from Thembu royal lineage records. San-Thembu fusion described in historical archives; see also <em>The Royal Lineage and San Heritage of the abaThembu</em> (AmaQithi Research Archive, 2026). Ingqithi ritual documented in frontier colonial records.
              </p>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* San chiefs of the region */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>San Leadership · 19th Century</p>
            <h2 style={h2}>These were the San leaders of the AmaQithi world.</h2>
            <p style={{ ...body, marginBottom: '40px' }}>
              The AmaQithi did not exist in isolation. They were one group within a wider network of San leaders who were navigating the same pressures — colonial expansion, Nguni settlement, and the loss of land they had held for millennia. Knowing these names gives the AmaQithi story its full context.
            </p>

            {/* White Kei chiefs — most relevant */}
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '24px',
              }}
            >
              Glen Grey · Lady Frere · White Kei Basin
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1px',
                background: 'rgba(196,98,45,0.2)',
                marginBottom: '56px',
              }}
            >
              {[
                {
                  name: 'AmaQithi — KwaTshatshu (emaQithini)',
                  detail: 'The AmaQithi village in Lady Frere, locally known as emaQithini, inhabited only by AmaQithi. Whether the name Qithi belongs to an ancestor, a place, or a ritual is still being researched — no man named Qithi has been confirmed in the written record, though oral tradition points toward the Thembu royal line. The root "qithi" connects: the valley of Quthing in Lesotho, the village emaQithini, and the ritual Ingqithi which contains the same word. Qithi Village sits directly adjacent to the Rodana Clinic and Rodana PJS School.',
                },
                {
                  name: 'Madolo (Madura · Madoor)',
                  detail: 'Chief of a powerful San tribe originally occupying the Klipplaats and Upper Black Kei Rivers. Relocated to Glen Grey around 1835 and settled near the Bushman School on the White Kei River — the same area where Qwabi Joka was born in 1842. Led 200 levies (San, Khoe, Mfengu, and Thembu) for the British in the War of the Axe (1846). Retreated to White Kei caves around 1850 after conflict with Thembu chief Ndhela. Last recorded at age 80 in 1856, withdrawing into the Maloti-Drakensberg.',
                },
                {
                  name: 'Flux',
                  detail: 'Close associate of Madolo. Fought alongside him against the immigrant Thembu chief Ndhela around 1850. When colonial authorities moved against them, Flux and Madolo fled together to the caves on the White Kei River banks. His fate after that is not recorded.',
                },
                {
                  name: "Mada'kane",
                  detail: "Chief of a San tribe in the valley of the Lower Black Kei, down to its junction with the White Kei. His final stronghold was an inaccessible glen near that junction, which bears his name. His brother, 'Gcu-wa, was a noted San painter still active in 1869 — one of the last recorded practising San artists in the Eastern Cape.",
                },
              ].map((chief) => (
                <div key={chief.name} style={{ background: '#2C1810', padding: '28px 24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {chief.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: '#9E8C7A',
                      lineHeight: 1.7,
                    }}
                  >
                    {chief.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Drakensberg / Phuthi alliance */}
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '24px',
              }}
            >
              Maloti-Drakensberg · Phuthi Alliance
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1px',
                background: 'rgba(196,98,45,0.2)',
                marginBottom: '56px',
              }}
            >
              {[
                {
                  name: 'Soai',
                  detail: 'The last major San leader of the Maloti mountains, based at Sehonghong Cave. A close friend and ally of Phuthi chief Moorosi — the same Moorosi after whom Qwabi Joka named his son Molosi. Soai\'s people frequently intermarried with the Phuthi. Killed by Sotho forces in 1871-1872 in an ambush near a pool.',
                },
                {
                  name: 'Quu',
                  detail: "San leader at 'Nkuakhomo during the Difaqane. Formalised the Phuthi-San alliance when Moorosi's father Mokuoane married his sister — making Moorosi himself part San. That kinship connection is why San fighters used 'Moroa' (Bushman) as the password to Moorosi's mountain stronghold in 1879.",
                },
              ].map((chief) => (
                <div key={chief.name} style={{ background: '#2C1810', padding: '28px 24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {chief.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: '#9E8C7A',
                      lineHeight: 1.7,
                    }}
                  >
                    {chief.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Nomansland / Transkei */}
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '24px',
              }}
            >
              Nomansland · East Griqualand · Transkei
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1px',
                background: 'rgba(196,98,45,0.2)',
                marginBottom: '16px',
              }}
            >
              {[
                {
                  name: 'Nqabayo (Ngqabayi)',
                  detail: 'Led a band of 43 men near the Xuka and Mooi Rivers at the base of the Drakensberg. Notable for controlling the preparation of arrow poison. His people were attacked at Gubenxa in 1857 after a dispute with Thembu chief Mgudhluwa. Most of his men were killed. Gubenxa is today one of the Ngcobo villages where AmaQithi families are documented to live.',
                },
                {
                  name: 'Luhayi',
                  detail: 'Head of a main San family in the Tsolo district and the official rainmaker for Mpondomise chief Mditshwa. Photographed by Sir Walter Stanford in 1888. His family held the same dual role the AmaQithi held at Rhodana: San ancestry, performing rainmaking and healing for a neighbouring Nguni chief while maintaining their own identity.',
                },
                {
                  name: 'Mdwebo',
                  detail: 'Led a band between the Ngeli Mountains and the Mzimvubu River. A vassal of Mpondomise chief Mandela by marriage. Despite political ties to Nguni rulers, his band retained a nomadic hunter-gatherer way of life — the same pattern of integration without erasure that defined the AmaQithi experience at Rhodana.',
                },
              ].map((chief) => (
                <div key={chief.name} style={{ background: '#2C1810', padding: '28px 24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {chief.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: '#9E8C7A',
                      lineHeight: 1.7,
                    }}
                  >
                    {chief.detail}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                color: '#9E8C7A',
                fontStyle: 'italic',
                lineHeight: 1.65,
                maxWidth: '620px',
                marginTop: '24px',
              }}
            >
              The pattern across all these leaders is the same: San chiefs negotiating survival through alliances with neighbouring nations, trading knowledge and military service for land and protection — while keeping their identity intact. The AmaQithi at Rhodana were not an exception. They were part of a wider San political strategy across southern Africa.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Izibongo */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Izibongo</p>
            <h2 style={h2}>The praise names of AmaQithi.</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '40px',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                    fontStyle: 'italic',
                    color: '#E8A857',
                    lineHeight: 2,
                    marginBottom: '16px',
                  }}
                >
                  Ndinga, Mnono, Rhadu, Mlebe,<br />
                  Nomsobodwana,<br />
                  Sopitsho Ngqolomsila,<br />
                  Yemyem.<br />
                  NgamaQithi amahle neenzipho zawo.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.82rem',
                    color: '#9E8C7A',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                  }}
                >
                  "The AmaQithi — beautiful, with their nails." You say this when you introduce yourself. You say it when you arrive somewhere and need to be known.
                </p>
              </div>
              <div>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  Izibongo are praise poems. They are the clan's memory — names, events, the character of the people who came before. Nobody wrote them first. They were spoken. Passed from parents to children. Said at gatherings. Said to strangers who needed to know who you were.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The AmaQithi izibongo made it through the colonial years. Through the forced moves. Through everything that was done to make San people forget who they were. They are still here. That counts for something.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Generational timeline */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Chronology</p>
            <h2 style={h2}>The written record.</h2>
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'rgba(196, 98, 45, 0.3)',
                }}
              />
              {timelineItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    marginBottom: '36px',
                    paddingLeft: '24px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '-4px',
                      top: '6px',
                      width: '8px',
                      height: '8px',
                      background: '#C4622D',
                      transform: 'rotate(45deg)',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      color: '#C4622D',
                      marginBottom: '4px',
                    }}
                  >
                    {item.year}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: '#D4A96A',
                      lineHeight: 1.65,
                    }}
                  >
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        <PageCTA
          headline="You know your village. You know your name. That is enough to start."
          body="Applications are open to AmaQithi descendants, their families, and approved researchers. The council reviews each one."
          primaryLabel="Apply Now"
          primaryHref="/apply"
          secondaryLabel="See the Families"
          secondaryHref="/families"
        />
      </main>
      <Footer />
    </>
  );
}
