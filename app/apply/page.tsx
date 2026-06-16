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
          bg
          eyebrow="AmaQithi — Apply"
          headline="You do not need a perfect family tree. You just need to know where you come from."
          subheading="Tell us who you are and what you know. The council takes it from there. Three ways to apply — for descendants, close family, and researchers."
          intro="A lot of AmaQithi families lost the thread somewhere along the way. Cities, different surnames, generations of moving around. That is not your fault, and it is not a barrier. We are here to help piece it together."
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
