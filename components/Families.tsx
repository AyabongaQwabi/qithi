const regions = [
  {
    name: 'Lady Frere / Cacadu',
    label: 'The Heartland',
    villages: [
      'Qithi Village', 'Mkapusi', 'Agnes', 'Hala 2', 'Skhwanqeni',
      'Lower Seplan', 'Qugqwaru', 'Bholoto', 'Tsembeyi', 'Ngcuka',
    ],
    surnames: ['Qwabi', 'Tshabe', 'Mbaba', 'Ngubo', 'Shumana', 'Khethelo', 'Mhlungulwa', 'Sokoti'],
    context:
      'The heartland. Qithi Village stands next to Rodana Clinic and Rodana PJS School — a literal fence line between the San clan and the Thembu Great Place where Queen Nonesi arrived in 1841. Mqithi was here first.',
  },
  {
    name: 'Ngcobo',
    label: 'Manimani\'s Line',
    villages: [
      'Gubenxa', 'Lucwecwe', 'Lahlangubo', 'eMadladleni',
      'Gqutyini', 'Zadungeni', 'Qumanco', 'Maqwathini',
    ],
    surnames: ['Manimani', 'Mgengwana', 'Ntulo', 'Limba', 'Gobelo', 'Titi', 'Kula', 'Msebe', 'Skampula', 'Matho', 'Tyhokolo', 'Fanakho'],
    context:
      'Manimani left Rhodana and established the Qithi presence in Engcobo. The lineage is documented: Sinduwamba → Sipenisi → Poto → Manimani → Phonye → Dolo. Nkosikho Manimani in Engcobo Kumadanga carries this line today.',
  },
  {
    name: 'Cofimvaba',
    label: 'Where It Began',
    villages: ['Shobeni'],
    surnames: ['Ngqela', 'Bambatha', 'Mtshabe', 'Skeyi', 'Sokutapa', 'Ndaleni'],
    context:
      'Ngcongolo and his brother Mafilika came from Cofimvaba, from Shobeni, chased by the whites. They stood on the red wall on top of the white hill where the scythes are buried — at the headwaters of the Cacadu. Tsula was their father.',
  },
  {
    name: 'Cala / Lower Seplan',
    label: 'Western Edge',
    villages: ['Lower Seplan'],
    surnames: ['Qwabi', 'Tshabe'],
    context:
      'Connected to the Lady Frere cluster. AmaQithi families in the Cala and Lower Seplan area share surnames and lineage with the Cacadu heartland families.',
  },
  {
    name: 'Free State',
    label: 'Mcambalala Line',
    villages: ['Mcambalala (Luxeni, Lady Frere)'],
    surnames: ['Plata', 'Mfumba'],
    context:
      'AmaQithi families from Mcambalala in Luxeni, Lady Frere, who settled in the Free State. They carry the Plata and Mfumba surnames.',
  },
];

const wallNames = [
  'Halile Jonas Qwabi — died in the Bulhoek Massacre, 1921. His civil death registration was erased by the apartheid government. His son Bhangile was known as Sirayeli in memory of his faith.',
  'The late Liston Ntshongwana',
  'Vuyani Ngqawuza',
  'The late David Skampula',
  'Themba Skampula',
  'Bishop Vuyisile Skampula',
  'Nkuleko Skampula',
  'The late Hlanganyana Xhwebethambisa Ngqawuza',
  'The late Mfoti Ngqawuza',
  'The late Mamazana Ngqawuza',
  'The late Zakade Ngqawuza',
  'The late Zolile Ngqawuza',
  'Ntobeko Mangqwengqwe',
  'Xolani Phithi',
  'Thobile Roto',
  'Ace Mhlungulwana',
  'Bhutise Mthabathi',
  'The late Dinah Mthabathi',
  'Gwen Skampula',
  'Thozamile Nobhakade',
  'Andrew wase Ntswelabantu',
];

export default function Families() {
  return (
    <section
      id="families"
      className="cave-section cave-bg"
      style={{
        background: '#1A0F0A',
        padding: '100px 0',
        position: 'relative',
      }}
      aria-labelledby="families-heading"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ochre)',
            marginBottom: '16px',
          }}
        >
          Families
        </p>

        <h2
          id="families-heading"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--bone)',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}
        >
          One blood. Many villages.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '1rem',
            color: 'var(--smoke)',
            maxWidth: '640px',
            lineHeight: 1.7,
            marginBottom: '64px',
          }}
        >
          The AmaQithi are not one village. We are spread across the Eastern Cape and beyond —
          different surnames, different territories, same blood. These are the documented regions,
          villages, and surnames.
        </p>

        {/* Regional cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(196, 98, 45, 0.3)', marginBottom: '80px' }}>
          {regions.map((r) => (
            <div
              key={r.name}
              style={{
                background: 'rgba(44, 24, 16, 0.97)',
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '32px',
                alignItems: 'start',
              }}
            >
              {/* Region info */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--ochre)',
                    marginBottom: '6px',
                    fontWeight: 500,
                  }}
                >
                  {r.label}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--amber)',
                    marginBottom: '12px',
                  }}
                >
                  {r.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.82rem',
                    color: 'var(--smoke)',
                    lineHeight: 1.6,
                  }}
                >
                  {r.context}
                </p>
              </div>

              {/* Villages */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--smoke)',
                    marginBottom: '10px',
                    fontWeight: 500,
                  }}
                >
                  Villages
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {r.villages.map((v) => (
                    <span
                      key={v}
                      style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.75rem',
                        color: '#D4A96A',
                        background: 'rgba(196, 98, 45, 0.05)',
                        border: '1px solid rgba(196, 98, 45, 0.4)',
                        padding: '3px 10px',
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Surnames */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--smoke)',
                    marginBottom: '10px',
                    fontWeight: 500,
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
                        color: 'var(--ochre)',
                        background: 'rgba(196, 98, 45, 0.08)',
                        border: '1px solid rgba(196, 98, 45, 0.25)',
                        padding: '3px 10px',
                        fontWeight: 500,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wall of Remembrance */}
        <div className="section-rule" style={{ marginBottom: '64px' }} />

        <h3
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--bone)',
            marginBottom: '12px',
          }}
        >
          Wall of Remembrance
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.85rem',
            color: 'var(--smoke)',
            marginBottom: '32px',
            maxWidth: '560px',
            lineHeight: 1.6,
          }}
        >
          Named after the oral history image — "the red wall on top of the white hill where the
          scythes are buried." These are AmaQithi people whose community work and lives have gone
          unrecorded. They are recorded here.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: 'rgba(196, 98, 45, 0.25)',
          }}
        >
          {wallNames.map((name) => (
            <div
              key={name}
              style={{
                background: 'var(--deep-earth)',
                padding: '16px 20px',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.85rem',
                color: 'var(--sand)',
                lineHeight: 1.5,
                borderLeft: '2px solid rgba(196, 98, 45, 0.5)',
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Exclusivity notice */}
        <div className="section-rule" style={{ margin: '64px 0 40px' }} />

        <div
          style={{
            background: 'rgba(196, 98, 45, 0.06)',
            border: '1px solid rgba(196, 98, 45, 0.5)',
            padding: '36px',
            maxWidth: '700px',
          }}
        >
          <h4
            style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: 'var(--amber)',
              marginBottom: '12px',
            }}
          >
            For AmaQithi families only
          </h4>
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.9rem',
              color: 'var(--smoke)',
              lineHeight: 1.7,
            }}
          >
            All resources, support, trust access, business collaboration, and community benefits
            on this platform are exclusively for AmaQithi families and verified descendants of
            the Qithi lineage. No person outside an AmaQithi family will receive assistance. This
            is not stated in hostility. It is stated with clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
