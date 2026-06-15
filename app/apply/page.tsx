import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Apply from '@/components/Apply';

export const metadata: Metadata = {
  title: 'Apply — AmaQithi',
  description:
    'Three application tracks: clan membership, request for help, and Genomy DNA sign-up. For AmaQithi descendants, spouses, and approved researchers only.',
};

export default function ApplyPage() {
  return (
    <>
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
