import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, familiesSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi Families — Surnames, Villages and Regions Across the Eastern Cape',
  description:
    'Complete listing of AmaQithi clan families by region: Lady Frere, Ngcobo, Cofimvaba, Engcobo, Cala and the Free State. Surnames include Qwabi, Manimani, Skampula, Mgengwana, Tshabe, Ngubo, Ngqela, Plata, and more. Villages from Qithi Village to Maqwathini.',
  keywords: [
    'AmaQithi families', 'AmaQithi surnames', 'AmaQithi villages',
    'Qwabi family Eastern Cape', 'Manimani AmaQithi', 'Skampula clan',
    'AmaQithi Lady Frere', 'AmaQithi Ngcobo', 'AmaQithi Cofimvaba',
    'Qithi village location', 'AmaQithi Free State', 'Ngcongolo Mafilika',
    'AmaQithi Engcobo', 'AmaQithi Cala', 'AmaQithi family names',
    'San family Eastern Cape', 'AbaThwa families South Africa',
  ],
  openGraph: {
    title: 'AmaQithi Families — Surnames, Villages and Regions',
    description:
      'Five regions, dozens of surnames, one San bloodline. Complete AmaQithi family listing from Lady Frere and Rhodana to Ngcobo, Cofimvaba, and the Free State.',
    url: `${BASE}/families`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi families' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/families` },
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
const bodyText: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '1rem',
  color: '#D4A96A',
  lineHeight: 1.75,
  marginBottom: '16px',
};

const regions = [
  {
    name: 'Lady Frere & Rhodana',
    villages: ['Qithi Village (Location 17/18)', 'Mkapusi', 'Agnes', 'Esikhwanqeni', 'Lower Seplan', 'Qugqwaru', 'Bholoto', 'Tsembeyi', 'Hala 2', 'Ngcuka'],
    surnames: ['Qwabi', 'Qithi', 'Mqithi', 'Manimani', 'Skampula'],
    note: 'The founding axis. Rhodana is where Mqithi received Qithi Village from Queen Nonesi. The Qwabi lineage traces directly from Qwabi Joka (1842) who died in the White Kei basin.',
  },
  {
    name: 'Ngcobo',
    villages: ['Gubenxa Lucwecwe', 'Lahlangubo', 'eMadladleni', 'Gqutyini', 'Zadungeni', 'Qumanco', 'Maqwathini'],
    surnames: ['Mgengwana', 'Ntulo Limba', 'Gobelo', 'Titi', 'Kula', 'Msebe', 'Skhampula', 'Matho', 'Tyhokolo', 'Fanakho', 'Manimani'],
    note: 'The Manimani branch left Lady Frere from the Rhodana area and settled in Ngcobo, Maqwathini. Nkosikho Manimani is also Qithi — son of Sinduwamba, son of Sipenisi, son of Poto, son of Manimani, son of Phonye, son of Dolo.',
  },
  {
    name: 'Cofimvaba',
    villages: ['Shobeni'],
    surnames: ['Ngqela', 'Bambatha', 'Mtshabe', 'Skeyi', 'Sokutapa', 'Ndaleni'],
    note: 'Ngcongolo and his brother Mafilika came from Cofimvaba in the Shobeni. They arrived at Qiti first — standing on the red wall on top of the white hill where the scythes are buried. They brought Khethelo and Usdlwengu with them.',
  },
  {
    name: 'Engcobo / Cala Region',
    villages: ['Engcobo district'],
    surnames: ['Tshabe', 'Mbaba', 'Ngubo', 'Shumana', 'Khethelo', 'Mhlungulwa', 'Sokoti'],
    note: 'Additional Qithi families across the Engcobo and Cala region. The Khethelo line is traced through Mbukushe, eldest son of Khethelo, who fathered Zalikho, Galada, Sinoko, and Libaziso.',
  },
  {
    name: 'Free State',
    villages: ['Mcambalala in Luxeni, Lady Frere (origin)'],
    surnames: ['Plata', 'Mfumba', 'Silimela'],
    note: 'Qithi families in the Free State come from Mcambalala in Luxeni, Lady Frere. The Silimela line traces through Mnqayi (also Daloni) → Thiyekile → Teyimani. Nkqwiliso left his bride to look for work and never returned — but left children in the place where he was.',
  },
];

const wallOfRemembrance = [
  'Late Liston Ntshongwana',
  'Vuyani Ngqawuza',
  'Late David Skampula',
  'Themba Skampula',
  'Late Hlanganyana Xhwebethambisa Ngqawuza',
  'Late Mfoti Ngqawuza',
  'Late Mamazana Ngqawuza',
  'Late Zakade Ngqawuza',
  'Late Zolile Ngqawuza',
  'Ntobeko Mangqwengqwe',
  'Xolani Phithi',
  'Mnu. Stofile',
  'Thobile Roto',
  'Ace Mhlungulwana',
  'Bhutise Mthabathi',
  'Late Dinah Mthabathi',
  'Bishop Vuyisile Skampula',
  'Nkuleko Skampula',
  'Gwen Skampula',
  'Thozamile Nobhakade',
  'Mnu. IC Ndleleni',
  'Andrew wase Ntswelas',
];

export default function FamiliesPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, familiesSchema]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          eyebrow="AmaQithi — Families"
          headline="Five regions. One bloodline."
          subheading="The AmaQithi are not one village. Different branches, same San heritage — from Lady Frere and Rhodana to Ngcobo, Cofimvaba, and the Free State."
          intro="This is not a complete list. The AmaQithi genealogy project is ongoing. If your village or surname is missing, you are part of why this portal exists."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Families' }]} />
        </div>

        {/* Manimani lineage */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>The Manimani Lineage</p>
            <h2 style={h2}>From Rhodana to Ngcobo.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={bodyText}>
                  The Manimani branch left Lady Frere, from the Rhodana area, and pitched their
                  tents in Ngcobo, Maqwathini. The eldest recorded son is Nkosikho Manimani:
                </p>
                <div
                  style={{
                    borderLeft: '2px solid rgba(196,98,45,0.4)',
                    paddingLeft: '20px',
                    marginBottom: '20px',
                  }}
                >
                  {[
                    'Nkosikho',
                    'son of Sinduwamba',
                    'son of Sipenisi',
                    'son of Poto',
                    'son of Manimani',
                    'son of Phonye',
                    'son of Dolo',
                  ].map((name, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.9rem',
                        color: i === 0 ? '#E8A857' : '#9E8C7A',
                        lineHeight: 1.8,
                        paddingLeft: `${i * 12}px`,
                      }}
                    >
                      {name}
                    </p>
                  ))}
                </div>
                <p style={{ ...bodyText, color: '#9E8C7A', fontStyle: 'italic', fontSize: '0.85rem' }}>
                  The Ngcobo branch still needs the opportunity and knowledge of the house that
                  Manimani left from Lady Frere. That connection is what this portal is for.
                </p>
              </div>
              <div>
                <p style={eyebrow}>The Ngcongolo Oral Account</p>
                <p style={{ ...bodyText, color: '#9E8C7A' }}>
                  The oral history records: at sunset, many people came to Qiti. The first Qiti
                  person to arrive was Ngcongolo and his brother Mafilika. They arrived and stood
                  on the red wall on top of the white hill where the scythes are buried.
                </p>
                <p style={{ ...bodyText, color: '#9E8C7A' }}>
                  They were removed by the scythes when being chased by the whites in the land of
                  the Gwatyu, and crossed over to Qiti land. History says they came from Cofimvaba
                  in the Shobeni. Their capital was being sought. They brought Khethelo and his
                  brother Usdlwengu with them.
                </p>
                <p style={{ ...bodyText, color: '#9E8C7A' }}>
                  Tsula is the father of Ngcongolo and Mafilika. The eldest son of Khethelo was
                  Mbukushe — and that is where the village of Mbukushe was established. He fathered
                  four sons: Zalikho, Galada, Sinoko, and Libaziso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Regional cards */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Regional Distribution</p>
            <h2 style={h2}>Where the AmaQithi are.</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1px',
                background: 'rgba(196, 98, 45, 0.25)',
              }}
            >
              {regions.map((r) => (
                <div
                  key={r.name}
                  style={{
                    background: '#1A0F0A',
                    padding: '36px 32px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: '#E8A857',
                      marginBottom: '12px',
                    }}
                  >
                    {r.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: '#9E8C7A',
                      lineHeight: 1.65,
                      marginBottom: '16px',
                    }}
                  >
                    {r.note}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#C4622D',
                      marginBottom: '6px',
                    }}
                  >
                    Villages
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.82rem',
                      color: '#D4A96A',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    {r.villages.join(' · ')}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#C4622D',
                      marginBottom: '6px',
                    }}
                  >
                    Surnames
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {r.surnames.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: 'var(--font-body), Inter, sans-serif',
                          fontSize: '0.75rem',
                          color: '#C4622D',
                          border: '1px solid rgba(196, 98, 45, 0.35)',
                          padding: '3px 10px',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Wall of Remembrance */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Wall of Remembrance</p>
            <h2 style={h2}>Those who carried the community.</h2>
            <p style={{ ...bodyText, color: '#9E8C7A', maxWidth: '560px', marginBottom: '36px' }}>
              AmaQithi members whose community work has gone unseen. Named here so they are
              not forgotten.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {wallOfRemembrance.map((name) => (
                <span
                  key={name}
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.82rem',
                    color: name.startsWith('Late') || name.startsWith('late') ? '#9E8C7A' : '#D4A96A',
                    fontStyle: name.startsWith('Late') || name.startsWith('late') ? 'italic' : 'normal',
                    background: 'rgba(196, 98, 45, 0.05)',
                    border: '1px solid rgba(196, 98, 45, 0.2)',
                    padding: '6px 14px',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Exclusivity notice */}
        <section
          className="cave-section cave-bg"
          style={{
            ...section,
            background: '#1A0F0A',
            borderTop: 'none',
            borderBottom: 'none',
          }}
        >
          <div style={{ ...inner, maxWidth: '680px' }}>
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
              Access Notice
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontStyle: 'italic',
                color: '#9E8C7A',
                lineHeight: 1.7,
              }}
            >
              This portal is not open to the general public. Family records, genealogy data, and
              directory access are restricted to verified AmaQithi members and approved researchers.
              If you are AmaQithi and you are not yet registered, begin your application below.
            </p>
          </div>
        </section>

        <PageCTA
          headline="Find your branch. Join your family."
          body="Apply for verified membership to access the full AmaQithi family archive, genealogy data, and the skills directory."
          primaryLabel="Begin Application"
          primaryHref="/apply"
          secondaryLabel="Genealogy Project"
          secondaryHref="/genealogy"
        />
      </main>
      <Footer />
    </>
  );
}
