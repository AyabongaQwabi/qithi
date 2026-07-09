import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";
import SchemaOrg, { orgSchema, whoWeAreSchema } from "@/components/SchemaOrg";

const BASE = "https://qithi.co.za";

export const metadata: Metadata = {
  title:
    "AmaQithi History — Who Are the AmaQithi? Thembu Clan with San Heritage",
  description:
    "The complete history of the AmaQithi clan: a Thembu clan born of an ancient San-Bantu matrix. Mqithi at Rhodana before 1841, Qwabi Joka (born 1842), the Q click consonant, Stanford's Silayi testimony, and the Ingqithi ritual that proves the San-Thembu fusion.",
  keywords: [
    "who is Qithi",
    "who are AmaQithi",
    "AmaQithi history",
    "AmaQithi clan history",
    "Mqithi history",
    "Mqithi San",
    "Qwabi Joka",
    "San Eastern Cape history",
    "AbaThwa Eastern Cape",
    "Rhodana history",
    "Queen Nonesi Rhodana",
    "San Thembu alliance",
    "White Kei River San",
    "click consonant San",
    "Khoisan Eastern Cape",
    "AmaQithi origin",
    "Lady Frere San history",
    "San First People Eastern Cape",
    "Thembu San matrix",
    "Ingqithi ritual",
    "Tambookie",
  ],
  openGraph: {
    title: "Who Are the AmaQithi? Thembu Clan with Deep San Heritage",
    description:
      "The AmaQithi are a Thembu clan born of the ancient San-Bantu matrix. San First People of the White Kei River basin, brought into the Thembu Great House at Rhodana in 1841. Full history with primary sources.",
    url: `${BASE}/who-we-are`,
    images: [
      { url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: "AmaQithi" },
    ],
    type: "article",
  },
  alternates: { canonical: `${BASE}/who-we-are` },
};

const section: React.CSSProperties = {
  position: "relative",
  padding: "72px 0",
};
const inner: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px",
};
const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-body), Inter, sans-serif",
  fontSize: "0.68rem",
  fontWeight: 500,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#C4622D",
  marginBottom: "16px",
};
const h2: React.CSSProperties = {
  fontFamily: "var(--font-display), Cormorant Garamond, serif",
  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
  fontWeight: 600,
  color: "#E8A857",
  lineHeight: 1.1,
  marginBottom: "20px",
};
const body: React.CSSProperties = {
  fontFamily: "var(--font-body), Inter, sans-serif",
  fontSize: "1rem",
  color: "#D4A96A",
  lineHeight: 1.75,
  marginBottom: "16px",
  maxWidth: "680px",
};
const readMoreLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "var(--font-body), Inter, sans-serif",
  fontSize: "0.78rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#C4622D",
  textDecoration: "none",
  borderBottom: "1px solid rgba(196,98,45,0.5)",
  paddingBottom: "2px",
  marginTop: "10px",
};

const timelineItems = [
  {
    year: "≥ 10,000 BCE",
    event:
      "San First People occupy the White Kei River basin, Xonxa mountains, and Cacadu rock shelters.",
  },
  {
    year: "~1835",
    event:
      "San chief Madolo leads his people to Glen Grey (Lady Frere area). The Bushman School on the White Kei (Cacadu) River is established by missionary James Read. Fifteen San families settle. Chief Madolo attends services.",
  },
  {
    year: "1841–1842",
    event:
      "Queen Nonesi and heir Mtirara establish the Thembu Great Place at Rhodana, at the foot of the Cacadu mountains. They find the landscape already inhabited by San communities. Mqithi — San captain — is identified as ally, not subject. His clan is given Qithi Village adjacent to the royal residence.",
  },
  {
    year: "1842",
    event:
      "Qwabi Joka is born in the White Kei basin, in immediate territorial proximity to documented San communities and the Mqithi clan settlement.",
  },
  {
    year: "~1850",
    event:
      'Walter Stanford records Silayi\'s testimony: Thembu groups on the White Kei — including chief Jumba and chief Mgudlwa — are on "comparatively friendly terms with San families and clans" in the area.',
  },
  {
    year: "1850–1853",
    event:
      "War of Mlanjeni. San marksmen serve as elite units alongside Thembu forces defending the Xonxa and Rhodana mountains.",
  },
  {
    year: "1856",
    event:
      "Chief Madolo, aged approximately 80, retreats into the Maloti-Drakensberg with the remnant of his San band. They disappear from the colonial record.",
  },
  {
    year: "1869",
    event:
      "San painter \"'Gcu-wa\" (brother of chief Mada'kane) is still recorded living in the White Kei area, carrying paint pots on his belt.",
  },
  {
    year: "1873",
    event:
      "Qing (believed to be from the Soai line) guides Joseph Millerd Orpen through Maloti shelters and explains ritual meanings in the paintings. His testimony becomes a major interpretive source for understanding San-Phuthi-Nguni ritual overlap in mountain art.",
  },
  {
    year: "1879",
    event:
      'Moorosi\'s War. Qwabi Joka names his firstborn son Molosi — preserving the name of Phuthi chief Moorosi, whose closest allies were San bowmen. The password to Moorosi\'s mountain stronghold was "Moroa" — "Bushman." Joka\'s youngest son is later named Bushman (Boesman) outright.',
  },
  {
    year: "1880",
    event:
      "Queen Nonesi is forcibly deported by the British colonial government after four decades defending the Rhodana Great Place.",
  },
  {
    year: "1915",
    event:
      "Qwabi Joka dies in the White Kei basin. His son Bushman (Boesman) is recorded working the Steynsburg rails that same year.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, whoWeAreSchema]} />
      <Nav />
      <main style={{ background: "#1A0F0A", minHeight: "100vh" }}>
        <PageHero
          bg
          eyebrow="AmaQithi — Who We Are"
          headline="AbaThembu, AbaThwa — ubabona nge Ngqithi."
          subheading="AmaQithi are a San-Thembu people of the Eastern Cape rooted in San ancestry, integrated into Thembu political history, and still identifiable through language, place names, and izibongo."
          intro="On this site we explain why we make that claim, such asthe evidence in the White Kei record, the Lesotho connection, the traceable Qwabi line, the Rhodana and Lady Frere geography, and what we still do not know with certainty."
        />

        <div style={{ background: "#1A0F0A", paddingTop: "8px" }}>
          <Breadcrumb items={[{ label: "Who We Are" }]} />
        </div>

        {/* Why this claim */}
        <section
          className="cave-section cave-bg"
          style={{
            ...section,
            background: "#2C1810",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/bg-square.png)",
              backgroundSize: "cover",
              backgroundPosition: "center left",
              opacity: 0.06,
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(44,24,16,0.92)",
              pointerEvents: "none",
            }}
          />
          <div style={{ ...inner, position: "relative", zIndex: 1 }}>
            <p style={{ ...eyebrow, marginBottom: "24px" }}>
              Why We Say AmaQithi Are San-Thembu
            </p>
            <h2 style={h2}>
              The claim starts in the Eastern Cape record, not in speculation.
            </h2>
            <p style={body}>
              The story of AmaQithi is not an isolated clan story. They have a
              documented frontier history, one that corelates with San
              communities in the White Kei basin, Thembu settlement at Rhodana,
              and sustained interaction between the two and the relationship
              between San, Phuti & Thembu in Lesotho. These make up the basis
              for saying AmaQithi are a San-Thembu people in identity.
            </p>
            <p style={body}>
              One of the strongest early witnesses is Silayi, whose testimony
              was recorded by Stanford. The quote below matters because it
              places AmaQithi, San and Thembu in the same local social world in
              the period that shapes our memory and identity.
            </p>
            <blockquote
              style={{
                borderLeft: "3px solid #C4622D",
                paddingLeft: "28px",
                margin: "0",
                maxWidth: "720px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), Cormorant Garamond, serif",
                  fontSize: "clamp(1.15rem, 2.5vw, 1.55rem)",
                  fontStyle: "italic",
                  color: "#E8A857",
                  lineHeight: 1.65,
                  marginBottom: "16px",
                }}
              >
                &ldquo;At about this time a number of Thembu groups living on
                the White Kei, including &lsquo;Jumba&rsquo;, father of the
                Thembu chief, &lsquo;Umgudhluwa&rsquo;, were on comparatively
                friendly terms with San &lsquo;families and clans&rsquo; living
                in that area.&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: "var(--font-body), Inter, sans-serif",
                  fontSize: "0.78rem",
                  color: "#9E8C7A",
                  fontStyle: "normal",
                }}
              >
                — Silayi, subject of Chief Jumba, recorded by Sir Walter
                Stanford (Macquarrie 1962:31)
              </cite>
            </blockquote>
            <p
              style={{
                ...body,
                color: "#9E8C7A",
                fontStyle: "italic",
                marginTop: "24px",
              }}
            >
              This is not the only source, but it is a foundational one: it
              confirms social proximity and alliance conditions in the same
              landscape where AmaQithi identity has a long history with San and
              Thembu.
            </p>
            <Link href="/who-we-are/sections/san-thembu-claim" style={readMoreLink}>
              See why
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* Lesotho connection */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#1A0F0A" }}
        >
          <div style={inner}>
            <p style={eyebrow}>Connection to Lesotho</p>
            <h2 style={h2}>
              Quthing and the mountain frontier are part of our history.
            </h2>
            <p style={body}>
              The Lesotho link is historical, not symbolic. Quthing functioned
              as a major frontier zone where San, Phuthi, and Thembu networks
              overlapped, especially in the period leading to and following the
              1879 destruction of Moorosi&apos;s mountain.
            </p>
            <p style={body}>
              In that zone, families moved under pressure, regrouped through
              kinship and alliance, and later spread into Eastern Cape
              districts. This is why Lesotho appears repeatedly in Thembu oral
              history and in traceable family lines.
            </p>
            <p style={body}>
              The Lesotho context also helps explain why AmaQithi history cannot
              be read as only one kingdom, one language, or one fixed label. The
              archive is regional and mixed by design. It is a reflection of the
              complex social and political history of the region.
            </p>
            <Link href="/who-we-are/sections/lesotho-connection" style={readMoreLink}>
              Read more
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* Qwabi family */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#2C1810" }}
        >
          <div style={inner}>
            <p style={eyebrow}>The Qwabi Family Line</p>
            <h2 style={h2}>
              Qwabi is one family among many AmaQithi families.
            </h2>
            <p style={{ ...body, marginBottom: "32px" }}>
              The Qwabi line should not be treated as the whole clan. It is one
              branch among many AmaQithi families. It is highlighted here
              because it is one of the lines we can trace most clearly to the
              Lesotho frontier and then into Lady Frere.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px",
              }}
            >
              <div>
                <p style={body}>
                  Qwabi Joka is part of the post-1879 historical trail. His
                  descendants, village links, and naming patterns are among the
                  strongest anchors currently available in the community
                  archive.
                </p>
                <p style={body}>
                  This gives us a practical method: keep tracing the families we
                  can verify, while continuing to collect oral and documentary
                  evidence for other AmaQithi lines in Ngcobo, Cofimvaba, Cala,
                  and beyond.
                </p>
              </div>
              <div>
                <p style={body}>
                  So this section is not saying &ldquo;AmaQithi equals
                  Qwabi.&rdquo; It is saying:
                  <strong style={{ color: "#E8A857" }}>
                    {" "}
                    Qwabi is the line we can currently trace most clearly
                  </strong>
                  , and that trace strengthens the broader San-Thembu identity
                  claim for the clan.
                </p>
                <p style={{ ...body, color: "#9E8C7A" }}>
                  If your family is AmaQithi but not in the current Qwabi trace,
                  this does not weaken your identity. It only marks where the
                  paper trail is currently strongest.
                </p>
              </div>
            </div>
            <Link href="/who-we-are/sections/qwabi-line" style={readMoreLink}>
              See why
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* Lady Frere and Rhodana */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#1A0F0A" }}
        >
          <div style={inner}>
            <p style={eyebrow}>Lady Frere · Rhodana · KwaTshatshu</p>
            <h2 style={h2}>
              Our Eastern Cape ground history is specific and local.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px",
              }}
            >
              <div>
                <p style={body}>
                  Lady Frere is central to the living AmaQithi map. Qwabi Joka
                  died in this landscape. Mqithi village naming persists in the
                  same area. Community memory and local geography still carry
                  these references.
                </p>
                <p style={body}>
                  Rhodana matters because it ties AmaQithi narrative to Thembu
                  political geography: Thembu presence, San presence, and
                  adjacent settlement patterns are all part of one shared
                  historical field.
                </p>
              </div>
              <div>
                <p style={body}>
                  KwaTshatshu and emaQithini naming sits right next to Rhodana
                  institutions today. The significance is not only symbolic: it
                  shows how place, lineage, and local political history overlap
                  in one corridor.
                </p>
                <p style={{ ...body, color: "#9E8C7A" }}>
                  This is why we describe AmaQithi as an Eastern Cape San-Thembu
                  people: the archives, settlement memory, and surviving place
                  names all converge here.
                </p>
              </div>
            </div>
            <Link href="/who-we-are/sections/lady-frere-rhodana" style={readMoreLink}>
              Read more
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* Etymology section */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#1A0F0A" }}
        >
          <div style={inner}>
            <p style={eyebrow}>Etymology</p>
            <h2 style={h2}>Quthing, Qwabi, Qwas, and Qithi.</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display), Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#E8A857",
                    marginBottom: "10px",
                  }}
                >
                  Quthing
                </h3>
                <p style={body}>
                  Quthing carries a layered frontier morphology: a click-bearing
                  root with a locative Sotho ending <em>-ing</em>. In practice,
                  it functions as a place-name bridge between San-linked sound
                  systems and Sotho place grammar.
                </p>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display), Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#E8A857",
                    marginBottom: "10px",
                    marginTop: "22px",
                  }}
                >
                  Qwabi and Qwas
                </h3>
                <p style={body}>
                  In !Ui-Taa family etymology, <em>Qwabi</em> and <em>Qwas</em>{" "}
                  are treated as
                  <strong style={{ color: "#E8A857" }}> son</strong> and
                  <strong style={{ color: "#E8A857" }}> daughter</strong>{" "}
                  markers. This is one of the key lineage explanations currently
                  preserved in community memory.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display), Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#E8A857",
                    marginBottom: "10px",
                  }}
                >
                  Qithi
                </h3>
                <p style={body}>
                  Qithi is treated as a San-linked word because of the Q click
                  layer in the name. However, at this stage we still do{" "}
                  <strong style={{ color: "#E8A857" }}>not</strong> have a final
                  agreed meaning of Qithi in San, Sesotho, or Sephuthi.
                </p>
                <p style={{ ...body, color: "#9E8C7A" }}>
                  So the current position is clear: we can identify the
                  linguistic layer and historical continuity of use, but the
                  exact root meaning remains an open research question.
                </p>
              </div>
            </div>
            <Link href="/who-we-are/sections/etymology" style={readMoreLink}>
              Read more
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* Name what we know */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#2C1810" }}
        >
          <div style={inner}>
            <p style={eyebrow}>The Name · What We Know So Far</p>
            <h2 style={h2}>
              The search for Qithi is ongoing — and the clues are real.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px",
              }}
            >
              <div>
                <p style={body}>
                  Contrary to some oral accounts, no written record has yet
                  confirmed a man named Qithi as a son of Thembu king Ntande.
                  The only consistently documented son in that branch is{" "}
                  <strong style={{ color: "#E8A857" }}>Mnguti</strong>. But the
                  colonial record is incomplete, and unrecorded sons were
                  common.
                </p>
                <p style={body}>
                  This means uncertainty is real, not weakness. Mqithi may still
                  represent an unrecorded line. Research is still active, and
                  the conclusion remains open.
                </p>
              </div>
              <div>
                <p style={body}>
                  What is clearer is the name web: Quthing, emaQithini naming in
                  Lady Frere, and ingqithi ritual continuity. These are
                  independent strands pointing to one shared historical field.
                </p>
                <p style={{ ...body, color: "#9E8C7A" }}>
                  If you hold oral records on Qithi, Ntande, or early settlement
                  naming in Rhodana and KwaTshatshu, this archive needs your
                  contribution.
                </p>
              </div>
            </div>
            <Link href="/who-we-are/sections/name-what-we-know" style={readMoreLink}>
              Read more
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* San leaders in Qithi areas */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#2C1810" }}
        >
          <div style={inner}>
            <p style={eyebrow}>San Leaders in Qithi Regions</p>
            <h2 style={h2}>
              Lesotho and Lady Frere share leadership memory in this history.
            </h2>
            <p style={{ ...body, marginBottom: "40px" }}>
              In the areas where Qithi history is carried, these San leaders are
              central references: Soei/Soai and Quu in Lesotho, and
              Mada&apos;kane and Madolo in Lady Frere.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1px",
                background: "rgba(196,98,45,0.2)",
                marginBottom: "24px",
              }}
            >
              {[
                {
                  name: "Soei (Soai) — Lesotho",
                  detail:
                    "A major San leader in the Maloti zone, tied to Sehonghong and remembered in alliance networks around Moorosi. His line is part of the same Lesotho frontier archive used in AmaQithi history.",
                },
                {
                  name: "Quu — Lesotho",
                  detail:
                    "A key San leader in the Phuthi-San alliance period, linked to kinship and military relationships that defined the mountain sanctuary world before its destruction.",
                },
                {
                  name: "Mada'kane — Lady Frere region",
                  detail:
                    "San leader of the Black Kei-White Kei confluence region; preserved in local memory as part of the same eastern frontier leadership landscape as AmaQithi settlement histories.",
                },
                {
                  name: "Madolo — Lady Frere region",
                  detail:
                    "A major San chief associated with White Kei movement and conflict-era adaptation. His history grounds the Eastern Cape side of the San leadership context for AmaQithi identity.",
                },
              ].map((chief) => (
                <div
                  key={chief.name}
                  style={{ background: "#2C1810", padding: "28px 24px" }}
                >
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display), Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#E8A857",
                      marginBottom: "10px",
                      lineHeight: 1.2,
                    }}
                  >
                    {chief.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: "0.88rem",
                      color: "#9E8C7A",
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
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: "0.82rem",
                color: "#9E8C7A",
                fontStyle: "italic",
                lineHeight: 1.65,
                maxWidth: "620px",
                marginTop: "24px",
              }}
            >
              These leaders are not decorative references. They are part of the
              same territorial and social world in which AmaQithi identity
              formed.
            </p>
            <Link href="/who-we-are/sections/san-leaders" style={readMoreLink}>
              Read more
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* Izibongo */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#1A0F0A" }}
        >
          <div style={inner}>
            <p style={eyebrow}>Izibongo</p>
            <h2 style={h2}>
              The current AmaQithi izibongo, including Thembu mix layers.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "40px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily:
                      "var(--font-display), Cormorant Garamond, serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    fontStyle: "italic",
                    color: "#E8A857",
                    lineHeight: 2,
                    marginBottom: "16px",
                  }}
                >
                  Ndinga, Mnono, Rhadu, Mlebe,
                  <br />
                  Nomsobodwana,
                  <br />
                  Sopitsho Ngqolomsila,
                  <br />
                  Yemyem.
                  <br />
                  NgamaQithi amahle neenzipho zawo.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), Inter, sans-serif",
                    fontSize: "0.82rem",
                    color: "#9E8C7A",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;The AmaQithi — beautiful, with their nails.&rdquo; You say this
                  when you introduce yourself. You say it when you arrive
                  somewhere and need to be known.
                </p>
              </div>
              <div>
                <p style={{ ...body, color: "#9E8C7A" }}>
                  Izibongo are praise poems. They are the clan&apos;s memory — names,
                  events, the character of the people who came before. Nobody
                  wrote them first. They were spoken. Passed from parents to
                  children. Said at gatherings. Said to strangers who needed to
                  know who you were.
                </p>
                <p style={{ ...body, color: "#9E8C7A" }}>
                  The current AmaQithi set is layered: San-linked continuity is
                  present, and Thembu historical mixing is also present. That
                  blend is part of the truth, not a mistake in memory.
                </p>
              </div>
            </div>
            <Link href="/who-we-are/sections/izibongo" style={readMoreLink}>
              Read more
            </Link>
          </div>
        </section>

        <div className="section-rule" />

        {/* Generational timeline */}
        <section
          className="cave-section cave-bg"
          style={{ ...section, background: "#2C1810" }}
        >
          <div style={inner}>
            <p style={eyebrow}>Chronology</p>
            <h2 style={h2}>The written record.</h2>
            <div style={{ position: "relative", paddingLeft: "24px" }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  background: "rgba(196, 98, 45, 0.3)",
                }}
              />
              {timelineItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    marginBottom: "36px",
                    paddingLeft: "24px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-4px",
                      top: "6px",
                      width: "8px",
                      height: "8px",
                      background: "#C4622D",
                      transform: "rotate(45deg)",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#C4622D",
                      marginBottom: "4px",
                    }}
                  >
                    {item.year}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Inter, sans-serif",
                      fontSize: "0.9rem",
                      color: "#D4A96A",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/who-we-are/sections/chronology" style={readMoreLink}>
              Read full chronology
            </Link>
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
