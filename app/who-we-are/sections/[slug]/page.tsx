import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaOrg, { orgSchema, breadcrumbSchema } from "@/components/SchemaOrg";

const BASE = "https://qithi.co.za";

type SectionContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  blocks: Array<{ heading: string; text: string }>;
  sources: string[];
};

const sections: SectionContent[] = [
  {
    slug: "san-thembu-claim",
    eyebrow: "Section Deep Dive",
    title: "Why we call AmaQithi a San-Thembu people",
    intro:
      "This claim is built from overlapping lines of evidence in the White Kei and Lesotho frontier records: co-residence, alliance, intermarriage, ritual exchange, and surviving naming systems.",
    blocks: [
      {
        heading: "Eastern Cape witness evidence",
        text:
          "Silayi's statement, recorded by Stanford, places Thembu groups and San families in active social proximity in the White Kei basin. This is critical because it is not retrospective myth; it is witness-era testimony from the same historical landscape where AmaQithi memory is anchored.",
      },
      {
        heading: "Structural, not symbolic identity",
        text:
          "The San-Thembu framing is not a modern identity invention. It emerges from a repeated frontier pattern: San groups integrated into Thembu political structures while maintaining ritual and linguistic traces, including ingqithi-associated memory and click-bearing naming layers.",
      },
      {
        heading: "How this page should be read",
        text:
          "We present this as a calibrated historical position: some elements are strongly documented, while other links remain under active reconstruction. The core identity claim is robust, but not every genealogical node is equally complete yet.",
      },
    ],
    sources: [
      "docs/july updates/san & sotho.md",
      "docs/newupdates/update1.md",
      "docs/moreinfo/san-in-lesotho.md",
    ],
  },
  {
    slug: "lesotho-connection",
    eyebrow: "Section Deep Dive",
    title: "The Lesotho connection: why Quthing matters to the AmaQithi story",
    intro:
      "Quthing in southern Lesotho is where San, Baphuthi, and Thembu histories meet. This page separates documented claims, oral tradition, and our hypothesis so readers can see exactly what kind of claim they are reading.",
    blocks: [
      {
        heading: "San-Phuthi alliance under Moorosi",
        text:
          "Sources consistently describe deep San-Phuthi integration under Moorosi, including kinship, military cooperation, social co-residence, and shared survival strategies in mountain terrain.",
      },
      {
        heading: "Qing and intellectual continuity",
        text:
          "Qing's role as interpreter of mountain art and ritual language shows that the frontier was not only military but also intellectual: multilingual, symbol-rich, and linked across San, Phuthi, and Nguni contexts.",
      },
      {
        heading: "1879 and dispersal",
        text:
          "After Mount Moorosi fell, the alliance network fractured and families dispersed into Eastern Cape districts. This movement is one reason Lesotho remains a persistent origin reference in living lineage memory.",
      },
    ],
    sources: [
      "docs/moreinfo/more-on-san-in-lesotho.md",
      "docs/moreinfo/san-in-lesotho-even-more.md",
      "docs/newupdates/moorosi.md",
    ],
  },
  {
    slug: "qwabi-line",
    eyebrow: "Section Deep Dive",
    title: "Who Qwabi Joka is, and why this line is a strong anchor",
    intro:
      "Qwabi Joka is not the whole clan. He is one traceable line. Our current reading is that he belonged to San groups in the Glen Grey-Lady Frere zone that were assimilated into Thembu political life.",
    blocks: [
      {
        heading: "Who he is in the record",
        text:
          "Documented: Qwabi Joka (1842-1915) is tied to the post-1879 period and the Lady Frere-Mkapusi landscape. Current oral-history framing: he belongs to San lineages in Glen Grey that later sat inside Thembu history.",
      },
      {
        heading: "Why descendants matter",
        text:
          "Descendant continuity provides verifiable intergenerational links, allowing timelines and settlement movement to be cross-checked between oral history and documentary fragments.",
      },
      {
        heading: "Why village links matter",
        text:
          "Village clustering around Mkapusi/Agnes/Qithi naming zones creates geographic continuity. The place record and family record reinforce each other, making this line one of the strongest current anchors in the archive.",
      },
      {
        heading: "Why naming patterns matter",
        text:
          "Documented linguistics: isiXhosa adaptation can shift r/l sounds, so Moorosi to Molosi is expected. Our family history says the names Molosi and Bushman preserve the alliance memory after 1879.",
      },
      {
        heading: "Important limit",
        text:
          "Strong anchor does not mean exclusive founder line. AmaQithi includes multiple family lines across Ngcobo, Cofimvaba, Lady Frere, Cala, and Free State networks; Qwabi is currently one of the most traceable, not the only legitimate line.",
      },
    ],
    sources: [
      "docs/newupdates/qwabi.md",
      "docs/newupdates/other qithi family.md",
      "docs/newupdates/update1.md",
    ],
  },
  {
    slug: "lady-frere-rhodana",
    eyebrow: "Section Deep Dive",
    title: "Lady Frere, Rhodana, KwaTshatshu, and Mqithi village proximity",
    intro:
      "This section explains why local geography is treated as evidence: settlement memory, naming continuity, and political node proximity converge in one corridor.",
    blocks: [
      {
        heading: "Why Lady Frere matters",
        text:
          "Lady Frere is not just a modern residence point. It is one of the strongest living carriers of AmaQithi place memory, including Qwabi-linked descent lines and village continuity.",
      },
      {
        heading: "Rhodana political geography",
        text:
          "Rhodana is a key Thembu node in this historical field. The importance of nearby Qithi/Mqithi naming is that clan memory persists beside known political centers rather than in isolated, detached settlement.",
      },
      {
        heading: "KwaTshatshu and emaQithini naming",
        text:
          "KwaTshatshu and emaQithini references in adjacent local geography strengthen the argument that identity memory was mapped into place and preserved through repeated local usage.",
      },
    ],
    sources: [
      "docs/newupdates/anatomy-of-thembu-villages.md",
      "docs/newupdates/thesis1.md",
      "docs/newupdates/other qithi family.md",
    ],
  },
  {
    slug: "etymology",
    eyebrow: "Section Deep Dive",
    title: "Etymology: Quthing, Qwabi/Qwas, and Qithi",
    intro:
      "The etymology layer combines stronger and weaker certainties. We separate what is relatively stable from what remains unresolved.",
    blocks: [
      {
        heading: "Quthing",
        text:
          "Current oral-history correction says Quthing is linked to Quu. We keep this marked as oral-history evidence while audio publication and further source checks are pending.",
      },
      {
        heading: "Qwabi and Qwas",
        text:
          "Family etymology holds Qwabi and Qwas as son/daughter markers in !Ui-Taa framing. This survives as lineage memory and is used here as an internal heritage explanation.",
      },
      {
        heading: "Qithi",
        text:
          "Qithi is recognized as click-linked and San-associated in sound layer, but exact lexical meaning in San, Sesotho, and Sephuthi remains unresolved. We preserve that uncertainty explicitly.",
      },
    ],
    sources: [
      "docs/july updates/etymology.md",
      "docs/newupdates/thesis1.md",
      "docs/newupdates/update1.md",
    ],
  },
  {
    slug: "name-what-we-know",
    eyebrow: "Section Deep Dive",
    title: "The name: what is currently supported and what remains open",
    intro:
      "This section distinguishes between supported historical patterns and unresolved founder-level claims.",
    blocks: [
      {
        heading: "What is strongly supported",
        text:
          "The strongest support remains in San-Thembu contact history, ingqithi continuity, and living clan memory in the Lady Frere corridor.",
      },
      {
        heading: "What is not yet confirmed",
        text:
          "A definitive documentary placement of a founder named Qithi in specific royal genealogical slots has not yet been secured in surviving written records.",
      },
      {
        heading: "Why open questions remain valid",
        text:
          "Frontier archives are fragmented and often politically biased toward control records rather than complete lineage preservation. Uncertainty in this context is expected, not disqualifying.",
      },
    ],
    sources: [
      "docs/july updates/doc1.md",
      "docs/july updates/mcube.md",
      "docs/newupdates/update1.md",
    ],
  },
  {
    slug: "san-leaders",
    eyebrow: "Section Deep Dive",
    title: "San leaders in Qithi history zones",
    intro:
      "Soei/Soai, Quu, Mada'kane, and Madolo are included because they belong to the same social and territorial world as AmaQithi lineage formation.",
    blocks: [
      {
        heading: "Lesotho side: Soai and Quu",
        text:
          "These leaders represent the mountain alliance context around San-Phuthi relations and the pre-1879 fortress world, including kinship and military networks.",
      },
      {
        heading: "Eastern Cape side: Mada'kane and Madolo",
        text:
          "These leaders represent White Kei and Black Kei frontier leadership, including Glen Grey San groups under Ngqabayi and nearby Madolo groups in the same conflict landscape. Oral history says drought-era tension with Jumba-linked Thembu groups grew from rainmaker blame and became open feud.",
      },
      {
        heading: "Why this matters for AmaQithi",
        text:
          "Their inclusion is evidentiary, not ornamental. They provide the broader leadership framework within which AmaQithi identity was sustained and adapted.",
      },
    ],
    sources: [
      "docs/newupdates/other san chiefs.md",
      "docs/newupdates/madolo.md",
      "docs/july updates/khoboko.md",
    ],
  },
  {
    slug: "izibongo",
    eyebrow: "Section Deep Dive",
    title: "AmaQithi izibongo and mixed memory layers",
    intro:
      "Current AmaQithi izibongo are treated as living memory that carries both San-linked continuity and Thembu historical layering: UMQITHI, NDINGA, RHADU, MNONO, NOMSOBONDWANA, UMLEBE, U NKOMO AYIZALI IZALA NGOKU MISELWA, SOPITSHO, YEM YEM, NGQOLOMSILA, VELA BAMBHENTSELE, AMANTANDE.",
    blocks: [
      {
        heading: "Why mixed layers are expected",
        text:
          "Frontier lineages formed through long periods of alliance and incorporation. Mixed praise-name structures are therefore evidence of historical process, not loss of authenticity.",
      },
      {
        heading: "Oral transmission and resilience",
        text:
          "Izibongo persisted through displacement, renaming pressure, and archive loss because they were transmitted through social practice rather than paper systems alone.",
      },
    ],
    sources: ["docs/july updates/doc1.md", "docs/newupdates/other qithi family.md"],
  },
  {
    slug: "chronology",
    eyebrow: "Section Deep Dive",
    title: "Chronology notes and timeline framing",
    intro:
      "The chronology combines deep-time settlement context, 19th-century frontier evidence, and family-linked timelines after 1879.",
    blocks: [
      {
        heading: "Long baseline",
        text:
          "The timeline uses a long baseline to avoid collapse into only colonial-era dates. This preserves indigenous precolonial depth in interpreting later movements.",
      },
      {
        heading: "Frontier pivot period",
        text:
          "The mid-19th to late-19th century period (including Qing-era records and the 1879 rupture) is treated as the key pivot for documented lineage dispersal patterns.",
      },
      {
        heading: "After 1879",
        text:
          "Post-1879 chronology tracks family re-anchoring into Eastern Cape spaces. This is where settlement continuity, naming continuity, and oral records are used together.",
      },
    ],
    sources: [
      "docs/moreinfo/san-in-lesotho.md",
      "docs/newupdates/update1.md",
      "docs/newupdates/qwabi.md",
    ],
  },
];

function getSection(slug: string) {
  return sections.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return {};
  return {
    title: `${section.title} | AmaQithi`,
    description: section.intro,
    alternates: { canonical: `${BASE}/who-we-are/sections/${slug}` },
    openGraph: {
      title: section.title,
      description: section.intro,
      url: `${BASE}/who-we-are/sections/${slug}`,
      type: "article",
      images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: "AmaQithi" }],
    },
  };
}

export default async function WhoWeAreSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  return (
    <>
      <SchemaOrg
        schemas={[
          orgSchema,
          breadcrumbSchema([
            { name: "Who We Are", url: "/who-we-are" },
            { name: section.title, url: `/who-we-are/sections/${section.slug}` },
          ]),
        ]}
      />
      <Nav />
      <main style={{ background: "#1A0F0A", minHeight: "100vh" }}>
        <section
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)",
            paddingTop: "120px",
            paddingBottom: "70px",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
            <p
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C4622D",
                marginBottom: "16px",
              }}
            >
              {section.eyebrow}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display), Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 600,
                color: "#E8A857",
                lineHeight: 1.08,
                marginBottom: "18px",
              }}
            >
              {section.title}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-display), Cormorant Garamond, serif",
                fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
                fontStyle: "italic",
                color: "#D4A96A",
                lineHeight: 1.7,
                maxWidth: "760px",
              }}
            >
              {section.intro}
            </p>
          </div>
        </section>

        <div style={{ background: "#1A0F0A", paddingTop: "8px" }}>
          <Breadcrumb
            items={[
              { label: "Who We Are", href: "/who-we-are" },
              { label: section.title },
            ]}
          />
        </div>

        <div className="section-rule" />

        {section.slug === "lesotho-connection" ? (
          <section style={{ padding: "72px 0", background: "#2C1810" }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1px",
                  background: "rgba(196,98,45,0.2)",
                }}
              >
                <article style={{ background: "#2C1810", padding: "28px 24px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display), Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      color: "#E8A857",
                      lineHeight: 1.25,
                      marginBottom: "10px",
                    }}
                  >
                    1) Why Quthing matters
                  </h2>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented:</strong> Quthing is a district in southern Lesotho, in the Maloti mountain belt. The archival record and site studies place San communities, Baphuthi leadership, and later Thembu movement histories in this same border zone.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: "#F5E6C8" }}>Our hypothesis:</strong> I believe this is why Quthing is central in our clan memory. For us, many AmaQithi lines keep pointing back to this district.
                  </p>
                </article>

                <article style={{ background: "#2C1810", padding: "28px 24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display), Cormorant Garamond, serif", fontSize: "1.3rem", color: "#E8A857", lineHeight: 1.25, marginBottom: "10px" }}>
                    2) The San chiefs of the caves
                  </h2>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented:</strong> Soai (also written Soei) appears in written frontier material linked to Sehonghong. Qing is later tied to that line and to oral explanations of mountain art.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral tradition:</strong> Oral accounts place Chief Quu in this same mountain leadership world before or around Soai.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral tradition:</strong> Tradition also says Mokuoane, father of <Link href="/blog/mount-moorosi-1879" style={{ color: "#E8A857" }}>Moorosi</Link>, married Quu&apos;s sister. That is one core oral link for mixed San-Phuthi descent.
                  </p>
                </article>

                <article style={{ background: "#2C1810", padding: "28px 24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display), Cormorant Garamond, serif", fontSize: "1.3rem", color: "#E8A857", lineHeight: 1.25, marginBottom: "10px" }}>
                    3) Moorosi and the Baphuthi-San friendship
                  </h2>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented:</strong> Sehonghong (Mangolong) is a studied rock-art site. King and Challis (2017, p. 233) also record that San fighters fought with the Phuthi, and villagers replenished food on the mountain under cover of darkness.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented:</strong> The same literature records the mountain password as Moroa (Bushman), and places Basotho auxiliaries with the colonial side in the siege campaign (King and Challis 2017, pp. 232-233; Basutoland Records V references).
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral-history update:</strong> Our latest oral account gives Moorosi&apos;s San name as Qengha, pronounced Qenya in isiXhosa. We are holding this as oral evidence until audio publication.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral tradition:</strong> Accounts hold that San and Phuthi households shared social life, including painting and refuge ties across the Quthing caves.
                  </p>
                </article>

                <article style={{ background: "#2C1810", padding: "28px 24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display), Cormorant Garamond, serif", fontSize: "1.3rem", color: "#E8A857", lineHeight: 1.25, marginBottom: "10px" }}>
                    4) The Qithi connection: Qwabi
                  </h2>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented baseline:</strong> By 1879, the mountain defense included San fighters and local villagers from the district.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented linguistics:</strong> r-to-l shifts are common in cross-language naming in southern Africa, so Moorosi-to-Molosi is a plausible sound shift.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: "#F5E6C8" }}>Our hypothesis:</strong> I believe <Link href="/who-we-are/sections/qwabi-line" style={{ color: "#E8A857" }}>Qwabi</Link> came from the same mixed San-Phuthi-Thembu world around Quthing, and that his sons&apos; names, Molosi and Bushman, preserve that memory.
                  </p>
                </article>

                <article style={{ background: "#2C1810", padding: "28px 24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display), Cormorant Garamond, serif", fontSize: "1.3rem", color: "#E8A857", lineHeight: 1.25, marginBottom: "10px" }}>
                    5) The Thembu were in Lesotho too
                  </h2>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral tradition:</strong> Thembu oral historians place Bhomoyi at Qacha&apos;s Nek and tie the praise uVela Bambhentsele to that period. The plain sense is an adult praise about women coming to him bare.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral tradition + documented:</strong> Oral lines place Mnguti as a Lesotho-to-South migration figure. In Soga&apos;s <em>The South-Eastern Bantu</em>, Mnguti and Maya are siblings, but oral accounts do not always agree on exact placement.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented counterweight:</strong> King and Challis (2017, p. 223) record that in 1829 Moorosi and Moshoeshoe I raided the Thembu of Ngubengcuka. That is why the later local Quthing Thembu alliance detail matters so much.
                  </p>
                  <div style={{ marginTop: "14px", border: "1px solid rgba(196,98,45,0.35)", padding: "14px" }}>
                    <Image src="/thembuline.png" alt="Thembu lineage chart used in oral and written comparison" width={1200} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </article>

                <article style={{ background: "#2C1810", padding: "28px 24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display), Cormorant Garamond, serif", fontSize: "1.3rem", color: "#E8A857", lineHeight: 1.25, marginBottom: "10px" }}>
                    6) AmaQithi and AmaCube as an absorbed group
                  </h2>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral tradition:</strong> Recorded Thembu oral history says Ntande&apos;s twins, Qithi and Cube, were born of commoner mothers and were accepted through black-cow slaughter rites.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Oral tradition:</strong> The same pattern is told earlier for Ndilo&apos;s commoner-house sons. That repetition is why we treat the rite as an incorporation pattern inside Thembu memory.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                    <strong style={{ color: "#F5E6C8" }}>Documented cultural layer:</strong> <Link href="/amaqithi" style={{ color: "#E8A857" }}><em>ingqithi</em></Link> (the little-finger joint cut custom) is recorded as San-linked and later present in Thembu practice.
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: "#F5E6C8" }}>Our hypothesis:</strong> We read this as incorporation memory. We believe the lines folded into Thembu here included San-descended people from the Quthing frontier.
                  </p>
                </article>

                <article style={{ background: "#2C1810", padding: "28px 24px" }}>
                  <h2 style={{ fontFamily: "var(--font-display), Cormorant Garamond, serif", fontSize: "1.3rem", color: "#E8A857", lineHeight: 1.25, marginBottom: "10px" }}>
                    7) Closing: from Quthing to the White Kei
                  </h2>
                  <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.92rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                    From the caves of Quthing, through the fall of the mountain in 1879, the trail runs south into Lady Frere and the White Kei basin. That is where Qwabi&apos;s sons raised families, and where these names stayed alive beside real rivers, hills, and villages.
                  </p>
                </article>
              </div>

              <div style={{ marginTop: "30px", borderLeft: "2px solid rgba(196,98,45,0.4)", paddingLeft: "18px", maxWidth: "840px" }}>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4622D", marginBottom: "8px" }}>
                  Sources used for this page
                </p>

                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E8A857", marginBottom: "6px" }}>
                  Written sources
                </p>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.82rem", color: "#9E8C7A", lineHeight: 1.75, marginBottom: "10px" }}>
                  King, Rachel and Sam Challis, <em>The &#39;Interior World&#39; of the Nineteenth-Century Maloti-Drakensberg Mountains</em>, <em>The Journal of African History</em> 58:2 (2017), pp. 223, 232-233 · Conz, Christopher R., <em>Wisdom Does Not Live in One House</em> (2017), p. 115 · Soga, <em>The South-Eastern Bantu</em> (Mnguti/Maya placement).
                </p>

                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E8A857", marginBottom: "6px" }}>
                  Oral history recordings
                </p>
                <ul style={{ paddingLeft: "18px", margin: "0 0 12px 0", color: "#9E8C7A" }}>
                  <li style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.82rem", lineHeight: 1.75 }}>
                    <a href="https://www.youtube.com/watch?v=sYYWSyR7WRw&t=323s" target="_blank" rel="noopener noreferrer" style={{ color: "#E8A857", textDecoration: "underline" }}>
                      Thembu oral historian on Bhomoyi and uVela Bambhentsele (isiXhosa)
                    </a>
                  </li>
                  <li style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.82rem", lineHeight: 1.75 }}>
                    <a href="https://www.youtube.com/watch?v=s8Oi_q3O7ew&t=104s" target="_blank" rel="noopener noreferrer" style={{ color: "#E8A857", textDecoration: "underline" }}>
                      Thembu oral historian on Mnguti migration from Lesotho (isiXhosa)
                    </a>
                  </li>
                  <li style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.82rem", lineHeight: 1.75 }}>
                    <a href="https://www.youtube.com/watch?v=2yW4kyNfHzw&t=448s" target="_blank" rel="noopener noreferrer" style={{ color: "#E8A857", textDecoration: "underline" }}>
                      Thembu oral account on Ntande line, Qithi and Cube incorporation (isiXhosa)
                    </a>
                  </li>
                  <li style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.82rem", lineHeight: 1.75 }}>
                    <a href="https://www.youtube.com/watch?v=3ic6tJMK4zE" target="_blank" rel="noopener noreferrer" style={{ color: "#E8A857", textDecoration: "underline" }}>
                      Supporting oral genealogy account used with the incorporation narrative (isiXhosa)
                    </a>
                  </li>
                </ul>

                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E8A857", marginBottom: "6px" }}>
                  Family accounts
                </p>
                <p style={{ fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.82rem", color: "#9E8C7A", lineHeight: 1.75, margin: 0 }}>
                  Qwabi family naming memory (Molosi and Bushman), Quthing-to-Lady Frere migration memory, and oral continuity across Mkapusi and nearby villages.
                </p>
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "34px" }}>
                <Link href="/who-we-are" style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C4622D", textDecoration: "none", borderBottom: "1px solid rgba(196,98,45,0.5)", paddingBottom: "2px" }}>
                  ← Back to Who We Are
                </Link>
                <Link href="/families" style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-body), Inter, sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9E8C7A", textDecoration: "none", borderBottom: "1px solid rgba(158,140,122,0.5)", paddingBottom: "2px" }}>
                  See families
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section style={{ padding: "72px 0", background: "#2C1810" }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1px",
                  background: "rgba(196,98,45,0.2)",
                }}
              >
                {section.blocks.map((block) => (
                  <article key={block.heading} style={{ background: "#2C1810", padding: "28px 24px" }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-display), Cormorant Garamond, serif",
                        fontSize: "1.3rem",
                        color: "#E8A857",
                        lineHeight: 1.25,
                        marginBottom: "10px",
                      }}
                    >
                      {block.heading}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-body), Inter, sans-serif",
                        fontSize: "0.92rem",
                        color: "#9E8C7A",
                        lineHeight: 1.75,
                      }}
                    >
                      {block.text}
                    </p>
                  </article>
                ))}
              </div>

              <div
                style={{
                  marginTop: "30px",
                  borderLeft: "2px solid rgba(196,98,45,0.4)",
                  paddingLeft: "18px",
                  maxWidth: "780px",
                }}
              >
                {section.slug === "izibongo" && (
                  <div
                    style={{
                      marginBottom: "20px",
                      background: "#1A0F0A",
                      border: "1px solid rgba(196,98,45,0.28)",
                      padding: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body), Inter, sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#C4622D",
                        marginBottom: "8px",
                      }}
                    >
                      Full caps set
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display), Cormorant Garamond, serif",
                        fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
                        fontWeight: 700,
                        color: "#F5E6C8",
                        lineHeight: 1.32,
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                        marginBottom: "10px",
                      }}
                    >
                      UMQITHI, NDINGA, RHADU, MNONO, NOMSOBONDWANA, UMLEBE,
                      U NKOMO AYIZALI IZALA NGOKU MISELWA, SOPITSHO, YEM YEM,
                      NGQOLOMSILA, VELA BAMBHENTSELE, AMANTANDE, NGAMAQITHI
                      AMAHLE NEENZIPHO ZAWO.
                    </p>
                    <Link
                      href="/iziduko-izibongo-clan-names"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontFamily: "var(--font-body), Inter, sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        color: "#C4622D",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(196,98,45,0.5)",
                        paddingBottom: "2px",
                      }}
                    >
                      Open full iziduko authority page
                    </Link>
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    marginBottom: "8px",
                  }}
                >
                  Document trail used for this section
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: "#9E8C7A",
                    lineHeight: 1.75,
                  }}
                >
                  {section.sources.join(" · ")}
                </p>
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "34px" }}>
                <Link
                  href="/who-we-are"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(196,98,45,0.5)",
                    paddingBottom: "2px",
                  }}
                >
                  ← Back to Who We Are
                </Link>
                <Link
                  href="/families"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9E8C7A",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(158,140,122,0.5)",
                    paddingBottom: "2px",
                  }}
                >
                  See families
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
