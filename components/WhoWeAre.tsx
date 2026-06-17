const timeline = [
  { year: 'c. 1835', event: 'Chief Madolo relocates San clans from the Klipplaats and Upper Black Kei to the Glen Grey area near Lady Frere.' },
  { year: '1839', event: 'Missionary James Read establishes a Bushman School on the White Kei River. By 1842, fifteen San families live there.' },
  { year: '1841', event: 'Queen Nonesi moves the Thembu Great Place to Rhodana. Mqithi and the AmaQithi are already there — his clan holds land adjacent to the royal residence.' },
  { year: '1842', event: 'Qwabi Joka born near Agnes, White Kei River, Lady Frere — in the heart of San territory.' },
  { year: '1850', event: 'Colonial pressure forces Chief Madolo to retreat to caves along the White Kei. San and Thembu relations intensify.' },
  { year: '1856', event: 'Madolo and the remnant of his tribe withdraw into the Maloti-Drakensberg. Families who remain assimilate into Thembu and Xhosa populations.' },
  { year: '1879', event: "San fighters armed with bows and arrows fight alongside Chief Moorosi's forces. The password to Moorosi's mountain stronghold is \"Moroa\" — the Xhosa word for Bushman." },
  { year: '1921', event: 'Halile Jonas Qwabi dies in the Bulhoek Massacre. The apartheid government later erases civil death registrations for the victims.' },
];

const roles = [
  {
    title: 'Rainmakers',
    desc: 'Called upon during droughts to ensure the survival of royal cattle, drawing on their ritual seniority as original inhabitants of the land.',
    ref: 'qithi-rhodana.md',
  },
  {
    title: 'Elite Marksmen',
    desc: 'San marksmen served as elite units alongside Thembu and Xhosa forces during the War of Mlanjeni (1850–1853), and alongside Chief Moorosi in 1879.',
    ref: 'qithi-rhodana.md / moorosi.md',
  },
  {
    title: 'Frontier Scouts',
    desc: 'Their superior knowledge of the Xonxa and Cacadu terrain made them irreplaceable for tracking colonial movements and enemy raiders.',
    ref: 'qithi-rhodana.md',
  },
  {
    title: 'Herbalists',
    desc: 'Holders of medicinal knowledge from local flora. The First People of the land carried the deepest knowledge of what grew in it.',
    ref: 'qithi-rhodana.md',
  },
  {
    title: 'Rock Artists',
    desc: 'The White Kei basin was a hub of San artistic activity. An old San painter was still recorded there as late as 1869.',
    ref: 'madolo.md',
  },
  {
    title: 'Counsellors to Royalty',
    desc: 'Mqithi\'s clan was placed directly adjacent to the Thembu royal residence at Rhodana — a position of high rank comparable to a senior counsellor.',
    ref: 'qithi-rhodana.md',
  },
];

const card: React.CSSProperties = {
  background: 'rgba(196, 98, 45, 0.06)',
  border: '1px solid rgba(196, 98, 45, 0.4)',
  padding: '20px',
};

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="cave-section cave-bg"
      style={{
        background: '#2C1810',
        padding: '100px 0',
        position: 'relative',
      }}
      aria-labelledby="who-heading"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C4622D',
            marginBottom: '16px',
          }}
        >
          Who We Are
        </p>

        <h2
          id="who-heading"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: '#F5E6C8',
            marginBottom: '60px',
            maxWidth: '700px',
            lineHeight: 1.1,
          }}
        >
          San First People of the White Kei River basin
        </h2>

        {/* Two-column: prose left, cards right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            marginBottom: '80px',
          }}
        >
          {/* Left: prose */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                color: '#D4A96A',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <p>
                The AmaQithi are San (AbaThwa) First People. They are not Thembu by origin.
                The name <em>Qithi</em> — and its variant <em>Mqithi</em> — carries a palatal
                click consonant indigenous to Khoisan languages, not Bantu languages. It is a
                linguistic fossil: a San phonetic root wrapped in a Xhosa personal prefix,
                surviving in the name of the clan long after everything else was absorbed.
              </p>
              <p>
                By the time Queen Nonesi moved the Thembu Great Place to Rhodana in 1841, Mqithi
                was already there. His clan held land at Qithi Village, positioned directly
                adjacent to the Thembu royal residence — a placement that marked high rank,
                the position of a senior counsellor. The AmaQithi predate the Thembu at
                that site.
              </p>
              <p>
                The names Qwabi, Qithi, and Mqithi all carry the sharp palatal click Q. In the
                ancient !Ui-Taa (!Xam) and Central Khoe language groupings, these names carried
                authentic click symbols. Early European administrators and land clerks
                phoneticised them as Kiti, Chiti, Xiti, Tshiti — research must account for
                these colonial distortions.
              </p>
              <p>
                The AmaQithi assimilated into the Thembu nation over generations of coexistence,
                intermarriage, and political integration in the Cacadu basin. They carry Thembu
                customs and speak Xhosa. But their origin is San. That is where izibongo
                begin. That is where the lineage starts.
              </p>

              {/* Stanford quote */}
              <blockquote
                style={{
                  borderLeft: '3px solid #C4622D',
                  paddingLeft: '20px',
                  marginTop: '8px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    color: '#E8A857',
                    lineHeight: 1.6,
                  }}
                >
                  "At about this time a number of Thembu groups living on the White Kei,
                  including 'Jumba', father of the Thembu chief, 'Umgudhluwa', were on
                  comparatively friendly terms with San 'families and clans' living in that area."
                </p>
                <cite
                  style={{
                    display: 'block',
                    marginTop: '10px',
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--smoke)',
                    fontStyle: 'normal',
                  }}
                >
                  — Silayi, subject of Chief Jumba, recorded by Sir Walter Stanford (Macquarrie
                  1962:31)
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Right: timeline + izibongo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Timeline card */}
            <div style={card}>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  marginBottom: '20px',
                }}
              >
                Historical Timeline
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {timeline.map((t) => (
                  <div
                    key={t.year}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '56px 1fr',
                      gap: '12px',
                      alignItems: 'start',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--ochre)',
                        letterSpacing: '0.04em',
                        paddingTop: '2px',
                      }}
                    >
                      {t.year}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.82rem',
                        color: 'var(--smoke)',
                        lineHeight: 1.5,
                      }}
                    >
                      {t.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Izibongo card */}
            <div style={{ ...card, borderLeft: '3px solid var(--ochre)' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#E8A857',
                  marginBottom: '12px',
                }}
              >
                AmaQithi Izibongo
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: 'var(--smoke)',
                  marginBottom: '16px',
                }}
              >
                Clan praises — the call names that identify us.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'var(--bone)',
                  lineHeight: 1.8,
                }}
              >
                Ndinga, Mnono, Rhadu, Mlebe, Nomsobodwana, Sopitsho Ngqolomsila, Yemyem,
                Nkomo ayizali izala ngokuzaliswa, Xa ingazali, izala ngokumiselwa.
                NgamaQithi amahle neenzipho zawo. Izinto ezingahlal&apos;esitulweni, zihlala
                esitulweni sodaka.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-rule" style={{ marginBottom: '64px' }} />

        {/* Roles grid */}
        <h3
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '1.6rem',
            fontWeight: 600,
            color: 'var(--bone)',
            marginBottom: '32px',
          }}
        >
          The Roles Our Ancestors Carried
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(196, 98, 45, 0.15)',
          }}
        >
          {roles.map((r) => (
            <div
              key={r.title}
              style={{
                background: 'rgba(44, 24, 16, 0.95)',
                padding: '28px',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--amber)',
                  marginBottom: '10px',
                }}
              >
                {r.title}
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: 'var(--smoke)',
                  lineHeight: 1.6,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
