import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Apply from '@/components/Apply';
import SchemaOrg, { orgSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'Apply for AmaQithi Membership — Join the Clan Portal',
  description:
    'Apply to join the AmaQithi Clan Portal. Three tracks: AmaQithi descendants, spouses and extended family, and researchers. Applications reviewed by the clan council. Requires lineage documentation and two AmaQithi vouching members.',
  keywords: [
    'AmaQithi membership', 'join AmaQithi clan', 'AmaQithi application',
    'AmaQithi clan portal registration', 'verify AmaQithi descent',
    'AmaQithi member application', 'AmaQithi portal access',
  ],
  openGraph: {
    title: 'Apply for AmaQithi Membership',
    description:
      'Join the AmaQithi Clan Portal. Three membership tracks. Applications reviewed by the clan council.',
    url: `${BASE}/apply`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'Apply AmaQithi' }],
  },
  alternates: { canonical: `${BASE}/apply` },
};

export default function ApplyPage() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>
        <PageHero
          eyebrow="AmaQithi — Apply"
          headline="Join the clan. Access support. Map the lineage."
          subheading="Three tracks. One portal. All applications are reviewed by the AmaQithi council. False claims result in permanent exclusion."
          intro="If you are AmaQithi — or believe you are — this is where you begin."
        />

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Apply' }]} />
        </div>

        <Apply />
      </main>
      <Footer />
    </>
  );
}
