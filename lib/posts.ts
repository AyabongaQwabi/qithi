export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string; // HTML string
  author: {
    name: string;
    url: string;
  };
};

export const posts: Post[] = [
  {
    slug: 'is-umntu-a-name',
    title: 'Is "Umntu" a name, not a word?',
    date: '2026-06-17',
    category: 'Language & Identity',
    author: { name: 'Ayabonga Qwabi', url: 'https://qwabi.co.za' },
    excerpt:
      'UmXhosa is a descendant of Xhosa. UmZulu is a descendant of Zulu. Apply the same grammar to umNtu, and you get a descendant of Ntu — not "a human being." This is a theory, not a settled fact. But it has been sitting with me.',
    body: `
      <p>You have said the word <em>umntu</em> (person) more times than you can count. I had too, until I started looking at the grammar of our own name and could not un-see what was in front of me.</p>
      <p>In isiXhosa, isiZulu, isiNdebele, the prefix <em>um-</em> attached to a name tells you whose person someone is. UmXhosa is a descendant of Xhosa. UmZulu is a descendant of Zulu. The logic holds right across the language family — consistent, not arbitrary.</p>
      <p>So: umNtu. By the same rule: a descendant of Ntu.</p>
      <h3>Who is Ntu?</h3>
      <p>This is where I have to be honest about what I know and what I do not. I am not a linguist. What I can tell you is that oral historians across the Bantu-speaking world name Ntu as a primordial ancestor, the root person at the base of the family tree. <em>Abantu</em> (people, the plural) follows the same pattern: Ntu's descendants, taken together.</p>
      <p>Western languages have a biological word for what we are — <em>Homo sapiens</em>, a species classification. Our languages may not have had one. If this theory holds, <em>umntu</em> was never a species term. It was an identity term. You were not a random two-legged organism. You were someone's descendant. You belonged to a line.</p>
      <p>Whether that distinction matters depends on what you think language is for.</p>
      <h3>Tuu and Ntu</h3>
      <p>I came across something in the AmaQithi research that I have not been able to set aside. In <em>Seroa</em>, part of the !Ui language branch — one of the ancient San languages spoken in southern Africa long before any Nguni migration — the word for a person is <em>Tuu</em>.</p>
      <p>Say them side by side: Tuu. Ntu. The sounds are almost identical.</p>
      <p>Mainstream linguistics has a ready answer: ancient borrowing. The San and the Nguni groups lived alongside each other for centuries — they traded, intermarried, exchanged language. That contact is where the click consonants in isiXhosa and isiZulu came from. A shared root word for "person" fits the same pattern.</p>
      <p>But there is another reading. That two populations arrived at the same sound for the same concept not through borrowing but through something older, something that predates the moment they found each other on the landscape. I cannot prove that. Language does not work as neatly as that idea requires. I keep thinking about it anyway.</p>
      <p><em>Umntu ngumntu ngabantu</em> — a person is a person through other people. If umntu was always a lineage word, that saying is not a proverb about being kind. It is a description of what a person literally is.</p>
    `,
  },
  {
    slug: 'the-click-in-our-name',
    title: 'The Q in our name is not a Xhosa sound',
    date: '2026-05-12',
    category: 'Language & Identity',
    author: { name: 'Ayabonga Qwabi', url: 'https://qwabi.co.za' },
    excerpt:
      'The Q in AmaQithi is a palatal click — a Khoisan sound, not a Bantu one. It got into our name before the written record began, and it has stayed there through every colonial spelling attempt that tried to iron it out.',
    body: `
      <p>Say the name out loud. AmaQithi. That Q — tongue pressed against the hard palate, then released — does not belong to any Bantu language. It belongs to the Khoisan family: the San and Khoe peoples who were in southern Africa for tens of thousands of years before any Nguni migration came through.</p>
      <p>The colonial clerks could hear it was different. They tried to write around it: Kiti, Xiti, Chiti, Giti. Each spelling is a different guess at a sound their alphabet could not hold. The name survived all of them. The click is still there.</p>
      <p>AbaThembu as a nation were built on a San-Nguni fusion — this is not in dispute. It is in their <em>izibongo</em> (praise names), in the colonial record, in ingqithi itself. The word <em>Tambookie</em>, the name the British used for the Thembu, is an anglicisation of <em>Tam'bou'ci</em> — the Khoisan name for these creolised people. The Thembu did not just meet the San. They became something with them.</p>
      <h3>What the name is carrying</h3>
      <p>Qithi, Mqithi, Qwabi — every core name in this clan has that click. I do not think that is a coincidence. Names this old are not accidents. They are the things a community kept even when everything else was lost or taken or renamed.</p>
      <p>You cannot say AmaQithi correctly without making a San sound. That is, as far as I can tell, the oldest record we have of who we are. Older than the written sources. Older than the colonial maps. It is in the mouth before the mind catches up.</p>
      <p>The DNA project is trying to find the biological parallel — L0 and L1 haplogroups carried by San women. If you are an AmaQithi woman and want to be part of that search, the details are on the <a href="/genealogy">genealogy page</a>.</p>
    `,
  },
  {
    slug: 'mount-moorosi-1879',
    title: 'The mountain fell on 20 November 1879',
    date: '2026-04-03',
    category: 'History',
    author: { name: 'Ayabonga Qwabi', url: 'https://qwabi.co.za' },
    excerpt:
      'Eight months of siege ended on 20 November 1879 when colonial forces took Mount Moorosi in Quthing, Lesotho. The Phuthi, Thembu, and San communities living there scattered south. That is where the AmaQithi dispersal starts.',
    body: `
      <p>Mount Moorosi sits above the Quthing valley in what is now southern Lesotho. By the 1860s it had become home to a mixed community: Phuthi people under Chief Moorosi, Thembu groups who had come north during the <em>Mfecane</em> (the upheaval of forced migrations), and San families who had been in the Maluti mountains for generations. The word for that arrangement, in the language the Cape Colony used, was "a problem."</p>
      <p>The AmaQithi were among those Thembu groups. Their oral tradition places them in Quthing before the war. One community member's <em>inkaba</em> (ancestral cord-burial site) is in Lesotho. The Sotho name Quthing is the locative form of <em>emaQithini</em> in isiXhosa: the place of the AmaQithi. The name of the valley is the name of the clan.</p>
      <h3>Eight months</h3>
      <p>The Cape Colony had been pushing to disarm the Sotho chiefs. Moorosi refused. In April 1879, colonial forces began a siege of the mountain. It lasted eight months. On 20 November 1879, the mountain fell. Moorosi was killed on the slopes. His followers — Phuthi, Thembu, San — fled.</p>
      <p>Three lines carried the AmaQithi south: Ngcongolo's line went to eNgcobo, other families to Cofimvaba, and the Qhwabi line to Mkapusi in Lady Frere, where they founded the village now called <em>emaQithini</em> — Mqithi Village. Three routes, three districts, one clan name across all of them.</p>
      <h3>What survived the mountain</h3>
      <p>Our research suggests the split was not panic. Spreading across several districts made it harder for colonial authorities to find and tax the group as a single unit. The families that scattered were still in contact with each other — the name, izibongo, and ingqithi custom held across all three lines.</p>
      <p>Qwabi Joka, who settled at Mkapusi, named one son Molosi — after Chief Moorosi, adjusted slightly to avoid the British blacklists that followed the war. He named another son Bushman outright. Both names are still in the family. He was making sure his children would know where they came from, whatever the clerks wrote down.</p>
    `,
  },
  {
    slug: 'reading-the-eastern-cape-landscape',
    title: 'The Eastern Cape place names are not arbitrary',
    date: '2026-03-18',
    category: 'Research',
    author: { name: 'Ayabonga Qwabi', url: 'https://qwabi.co.za' },
    excerpt:
      'Matolweni, Sixotyeni, Maghubeni — these names are not decorative. They are functional labels: military training ground, mountain stronghold, grain processing site. Once you see the pattern, the landscape becomes readable.',
    body: `
      <p>Drive through the Eastern Cape and the place names start repeating. Matolweni appears in four different districts. So does Sixotyeni. So does Qithi. I used to assume this was coincidence — the same word landing in different places by chance. The research convinced me otherwise.</p>
      <p>Our work on Thembu settlement patterns found that the naming system is functional, not poetic. <em>Matolweni</em> (from <em>u-Tolo</em>, arrow or bow) marks former military training grounds and arsenals — the domain of the <em>izinyanga zempi</em> (war doctors) who performed pre-battle preparations. <em>Sixotyeni</em> (from <em>isi-Xobo</em>, rocky ledge) names mountain positions where weapons were stockpiled and boulders could be rolled onto advancing forces. Find one of these names on a map and you know what function that ground held.</p>
      <p>The pattern is consistent enough to be predictive. When we plotted the coordinates, the distribution matched the military and governance logic of the Thembu territories — frontier zones, supply lines, royal approaches. The names are a map of how the society was organised, written into the landscape before any colonial surveyor arrived.</p>
      <h3>Where Qithi fits</h3>
      <p>The name category I keep coming back to is <em>Qithi / Mqithi / Qhitsi</em>, rooted in <em>isi-Qiti</em> — a separated, enclosed, or set-apart space. My working hypothesis is that these were restricted-use tracts: royal agricultural enclosures, or holding areas for those awaiting a chief's judgment. Both functions explain something I could not explain before: why you consistently find Qithi-names directly adjacent to royal residences.</p>
      <p>Qithi Village sits next to the Rhodana royal court. That is not a coincidence of proximity. It may be a description of the land's purpose — set apart, adjacent to power, with a defined function. If that reading is right, the AmaQithi name is not just a clan name. It is a land-use category that became a people's identity.</p>
      <p>There are over 30 place names matching this root in the Eastern Cape alone. The full dataset, with coordinates and municipal context, is on the <a href="/insights/thembu-village-anatomy">Village Anatomy page</a>.</p>
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
