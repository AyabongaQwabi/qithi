import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, amaqithiSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi Clan — Mqithi History, Qithi Meaning, Iziduko & Clan Names',
  description:
    'AmaQithi clan: Thembu-San lineage rooted in Quthing, Lesotho. Qithi meaning in Xhosa, iziduko, mqithi clan praises, clan names from Ngcobo to Lady Frere. The full history of a people marked by the Ingqithi and the Q click consonant.',
  keywords: [
    'AmaQithi clan', 'AmaQithi clan names', 'Mqithi clan', 'Mqithi clan praises',
    'iziduko mqithi', 'Qithi meaning in Xhosa', 'Qithi clan names', 'Qithi clan praises',
    'Qithi history in South Africa', 'Qithi in Lesotho', 'Qithi in Quthing',
    'Qwabi clan', 'AmaQithi diaspora', 'Mkapusi Lady Frere', 'eNgcobo AmaQithi',
    'Cofimvaba AmaQithi', 'AmaQithi Thembu San', 'beNgqithi', 'Ingqithi',
    'AmaQithi izibongo', 'AmaQithi clans Eastern Cape', 'Qithi history in Xhosa',
    'Rhodana Thembu', 'AmaQithi surnames', 'Ngcongolo AmaQithi',
  ],
  openGraph: {
    title: 'AmaQithi Clan — Mqithi History, Qithi Meaning, Iziduko & Clan Names',
    description:
      'Qithi meaning in Xhosa, mqithi clan praises (iziduko), AmaQithi clan names, and the full history from Quthing in Lesotho to Lady Frere. The San-Thembu bloodline that carried the Q click through centuries.',
    url: `${BASE}/amaqithi`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/amaqithi` },
};

const amaqithiFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Qithi mean in Xhosa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qithi (also written Mqithi or Qhitsi) is rooted in isi-Qiti — a separated, enclosed, or isolated space. In the landscape of the Eastern Cape, Qithi referred to a restricted tract of land, often near a royal base, used for specialised agricultural management or as a secure enclosure. The Q is a San palatal click consonant, absent from original Bantu languages — phonetic proof that the name predates the Nguni presence and came from the indigenous San (AbaThwa) who lived in the area. Colonial clerks who could not reproduce the click spelled the name as Kiti, Chiti, Xiti, or Tshiti.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the AmaQithi clan praises (iziduko)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AmaQithi iziduko (clan praises, also called izibongo) are: Ndinga, Rhadu, Mnono, Mlebe, Nomsobodwana, Sopitsho Ngqolomsila, Yemyem. Nkomo ayizali izala ngokumiselwa. NgamaQithi amahle neenzipho zawo — "The AmaQithi, beautiful with their nails." These praises are said when introducing yourself, arriving somewhere, or being recognised as clan. Nobody wrote them first. They were spoken and passed from parents to children across generations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the AmaQithi clan names and surnames?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AmaQithi clan surnames include: Qwabi, Mqithi, Manimani, Ngcongolo, Skampula, Mgengwana, Tshabe, Mbaba, Ngubo, Shumana, Khethelo, Mhlungulwa, Silimela, Ntulo, Limba, Gobelo, Titi, Kula, Msebe, Matho, Fanakho, Ngqela, Bambatha, Mtshabe, Skeyi, Sokoti, Plata, Mfumba, Ndaleni, Sokutapa. The Q click consonant is the phonetic marker — any surname carrying it is a candidate for AmaQithi lineage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the history of AmaQithi in Quthing, Lesotho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quthing is the Sotho pronunciation of emaQithini — the Xhosa way of saying "the place of the Qithi." The valley became a sanctuary for Thembu and San people under King Moorosi of the BaPhuthi during the Mfecane (c. 1816–1835). San bowmen were the core of Moorosi\'s military. On 20 November 1879, colonial forces took Mount Moorosi and destroyed the sanctuary. The surviving AmaQithi families fled south — to eNgcobo, Cofimvaba, and Mkapusi in Lady Frere. Qwabi Joka, born 1842, was among those who arrived in Lady Frere after the fall. He died in Mkapusi in 1915.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do AmaQithi families live in South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AmaQithi families are found across: Lady Frere (Qithi Village, Mkapusi, Agnes, Esikhwanqeni, Lower Seplan, Hala 2, Qugqwaru, Bholoto, Tsembeyi, Ngcuka), eNgcobo (Gubenxa Lucwecwe, Lahlangubo, eMadladleni, Gqutyini, Zadungeni, Qumanco, Maqwathini), Cofimvaba (Shobeni), Cala region, and the Free State (from Mcambalala in Luxeni, Lady Frere). Qithi Village sits directly next to the Rodana Clinic and Rodana PJS School — adjacent to the Thembu Great Place at Rhodana.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who was the first Qithi person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to oral history recorded by community members, the first Qithi person to arrive at the place known as Qiti was Ngcongolo and his brother Mafilika. They stood on the red wall on top of the white hill where the scythes are buried, having come from Cofimvaba (Shobeni). Tsula is named as the father of Ngcongolo and Mafilika. The written record has not yet confirmed a single man named Qithi as the clan founder — the oral record gives the name to a place first, not a person.',
      },
    },
  ],
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

const identityPillars = [
  {
    title: 'Derived Branch of the Thembu Great House',
    body: 'The AmaQithi are a derived branch of the Thembu Great House that preserves a direct San ritual lineage. They are not outsiders to the Thembu — they are integral to it, carrying the older San layer that the Thembu nation was built upon.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [History, 424]',
  },
  {
    title: 'Royal San — Ritual Specialists',
    body: 'They were known as "Royal San" — hereditary ritual specialists and rainmakers who served the Thembu kings across generations. Their ritual authority came from being the original inhabitants of the land, a seniority the Thembu formally acknowledged.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [History, 126]',
  },
  {
    title: 'Bearers of the Ingqithi',
    body: 'The Ingqithi (amputating the first joint of the little finger) is a ritual inherited from the San and carried by this division of the Thembu. It is described in historical records as definitive proof of the "friendly amalgamation" between the two peoples.',
    citation: 'The Royal Lineage and San Heritage of the abaThembu, PDF pp. 2 [32–34; 28/396, 388]',
  },
  {
    title: 'The Click in the Name',
    body: 'The Q in Qithi and Qwabi is a San click consonant — a phonetic root not native to Bantu languages. Every colonial spelling variation (Kiti, Xiti, Chiti) confirms a name that pre-existed the written record and came from the San half of the San-Thembu matrix.',
    citation: 'Linguistic analysis; update1.md §2',
  },
];

const qwabiGenerations = [
  {
    gen: 'Generation 1',
    name: 'Qwabi Joka',
    dates: 'b. 1842 · d. 1915 · Mkapusi',
    detail: 'Born in the White Kei basin. Fought in Moorosi\'s War (1879) in Quthing, Lesotho. Arrived in Mkapusi, Lady Frere after the fall of the mountain. Died in Mkapusi in 1915. Named his firstborn son Molosi in honour of Chief Moorosi — adjusting the royal name to navigate British blacklists. Named his youngest son Bushman (Boesman) outright, ensuring the family\'s San identity would never be forgotten.',
  },
  {
    gen: 'Generation 2',
    name: 'Sons of Qwabi Joka',
    dates: 'Molosi · Jonas (Halile) · Bushman (Boesman)',
    detail: 'Three sons who became the founders of the main Qwabi family lines: Molosi Qwabi (b. est. 1879, named during the war), Jonas/Halile Qwabi (b. est. 1883), and Bushman/Boesman Qwabi (b. est. 1890). Bushman was recorded working the Steynsburg rails in 1915. These three fathered the Qwabi families now found in Steynsburg, Queenstown, Ezibeleni, Lady Frere, and Ndlovukazi.',
  },
  {
    gen: 'Generation 3',
    name: 'Yanki Qwabi (son of Molosi)',
    dates: 'Lady Frere line',
    detail: 'Son of Molosi Qwabi. Father of Dumile Qwabi.',
  },
  {
    gen: 'Generation 4',
    name: 'Dumile Qwabi (son of Yanki)',
    dates: 'Lady Frere · Guba',
    detail: 'Son of Yanki Qwabi. A soldier who was granted land allotments in the Lady Frere area. Founded the villages Hala 1 and Hala 2, and established Qwabi Primary School in Lady Frere — institutions that bear the family name to this day. His homestead was in the Guba area.',
  },
];

const dispersalLines = [
  {
    name: 'The Line of Ngcongolo — eNgcobo',
    body: 'A prominent ancestral line of the AmaQithi, including the lineage of Ngcongolo, fled from the mountain war zone at Quthing directly to eNgcobo after the fall of Mount Moorosi in November 1879. This line anchors a major branch of the clan in the eNgcobo district.',
    citation: 'update1.md §4',
  },
  {
    name: 'The Cofimvaba Line',
    body: 'Concurrently, other related families and branches of the AmaQithi fled the post-war colonial cleanup by migrating to Cofimvaba, spreading the clan footprint across the Transkeian territories.',
    citation: 'update1.md §4',
  },
  {
    name: 'The Line of Qhwabi — Mkapusi, Lady Frere',
    body: 'The line carrying the family name Qhwabi (Qwabi) migrated south to Mkapusi in Lady Frere, where they established Mqithi Village — also preserved in oral geography as Mawhumawhu. This became a quiet sanctuary where the bloodline was protected. Colonial clerks struggling with the click spelled the name as Qwabi or Qhwabhi; refugees sometimes used the name Molosi on documents to avoid the British blacklists that followed Moorosi\'s War.',
    citation: 'update1.md §4; oral history',
  },
];

export default function AmaQithiPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, amaqithiSchema, amaqithiFaqSchema, breadcrumbSchema([{ name: 'AmaQithi Clan', url: '/amaqithi' }])]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          bg
          eyebrow="The Clan — AmaQithi"
          headline="AbaThembu, AbaThwa — ubabona nge Ngqithi."
          subheading="You recognise them by the mark of the Ingqithi. A Thembu clan born of an ancient San-Bantu fusion — royal counsellors, ritual specialists, and survivors of the great diaspora."
          intro="The AmaQithi are not a marginal group absorbed into a larger nation. They are the proof of that nation's own origins — the visible San half of a San-Thembu matrix that the Thembu have always carried, preserved in a clan name, a ritual, and an unbroken oral tradition."
          researchHref="/thesis"
          lineageHref="/lineage"
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'AmaQithi Clan' }]} />
        </div>

        {/* Core identity */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Who We Are</p>
            <h2 style={h2}>Four things that define the AmaQithi.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(196,98,45,0.2)' }}>
              {identityPillars.map((pillar) => (
                <div key={pillar.title} style={{ background: '#2C1810', padding: '28px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#E8A857', marginBottom: '10px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.7, marginBottom: '10px' }}>
                    {pillar.body}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', color: '#6B5A4E', fontStyle: 'italic' }}>
                    {pillar.citation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* The ongoing search */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>The Search Is Still On</p>
            <h2 style={h2}>We have not yet found the man called Qithi — but we have not stopped looking.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={body}>
                  Our research has so far found no recorded history of a man named Qithi born as a son of the Thembu king Ntande — and therefore no confirmed record of him as a brother of Mcube. The only well-documented son of Ntande in the historical record is <strong style={{ color: '#E8A857' }}>Mnguti</strong>, whose lineage is rich and traceable. But history does not always write down every son. Mqithi could be a long-lost or simply unrecorded branch — perhaps a brother of Mnguti who slipped through the gaps in the written colonial record.
                </p>
                <p style={body}>
                  What we can say is this: <strong style={{ color: '#E8A857' }}>the name itself carries clues</strong>. The root word <em>Qithi</em> appears in places that connect the San, the land, and the Thembu in ways that are hard to dismiss. The valley of <strong style={{ color: '#E8A857' }}>Quthing</strong> in Lesotho — where San people lived under Chief Moorosi until 1879 — is the Sotho way of pronouncing <em>emaQithini</em> in Xhosa. The same root, the same sound, from the same region.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  And then there is the ritual. <strong style={{ color: '#D4A96A' }}>Ingqithi</strong> — the finger-cut custom that defines this clan — contains the word <em>qithi</em> inside it. George Stow, writing in the 1800s, recorded that &ldquo;among the Bushman tribes the custom of cutting off the terminal joint of the little finger was almost universal.&rdquo; The AmaQithi may carry that practice as a direct thread connecting them to the San — whether through a man named Qithi, or through the land and the people the name belongs to.
                </p>
              </div>
              <div>
                <p style={body}>
                  The village in Lady Frere today is called <strong style={{ color: '#E8A857' }}>KwaTshatshu</strong> — known locally as <strong style={{ color: '#E8A857' }}>emaQithini</strong>. It is inhabited only by AmaQithi. Qithi Village sits directly next to the Rodana Clinic and Rodana PJS School. That proximity to the Thembu royal court at Rhodana is real and documented on the map.
                </p>
                <p style={body}>
                  The families we can trace — the Qwabi and Joka lines — arrived in the Lady Frere area after the fall of Chief Moorosi&apos;s mountain in 1879. They came from Quthing. Whether AmaQithi were already living at Rhodana before they arrived is a question the record has not yet answered.
                </p>
                <p style={{ ...body, color: '#9E8C7A', fontStyle: 'italic' }}>
                  If you have information about the origins of the name Qithi, a family oral tradition about Ntande&apos;s sons, or records that touch on these questions — we want to hear from you. This history is still being recovered.
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5 }}>
                  Sources: The San-Phuti Matrix (AmaQithi Research Archive, 2026); Stow, <em>The Native Races of South Africa</em>, Ch. IX, p. 170; Stanford (Macquarrie 1962:31); oral history
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Quthing & Moorosi */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Qithi in Lesotho · Quthing · 1816–1879</p>
            <h2 style={h2}>The mountain sanctuary and the war that shattered it.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={body}>
                  When the <em>Mfecane</em> wars of the early 1800s erupted, segments of the Thembu nation fled north. They were not entering foreign territory — they were returning to their ancient Lesotho homelands, where Thembu lines had migrated as early as 1600–1650.
                </p>
                <p style={body}>
                  In the high valleys of <strong style={{ color: '#E8A857' }}>Quthing</strong> — a name combining a San click root (Q-) and a Sotho locative suffix (-ing) — the Thembu integrated with the local Baphuthi and remaining mountain San networks under King Moorosi. San bowmen were the core of Moorosi&apos;s defensive forces. The password to his mountain stronghold was <em>&ldquo;Moroa&rdquo;</em> — Bushman.
                </p>
              </div>
              <div>
                <p style={body}>
                  On <strong style={{ color: '#E8A857' }}>20 November 1879</strong>, colonial forces took the mountain. The sanctuary was destroyed. The surviving families dispersed rapidly into South Africa, fracturing along distinct family lines for safety.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  Qwabi Joka, born in 1842, named his firstborn son <strong style={{ color: '#D4A96A' }}>Molosi</strong> in honour of Moorosi — adjusting the royal name to navigate British blacklists. His youngest son he named outright <strong style={{ color: '#D4A96A' }}>Bushman (Boesman)</strong>, ensuring the memory of the mountain archers would never be erased.
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '20px' }}>
                  Source: update1.md §§ 3–4 (AmaQithi Research Archive, 2026); oral history
                </p>
                {/* Quthing map */}
                <div style={{ border: '1px solid rgba(196,98,45,0.25)', overflow: 'hidden' }}>
                  <img
                    src="/quthing_map.png"
                    alt="Satellite map of Quthing district in Lesotho showing the area around Mount Moorosi — where San people lived under Chief Moorosi until the 1879 war"
                    style={{ width: '100%', display: 'block', filter: 'brightness(0.88) contrast(1.08)' }}
                    loading="lazy"
                  />
                </div>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, marginTop: '8px' }}>
                  Quthing district, Lesotho — 46 minutes from the Mount Moorosi stronghold to Mkapusi in Lady Frere. The valley known as Quthing is the Sotho pronunciation of <em>emaQithini</em> in Xhosa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Post-1879 dispersal */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Post-1879 · The Great Dispersal</p>
            <h2 style={h2}>How the clan scattered — and survived.</h2>
            <p style={{ ...body, marginBottom: '40px' }}>
              After the fall of Mount Moorosi, the AmaQithi did not move as a single unit. They fractured into distinct geographical lines, each family taking a different route for safety. Three main lines are documented.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(196,98,45,0.2)' }}>
              {dispersalLines.map((line) => (
                <div key={line.name} style={{ background: '#1A0F0A', padding: '28px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: '#E8A857', marginBottom: '10px' }}>
                    {line.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.9rem', color: '#9E8C7A', lineHeight: 1.7, maxWidth: '720px', marginBottom: '8px' }}>
                    {line.body}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', color: '#6B5A4E', fontStyle: 'italic' }}>
                    {line.citation}
                  </p>
                </div>
              ))}
            </div>

            {/* Migration map summary */}
            <div style={{ marginTop: '48px', background: '#0F0904', border: '1px solid rgba(196,98,45,0.2)', padding: '28px 24px', maxWidth: '720px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#9E8C7A', lineHeight: 1.9 }}>
              <p style={{ color: '#C4622D', marginBottom: '12px', fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Migration Map</p>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>{`[ 1600–1650: Ancient Lesotho Splinter ]
          ↓
[ Quthing Highlands — Thembu/San/Phuthi Alliance ]
          ↓  (Fall of Mount Moorosi, Nov 1879)
     ┌────┼────────┐
     ↓    ↓        ↓
eNgcobo  Cofimvaba  Mkapusi (Lady Frere)
                    → Mqithi Village / Mawhumawhu`}</pre>
            </div>
            {/* Migration map image */}
            <div style={{ marginTop: '32px', maxWidth: '820px' }}>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4622D', marginBottom: '12px' }}>
                The Route — Mount Moorosi (Quthing) to Mkapusi, Lady Frere
              </p>
              <div style={{ border: '1px solid rgba(196,98,45,0.25)', overflow: 'hidden' }}>
                <img
                  src="/migration_map.png"
                  alt="Satellite map showing the 700km migration route from Mount Moorosi in Quthing, Lesotho to Mkapusi in Lady Frere, Eastern Cape — the path AmaQithi families took after the 1879 war"
                  style={{ width: '100%', display: 'block', filter: 'brightness(0.9) contrast(1.05)' }}
                  loading="lazy"
                />
              </div>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, marginTop: '8px' }}>
                The documented route from Quthing (Mount Moorosi) to Mkapusi, Lady Frere — approximately 700km. This is the path the Qwabi family took after the fall of Moorosi&apos;s mountain in November 1879.
              </p>
            </div>
            <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, marginTop: '8px', maxWidth: '680px' }}>
              Source: update1.md §§ 4, 6 (AmaQithi Research Archive, 2026)
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Qwabi genealogy */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>The Qwabi Line · Documented Genealogy</p>
            <h2 style={h2}>Qwabi Joka and the four generations we can trace.</h2>
            <p style={{ ...body, marginBottom: '12px' }}>
              The Qwabi family is a clan member line — not a royal house. Qwabi Joka was a fighter who participated in Moorosi&apos;s War; he was not a chief or a San royal. His line is documented because the family kept its name and its memory intact across four generations in the Eastern Cape.
            </p>
            <p style={{ ...body, color: '#9E8C7A', marginBottom: '40px' }}>
              The Joka family lived in Agnes — a neighbouring village to Mkapusi, directly next to the White Kei River. Whether Qwabi arrived with the Joka family or found some of his people already at Mkapusi is unclear. What is confirmed: Qwabi Joka died in 1915 in Mkapusi.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(196,98,45,0.2)' }}>
              {qwabiGenerations.map((g) => (
                <div key={g.gen} style={{ background: '#2C1810', padding: '28px 24px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C4622D', marginBottom: '6px' }}>
                      {g.gen}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: '#E8A857', marginBottom: '4px', lineHeight: 1.2 }}>
                      {g.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#9E8C7A', fontStyle: 'italic' }}>
                      {g.dates}
                    </p>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.7 }}>
                    {g.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Mkapusi map */}
            <div style={{ marginTop: '40px', border: '1px solid rgba(196,98,45,0.25)', overflow: 'hidden', maxWidth: '680px' }}>
              <img
                src="/mkapusi_map.png"
                alt="Satellite aerial of Mkapusi village in Lady Frere showing village boundaries and the nearby Mqithi area"
                style={{ width: '100%', display: 'block', filter: 'brightness(0.9) contrast(1.05)' }}
                loading="lazy"
              />
            </div>
            <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, marginTop: '8px', maxWidth: '680px', marginBottom: '24px' }}>
              Mkapusi village, Lady Frere — home of Qwabi Joka (d. 1915). Note &ldquo;Mqithi&rdquo; labelled directly on the satellite map, confirming the place name in the landscape.
            </p>

            {/* Diaspora locations */}
            <div style={{ marginTop: '8px', background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.2)', padding: '28px 24px' }}>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4622D', marginBottom: '16px' }}>
                Where the Qwabi line is today
              </p>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.9rem', color: '#D4A96A', lineHeight: 1.75, maxWidth: '680px' }}>
                The three sons of Qwabi Joka — Molosi, Jonas, and Bushman — fathered the families now found across:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {['Lady Frere', 'Mkapusi', 'KwaTshatshu (emaQithini)', 'Steynsburg', 'Queenstown', 'Ezibeleni', 'Ndlovukazi'].map((place) => (
                  <span key={place} style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.82rem', color: '#C4622D', background: 'rgba(196,98,45,0.07)', border: '1px solid rgba(196,98,45,0.4)', padding: '5px 14px' }}>
                    {place}
                  </span>
                ))}
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, marginTop: '10px', maxWidth: '680px' }}>
              Source: AmaQithi historical dossier; FamilySearch records cross-referenced with oral history
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Etymology — Qithi meaning */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Etymology · What Qithi Means</p>
            <h2 style={h2}>Qithi meaning in Xhosa — and what the name carried before anyone wrote it down.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#E8A857', marginBottom: '10px' }}>
                  The root: isi-Qiti
                </h3>
                <p style={body}>
                  In the landscape of the Eastern Cape, <em>qithi</em> (from <em>isi-Qiti</em>) meant a separated, enclosed, or isolated space — a restricted tract of land set aside near a royal or regent base. Thesis research identifies Qithi zones as specialised areas: royal agricultural management on one hand, secure holding areas for those awaiting royal judgment on the other.
                </p>
                <p style={body}>
                  The village of <strong style={{ color: '#E8A857' }}>Qithi</strong> in Lady Frere sits directly next to the Rodana Clinic and Rodana PJS School — the fence line of the Thembu Great Place established by Queen Nonesi in 1841. That proximity is not coincidence. The land was named before the Thembu arrived.
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#E8A857', marginBottom: '10px' }}>
                  The Q — a San click consonant
                </h3>
                <p style={body}>
                  The Q in Qithi, Qwabi, and Mqithi is a palatal click — a sound not native to Bantu languages. Nguni languages absorbed click consonants (Q, C, X) through centuries of interaction and intermarriage with the San (AbaThwa). A name carrying the Q click is not just unusual. It is phonetic evidence of San origin.
                </p>
                <p style={body}>
                  Colonial clerks who could not reproduce the sound spelled it as Kiti, Chiti, Xiti, or Tshiti on documents. In the original San (!Ui-Taa or Central Khoe) language groupings, the name would have carried even deeper click markers: <em>!Qhiti → ‡Qiti → ‖Giti</em>. Every spelling variation points back to the same root — a name that existed before the written record.
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5 }}>
                  Sources: thesis1.md (AmaQithi Research Archive, 2026); The San-Phuti Matrix: Etymology and Migration of the Qithi (2026); Kropf & Godfrey, Kafir-English Dictionary
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Iziduko — Clan Praises */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Iziduko · Izibongo · Mqithi Clan Praises</p>
            <h2 style={h2}>The call names of AmaQithi.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontStyle: 'italic', color: '#E8A857', lineHeight: 2, marginBottom: '16px' }}>
                  Ndinga, Rhadu, Mnono, Mlebe,<br />
                  Nomsobodwana,<br />
                  Sopitsho Ngqolomsila,<br />
                  Yemyem.<br />
                  Nkomo ayizali izala ngokumiselwa.<br />
                  NgamaQithi amahle neenzipho zawo.
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.82rem', color: '#9E8C7A', fontStyle: 'italic', lineHeight: 1.7 }}>
                  &ldquo;Cattle do not give birth by decree. The AmaQithi — beautiful, with their nails.&rdquo;
                </p>
              </div>
              <div>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  Iziduko are clan praises — the call names you say when you introduce yourself, when you arrive somewhere and need to be known. Nobody wrote them first. They were spoken, passed from parents to children, said at gatherings across generations.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  <em>Nkomo ayizali izala ngokumiselwa</em> — cattle do not give birth by decree. A line that speaks to identity that cannot be assigned by authority. You carry it or you don&apos;t.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The AmaQithi iziduko survived the colonial years, the forced moves, Moorosi&apos;s War, and the diaspora. They are still being said today. The lineage they carry is still traceable. That is what this site is for.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Clan names and surnames */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>AmaQithi Clan Names · Surnames</p>
            <h2 style={h2}>The families — where they are, and the surnames they carry.</h2>
            <p style={{ ...body, marginBottom: '32px' }}>
              AmaQithi families are spread across the Eastern Cape and beyond. The oral history of Ngcongolo and Mafilika — the first Qithi people recorded arriving at the place — places the earliest families coming from Cofimvaba (Shobeni), standing on the red wall on top of the white hill where the scythes are buried. From there, the clan grew outward.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '40px' }}>
              {[
                {
                  region: 'Lady Frere · Rhodana',
                  surnames: 'Qwabi, Mqithi, Manimani, Skampula',
                  villages: 'Qithi Village, Mkapusi, Agnes, Esikhwanqeni, Lower Seplan, Hala 2, Qugqwaru, Bholoto, Tsembeyi, Ngcuka',
                  note: 'Qithi Village shares a fence line with the Rodana Clinic and the Thembu Great Place at Rhodana. Oral history names Manimani as having left Lady Frere and settled in Maqwathini, eNgcobo.',
                },
                {
                  region: 'eNgcobo',
                  surnames: 'Ngcongolo, Ngqawuza, Mhlungulwa, Sokoti, Tshabe, Mbaba, Ngubo, Shumana, Manimani',
                  villages: 'Gubenxa Lucwecwe, Lahlangubo, eMadladleni, Gqutyini, Zadungeni, Qumanco, Maqwathini',
                  note: 'A major branch. Ngcongolo and his brother Mafilika are named in oral history as the first Qithi arrivals. Tsula is the father of Ngcongolo and Mafilika.',
                },
                {
                  region: 'Cofimvaba',
                  surnames: 'Ngqela, Bambatha, Mtshabe, Skeyi, Sokutapa, Ndaleni',
                  villages: 'Shobeni',
                  note: 'One of the three post-1879 dispersal lines. Families fled the colonial clean-up after Moorosi\'s War.',
                },
                {
                  region: 'Free State · Cala',
                  surnames: 'Plata, Mfumba',
                  villages: 'Originating from Mcambalala in Luxeni, Lady Frere',
                  note: 'Cala region families also included. Silimela (Free State) traces descent from Mnqayi/Daloni through Thiyekile and Teyimani.',
                },
              ].map((r) => (
                <div key={r.region} style={{ background: '#0F0904', border: '1px solid rgba(196,98,45,0.2)', padding: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#E8A857', marginBottom: '8px' }}>
                    {r.region}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.8rem', color: '#C4622D', marginBottom: '6px', fontWeight: 500 }}>
                    Surnames: {r.surnames}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.78rem', color: '#9E8C7A', lineHeight: 1.65, marginBottom: '6px' }}>
                    Villages: {r.villages}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.75rem', color: '#6B5A4E', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {r.note}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, maxWidth: '680px' }}>
              Sources: Community oral record (Vabantu Silimela); other qithi family.md (AmaQithi Research Archive, 2026)
            </p>
          </div>
        </section>

        <div className="section-rule" />

        <PageCTA
          headline="You know your village. You know your name. That is enough to start."
          body="Applications are open to AmaQithi descendants, their families, and approved researchers."
          primaryLabel="Apply Now"
          primaryHref="/apply"
          secondaryLabel="Explore the Families"
          secondaryHref="/families"
        />
      </main>
      <Footer />
    </>
  );
}
