const BASE = 'https://qithi.co.za';

// Organisation schema — embedded on every page
export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'AmaQithi',
  alternateName: ['AmaQithi Clan', 'Mqithi Clan', 'AmaQithi San'],
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE}/logo.png`,
    width: 1024,
    height: 1024,
  },
  description:
    'AmaQithi are San (AbaThwa) First People of the White Kei River basin, Lady Frere and the Cacadu mountains, Eastern Cape, South Africa.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Qithi Village, Lady Frere, Eastern Cape',
    geo: { '@type': 'GeoCoordinates', latitude: -31.7048, longitude: 27.2328 },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lady Frere',
      addressRegion: 'Eastern Cape',
      addressCountry: 'ZA',
    },
  },
  areaServed: [
    { '@type': 'Place', name: 'Lady Frere, Eastern Cape' },
    { '@type': 'Place', name: 'Ngcobo, Eastern Cape' },
    { '@type': 'Place', name: 'Cofimvaba, Eastern Cape' },
    { '@type': 'Place', name: 'Engcobo, Eastern Cape' },
    { '@type': 'Place', name: 'Cala, Eastern Cape' },
    { '@type': 'Place', name: 'Free State, South Africa' },
  ],
  knowsAbout: [
    'San history Eastern Cape',
    'AbaThwa First People South Africa',
    'AmaQithi clan history',
    'Khoisan heritage',
    'White Kei River history',
    'Rhodana Thembu history',
    'Indigenous genealogy South Africa',
  ],
  sameAs: [],
};

// WebSite schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: 'AmaQithi',
  description:
    'The authoritative clan portal for AmaQithi (San/AbaThwa) First People of the White Kei River basin.',
  publisher: { '@id': `${BASE}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/families?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

// Home page FAQ schema — highest GEO/AIO visibility
export const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who are the AmaQithi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AmaQithi are San (AbaThwa) First People indigenous to the White Kei River basin in the Eastern Cape, South Africa. They are not of Thembu origin — they were integrated into the Thembu nation through political alliance with Queen Nonesi at Rhodana from 1841, not by conquest. The San leader Mqithi was already at Rhodana before the Thembu arrived. Every foundational AmaQithi surname — Qwabi, Nqabayo, Mqithi — carries the Q palatal click consonant, a Khoisan linguistic marker absent from original Bantu languages. According to testimony recorded by Sir Walter Stanford (Macquarrie 1962:31), Thembu groups on the White Kei were "on comparatively friendly terms with San families and clans" in the area circa 1850.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the history of the AmaQithi clan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AmaQithi San clan history spans millennia in the White Kei River basin. By 1835, San chief Madolo led his people to the Glen Grey area near Lady Frere. In 1839, the LMS Bushman School on the White Kei (Cacadu) River was established, with fifteen San families present by 1842. When Queen Nonesi established the Thembu Great Place at Rhodana in 1841, she found the landscape already inhabited by San communities. The Mqithi clan was recognised as the "Royal San" of Rhodana — given Qithi Village (Location 17/18) directly adjacent to the royal residence. San served as rainmakers, frontier scouts, and elite marksmen in the War of Mlanjeni (1850–1853). The San leader and patriarch Qwabi Joka was born in 1842 in the White Kei basin. His son Molosi was named during Moorosi\'s War of 1879, in which San bowmen were key combatants. His youngest son was named Bushman (Boesman) to permanently preserve San identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the AmaQithi family surnames?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AmaQithi clan surnames include: Qwabi, Nqabayo, Mqithi, Manimani, Skampula, Mgengwana, Tshabe, Mbaba, Ngubo, Shumana, Khethelo, Mhlungulwa, Ngqela, Plata, Mfumba, Silimela, Ntulo Limba, Gobelo, Titi, Kula, Msebe, Matho, Fanakho, Bambatha, Mtshabe, Skeyi, Sokoti, and others. The Q click consonant is the phonetic marker of San origin — any surname carrying the Q click is a candidate for AmaQithi lineage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do AmaQithi families live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AmaQithi families are located across five regions: (1) Lady Frere and Rhodana — Qithi Village, Mkapusi, Agnes, Esikhwanqeni, Lower Seplan, Hala 2, Qugqwaru, Bholoto, Tsembeyi, Ngcuka; (2) Ngcobo — Gubenxa Lucwecwe, Lahlangubo, eMadladleni, Gqutyini, Zadungeni, Qumanco, Maqwathini; (3) Cofimvaba — Shobeni; (4) Engcobo and Cala regions; (5) Free State, originating from Mcambalala in Luxeni, Lady Frere. Qithi Village itself shares a fence line with the Rodana Clinic and Rodana PJS School, adjacent to the historic Thembu Great Place at Rhodana.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AmaQithi Genomy DNA project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AmaQithi Genomy project is building the first scientific map of San genetic heritage within the AmaQithi clan through voluntary DNA testing. The project tracks L0 and L1 mitochondrial haplogroups — the oldest human lineages on Earth, concentrated in southern African San populations. These haplogroups are direct genetic evidence of San ancestry. Participants provide a DNA sample, which is stored securely and used exclusively to map the AmaQithi lineage. The oral history says the AmaQithi are San. The DNA project provides scientific confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there AmaQithi support or a community fund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AmaQithi Trust is being formally constituted as a Deed of Trust under South African law. It will pool resources across all AmaQithi families to fund bursaries from Grade 6 through university, seed AmaQithi-owned businesses, cover community infrastructure, and provide emergency relief. Every contributing family holds a governance stake. The Trust is administered by an elected council of Contributing Members. Registration opens at qithi.co.za.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do AmaQithi names contain click consonants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Q palatal click in Qwabi, Qithi, and Mqithi is direct linguistic evidence of San (Khoisan) ancestry. Original Bantu languages had no click consonants. Nguni languages (including Xhosa) absorbed Q, C, and X clicks through centuries of interaction, intermarriage, and structural assimilation with Khoisan peoples. A surname containing the Q click is not a Xhosa name that sounds unusual — it is phonetic evidence of San origin. In the original !Ui-Taa or Central Khoe language groupings, the name Qithi would have been written as !Qhiti → ‡Qiti → ||Giti.',
      },
    },
  ],
};

// Who We Are article schema
export const whoWeAreSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${BASE}/who-we-are#article`,
  headline: 'AmaQithi — San (AbaThwa) First People of the White Kei River',
  description:
    'The complete history of the AmaQithi clan: San First People of the White Kei River basin, their alliance with Queen Nonesi at Rhodana, the Mqithi lineage, click consonant evidence, and generational chronology from Qwabi Joka (1842) to the present.',
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  author: { '@id': `${BASE}/#organization` },
  publisher: { '@id': `${BASE}/#organization` },
  inLanguage: 'en-ZA',
  about: [
    { '@type': 'Thing', name: 'San people', sameAs: 'https://en.wikipedia.org/wiki/San_people' },
    { '@type': 'Thing', name: 'AbaThwa', sameAs: 'https://en.wikipedia.org/wiki/San_people' },
    { '@type': 'Thing', name: 'White Kei River', sameAs: 'https://en.wikipedia.org/wiki/White_Kei_River' },
    { '@type': 'Thing', name: 'Lady Frere', sameAs: 'https://en.wikipedia.org/wiki/Lady_Frere' },
    { '@type': 'Thing', name: 'Khoisan languages', sameAs: 'https://en.wikipedia.org/wiki/Khoisan_languages' },
  ],
  mentions: [
    { '@type': 'Person', name: 'Queen Nonesi', description: 'Thembu Queen Regent who established Rhodana Great Place in 1841' },
    { '@type': 'Person', name: 'Mqithi', description: 'San captain at Rhodana, ancestor of the AmaQithi clan' },
    { '@type': 'Person', name: 'Qwabi Joka', description: 'San patriarch of the Qwabi branch, born 1842 in White Kei basin' },
    { '@type': 'Person', name: 'Chief Madolo', description: 'San chief who led his people to Glen Grey (Lady Frere) area circa 1835' },
    { '@type': 'Person', name: 'Chief Jumba', description: 'Thembu chief on the White Kei in friendly relations with San clans circa 1850' },
    { '@type': 'Person', name: 'Sir Walter Stanford', description: 'Colonial official who recorded Silayi\'s testimony about San presence on the White Kei' },
  ],
  citation: {
    '@type': 'CreativeWork',
    name: 'Macquarrie 1962:31 — Sir Walter Stanford\'s papers',
    description: 'Source: statement made by Silayi, a subject of Jumba\'s, to Sir Walter Stanford (Macquarrie 1962:31) regarding San families on the White Kei circa 1850.',
  },
  image: { '@type': 'ImageObject', url: `${BASE}/logo.png`, width: 1024, height: 1024 },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/who-we-are` },
};

// Families page — genealogy + place schema
export const familiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${BASE}/families#article`,
  headline: 'AmaQithi Families — Five Regions, Dozens of Surnames, One San Bloodline',
  description:
    'Complete listing of AmaQithi clan families by region: Lady Frere, Ngcobo, Cofimvaba, Engcobo, and the Free State. Villages, surnames, and the Manimani and Ngcongolo oral history accounts.',
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  author: { '@id': `${BASE}/#organization` },
  publisher: { '@id': `${BASE}/#organization` },
  inLanguage: 'en-ZA',
  about: [
    { '@type': 'Thing', name: 'AmaQithi families' },
    { '@type': 'Place', name: 'Lady Frere', geo: { '@type': 'GeoCoordinates', latitude: -31.7048, longitude: 27.2328 } },
    { '@type': 'Place', name: 'Ngcobo', geo: { '@type': 'GeoCoordinates', latitude: -31.6670, longitude: 27.8930 } },
    { '@type': 'Place', name: 'Cofimvaba', geo: { '@type': 'GeoCoordinates', latitude: -31.9980, longitude: 27.5940 } },
  ],
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/families` },
};

// Genealogy page — Genomy project schema
export const genealogySchema = {
  '@context': 'https://schema.org',
  '@type': 'ResearchProject',
  '@id': `${BASE}/genealogy#project`,
  name: 'AmaQithi Genomy — San Genetic Heritage Mapping Project',
  description:
    'The first scientific map of San (AbaThwa) genetic heritage within the AmaQithi clan of the Eastern Cape. Voluntary DNA testing tracking L0 and L1 haplogroups — the oldest human mitochondrial lineages on Earth.',
  url: `${BASE}/genealogy`,
  funder: { '@id': `${BASE}/#organization` },
  about: [
    { '@type': 'Thing', name: 'San genetics', description: 'L0 and L1 mitochondrial haplogroups — oldest human lineages on Earth, concentrated in southern African San populations' },
    { '@type': 'Thing', name: 'Khoisan DNA', description: 'Genetic evidence of San ancestry through haplogroup testing' },
  ],
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/genealogy` },
};

interface SchemaOrgProps {
  schemas: object[];
}

export default function SchemaOrg({ schemas }: SchemaOrgProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
