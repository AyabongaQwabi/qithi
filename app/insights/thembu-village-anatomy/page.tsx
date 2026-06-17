import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Image from 'next/image';
import SchemaOrg, { orgSchema, villageAnatomySchema, breadcrumbSchema } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'The Anatomy of a Thembu Village | AmaQithi Insights',
  description:
    'Every Thembu village cluster follows the same hidden grammar — leadership node, water point, upper and lower sections, fields, passes, memory places. Here is the evidence.',
  openGraph: {
    title: 'The Anatomy of a Thembu Village',
    description:
      'Komkhulu, Elalini, Emthonjeni — the same names keep appearing all over the Eastern Cape. It is not a coincidence. It is a system.',
    images: ['/town.png'],
  },
};

const palette = {
  bg: '#1A0F0A',
  card: '#2C1810',
  accent: '#C4622D',
  gold: '#E8A857',
  tan: '#D4A96A',
  muted: '#9E8C7A',
  cream: '#F5E6C8',
  cardBorder: 'rgba(196,98,45,0.2)',
  subtle: 'rgba(232,168,87,0.08)',
};

interface NodeCard {
  emoji: string;
  name: string;
  xhosa: string;
  meaning: string;
  count: number;
  variants: string[];
  districts: string[];
  description: string;
  funFact: string;
  color: string;
}

const nodes: NodeCard[] = [
  {
    emoji: '👑',
    name: 'Komkhulu',
    xhosa: 'Komkhulu / Ndlunkulu / KwaSibonda',
    meaning: 'The Great Place — seat of the chief',
    count: 22,
    variants: ['Komkhulu', 'Komkulu', 'Kmokhulu', 'KwaSibonda', 'Ezibondeni'],
    districts: ['Sakhisizwe', 'Intsika Yethu', 'Mnquma', 'Engcobo'],
    description:
      'Every cluster has one. This is where the chief or headman lives, where the council meets, where disputes get settled, where ceremonies happen. You do not "visit" the Komkhulu — you are summoned. The name alone tells you who runs things here.',
    funFact:
      'We found 22 separate Komkhulu locations in our data. They are spread from Emalahleni to the coast. Same name, same function, different chief.',
    color: '#C4622D',
  },
  {
    emoji: '🏘️',
    name: 'Elalini',
    xhosa: 'Elalini / Lalini',
    meaning: 'The sleeping place — where people actually live',
    count: 16,
    variants: ['Elalini', 'Lalini', 'Laini', 'Elanini'],
    districts: ['Amahlathi', 'Chris Hani', 'Intsika Yethu'],
    description:
      'Not one big village — many small homestead pockets scattered across the slopes. eLalini is the residential zone: near a field here, near a stream there, connected by paths. Think of it as the neighbourhood, not the city centre.',
    funFact:
      '16 Elalini locations in our data, spread from Amahlathi all the way to Mhlontlo. Every cluster needs somewhere for people to actually sleep.',
    color: '#E8A857',
  },
  {
    emoji: '💧',
    name: 'Emthonjeni',
    xhosa: 'Emthonjeni / Mtonjeni',
    meaning: 'At the spring',
    count: 7,
    variants: ['Emthonjeni', 'Mtonjeni', 'Emthinjeni', 'Machibini', 'Emachibini', 'Macibini', 'Machibi', 'Macini'],
    districts: ['Emalahleni', 'Sakhisizwe', 'Engcobo'],
    description:
      'Find the spring, find the people. Water is not just a resource in these communities — it is a social hub. You collect water, you meet people. You water your cattle, you find out what is happening. The spring is the original town square.',
    funFact:
      'We are counting both "spring" names (Emthonjeni) and "pool" names (Machibini) as the same idea — water node. Combined that is at least 7 separate water-named places in our sample alone.',
    color: '#5BB85A',
  },
  {
    emoji: '⬆️',
    name: 'Mntla / Mzantsi',
    xhosa: 'Ngaphezulu · Mntla · Ngasentla (upper) — Mzantsi · Emzantsi · Umzantsi (lower)',
    meaning: 'Upper and lower — the village split by the slope',
    count: 21,
    variants: ['Mntla', 'Umntla', 'Ngaphezulu', 'Ngasentla', 'Mzantsi', 'Umzantsi', 'Emzantsi'],
    districts: ['Intsika Yethu', 'Chris Hani', 'Amathole'],
    description:
      'One community, two addresses. The ridge or river splits a settlement into "upper" and "lower" — and people use those directions as identity. If you ask someone where they are from and they say "Ngaphezulu," they mean the uphill section. It is that specific.',
    funFact:
      'We found 21 upper/lower named villages across our data — 8 lower (Mzantsi variants) and 4 upper (Mntla/Ngaphezulu). They nearly always appear in pairs, like two sides of the same community.',
    color: '#D4A96A',
  },
  {
    emoji: '🌾',
    name: 'Qithi / Machubeni',
    xhosa: 'Qithi · Qiti — Machubeni · Zicubeni · Magqubeni',
    meaning: 'The fields and food-processing places',
    count: 11,
    variants: ['Qithi', 'Qiti', 'Machubeni', 'Zicubeni', 'Magqubeni', 'Macubeni'],
    districts: ['Sakhisizwe', 'Intsika Yethu', 'Mhlontlo', 'OR Tambo'],
    description:
      'Qithi is the cleared agricultural patch — the open ground where you plant and harvest. Machubeni is where you peel the maize. These are not just practical sites — they are named places, which means the whole community knows them and organises life around them.',
    funFact:
      'Qithi appears 7 times in our coordinates — including the village in the Lady Frere area that is the likely origin of the AmaQithi name. A qithi was just a farming clearing. Now it is a clan.',
    color: '#C4622D',
  },
  {
    emoji: '🏔️',
    name: 'Ngxingweni',
    xhosa: 'Ngxingweni · Ngxingwa · Ngxingqweni',
    meaning: 'The pass or gorge — places where movement is controlled',
    count: 9,
    variants: ['Ngxingweni', 'Ngxingwa', 'Ngxingqweni', 'Dwaleni', 'Tyeni', 'Matyeni', 'Lityeni'],
    districts: ['Emalahleni', 'Sakhisizwe', 'Amahlathi', 'Mhlontlo'],
    description:
      'The Eastern Cape is rugged. Passes, ridges, and gorges are not just obstacles — they are landmarks. Communities build near passes to control who moves through. A village at a gorge is a village that knows things first.',
    funFact:
      'Tyeni (rocky/stony place) is our most repeated terrain name with 18 occurrences. It appears from OR Tambo all the way to Amathole. The Thembu knew their geology.',
    color: '#9E8C7A',
  },
  {
    emoji: '🔴',
    name: 'Kwa Tshatshu',
    xhosa: 'KwaTshatshu · Tshatshu · Kutshatshu',
    meaning: 'Red ochre place — where the red earth is found',
    count: 8,
    variants: ['KwaTshatshu', 'Kwatshatshu', 'Tshatshu', 'Kutshatshu', 'Qiba', 'Caba', 'Qebe', 'Mqabo'],
    districts: ['Intsika Yethu', 'Chris Hani', 'Sakhisizwe'],
    description:
      'The red ochre (umcako / ibomvu) is not optional in Thembu culture — it is used in initiation, in ceremony, in identity. So the place where it is found gets a name. KwaTshatshu is literally "at the red earth." And yes — there is a KwaTshatshu in the Lady Frere area where the AmaQithi lived. Same naming logic, same material culture.',
    funFact:
      'Related names — Qiba, Caba, Qebe, Mqabo — all refer to places where red ochre is gathered or applied. Combined we found at least 8 such sites in our data. The Thembu were particular about their red.',
    color: '#C4622D',
  },
  {
    emoji: '🍺',
    name: 'Sigubudweni',
    xhosa: 'Sigubudweni · Sigubudwini',
    meaning: 'At the beer vessel / the calabash place',
    count: 9,
    variants: ['Sigubudweni', 'Sigubudwini', 'Sigubvudweni', 'Sidutyini', 'Esidutyini'],
    districts: ['Mnquma', 'Amathole', 'Chris Hani'],
    description:
      'A sigubhu is the clay pot or calabash used for umqombothi (traditional beer). Sigubudweni is the place associated with brewing, communal feasting, or ceremony. In other words: where the party is. Except it is not just a party — it is where community obligations are honoured, marriages finalised, and decisions toasted.',
    funFact:
      '9 Sigubudweni locations in our data. Each one is essentially a named gathering place. The Thembu had no need for a Facebook events page — the place name told you where to be.',
    color: '#E8A857',
  },
  {
    emoji: '🦁',
    name: 'Mngwenyama',
    xhosa: 'Mngwenyama · Ngonyameni · Ngwemnyama',
    meaning: 'Lion or leopard place — the danger zone',
    count: 5,
    variants: ['Mngwenyama', 'Ngwemnyama', 'Ngonyameni', 'Ngonyama', 'Engonyama'],
    districts: ['Intsika Yethu', 'Alfred Nzo', 'Chris Hani'],
    description:
      'These names mark where big cats were sighted, where livestock was taken, or where hunters went. In oral tradition, dangerous landscape gets labelled — so everyone knows. It is the original danger sign.',
    funFact:
      'We found 5 lion/leopard-named places across our data. None of them have lions anymore. But the memory of the danger lives in the name.',
    color: '#9E8C7A',
  },
  {
    emoji: '🪨',
    name: 'Qolombane',
    xhosa: 'Qolombane · Qolora',
    meaning: 'Cave place — shelter, ritual, memory',
    count: 5,
    variants: ['Qolombane', 'Qolora', 'Qolomba'],
    districts: ['Mnquma', 'Amathole'],
    description:
      'Caves are not just shelters in Xhosa/Thembu geography — they are places of ritual, of hiding during conflict, of initiation. A cave gets named because something happened there. Qolombane means something was stored or remembered here.',
    funFact:
      'Qolora is also a river on the Wild Coast — and a place loaded with Xhosa prophetic memory (Nongqawuse). The cave-naming logic runs deep into the culture.',
    color: '#D4A96A',
  },
  {
    emoji: '🌾',
    name: 'Luxeni / Lixeni',
    xhosa: 'Luxeni · Lixeni · Eluxeni · Luxini · Lugxeni',
    meaning: 'Place of the grain heap / the grain store',
    count: 16,
    variants: ['Luxeni', 'Lixeni', 'Eluxeni', 'Luxini', 'Lugxeni'],
    districts: ['Sakhisizwe', 'Intsika Yethu', 'OR Tambo'],
    description:
      'The root here is "xa" or "gxa" — and both point to the same thing: "isi-xa" is a heap of grain or a bunch of flowers; a place where you stored or gathered produce. "Lu-gxeni" and "lu-xeni" are the same word, just spelled differently by region. This was not a sun spot — it was where the grain was. The food storage node of the settlement.',
    funFact:
      'Luxeni appears 16 times in our data, making it one of the most-repeated functional names we found. Every community needed somewhere to keep its grain — and they named it.',
    color: '#E8A857',
  },
  {
    emoji: '🏹',
    name: 'Matolweni',
    xhosa: 'Matolweni · Ematolweni',
    meaning: 'Place of the bows and arrows — training ground or AmaTholo territory',
    count: 7,
    variants: ['Matolweni', 'Ematolweni'],
    districts: ['Mbhashe', 'Mnquma', 'Amathole', 'Mhlontlo'],
    description:
      'Amatolo are bows and arrows. The word "tolo" is the bow or arrow itself. Matolweni — "the place of the amatolo" — is either where the AmaTholo people lived (the bow-carriers, a San-associated group), or a training ground for archery. In the context of the Thembu, who are part San, this is almost certainly a reference to the San martial tradition — the people who were the archers, the hunters, the defenders of the mountains.',
    funFact:
      '7 Matolweni sites found in our data — spread across Mbhashe, Mnquma, and Mhlontlo. These are deep in Thembu country. A training ground for archers would be discreet, away from the main homestead, near open ground. That fits.',
    color: '#5BB85A',
  },
  {
    emoji: '🪢',
    name: 'Matyeba',
    xhosa: 'Matyeba',
    meaning: 'Rope-making place — where ityeba (rope) was made',
    count: 2,
    variants: ['Matyeba'],
    districts: ['Mhlontlo'],
    description:
      'Ityeba is a rope. Matyeba is the place of ropes — where rope was made, possibly from plant fibre, bark, or animal hide. Rope-making was not a minor craft: ropes controlled livestock, built structures, made tools, and were used in ceremonies. A dedicated named place for rope production tells you how central this material was to daily life.',
    funFact:
      'Only 2 Matyeba coordinates in our data, both in Mhlontlo. Production sites like this were often on the edge of the settlement — near the raw material (river plants, bark trees) rather than in the centre.',
    color: '#C4622D',
  },
  {
    emoji: '⚔️',
    name: 'Maqwathini',
    xhosa: 'Maqwathini · Maqwateni',
    meaning: 'Place of the warriors — military training ground or army camp',
    count: 9,
    variants: ['Maqwathini', 'Maqwateni'],
    districts: ['Sakhisizwe', 'Chris Hani'],
    description:
      'Maqwati are warriors — the fighting men, the army. Maqwathini is "the place of the warriors" — likely a training ground, a muster point, or where the regiment was stationed. It can also carry the sense of "the army" as a collective noun. This is not just a place where conflict happened — it is where the people prepared for it. In Thembu society, the regiment was a formal institution with its own geography.',
    funFact:
      '9 Maqwathini/Maqwateni locations, all clustered in Sakhisizwe and Chris Hani — the frontier zone between the Thembu and their western neighbours. Military infrastructure right where you would expect it.',
    color: '#9E8C7A',
  },
  {
    emoji: '🏫',
    name: 'Esihlabeni',
    xhosa: 'Esihlabeni · Sihlaba',
    meaning: 'At the sandy/rocky soil',
    count: 6,
    variants: ['Esihlabeni', 'Sihlaba'],
    districts: ['Mnquma', 'Amathole', 'OR Tambo'],
    description:
      'Soil type matters enormously for agriculture. Sandy or sandy-loam ground (ihlaba) drains well and warms fast — good for early planting. Communities named their soil zones because knowing the ground is knowing how to eat.',
    funFact:
      '6 Esihlabeni locations spread from Mnquma to OR Tambo. The Thembu were reading soil maps long before Google Earth existed.',
    color: '#D4A96A',
  },
  {
    emoji: '🗡️',
    name: 'Ngxabani / Ntshabeni',
    xhosa: 'Ngxabani · Ngxabane · Lutshaba · Matshaba · Ntshabeni · Mtshabeni',
    meaning: 'Enemy ground — place of the enemy, place of conflict, or place of death',
    count: 8,
    variants: ['Ngxabani', 'Ngxabane', 'Lutshaba', 'Matshaba', 'Ntshabeni', 'Mtshabeni'],
    districts: ['OR Tambo', 'Mhlontlo', 'Amathole'],
    description:
      'Two related roots here. "Ukuxabana" means to be cross with one another — "ingxabano" is contention or a strike. But "utshaba" or "intshaba" is the enemy — the outsider, the threat. "Intshabalalo" and "ukutshabalala" mean to die, to perish, to be destroyed. Ntshabeni is therefore "the place of the enemy" or "the place of death." These are boundary markers of the most serious kind — they do not describe what happened at the place as much as who came from beyond it.',
    funFact:
      'Ngxabane and Ntshabeni appear in our data near the edges of Thembu settlement zones — exactly where you would expect "enemy" place-names. These are the names that tell you where the boundary was and who crossed it.',
    color: '#C4622D',
  },
  {
    emoji: '🦴',
    name: 'Zingcuka',
    xhosa: 'Zingcuka',
    meaning: 'Place of the hyenas',
    count: 4,
    variants: ['Zingcuka'],
    districts: ['Mnquma', 'Alfred Nzo', 'Amathole'],
    description:
      'Ingcuka is a hyena — not a jackal. This matters: the hyena carries a different weight in Xhosa oral tradition. It is a scavenger of the dead, a night animal, an omen. Zingcuka marks a place where hyenas were present — either literally (a known den site, a place where carcasses were left) or symbolically as a warning boundary. You did not build your homestead at Zingcuka. You named it to remember why.',
    funFact:
      'We found 4 Zingcuka sites across Mnquma, Alfred Nzo, and Amathole. They cluster near the wilder, more mountainous edges of Thembu country — exactly where hyenas would range.',
    color: '#9E8C7A',
  },
];

const districtColors: Record<string, string> = {
  'Sakhisizwe': '#C4622D',
  'Intsika Yethu': '#E8A857',
  'Mhlontlo': '#D4A96A',
  'Mnquma': '#9E8C7A',
  'Amahlathi': '#5BB85A',
  'Emalahleni': '#C4622D',
  'Engcobo': '#E8A857',
  'Mbhashe': '#D4A96A',
  'OR Tambo': '#9E8C7A',
  'Alfred Nzo': '#5BB85A',
  'Chris Hani': '#C4622D',
  'Amathole': '#E8A857',
};

export default function ThembuVillageAnatomy() {
  const totalSites = nodes.reduce((sum, n) => sum + n.count, 0);

  return (
    <>
      <SchemaOrg schemas={[orgSchema, villageAnatomySchema, breadcrumbSchema([
        { name: 'AbaThembu', url: '/thembu' },
        { name: 'Anatomy of a Thembu Village', url: '/insights/thembu-village-anatomy' },
      ])]} />
      <Nav />
      <main style={{ background: palette.bg, minHeight: '100vh' }}>

        {/* Hero */}
        <section
          style={{
            position: 'relative',
            paddingTop: '120px',
            paddingBottom: '80px',
            overflow: 'hidden',
            background: 'radial-gradient(ellipse at 20% 60%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
            }}
          >
            <Image
              src="/town.png"
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.18 }}
              priority
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(26,15,10,0.55) 0%, rgba(26,15,10,0.9) 80%, #1A0F0A 100%)',
            }} />
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: palette.accent,
              marginBottom: '16px',
            }}>
              AmaQithi Insights — AbaThembu Geography
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
              fontWeight: 600,
              color: palette.gold,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginBottom: '24px',
              maxWidth: '780px',
            }}>
              The Anatomy of a Thembu Village
            </h1>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: palette.tan,
              lineHeight: 1.75,
              maxWidth: '680px',
              marginBottom: '20px',
            }}>
              Ever noticed how the same village names keep popping up all over the Eastern Cape?
              Komkhulu here. Elalini there. Emthonjeni down the road.
              It is not a coincidence. It is a system.
            </p>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.9rem',
              color: palette.muted,
              lineHeight: 1.7,
              maxWidth: '640px',
            }}>
              We mapped <strong style={{ color: palette.gold }}>{totalSites}+ named settlement sites</strong> across
              Thembu country using GPS coordinates and reverse-geocoded them to actual
              municipalities. What we found is that every Thembu village cluster follows the same
              hidden grammar — a blueprint written in place-names. This is that blueprint.
            </p>

            {/* Stats bar */}
            <div style={{
              display: 'flex',
              gap: '32px',
              marginTop: '48px',
              flexWrap: 'wrap',
            }}>
              {[
                { n: '278+', label: 'GPS coordinates mapped' },
                { n: '17', label: 'distinct village node types' },
                { n: '8', label: 'Eastern Cape municipalities' },
                { n: '1', label: 'hidden grammar' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: '2.4rem',
                    fontWeight: 600,
                    color: palette.gold,
                    lineHeight: 1,
                  }}>{n}</div>
                  <div style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.72rem',
                    color: palette.muted,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <Breadcrumb items={[
            { label: 'AbaThembu', href: '/thembu' },
            { label: 'The Anatomy of a Thembu Village' },
          ]} />
        </div>

        {/* Intro explainer */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 64px' }}>
          <div style={{
            background: palette.card,
            border: `1px solid ${palette.cardBorder}`,
            padding: '40px 48px',
          }}>
            <p style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
              fontStyle: 'italic',
              color: palette.gold,
              lineHeight: 1.5,
              marginBottom: '20px',
            }}>
              "Why does every area have a Komkhulu? Why is there always an Elalini? Why is the spring always named?"
            </p>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.95rem',
              color: palette.tan,
              lineHeight: 1.8,
              marginBottom: '16px',
            }}>
              Because the Thembu were not naming places randomly. They were describing
              <em> roles</em> — functions within a community system. Every cluster of homesteads
              needed a leadership centre, a residential spread, a water source, an agricultural
              clearing, a directional split, a terrain marker, and a memory site.
            </p>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.95rem',
              color: palette.muted,
              lineHeight: 1.8,
            }}>
              Once you see the pattern, you cannot unsee it. A village name stops being just a
              name — it is a coordinate in a social system. "Elalini" does not mean "this place"
              — it means "the residential zone." "Emthonjeni" does not mean "here" — it means "the spring hub."
              The name tells you the role. The role tells you the system.
            </p>
          </div>
        </section>

        {/* Node cards */}
        <section style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px 80px' }}>
          <p style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: palette.accent,
            marginBottom: '48px',
          }}>
            The 16 Node Types — What We Found
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {nodes.map((node, i) => (
              <div
                key={node.name}
                style={{
                  background: palette.card,
                  border: `1px solid ${palette.cardBorder}`,
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                }}
              >
                {/* Top bar with colour accent */}
                <div style={{
                  height: '3px',
                  background: node.color,
                  opacity: 0.7,
                }} />

                <div style={{ padding: '36px 40px' }}>
                  {/* Header row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    marginBottom: '24px',
                    flexWrap: 'wrap',
                  }}>
                    <div style={{
                      fontSize: '2.8rem',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}>{node.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                        <h2 style={{
                          fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                          fontWeight: 600,
                          color: palette.gold,
                          margin: 0,
                        }}>{node.name}</h2>
                        {/* Count badge */}
                        <span style={{
                          background: node.color,
                          color: '#1A0F0A',
                          fontFamily: 'var(--font-body), Inter, sans-serif',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          padding: '3px 10px',
                          textTransform: 'uppercase',
                        }}>
                          {node.count}× found
                        </span>
                      </div>
                      <p style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.75rem',
                        color: palette.accent,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        margin: 0,
                      }}>{node.meaning}</p>
                    </div>
                  </div>

                  {/* Xhosa variants */}
                  <p style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: palette.tan,
                    marginBottom: '20px',
                  }}>{node.xhosa}</p>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.95rem',
                    color: palette.cream,
                    lineHeight: 1.8,
                    marginBottom: '20px',
                  }}>{node.description}</p>

                  {/* Fun fact */}
                  <div style={{
                    background: palette.subtle,
                    border: `1px solid rgba(232,168,87,0.15)`,
                    padding: '16px 20px',
                    marginBottom: '24px',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.85rem',
                      color: palette.gold,
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      <strong>What the data says: </strong>{node.funFact}
                    </p>
                  </div>

                  {/* Bottom row — variants + districts */}
                  <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                    <div>
                      <p style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: palette.muted,
                        marginBottom: '8px',
                      }}>Name variants</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {node.variants.map(v => (
                          <span key={v} style={{
                            fontFamily: 'var(--font-body), Inter, sans-serif',
                            fontSize: '0.75rem',
                            color: palette.tan,
                            background: 'rgba(196,98,45,0.12)',
                            padding: '3px 8px',
                            border: '1px solid rgba(196,98,45,0.2)',
                          }}>{v}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p style={{
                        fontFamily: 'var(--font-body), Inter, sans-serif',
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: palette.muted,
                        marginBottom: '8px',
                      }}>Found in</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {node.districts.map(d => (
                          <span key={d} style={{
                            fontFamily: 'var(--font-body), Inter, sans-serif',
                            fontSize: '0.75rem',
                            color: '#1A0F0A',
                            background: districtColors[d] || palette.muted,
                            padding: '3px 8px',
                            fontWeight: 600,
                          }}>{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The grammar summary */}
        <section style={{
          background: palette.card,
          borderTop: `1px solid ${palette.cardBorder}`,
          borderBottom: `1px solid ${palette.cardBorder}`,
          padding: '80px 24px',
          marginBottom: '80px',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: palette.accent,
              marginBottom: '24px',
            }}>What the pattern tells us</p>
            <h2 style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: 600,
              color: palette.gold,
              lineHeight: 1.1,
              marginBottom: '32px',
            }}>
              The Thembu did not build villages. They built systems.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.95rem',
              color: palette.tan,
              lineHeight: 1.85,
              marginBottom: '24px',
            }}>
              Any community with a chief needed a Komkhulu. Any community in hilly terrain split
              into upper and lower. Any community near water named the spring. The same functional
              needs produced the same functional names — across hundreds of kilometres of Eastern
              Cape landscape.
            </p>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.95rem',
              color: palette.muted,
              lineHeight: 1.85,
              marginBottom: '40px',
            }}>
              That is why you can be in Sakhisizwe and in Mnquma and find the same village
              names. They are not the same village. They are the same <em>kind</em> of place —
              performing the same role in a different community. The Thembu were not bad at naming
              things. They were very, very good at building the same kind of society wherever they settled.
            </p>

            {/* The grammar grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
            }}>
              {[
                { role: 'Authority', name: 'Komkhulu', desc: 'anchors legitimacy and ceremony' },
                { role: 'Home', name: 'Elalini', desc: 'holds everyday residential life' },
                { role: 'Orientation', name: 'Mntla / Mzantsi', desc: 'upper and lower settlement zones' },
                { role: 'Water', name: 'Emthonjeni', desc: 'spring — pulls settlement inward' },
                { role: 'Grain store', name: 'Luxeni / Lixeni', desc: 'heap of grain; food storage node' },
                { role: 'Fields', name: 'Qithi / Machubeni', desc: 'cleared farming ground; maize processing' },
                { role: 'Movement', name: 'Ngxingweni / Tyeni', desc: 'passes, gorges, rock terrain' },
                { role: 'Ceremony', name: 'Sigubudweni', desc: 'beer vessel place; communal feasting' },
                { role: 'Military', name: 'Maqwathini', desc: 'warrior training ground; regimental muster' },
                { role: 'Archery', name: 'Matolweni', desc: 'place of the bows and arrows (amatolo)' },
                { role: 'Craft', name: 'Matyeba', desc: 'rope-making place (ityeba = rope)' },
                { role: 'Ochre', name: 'KwaTshatshu / Qiba', desc: 'red earth gathering and application' },
                { role: 'Boundary', name: 'Ntshabeni / Ngxabane', desc: 'enemy ground; edge of safe territory' },
                { role: 'Danger', name: 'Zingcuka', desc: 'hyena place; avoided or remembered zone' },
                { role: 'Caves', name: 'Qolombane', desc: 'shelter, ritual, and memory storage' },
                { role: 'Memory', name: 'Mngwenyama', desc: 'lion / danger zone; oral warning preserved' },
              ].map(({ role, name, desc }) => (
                <div key={role} style={{
                  padding: '20px',
                  border: `1px solid ${palette.cardBorder}`,
                  background: palette.bg,
                }}>
                  <p style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: palette.accent,
                    margin: '0 0 6px',
                  }}>{role}</p>
                  <p style={{
                    fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    color: palette.gold,
                    margin: '0 0 4px',
                    fontWeight: 600,
                  }}>{name}</p>
                  <p style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.78rem',
                    color: palette.muted,
                    margin: 0,
                  }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer / open note */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px 80px' }}>
          <div style={{
            border: `1px solid rgba(232,168,87,0.2)`,
            padding: '32px 40px',
            background: palette.subtle,
          }}>
            <p style={{
              fontFamily: 'var(--font-display), Cormorant Garamond, serif',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: palette.gold,
              marginBottom: '16px',
            }}>A note on the data</p>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.88rem',
              color: palette.tan,
              lineHeight: 1.8,
              marginBottom: '12px',
            }}>
              These are not all of them. Not even close. We have mapped 278 GPS coordinates so far —
              gathered from satellite imagery, community knowledge, and Google Maps — across the
              Eastern Cape and into Lesotho. Every coordinate was manually verified, every variant
              spelling was grouped by linguistic root.
            </p>
            <p style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.88rem',
              color: palette.muted,
              lineHeight: 1.8,
            }}>
              The research is ongoing. If you know of a Komkhulu or Elalini or Qithi that is not
              on our map, we want to hear from you. Every coordinate adds a point to the pattern.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/27603116777"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  color: '#5BB85A',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  border: '1px solid rgba(91,184,90,0.5)',
                }}
              >
                Share what you know
              </a>
              <a
                href="/thesis"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  color: palette.gold,
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  border: '1px solid rgba(232,168,87,0.35)',
                }}
              >
                Read the full research
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
