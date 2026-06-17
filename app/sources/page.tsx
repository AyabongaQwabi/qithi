import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, sourcesSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'Research Sources | AmaQithi Heritage',
  description:
    '47+ sources behind the AmaQithi history project — books, theses, dictionaries, government records, and web sources. All listed so you can do your own research.',
  openGraph: {
    title: 'Research Sources — AmaQithi Heritage',
    description:
      'Every book, thesis, dictionary, and document used in the AmaQithi research. Listed openly so you can follow the same trail.',
    url: `${BASE}/sources`,
    type: 'article',
  },
  alternates: { canonical: `${BASE}/sources` },
};

const p = {
  bg: '#1A0F0A',
  card: '#2C1810',
  accent: '#C4622D',
  gold: '#E8A857',
  tan: '#D4A96A',
  muted: '#9E8C7A',
  cream: '#F5E6C8',
  border: 'rgba(196,98,45,0.2)',
  subtle: 'rgba(232,168,87,0.07)',
};

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: p.accent,
  marginBottom: '16px',
};

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
  fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
  fontWeight: 600,
  color: p.gold,
  lineHeight: 1.1,
  marginBottom: '20px',
};

const body: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.95rem',
  color: p.tan,
  lineHeight: 1.85,
};

interface Source {
  title: string;
  author?: string;
  type: string;
  where?: string;
  note?: string;
  searchHint?: string;
}

const books: Source[] = [
  {
    title: 'A History of the Xhosa c.1700–1835',
    type: 'Book',
    note: 'Core source for the early Xhosa and Thembu political landscape.',
    searchHint: '"A history of the Xhosa 1700" filetype:pdf',
  },
  {
    title: 'A Living Man from Africa: Jan Tzatzoe, Xhosa Chief and Missionary',
    type: 'Book',
    where: 'dokumen.pub',
    note: 'Biography touching on the Eastern Cape frontier period.',
    searchHint: '"Jan Tzatzoe" Xhosa missionary filetype:pdf',
  },
  {
    title: 'History of the Basuto, Ancient and Modern',
    author: 'F. Ellenberger (1912)',
    type: 'Book',
    note: 'Essential for the Lesotho / Quthing connection and the Moorosi period.',
    searchHint: '"Ellenberger History of the Basuto" filetype:pdf',
  },
  {
    title: 'Outlaws, Anxiety, and Disorder in Southern Africa: Material Histories of the Maloti-Drakensberg',
    type: 'Book',
    where: 'dokumen.pub',
    note: 'Covers the mountain frontier zone where the AmaQithi likely sheltered after 1879.',
    searchHint: '"Maloti Drakensberg outlaws" filetype:pdf',
  },
  {
    title: 'Sonqua: Southern San History and Art after Contact',
    type: 'Book / Academic Paper',
    where: 'Academia.edu',
    note: 'San history and rock art — key for the AmaQithi / San connection.',
    searchHint: '"Sonqua Southern San history art after contact" filetype:pdf',
  },
  {
    title: 'Stow: The Native Races of South Africa',
    author: 'G.W. Stow',
    type: 'Book',
    where: 'EMANDULO (UCT digital library)',
    note: 'Contains the finger-cutting (ingqithi) quotation. Two versions used — one from EMANDULO. You need to find and download the PDF manually from EMANDULO.',
    searchHint: 'site:emandulo.uct.ac.za "native races south africa" Stow',
  },
  {
    title: 'Struggle and Hope: Reflections on the Recent History of the Transkeian People',
    type: 'Book',
    where: 'dokumen.pub',
    note: 'Background on the Transkei political history.',
    searchHint: '"Struggle and Hope Transkeian" filetype:pdf',
  },
  {
    title: 'The House of Tshatshu: Power, Politics and Chiefs North-West of the Great Kei River',
    type: 'Book',
    note: 'Critical for the Tshatshu chieftaincy — the AmaQithi were in this territory.',
    searchHint: '"House of Tshatshu" chiefs "Great Kei" filetype:pdf',
  },
  {
    title: 'The South Eastern Bantu',
    author: 'J.H. Soga (1930)',
    type: 'Book',
    note: 'The foundational ethnographic text on the Nguni peoples. Soga covers the Thembu in detail.',
    searchHint: '"Soga South Eastern Bantu 1930" filetype:pdf',
  },
  {
    title: 'Theal: Records of South Eastern Africa, Vol. 4',
    author: 'G.M. Theal',
    type: 'Historical Record',
    note: 'Colonial-era records of events in the Eastern Cape. Useful for timeline anchoring.',
    searchHint: '"Theal Records South Eastern Africa" filetype:pdf',
  },
  {
    title: 'Who are abaThembu and where do they come from?',
    author: 'E.G. Sihele',
    type: 'Manuscript / Essay',
    note: 'Short but important Xhosa-language account of Thembu identity and origins.',
    searchHint: '"abaThembu" Sihele "where do they come from" filetype:pdf',
  },
];

const theses: Source[] = [
  {
    title: 'Unity and Division: Aspects of the History of abaThembu Chieftainship',
    type: 'UCT Thesis',
    where: 'Open UCT — University of Cape Town',
    note: 'The single most important academic source on internal Thembu politics.',
    searchHint: 'site:open.uct.ac.za "unity and division" abaThembu chieftainship',
  },
  {
    title: 'Strangers to Brothers: Interaction between South-Eastern San and Southern Nguni/Sotho Communities',
    author: 'Pieter Jolly (1994)',
    type: 'UCT Thesis',
    where: 'Open UCT — University of Cape Town',
    note: 'Directly addresses San-Nguni cultural interaction. One of the key sources for the Thembu-San fusion argument.',
    searchHint: 'site:open.uct.ac.za "strangers to brothers" San Jolly',
  },
  {
    title: 'Archaeology and Identity in the 19th Century Northern Cape Frontier',
    author: 'Nicholas Alexander Zachariou (2013)',
    type: 'UCT Thesis',
    where: 'EMANDULO (UCT)',
    searchHint: 'site:emandulo.uct.ac.za Zachariou frontier identity',
  },
  {
    title: 'The Northern Cape and its Inhabitants',
    author: 'Elisabeth Dell Anderson (1985)',
    type: 'UCT Thesis',
    where: 'EMANDULO (UCT)',
    searchHint: 'site:emandulo.uct.ac.za "northern cape inhabitants" Anderson',
  },
  {
    title: '"Wisdom Does Not Live in One House": Compiling Environmental History in Lesotho',
    author: 'Christopher R. Conz, Boston University (2017)',
    type: 'Dissertation',
    note: 'Environmental and oral history of Lesotho. Useful for the Quthing landscape context.',
    searchHint: '"wisdom does not live in one house" Lesotho Conz dissertation filetype:pdf',
  },
  {
    title: 'Material Values of the Teke Peoples of West Central Africa',
    type: 'Thesis',
    where: 'UEA Digital Repository',
    searchHint: '"Teke peoples" material values UEA filetype:pdf',
  },
];

const linguistic: Source[] = [
  {
    title: 'A Zulu-Kafir Dictionary',
    author: 'J.L. Döhne',
    type: 'Dictionary',
    note: 'Historical dictionary used to trace the meaning of isiXhosa/isiZulu root words including "qithi."',
    searchHint: '"Dohne Zulu Kafir dictionary" filetype:pdf',
  },
  {
    title: 'Kropf and Godfrey: Kafir-English Dictionary (2nd ed.)',
    author: 'Albert Kropf & Robert Godfrey',
    type: 'Dictionary',
    note: 'The main isiXhosa dictionary source for tracing word origins.',
    searchHint: '"Kropf Godfrey Kafir English dictionary" filetype:pdf',
  },
  {
    title: 'Khoe and San Language Report',
    author: 'PanSALB',
    type: 'Government Language Report',
    note: 'Overview of the status and documentation of Khoesan languages in South Africa.',
    searchHint: 'PanSALB "Khoe and San language report" filetype:pdf',
  },
  {
    title: 'Lexicostatistical Studies in Khoisan II/2: Towards a More Precise Phylogeny for the Tuu Family',
    type: 'Academic Paper',
    where: 'Journal of Language Relationship',
    searchHint: '"Tuu family" Khoisan lexicostatistical filetype:pdf',
  },
  {
    title: 'Language activists and linguists in pursuit of the siPhuthi cause',
    type: 'Academic Paper',
    where: 'Cambridge University Press / ResearchGate',
    note: 'Phuthi is the Tekela-Nguni language of the BaPhuthi — whose chief Moorosi the AmaQithi fought alongside.',
    searchHint: '"siPhuthi" language activists Cambridge filetype:pdf',
  },
  {
    title: 'THE LINGUISTIC CLASSIFICATION OF KORA',
    type: 'Article',
    where: 'South African History Online',
    searchHint: '"linguistic classification of Kora" South African History Online',
  },
  {
    title: 'Precolonial Catalytic Book',
    type: 'Reference',
    where: 'South African History Online',
    searchHint: 'site:sahistory.org.za "precolonial" catalytic',
  },
];

const government: Source[] = [
  {
    title: 'Emalahleni Local Municipality IDP 2016/2017, 2018–2019, and 2022–2027',
    type: 'Municipal Government Document',
    where: 'Emalahleni Local Municipality / Internet Archive',
    note: 'These IDPs contain village lists for the Emalahleni area — used to verify AmaQithi village names in the municipal record.',
    searchHint: '"Emalahleni local municipality IDP" site:archive.org OR site:emalahleni.gov.za filetype:pdf',
  },
  {
    title: 'Government Gazette Staatskoerant (December 2016)',
    type: 'Government Gazette',
    where: 'Open Gazettes South Africa',
    searchHint: 'site:opengazettes.org.za staatskoerant 2016',
  },
  {
    title: 'Truth and Reconciliation Commission of South Africa Report',
    type: 'Government Report',
    note: 'Referenced for 20th-century context in the Transkei.',
    searchHint: '"TRC report" South Africa filetype:pdf site:justice.gov.za',
  },
];

const web: Source[] = [
  {
    title: 'Morosi / King Moorosi — Wikipedia',
    type: 'Web',
    note: 'Background on the BaPhuthi chief whose 1879 war forced the AmaQithi dispersal.',
    searchHint: '"Moorosi" OR "Morosi" "BaPhuthi" wikipedia',
  },
  {
    title: 'Quthing — Wikipedia / Grokipedia',
    type: 'Web',
    note: 'The district in southern Lesotho where the AmaQithi were recorded before 1879.',
    searchHint: 'Quthing Lesotho wikipedia OR grokipedia',
  },
  {
    title: 'Mount Moorosi — Sabinet African Journals',
    type: 'Journal Article',
    searchHint: '"Mount Moorosi" siege 1879 Sabinet',
  },
  {
    title: 'Oral history and the 19th-century San occupation of the Mnweni Valley — Southern African Humanities',
    type: 'Journal Article',
    note: 'Late San persistence in the Drakensberg — connects to the Lesotho San communities.',
    searchHint: '"Mnweni Valley" San oral history Southern African Humanities filetype:pdf',
  },
  {
    title: 'Genetic heritage of the BaPhuthi — bioRxiv / PMC',
    type: 'Scientific Paper',
    note: 'Genetic evidence showing San admixture in the Phuthi community. Relevant to the AmaQithi DNA hypothesis.',
    searchHint: '"BaPhuthi" genetic heritage "Bushman" Maloti bioRxiv',
  },
  {
    title: 'In the Tracks of Qing and Orpen — University of Cape Town',
    type: 'Archive / Article',
    note: 'Follows 19th-century accounts of San mythology and identity recorded by Joseph Orpen.',
    searchHint: '"Qing and Orpen" UCT humanities archive',
  },
  {
    title: 'THE "INTERIOR WORLD" OF THE 19TH-CENTURY MALOTI-DRAKENSBERG MOUNTAINS — Journal of African History',
    type: 'Journal Article',
    where: 'Cambridge Core',
    searchHint: '"interior world" "Maloti-Drakensberg" "Journal of African History" Cambridge',
  },
  {
    title: 'Homeless Wanderers — ResearchGate',
    type: 'Academic Paper',
    searchHint: '"Homeless Wanderers" San Eastern Cape ResearchGate filetype:pdf',
  },
  {
    title: 'Sealolo Sa Baroa — African Composers Edition',
    type: 'Cultural / Music Source',
    note: 'Connected to the San (Baroa) oral and musical tradition.',
    searchHint: '"Sealolo Sa Baroa" African composers',
  },
  {
    title: 'THE DIGGING STICK — The South African Archaeological Society',
    type: 'Archaeological Journal',
    searchHint: '"Digging Stick" South African Archaeological Society San',
  },
  {
    title: 'WITS SWOHP Oral History Interview — Nyandza Nhlabatsi (1983)',
    type: 'Oral History Archive',
    where: 'Wits Institute for Social and Economic Research',
    note: 'Oral history transcript. These are sometimes available via Wits or the Wits Historical Papers.',
    searchHint: 'site:historicalpapers.wits.ac.za OR site:wiredspace.wits.ac.za "SWOHP"',
  },
  {
    title: 'A M A M F E N G U — South African History Online',
    type: 'Web Article',
    searchHint: 'site:sahistory.org.za "Mfengu" OR "Fingo"',
  },
  {
    title: 'Hunter Gatherers and Farmers: Some Implications of 1800 Years of Interaction',
    type: 'Academic Paper',
    searchHint: '"hunter gatherers and farmers" "1800 years" interaction San filetype:pdf',
  },
  {
    title: 'No Valley Without Shadows — MSF Southern Africa',
    type: 'Report',
    searchHint: '"No Valley Without Shadows" MSF "Southern Africa"',
  },
  {
    title: 'Hidden words of the prophet: Texts in traditional versions of the songs of Ntsikana',
    type: 'Academic Paper / Archive',
    searchHint: '"Ntsikana" songs hidden prophet texts filetype:pdf',
  },
];

const notebookGuideSteps = [
  {
    n: '1',
    title: 'Go to NotebookLM',
    body: 'Open your phone or computer browser and go to notebooklm.google.com — you need a free Google account to use it. If you do not have one, create one at accounts.google.com first.',
  },
  {
    n: '2',
    title: 'Create a new notebook',
    body: 'Tap or click the big "+" button to create a new notebook. Give it a name like "AmaQithi Research." This is your personal research space.',
  },
  {
    n: '3',
    title: 'Download PDFs using the search hints on this page',
    body: 'For each source listed below, we give you a "Google search hint." Copy that into Google Search. Look for results that say "PDF" or end in ".pdf" — click those. When the PDF opens, tap the download button (it looks like a down arrow). Save the file to your phone or computer.',
  },
  {
    n: '4',
    title: 'Upload the PDFs into NotebookLM',
    body: 'Back in your notebook, click "Add Source" then choose "Upload file." Select the PDFs you downloaded. NotebookLM reads them all. You can upload up to 50 sources per notebook.',
  },
  {
    n: '5',
    title: 'Start asking questions',
    body: 'Once the files are uploaded, you can ask NotebookLM anything: "What does this book say about Moorosi?" or "Find all references to the Thembu in these documents." It will search across all your files at once and quote the exact passages.',
  },
  {
    n: '6',
    title: 'Some documents require EMANDULO (UCT Library)',
    body: 'A few sources on this list — especially Stow\'s "Native Races of South Africa" — are only available through EMANDULO, the UCT digital library. Go to emandulo.uct.ac.za, search the title, and download the PDF. No account is needed to download from EMANDULO. It is free and open to the public.',
  },
  {
    n: '7',
    title: 'For Wikipedia and web pages',
    body: 'NotebookLM also accepts web links. Instead of uploading a file, click "Add Source" → "Website URL" and paste in the Wikipedia or article link. NotebookLM will read the web page directly.',
  },
];

const googleGuideSteps = [
  {
    n: '1',
    title: 'Open Google on your phone',
    body: 'Open your browser (Chrome, Safari, or any other) and go to google.com. Or just tap the search bar on your phone — it uses Google by default on most Android phones.',
  },
  {
    n: '2',
    title: 'Type the search hint exactly',
    body: 'Each source on this page has a "Google search hint." Type it exactly as shown, including the quote marks. Quote marks tell Google you want that exact phrase, not just those words in any order.',
  },
  {
    n: '3',
    title: 'Look for PDF results',
    body: 'After you search, look for results that show a small orange or grey "PDF" tag next to them. These are direct document files you can download. Tap the result — the PDF will open.',
  },
  {
    n: '4',
    title: 'Downloading on Android',
    body: 'When a PDF is open in your browser, look for three dots (⋮) in the top right corner. Tap those and choose "Download" or "Save to device." The file will save to your Downloads folder.',
  },
  {
    n: '5',
    title: 'Downloading on iPhone',
    body: 'When a PDF is open in Safari, tap the Share button (the box with an arrow pointing up) and choose "Save to Files." You can then find the file in the Files app.',
  },
  {
    n: '6',
    title: 'Cannot find a PDF?',
    body: 'Try adding "site:archive.org" to your search — the Internet Archive keeps digital copies of thousands of old books. Also try "site:academia.edu" which has many academic papers available for free download after a quick signup.',
  },
  {
    n: '7',
    title: 'Try Google Scholar',
    body: 'Go to scholar.google.com and search the title of any thesis or academic paper. When you find it, look for a "[PDF]" link on the right side of the result. That goes straight to the document.',
  },
];

function SourceCard({ source }: { source: Source }) {
  return (
    <div style={{
      borderBottom: `1px solid rgba(196,98,45,0.12)`,
      padding: '20px 0',
    }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px' }}>
          <p style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '1.05rem',
            fontWeight: 600,
            color: p.cream,
            margin: '0 0 4px',
            lineHeight: 1.4,
          }}>{source.title}</p>
          {source.author && (
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.78rem',
              color: p.accent,
              margin: '0 0 4px',
            }}>{source.author}</p>
          )}
          {source.where && (
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.75rem',
              color: p.muted,
              margin: '0 0 6px',
              fontStyle: 'italic',
            }}>Found at: {source.where}</p>
          )}
          {source.note && (
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.82rem',
              color: p.tan,
              margin: '0 0 8px',
              lineHeight: 1.65,
            }}>{source.note}</p>
          )}
        </div>
        <div style={{ flexShrink: 0 }}>
          <span style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: p.bg,
            background: p.muted,
            padding: '3px 8px',
          }}>{source.type}</span>
        </div>
      </div>
      {source.searchHint && (
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          border: `1px solid rgba(196,98,45,0.15)`,
          padding: '10px 14px',
          marginTop: '10px',
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: p.accent,
            flexShrink: 0,
            paddingTop: '2px',
          }}>Google search hint</span>
          <code style={{
            fontFamily: 'monospace',
            fontSize: '0.78rem',
            color: p.gold,
            wordBreak: 'break-all',
          }}>{source.searchHint}</code>
        </div>
      )}
    </div>
  );
}

function StepBlock({ n, title, body: bodyText }: { n: string; title: string; body: string }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: '20px',
      marginBottom: '28px',
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        background: p.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display), Cormorant Garamond, serif',
        fontSize: '1.4rem',
        fontWeight: 700,
        color: p.bg,
        flexShrink: 0,
      }}>{n}</div>
      <div>
        <p style={{
          fontFamily: 'var(--font-display), Cormorant Garamond, serif',
          fontSize: '1.1rem',
          fontWeight: 600,
          color: p.gold,
          margin: '0 0 6px',
        }}>{title}</p>
        <p style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.9rem',
          color: p.tan,
          lineHeight: 1.8,
          margin: 0,
        }}>{bodyText}</p>
      </div>
    </div>
  );
}

export default function SourcesPage() {
  const totalSources = books.length + theses.length + linguistic.length + government.length + web.length;

  return (
    <>
      <SchemaOrg schemas={[orgSchema, sourcesSchema, breadcrumbSchema([{ name: 'Research Sources', url: '/sources' }])]} />
      <Nav />
      <main style={{ background: p.bg, minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          background: 'radial-gradient(ellipse at 30% 60%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)',
          paddingTop: '120px',
          paddingBottom: '72px',
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
            <p style={eyebrow}>AmaQithi Research — Open Sources</p>
            <h1 style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: 'clamp(2.4rem, 7vw, 5rem)',
              fontWeight: 600,
              color: p.gold,
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              Where this research came from.
            </h1>
            <p style={{ ...body, color: p.tan, maxWidth: '660px', marginBottom: '16px' }}>
              Every claim on this website traces back to a document. Here they all are —
              <strong style={{ color: p.gold }}> {totalSources} sources</strong> across books,
              theses, dictionaries, government records, and the open web. Listed openly so
              you can follow the same trail, verify anything you disagree with, and continue
              the research yourself.
            </p>
            <p style={{ ...body, color: p.muted, maxWidth: '620px', marginBottom: '40px' }}>
              This research was done with the help of{' '}
              <strong style={{ color: p.gold }}>Google Gemini</strong> and{' '}
              <strong style={{ color: p.gold }}>Google NotebookLM</strong> — two free AI tools
              that can read dozens of documents at once and help you find patterns. We credit
              them fully. But the PDFs had to be found and loaded by hand, from sources like
              the EMANDULO UCT digital library, the Internet Archive, Academia.edu, and UCT
              Open Access. That part is not automatic — it is research.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#how-to-research"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: p.gold,
                  textDecoration: 'none',
                  padding: '12px 28px',
                  border: `1px solid rgba(232,168,87,0.4)`,
                }}
              >
                How to do your own research ↓
              </a>
              <a
                href="#sources-list"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: p.muted,
                  textDecoration: 'none',
                  padding: '12px 28px',
                  border: `1px solid rgba(158,140,122,0.3)`,
                }}
              >
                Jump to sources ↓
              </a>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <Breadcrumb items={[{ label: 'Research Sources' }]} />
        </div>

        {/* Credit to Google */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 64px' }}>
          <div style={{
            background: p.card,
            border: `1px solid ${p.border}`,
            padding: '36px 40px',
          }}>
            <p style={eyebrow}>A word of credit</p>
            <h2 style={{ ...h2, fontSize: '1.6rem' }}>This research was powered by Google AI — and that deserves to be said out loud.</h2>
            <p style={{ ...body, marginBottom: '16px' }}>
              <strong style={{ color: p.gold }}>Google NotebookLM</strong> is a free tool
              that lets you upload dozens of documents — books, theses, PDFs — and then ask
              questions across all of them at once. It finds the quotes, it traces the
              connections, it surfaces patterns that would take a person months to find alone.
              This is what made it possible to work with 47+ sources simultaneously.
            </p>
            <p style={{ ...body, marginBottom: '16px' }}>
              <strong style={{ color: p.gold }}>Google Gemini</strong> helped with
              analysis, language translation (especially Xhosa and Sesotho terms), and
              structuring arguments across multiple documents.
            </p>
            <p style={{ ...body, color: p.muted, marginBottom: '0' }}>
              Both tools are free. Both are available on your phone. Both can be used by
              anyone with a Google account. We are listing them here because this kind of
              research used to require university access, library privileges, and years of
              training. It still requires hard work — but the tools are now available to
              everyone. That matters.
            </p>
          </div>
        </section>

        {/* How to do your own research */}
        <section id="how-to-research" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>

          {/* NotebookLM guide */}
          <div style={{ marginBottom: '64px' }}>
            <p style={eyebrow}>Step-by-step guide</p>
            <h2 style={h2}>How to use Google NotebookLM for your own research</h2>
            <p style={{ ...body, color: p.muted, marginBottom: '40px', maxWidth: '600px' }}>
              NotebookLM is free, works on your phone, and does not require any technical
              knowledge. Here is exactly how to set it up and start researching.
            </p>
            <div style={{
              background: p.card,
              border: `1px solid ${p.border}`,
              padding: '36px 40px',
            }}>
              {notebookGuideSteps.map(step => (
                <StepBlock key={step.n} {...step} />
              ))}

              {/* Tip box */}
              <div style={{
                background: 'rgba(232,168,87,0.07)',
                border: `1px solid rgba(232,168,87,0.2)`,
                padding: '20px 24px',
                marginTop: '8px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: p.gold,
                  margin: 0,
                  lineHeight: 1.75,
                }}>
                  <strong>Tip:</strong> Once you have loaded a few sources, ask NotebookLM:
                  "What do these documents say about Qithi?" or "Who is mentioned as a son
                  of Ntande?" or "Find every mention of the Thembu in Lesotho." It will quote
                  directly from the documents you uploaded — with page numbers.
                </p>
              </div>
            </div>
          </div>

          {/* Google search guide */}
          <div>
            <p style={eyebrow}>For beginners — how to find PDFs on Google</p>
            <h2 style={{ ...h2, fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>How to search and download documents on your phone</h2>
            <p style={{ ...body, color: p.muted, marginBottom: '40px', maxWidth: '600px' }}>
              Not everyone has been doing this for years. Here is a basic guide from the start.
            </p>
            <div style={{
              background: p.card,
              border: `1px solid ${p.border}`,
              padding: '36px 40px',
            }}>
              {googleGuideSteps.map(step => (
                <StepBlock key={step.n} {...step} />
              ))}

              {/* Free repositories */}
              <div style={{
                background: 'rgba(196,98,45,0.08)',
                border: `1px solid rgba(196,98,45,0.2)`,
                padding: '20px 24px',
                marginTop: '8px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: p.accent,
                  margin: '0 0 12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>Free places to find these documents:</p>
                {[
                  ['archive.org', 'Internet Archive — thousands of old books, free, no account needed'],
                  ['emandulo.uct.ac.za', 'UCT EMANDULO — South African academic archive, free download'],
                  ['open.uct.ac.za', 'UCT Open Access — theses and papers, free download'],
                  ['scholar.google.com', 'Google Scholar — find academic papers, some with free PDF links'],
                  ['academia.edu', 'Academia.edu — free after signing up, many African history papers'],
                  ['researchgate.net', 'ResearchGate — request papers directly from researchers'],
                  ['sahistory.org.za', 'South African History Online — free articles on SA history'],
                ].map(([site, desc]) => (
                  <div key={site} style={{ marginBottom: '10px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <code style={{
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      color: p.gold,
                      flexShrink: 0,
                      minWidth: '200px',
                    }}>{site}</code>
                    <span style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: p.tan,
                    }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sources list */}
        <section id="sources-list" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>

          {/* Download banner */}
          <div style={{
            background: p.card,
            border: `1px solid ${p.border}`,
            padding: '28px 36px',
            marginBottom: '56px',
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '1.2rem',
                color: p.gold,
                margin: '0 0 6px',
              }}>Download the full source list</p>
              <p style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.82rem',
                color: p.muted,
                margin: 0,
              }}>A plain text file with all sources and Google search hints — save it to your phone and use it offline.</p>
            </div>
            <a
              href="/sources.txt"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: p.gold,
                textDecoration: 'none',
                padding: '12px 24px',
                border: `1px solid rgba(232,168,87,0.4)`,
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download sources.txt
            </a>
          </div>

          {/* Category: Books */}
          <div style={{ marginBottom: '56px' }}>
            <p style={eyebrow}>Category 1 of 5</p>
            <h2 style={h2}>Books and Historical Texts</h2>
            <p style={{ ...body, color: p.muted, marginBottom: '32px' }}>
              {books.length} sources — the foundation of the research.
            </p>
            {books.map(s => <SourceCard key={s.title} source={s} />)}
          </div>

          {/* Category: Theses */}
          <div style={{ marginBottom: '56px' }}>
            <p style={eyebrow}>Category 2 of 5</p>
            <h2 style={h2}>Theses and Academic Dissertations</h2>
            <p style={{ ...body, color: p.muted, marginBottom: '32px' }}>
              {theses.length} sources — most available free from UCT Open Access and EMANDULO.
            </p>
            {theses.map(s => <SourceCard key={s.title} source={s} />)}
          </div>

          {/* Category: Linguistic */}
          <div style={{ marginBottom: '56px' }}>
            <p style={eyebrow}>Category 3 of 5</p>
            <h2 style={h2}>Dictionaries and Linguistic Studies</h2>
            <p style={{ ...body, color: p.muted, marginBottom: '32px' }}>
              {linguistic.length} sources — used to trace the root meaning of place-names like "qithi."
            </p>
            {linguistic.map(s => <SourceCard key={s.title} source={s} />)}
          </div>

          {/* Category: Government */}
          <div style={{ marginBottom: '56px' }}>
            <p style={eyebrow}>Category 4 of 5</p>
            <h2 style={h2}>Municipal and Government Records</h2>
            <p style={{ ...body, color: p.muted, marginBottom: '32px' }}>
              {government.length} sources — used to verify village names in official municipal documents.
            </p>
            {government.map(s => <SourceCard key={s.title} source={s} />)}
          </div>

          {/* Category: Web */}
          <div style={{ marginBottom: '0' }}>
            <p style={eyebrow}>Category 5 of 5</p>
            <h2 style={h2}>Web Articles, Journals, and Archival Sources</h2>
            <p style={{ ...body, color: p.muted, marginBottom: '32px' }}>
              {web.length} sources — including open-access journals, Wikipedia, ResearchGate, and oral history archives.
            </p>
            {web.map(s => <SourceCard key={s.title} source={s} />)}
          </div>

        </section>

        {/* Closing note */}
        <section style={{
          background: p.card,
          borderTop: `1px solid ${p.border}`,
          padding: '64px 24px',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={eyebrow}>An honest note</p>
            <p style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
              fontStyle: 'italic',
              color: p.gold,
              lineHeight: 1.5,
              marginBottom: '24px',
            }}>
              This is not the final word. It is the current state of the research.
            </p>
            <p style={{ ...body, marginBottom: '16px' }}>
              Some of these sources support our claims directly. Some were read and found to
              contain nothing relevant. Some contain things we disagree with. All of them
              are listed here because research should be checkable — not just quoted.
            </p>
            <p style={{ ...body, color: p.muted, marginBottom: '32px' }}>
              If you find a source we missed, or you think we have misread one of these
              documents, contact us. This history belongs to the community — not to any
              one researcher. The more people who read these documents and push back, the
              stronger the story becomes.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/27603116777"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5BB85A',
                  textDecoration: 'none',
                  padding: '12px 24px',
                  border: '1px solid rgba(91,184,90,0.5)',
                }}
              >
                Share a source on WhatsApp
              </a>
              <a
                href="/thesis"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: p.gold,
                  textDecoration: 'none',
                  padding: '12px 24px',
                  border: `1px solid rgba(232,168,87,0.35)`,
                }}
              >
                Read the working thesis
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
