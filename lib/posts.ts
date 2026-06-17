export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string; // HTML string
};

export const posts: Post[] = [
  {
    slug: 'the-click-in-our-name',
    title: 'The Click in Our Name',
    date: '2026-05-12',
    category: 'Language & Identity',
    excerpt:
      'The Q in AmaQithi is a palatal click — a sound that belongs to Khoisan languages, not Bantu. That single consonant is a direct genetic signature of the San-Bantu fusion that made us.',
    body: `
      <p>When you write AmaQithi in isiXhosa, the Q is a palatal click. It is produced by pressing the tongue against the hard palate and releasing it — a sound with no equivalent in any Bantu language. It belongs, linguistically, to the Khoisan family: the San and Khoe peoples who inhabited southern Africa for tens of thousands of years before any Nguni migration arrived.</p>
      <p>The Thembu nation was formed through a fusion of early Nguni pioneers and indigenous San communities. This is not disputed — it is embedded in their praise names, in the colonial record, and in the Ingqithi ritual itself. The term <em>Tambookie</em>, the colonial name for the Thembu, is an anglicisation of the Khoisan word <em>Tam&apos;bou&apos;ci</em> — the name the Khoisan gave these creolised people.</p>
      <p>The AmaQithi inherited the Q-click from that fusion. The name of the clan is a phonetic fossil: evidence of the Khoisan root preserved inside a Xhosa word that has been spoken for over 700 years.</p>
      <h3>Why this matters for genealogy</h3>
      <p>When community members ask <em>where did the AmaQithi come from?</em>, part of the answer is already in the pronunciation. You cannot say the name correctly without producing a San sound. The click is not decorative — it is the oldest surviving record of who we are.</p>
      <p>The DNA project is working to confirm this at the haplogroup level. L0 and L1 haplogroups — carried by San women — would be the biological equivalent of the Q in the name. We are looking for them. If you are an AmaQithi woman and you want to contribute to this research, <a href="/genealogy">join the project</a>.</p>
    `,
  },
  {
    slug: 'mount-moorosi-1879',
    title: 'The Fall of Mount Moorosi — November 1879',
    date: '2026-04-03',
    category: 'History',
    excerpt:
      'On 20 November 1879, colonial forces took Mount Moorosi in Lesotho. The Thembu, San, and Phuthi communities who had lived there under Chief Moorosi scattered south. The AmaQithi dispersal begins here.',
    body: `
      <p>Mount Moorosi rises above the Quthing valley in what is now southern Lesotho. In the 1860s and 1870s it was home to a remarkable multi-ethnic community: Phuthi people under Chief Moorosi, Thembu groups who had moved north during the Mfecane, and San families who had lived in the Maluti mountains for generations.</p>
      <p>The AmaQithi were among those Thembu groups. Their oral tradition — confirmed by a community member whose <em>inkaba</em> (ancestral cord-burial site) is in Lesotho — places their pre-dispersal home in Quthing. The Sotho name Quthing is the locative form of <em>emaQithini</em> in Xhosa: the place of the AmaQithi.</p>
      <h3>The siege</h3>
      <p>The Cape Colony had been pushing to disarm the Sotho chiefs. Moorosi refused. In April 1879 colonial forces began a siege of the mountain. It lasted eight months. On 20 November 1879, the mountain fell. Moorosi was killed. His followers — Phuthi, Thembu, and San alike — fled.</p>
      <p>Three main routes carried the AmaQithi south into the Eastern Cape: the line of Ngcongolo went to eNgcobo, other families fled to Cofimvaba, and the line of Qhwabi (Qwabi) settled at Mkapusi in Lady Frere, founding the village now remembered as <em>emaQithini</em> — Mqithi Village.</p>
      <h3>Not a defeat — a strategic dispersal</h3>
      <p>The fracturing of the clan into separate family lines was, according to our research, deliberate. Spreading across multiple villages made it harder for colonial authorities to track and tax the group as a single political unit. The name, the izibongo, and the Ingqithi custom survived because the people who carried them survived — scattered but not erased.</p>
    `,
  },
  {
    slug: 'reading-the-eastern-cape-landscape',
    title: 'Reading the Eastern Cape Landscape',
    date: '2026-03-18',
    category: 'Research',
    excerpt:
      'Every place name in the Eastern Cape is a record of use. Matolweni means military training ground. Sixotyeni means mountain stronghold. Maghubeni means grain processing. Once you learn to read the names, the whole landscape becomes a map of the society that built it.',
    body: `
      <p>The Eastern Cape is covered in place names that most people treat as arbitrary. They are not. Our research into Thembu settlement patterns suggests that indigenous territories were organised with sophisticated intent — governance, military infrastructure, resource management, and social function all mapped directly onto the physical terrain through naming.</p>
      <p>The pattern is consistent enough to be predictive. If you find a place called <strong>Matolweni</strong> (from u-Tolo, arrow), you are likely standing near a former military training ground and arsenal — the domain of the war doctor who performed pre-battle rituals. If you find <strong>Sixotyeni</strong> (from isi-Xobo, rocky ledge), look for a mountain position where weapons were stockpiled and boulders could be rolled onto advancing forces.</p>
      <h3>The Qithi category</h3>
      <p>The place-name category that matters most for our research is <em>Qithi / Mqithi / Qhitsi</em>. These are linguistically rooted in isi-Qiti — a separated, round, or enclosed space. Our hypothesis: these were restricted-use tracts, either intensive royal agricultural enclosures or secure holding areas for those awaiting royal judgment. Both uses explain why you consistently find Qithi-names adjacent to royal residences.</p>
      <p>There are over 30 place names matching this root in the Eastern Cape alone, concentrated in the Thembu heartland. The density is not accidental. It is a record.</p>
      <p>The full village anatomy study with all 30+ locations, their coordinates, and their municipal context is available on the <a href="/insights/thembu-village-anatomy">Village Anatomy page</a>.</p>
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
