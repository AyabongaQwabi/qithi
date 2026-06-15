import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import PageCTA from '@/components/PageCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Who We Are — AmaQithi',
  description:
    'The history of the AmaQithi — San (AbaThwa) First People of the White Kei River basin. From Rhodana to Queen Nonesi, Mqithi, Qwabi Joka, and the click consonant that survived everything.',
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
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          eyebrow="AmaQithi — Identity"
          headline="Not Thembu by origin. San by blood."
          subheading="The AmaQithi are the San (AbaThwa) First People of the White Kei River basin. The name carries a palatal click consonant that survived long after everything else was absorbed."
          intro="This is not mythology. It is oral history cross-referenced with colonial archive, genealogical record, and the testimony of Silayi — recorded by Sir Walter Stanford in the 1850s."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Who We Are' }]} />
        </div>

        {/* Stanford quote */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
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
          </div>
        </section>

        <div className="section-rule" />

        {/* Click consonant section */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Linguistics</p>
            <h2 style={h2}>The click that survived.</h2>
            <p style={body}>
              Original Bantu languages did not have click consonants. The Nguni people absorbed the
              Q, C, and X clicks via centuries of interaction, intermarriage, and structural assimilation
              with Khoisan people. A name containing a Q click is not a Xhosa name that happens to sound
              unusual — it is evidence of San origin.
            </p>
            <p style={body}>
              <strong style={{ color: '#E8A857' }}>Qwabi. Qithi. Mqithi.</strong> Every foundational
              surname in this clan carries the palatal click — the sharpest, most distinctly
              non-Bantu sound in the Khoisan phonetic system. In the original !Ui-Taa or Central Khoe
              language groupings, the name would have been rendered:
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
              European travelers, Dutch colonial administrators, and British land registry clerks
              systematically butchered these sounds in official records. Researchers tracing San lineage
              must search for phonetic variants: Kiti, Chiti, Xiti, Tshiti, Captain Kees.
            </p>
            <p style={{ ...body, color: '#9E8C7A', fontStyle: 'italic' }}>
              The click is where the story starts. It is also the last thing that could not be erased.
            </p>
          </div>
        </section>

        <div className="section-rule" />

        {/* Rhodana section */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#2C1810' }}>
          <div style={inner}>
            <p style={eyebrow}>Rhodana · Lady Frere</p>
            <h2 style={h2}>The Great Place and the San who were already there.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <p style={body}>
                  In 1841, Queen Nonesi — Great Wife of King Ngubengcuka — moved the Thembu royal
                  court to Rhodana, at the foot of the Cacadu mountains near the White Kei River.
                  The move was strategic: placing the Thembu on the frontline against British
                  colonial expansion.
                </p>
                <p style={body}>
                  The landscape was already inhabited. San communities had occupied the rock shelters
                  of the Xonxa and Rhodana mountains for millennia. Rather than displacing them,
                  the Thembu engaged in an era of intensive political integration.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The San leader <strong style={{ color: '#D4A96A' }}>Mqithi</strong> was recognized
                  as the "Royal San" of the Rhodana Great Place. His clan was given Qithi Village —
                  directly adjacent to the royal residence. That placement was a rank marker, not
                  charity: Mqithi was treated as a senior counselor and hereditary ritual specialist.
                </p>
              </div>
              <div>
                <p style={body}>
                  The roles were documented: San served as rainmakers during droughts, frontier scouts
                  who tracked colonial movements through terrain no outsider could navigate, elite
                  marksmen during the War of Mlanjeni (1850–1853), and herbalists supplying medicinal
                  knowledge drawn from generations of inhabiting this specific landscape.
                </p>
                <p style={body}>
                  The Thembu gave protection and cattle. The San gave intelligence, spiritual authority,
                  and military capability. It was not assimilation by conquest. It was survival by
                  mutual recognition.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  Qithi Village sits on a literal fence line with the Rodana royal site today —
                  adjacent to the Rodana Clinic and Rodana PJS School. The geography has not moved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rule" />

        {/* Izibongo */}
        <section className="cave-section cave-bg" style={{ ...section, background: '#1A0F0A' }}>
          <div style={inner}>
            <p style={eyebrow}>Izibongo</p>
            <h2 style={h2}>The praise names of the AmaQithi.</h2>
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
                    fontSize: '0.8rem',
                    color: '#9E8C7A',
                    fontStyle: 'italic',
                    lineHeight: 1.65,
                  }}
                >
                  "The AmaQithi — beautiful, with their nails." The izibongo are recited at
                  ceremony, at introduction, at the moment of being recognized as belonging.
                </p>
              </div>
              <div>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  Izibongo are clan praise poems — living documents that encode history, identity,
                  and belonging. They are not written down first. They are spoken. They survive
                  because they were given to children, recited at gatherings, and passed across
                  every generation whether or not anyone thought to record them.
                </p>
                <p style={{ ...body, color: '#9E8C7A' }}>
                  The AmaQithi izibongo survived the colonial period, the forced removals, and the
                  disruption of the San integration into the Thembu nation. They remain the primary
                  living evidence of unbroken clan identity.
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
            <h2 style={h2}>The documented record.</h2>
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
          headline="Know your lineage. Apply for access."
          body="This portal is for AmaQithi families and verified descendants only. If you know your village and your surname, begin your application."
          primaryLabel="Apply for Membership"
          primaryHref="/apply"
          secondaryLabel="View Families"
          secondaryHref="/families"
        />
      </main>
      <Footer />
    </>
  );
}
