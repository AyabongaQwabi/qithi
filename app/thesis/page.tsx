import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, thesisSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'The Working Thesis — AmaQithi Research | Hypotheses & Community Evidence',
  description:
    'The informal research notes behind the AmaQithi history project. What we think we found, what still needs verification, and the 100+ community voices who responded. Hypotheses, not final history.',
  keywords: [
    'AmaQithi research', 'AmaQithi hypothesis', 'Qithi origin', 'Mqithi Ntande son',
    'AmaQithi Thembu San thesis', 'Quthing AmaQithi', 'Mqithi Mnguti', 'AmaQithi community voices',
  ],
  openGraph: {
    title: 'The Working Thesis — AmaQithi Research',
    description:
      'The informal research notes. What we think, what we can\'t yet prove, and what 100 community members said when we asked.',
    url: `${BASE}/thesis`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    type: 'article',
  },
  alternates: { canonical: `${BASE}/thesis` },
};

const section: React.CSSProperties = { padding: '72px 0' };
const inner: React.CSSProperties = { maxWidth: '960px', margin: '0 auto', padding: '0 24px' };
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
  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
  fontWeight: 600,
  color: '#E8A857',
  lineHeight: 1.15,
  marginBottom: '20px',
};
const h3: React.CSSProperties = {
  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
  fontWeight: 600,
  color: '#E8A857',
  lineHeight: 1.2,
  marginBottom: '12px',
  marginTop: '36px',
};
const body: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '1rem',
  color: '#D4A96A',
  lineHeight: 1.85,
  marginBottom: '18px',
  maxWidth: '680px',
};
const bodyMuted: React.CSSProperties = {
  ...body,
  color: '#9E8C7A',
};
const hypothesisBadge: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.65rem',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#E8A857',
  background: 'rgba(232,168,87,0.12)',
  border: '1px solid rgba(232,168,87,0.4)',
  padding: '4px 12px',
  marginBottom: '16px',
};
const confirmedBadge: React.CSSProperties = {
  ...hypothesisBadge,
  color: '#5BB85A',
  background: 'rgba(91,184,90,0.1)',
  border: '1px solid rgba(91,184,90,0.35)',
};
const unknownBadge: React.CSSProperties = {
  ...hypothesisBadge,
  color: '#9E8C7A',
  background: 'rgba(158,140,122,0.1)',
  border: '1px solid rgba(158,140,122,0.3)',
};

const communityVoices = [
  {
    name: 'Nonkqups Qu',
    comment: 'Makhulu Wam nguMqithi..... Ntombi yakwa Kula. kuManzana eNgcobo.',
    note: 'Grandmother was Mqithi — Ngcobo branch, Kula family.',
  },
  {
    name: 'Community member',
    comment: 'Andiyihoyanga kwale nto ke mna Buseie endikwaziyo kokuba uQithi lo ungomnye wonyana bakaNtande ebaThenjini.',
    note: 'Oral tradition: Qithi is one of the sons of Ntande of the Thembu. This is the most direct claim of Ntande parentage from the community.',
  },
  {
    name: 'Community member',
    comment: 'umqithi zalwa ngu ntande umqithi ezalwa no nxeko unxeko zalwa kwindlu enkulu umqithi zalwa kwindlu encinci nomkhuluwa wakhe Maya umqithi liwe nomcube umqithi yena zalwa ngu ndinga.',
    note: 'Detailed genealogy claim: Mqithi born of Ntande, alongside Nxeko. Nxeko from the Great House, Mqithi from the lesser house with his senior brother Mcube. Mqithi himself fathered Ndinga.',
  },
  {
    name: 'Community member',
    comment: 'Enye imbali endake ndayiva kuthiwa lento kaQithi isukela ekubeni omnye woonyana bakaHala wayenesimbo sokuthi xa kulinywa emzini wakhe emane elima iziqithi kodwa yena wabe enguNdinga igama.',
    note: 'Origin story for the name: one of Hala\'s sons had a habit of leaving ploughed patches (iziqithi) in his fields. His name was Ndinga. The name AmaQithi comes from this practice, not from a place.',
  },
  {
    name: 'Community member',
    comment: 'Mna Ndazi AmaQithi ngamaDlomo Ayelima Ashiye Isiqithi Alime Ashiye Isiqithi Alime Ashiye Isiqithi Suke Ngenye Imini Athi ngamaQithi ooNdinga ooRhadu ooNomsondwana ooNkomo Ayizali.',
    note: 'Same farming origin theory — the Dlomo who kept leaving ploughed patches (iziqithi). Clan names: Ndinga, Rhadu, Nomsondwana, Nkomo ayizali.',
  },
  {
    name: 'Community member (Ngcobo, Gubenxa)',
    comment: 'Sikhona amaQithi eNgcobo eGubenxa Lucwecwe.',
    note: 'Confirms AmaQithi presence in Gubenxa, Ngcobo.',
  },
  {
    name: 'Community member',
    comment: 'kwilali yakwa qithi egubenxa iifani ngoo limba. siyatha gobelo. mtiti oomaumau oolengesi.',
    note: 'Surnames at Qithi village in Gubenxa: Limba, Siyatha, Gobelo, Mtiti, Maumau, Lengesi.',
  },
  {
    name: 'Mzukisi Tshabe',
    comment: 'Ndingu Mqithi.',
    note: 'Tshabe surname — Mqithi clan. Confirms Tshabe as an AmaQithi surname.',
  },
  {
    name: 'Community member (Esikhwanqeni / Cofimvaba)',
    comment: 'NdinguMamqithi ifani nguMvanyashe kuQumbu eNgxakolo kuthiwa sasisuka eLadyfrere isalukazi esasishadele kaMqithi.',
    note: 'Family moved from Lady Frere, grandmother married into Mqithi. Surname Mvanyashe at Qumbu.',
  },
  {
    name: 'Community member (Molteno)',
    comment: 'Ndim lowo ❤️ o Rhaduuu onxeko o Hala omlebe aphe Molteno.',
    note: 'Mqithi family at Molteno. Praise names: Rhadu, Nxeko, Hala, Mlebe.',
  },
  {
    name: 'Community member',
    comment: 'Mna ndi ngu QITHI I nkaba yam I se Lesotho ku ndlu ya ka Tatu Lebese yena WA ye zalwa ngu Khomboyi u Khomboyi wayezalwa ngu Roxa.',
    note: 'CRITICAL: This person says their navel (inкaba — umbilical cord burial place, ancestral home) is in Lesotho. Genealogy given: Lebese → Khomboyi → Roxa. Lesotho origin confirmed in living oral memory.',
  },
  {
    name: 'Community member',
    comment: 'ama Qithi ayingobaThembu kodwa bafike ngexesha likanonesi.',
    note: 'Dissenting voice: AmaQithi are NOT Thembu — they arrived in the time of Nonesi. This is important community pushback that the AmaQithi-as-Thembu narrative is disputed.',
  },
  {
    name: 'Nkosikho Manimani (Engcobo)',
    comment: 'Mholweni Maqithi ndingu Mqithi uNkosikho ka Manimani apha Engcobo Kumaqanda ndizalwa ngu Sinduwamba ozalwa ngu Sipenisi ozalwa ngu Poto ozalwa ngu Manimani ozalwa ngu Phonye ozalwa ngu Dolo.',
    note: 'Full genealogy of the Manimani line at Ngcobo: Dolo → Phonye → Manimani → Poto → Sipenisi → Sinduwamba → Nkosikho.',
  },
  {
    name: 'Community member',
    comment: 'uQithi uphuma kwi Qathi lendlu iphi enkulu or Yase Kunene?',
    note: 'Community asking: which house does Qithi come from — Great House or Right Hand House? The question is unresolved.',
  },
  {
    name: 'Community member (Cofimvaba)',
    comment: 'Xa sesilanda sinabo ubukhosi bakwaQithi eCala kwaStofile. Ukanti naseCofimvaba nam ndaxelelwa ngutata ukuba obaseCofimvaba baxuthwa nguMatanzima.',
    note: 'Chieftainship claim at Cala (Stofile family). And the Cofimvaba branch was reportedly displaced by Kaiser Matanzima.',
  },
  {
    name: 'Community member (Lady Frere)',
    comment: 'Ndingumqithi apha eLady Frere kwi lali yase Bholoto. I Surname ngu Jantjie.',
    note: 'Jantjie as an AmaQithi surname. Village: Bholoto, Lady Frere.',
  },
  {
    name: 'Community member',
    comment: 'enye imbali ndakhe ndayiva / kwakusithiwa amaqithi ekuthwa kumhawumhawu. ngase mkapusi kuthwa amaqithi.',
    note: 'Confirms the oral geography name Mawhumawhu for the area near Mkapusi. Two names for the same place.',
  },
  {
    name: 'Community member (Free State)',
    comment: 'Ndingu Mqithi uXhekeshe e cofimvaba e nquqhu Kodwa bakho abasekhaya nase cala.. Mna ndilapha e free state.',
    note: 'Cofimvaba origin, now Free State. Surname Xhekeshe.',
  },
];

export default function ThesisPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, thesisSchema, breadcrumbSchema([{ name: 'The Working Thesis', url: '/thesis' }])]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          bg
          eyebrow="The Working Thesis"
          headline="Guys, this is what we found — but we're still looking."
          subheading="Informal research notes. Hypothesis, not final history. Read it, challenge it, add to it."
          intro="Everything on the main pages of this site has been kept careful and hedged because history that affects thousands of people needs to be careful. But here — this is the working table. This is where we think out loud. Read it like a researcher's notebook, not like an official record."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Working Thesis' }]} />
        </div>

        {/* Disclaimer banner */}
        <section style={{ background: '#0F0904', borderBottom: '1px solid rgba(232,168,87,0.2)', padding: '28px 0' }}>
          <div style={inner}>
            <div style={{ borderLeft: '3px solid #E8A857', paddingLeft: '20px', maxWidth: '680px' }}>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.9rem', color: '#E8A857', lineHeight: 1.75, marginBottom: '10px', fontWeight: 500 }}>
                Everything on this page is hypothesis. Some of it is well-supported. Some of it is speculative. We've marked each section so you know which is which.
              </p>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.85rem', color: '#9E8C7A', lineHeight: 1.75 }}>
                <span style={{ ...confirmedBadge, marginBottom: 0, marginRight: '8px' }}>Confirmed</span> = backed by multiple independent sources.
                <span style={{ ...hypothesisBadge, marginBottom: 0, margin: '0 8px' }}>Hypothesis</span> = our best reading of the evidence, not yet verified.
                <span style={{ ...unknownBadge, marginBottom: 0, marginLeft: '8px' }}>Unknown</span> = genuinely open. We don&apos;t know.
              </p>
            </div>
          </div>
        </section>

        {/* Part 1 — Who is Qithi */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Part 1 · The Big Question</p>
            <h2 style={h2}>Who is Qithi? Here&apos;s where the trail leads.</h2>

            <p style={body}>
              OK so the standard story you hear from older AmaQithi is: <em>Qithi is a son of Ntande, brother of Mcube.</em> That&apos;s the oral tradition. A lot of people in the community hold this. And honestly? We&apos;ve found real signals pointing that direction. But we&apos;ve also found that the written colonial record doesn&apos;t confirm it yet — and the only well-documented son of Ntande in the written record is <strong style={{ color: '#E8A857' }}>Mnguti</strong>.
            </p>
            <p style={body}>
              Here&apos;s our honest read: <strong style={{ color: '#E8A857' }}>the oral tradition might be right and the colonial record might just be incomplete.</strong> Colonial clerks were not trying to document every Thembu lineage with precision. They were mostly tracking political threats and tax obligations. An unrecorded son of Ntande is entirely plausible. Mqithi could be a brother of Mnguti that history forgot to write down.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

              <div style={{ background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.2)', padding: '24px' }}>
                <div style={hypothesisBadge}>Hypothesis</div>
                <h3 style={{ ...h3, marginTop: '4px' }}>Qithi as son of Ntande (Thembu royal line)</h3>
                <p style={bodyMuted}>
                  Oral tradition from multiple community members places Qithi as a son of Ntande, born alongside Nxeko, with Nxeko from the Great House and Qithi from the lesser house. His senior brother in this account is Mcube. One commenter (see community voices below) gives the genealogy as: Ntande → Mqithi → Ndinga. The praise name <em>Ndinga</em> is one of the most consistently confirmed AmaQithi izibongo — which adds weight to this line.
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.78rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5 }}>
                  What would confirm it: a colonial document naming Qithi as a son of Ntande, or independent genealogical records from the Tshatshu archive confirming his place in the tree.
                </p>
              </div>

              <div style={{ background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.2)', padding: '24px' }}>
                <div style={hypothesisBadge}>Hypothesis</div>
                <h3 style={{ ...h3, marginTop: '4px' }}>The farming origin — AmaQithi as &ldquo;people who left ploughed patches&rdquo;</h3>
                <p style={bodyMuted}>
                  Two separate community members gave us a completely different origin for the name. Their account: one of Hala&apos;s sons (or in another version, one of Dlomo&apos;s descendants) had a habit of <em>leaving a ploughed patch (isiqithi) unfinished</em> when he moved from field to field. Over time, the people around him started calling the group <em>amaQithi</em> — the people of the unfinished patch. His name, they say, was Ndinga.
                </p>
                <p style={bodyMuted}>
                  This is a completely different etymology from the San landscape theory. It places the name inside Xhosa agricultural practice rather than San geography. We cannot dismiss it — multiple people gave it independently.
                </p>
                <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.78rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5 }}>
                  What would confirm it: older oral sources naming the specific son of Hala or Dlomo, or records of the word <em>isiqithi</em> being used to describe a ploughed patch in early Xhosa.
                </p>
              </div>

              <div style={{ background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.2)', padding: '24px' }}>
                <div style={confirmedBadge}>Confirmed</div>
                <h3 style={{ ...h3, marginTop: '4px' }}>The San-Thembu matrix is real regardless of who Qithi was</h3>
                <p style={bodyMuted}>
                  Whatever the origin of the name — whether it&apos;s Ntande&apos;s son, Hala&apos;s grandson, or something else entirely — the broader San-Thembu fusion is not in question. The Thembu were historically described as <em>Tambookies</em>, a creolised San-Bantu matrix. The Ingqithi ritual was inherited from the San. The Q-clicks in AmaQithi names are San phonetics absorbed into Nguni through centuries of contact. One community member gives their <em>inkaba</em> (ancestral birth-cord home) as Lesotho. These things are real whether or not we find Qithi in the royal tree.
                </p>
              </div>

              <div style={{ background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.2)', padding: '24px' }}>
                <div style={unknownBadge}>Unknown</div>
                <h3 style={{ ...h3, marginTop: '4px' }}>Which house? Great House or Right Hand House?</h3>
                <p style={bodyMuted}>
                  One community member asked directly: <em>&ldquo;uQithi uphuma kwi Qathi lendlu iphi enkulu or Yase Kunene?&rdquo;</em> — which house does Qithi come from, the Great House or the Right Hand House? Nobody answered definitively. One account says Nxeko was Great House and Mqithi was the lesser house. But this hasn&apos;t been independently verified and it affects the clan&apos;s formal place in the Thembu political structure.
                </p>
              </div>

            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Part 2 — Place names */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Part 2 · The Landscape Theory</p>
            <h2 style={h2}>The land was a map. The names are still readable.</h2>
            <p style={body}>
              This is the part of the research that genuinely blew us away. The thesis work done by our researchers maps out how traditional Thembu society assigned <em>functional names</em> to specific zones of land — and these names are still visible in the Eastern Cape if you know what to look for.
            </p>

            <div style={{ marginTop: '8px', borderLeft: '2px solid rgba(196,98,45,0.3)', paddingLeft: '24px', marginBottom: '36px' }}>
              <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontStyle: 'italic', color: '#E8A857', lineHeight: 1.7, marginBottom: '0' }}>
                &ldquo;The Eastern Cape landscape was a meticulously zoned, highly functional ecosystem. Rather than arbitrary settlements, indigenous territories were organized with sophisticated intent, mapping governance, military infrastructure, resource management, and social containment directly onto the physical terrain.&rdquo;
              </p>
              <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.75rem', color: '#9E8C7A', marginTop: '10px', fontStyle: 'normal' }}>
                — AmaQithi Research Working Thesis (2026)
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'rgba(196,98,45,0.2)', marginBottom: '32px' }}>
              {[
                {
                  zone: 'Qithi / Mqithi / Qhitsi',
                  function: 'Agricultural enclosure — or judicial holding area',
                  explanation: 'Linguistically rooted in isi-Qiti (a separated, round, or isolated space). The thesis suggests these were restricted-use tracts — intensive royal agricultural zones, or secure enclosures for those awaiting royal judgment. Both uses would explain why you find "Qithi" close to royal residences.',
                  badge: 'hypothesis',
                },
                {
                  zone: 'Matolweni / Ematyolweni',
                  function: 'Military training academy and arsenal',
                  explanation: 'From u-Tolo (arrow) and um-Toli (archer). These were military training grounds and the domain of the iTola (war doctor/seer) who performed pre-battle rituals. Find a place called Matolweni and you\'re likely standing on an old military training site.',
                  badge: 'hypothesis',
                },
                {
                  zone: 'Sixotyeni / Esixotyeni',
                  function: 'Mountain stronghold — defensive garrison',
                  explanation: 'From isi-Xobo (rocky ledge or scree slope). Natural mountain positions where weapons were stockpiled and boulders could be rolled onto advancing forces.',
                  badge: 'hypothesis',
                },
                {
                  zone: 'Ngxingweni / Ngxingwa',
                  function: 'Tactical chokepoint — mountain pass',
                  explanation: 'Narrow gorges used to bottleneck numerically superior forces. If you see Ngxingwa on a map near a mountain pass, that is not a coincidence.',
                  badge: 'hypothesis',
                },
                {
                  zone: 'Maghubeni / Zicubeni',
                  function: 'Grain processing station',
                  explanation: 'From Gubula (to turn over) or Cubula (to process). Flat, high-wind ridges for threshing and winnowing harvested grain. Agricultural logistics made permanent in the name.',
                  badge: 'hypothesis',
                },
                {
                  zone: 'Komkhulu / Ndlunkulu',
                  function: 'Administrative and judicial capital',
                  explanation: 'The Great House. Political anchor, home of the tribal council (umbhambiso), supreme court. Find Komkhulu and you\'ve found the centre of power.',
                  badge: 'confirmed',
                },
              ].map((item) => (
                <div key={item.zone} style={{ background: '#1A0F0A', padding: '24px' }}>
                  <div style={item.badge === 'confirmed' ? confirmedBadge : hypothesisBadge}>{item.badge}</div>
                  <h3 style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#E8A857', marginBottom: '6px', marginTop: '4px' }}>
                    {item.zone}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4622D', marginBottom: '10px' }}>
                    {item.function}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.85rem', color: '#9E8C7A', lineHeight: 1.7 }}>
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>

            <p style={bodyMuted}>
              The implication of this framework is significant: the Thembu were not randomly naming places. Every toponym was a record of use. If you can read the names, you can read the layout of the society that built itself into the landscape.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Part 3 — Quthing / Migration */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Part 3 · The Migration Theory</p>
            <h2 style={h2}>They weren&apos;t fleeing into the unknown. They were going home.</h2>
            <p style={body}>
              Standard history presents the Mfecane-era migrations as chaotic flights. Our thesis argues something different: <strong style={{ color: '#E8A857' }}>when Thembu divisions moved north into Lesotho in the early 1800s, they were returning to ancestral territory</strong>, not entering foreign land. The line of Chief Mnguti had already established itself in the eNgcobo/Transkei region as far back as 1600–1650.
            </p>

            <div style={{ background: '#1A0F0A', border: '1px solid rgba(196,98,45,0.2)', padding: '24px', marginBottom: '32px', maxWidth: '680px' }}>
              <div style={hypothesisBadge}>Hypothesis</div>
              <p style={{ fontFamily: 'monospace', fontSize: '0.88rem', color: '#9E8C7A', lineHeight: 1.9, marginTop: '8px', marginBottom: '0', letterSpacing: '0.02em' }}>
                [1600–1650] Mnguti establishes roots in eNgcobo/Transkei<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                [1816–1835] Mfecane — Thembu move north to Lesotho/Quthing<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ (A return to ancestral memory, not a flight to unknown land)<br />
                [1816–1879] Quthing — Thembu, San, Phuthi under Moorosi<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ (Fall of Mount Moorosi, 20 November 1879)<br />
                [Post-1879] AmaQithi dispersal south: eNgcobo · Cofimvaba · Mkapusi
              </p>
            </div>

            <p style={body}>
              The Quthing connection is confirmed by a community member whose inkaba — their umbilical cord burial site, the deepest marker of ancestral home — is in Lesotho. That&apos;s not migration lore. That&apos;s living oral memory saying: <em>we came from there.</em>
            </p>
            <p style={bodyMuted}>
              And Quthing as a name? Our reading: it is the Sotho locative suffix <em>-ing</em> (place of) attached to a root that is either San click-origin or shares phonetic ancestry with <em>iQhwa</em> (ice/snow, the cold mountain air of those heights). The valley was literally named &ldquo;the cold place&rdquo; — the mountain refuge.
            </p>

            <div style={{ marginTop: '28px', border: '1px solid rgba(196,98,45,0.25)', overflow: 'hidden', width: '100%', maxWidth: '680px' }}>
              <Image
                src="/thembuline.png"
                alt="AbaThembu lineage chart — from Njanya (c. 1307) through Ntande, Mnguti, Ngubengcuka to Queen Nonesi — AmaQithi research working document"
                width={1596}
                height={1344}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                quality={88}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.72rem', color: '#6B5A4E', fontStyle: 'italic', lineHeight: 1.5, marginTop: '8px', maxWidth: '680px' }}>
              Working lineage chart — the full Thembu genealogy from Njanya (c. 1307) through Ntande and Mnguti to Nonesi. The full visual record is on the{' '}
              <a href="/lineage" style={{ color: '#C4622D', textDecoration: 'none', borderBottom: '1px solid rgba(196,98,45,0.4)' }}>
                Lineage page
              </a>.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Part 4 — Community voices */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Part 4 · The Community</p>
            <h2 style={h2}>100 people heard the call. Here&apos;s what they said.</h2>
            <p style={body}>
              In 2018, a Facebook post asked AmaQithi to identify themselves. Over 100 people responded. Most wrote in Xhosa. Every comment below is a real person, identifying as AmaQithi, naming their village, their family, their izibongo. This is the community the history belongs to.
            </p>
            <p style={bodyMuted}>
              We&apos;ve selected the comments with the most genealogical or historical content. Where the Xhosa was clear, we&apos;ve added a short note of what was said. This is primary source material — oral history in real time.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(196,98,45,0.15)', marginTop: '36px' }}>
              {communityVoices.map((v, i) => (
                <div key={i} style={{ background: '#1A0F0A', padding: '24px' }}>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C4622D', marginBottom: '8px' }}>
                    {v.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: '1.05rem', fontStyle: 'italic', color: '#E8A857', lineHeight: 1.7, marginBottom: '10px' }}>
                    &ldquo;{v.comment}&rdquo;
                  </p>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.82rem', color: '#9E8C7A', lineHeight: 1.65 }}>
                    {v.note}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '40px', borderLeft: '3px solid #C4622D', paddingLeft: '20px', maxWidth: '680px' }}>
              <p style={{ fontFamily: 'var(--font-display), Cormorant Garamond, serif', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontStyle: 'italic', color: '#E8A857', lineHeight: 1.7, marginBottom: '10px' }}>
                The full 100 comments are in our archive. If you were one of those people — or if you&apos;ve since had more to add — contact us below.
              </p>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Part 5 — What we still need */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Part 5 · What We Still Need</p>
            <h2 style={h2}>The gaps. If you can fill one, tell us.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '680px' }}>
              {[
                'A colonial document naming Qithi as a son of Ntande — or definitively placing him in the Thembu genealogy.',
                'Clarity on which house Qithi came from — Great House or Right Hand House. The community is divided and this has implications for the clan\'s formal political status.',
                'The full genealogy of the Hala → Qithi branch, particularly which son of Hala fathered the line and whether the farming-patch origin story can be traced to a specific person.',
                'Records from the Tshatshu chieftainship archive that might name AmaQithi as a sub-clan and confirm their date of settlement at Rhodana.',
                'The Joka family connection to Qwabi — we know they shared Mkapusi, but whether they arrived together from Lesotho or met there is unclear.',
                'Whether the AmaQithi at Cofimvaba were displaced by Matanzima (as one community member says) and where those families went.',
                'DNA confirmation: L0/L1 haplogroups in AmaQithi families would confirm the San ancestry. The Genomy project is open for exactly this.',
              ].map((gap, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#C4622D', minWidth: '24px', paddingTop: '2px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontFamily: 'var(--font-body), Inter, sans-serif', fontSize: '0.95rem', color: '#9E8C7A', lineHeight: 1.75, marginBottom: 0 }}>
                    {gap}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* CTA */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Add to the Archive</p>
            <h2 style={h2}>You might have the piece we&apos;re missing.</h2>
            <p style={{ ...body, marginBottom: '36px' }}>
              If your grandparent told you something. If you have a document, a photograph, a name, a village — bring it. Oral history is history. We want to hear it.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/27603116777"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#C4622D',
                  color: '#F5E6C8',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '14px 32px',
                }}
              >
                WhatsApp Us
              </a>
              <a
                href="/genealogy"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  color: '#E8A857',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  border: '1px solid rgba(232,168,87,0.5)',
                }}
              >
                Join the DNA Project
              </a>
              <a
                href="/sources"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  color: '#9E8C7A',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  border: '1px solid rgba(158,140,122,0.35)',
                }}
              >
                View all sources
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
