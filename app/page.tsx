import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import IdentityTeaser from '@/components/IdentityTeaser';
import InitiativesTeaser from '@/components/InitiativesTeaser';
import FamiliesTeaser from '@/components/FamiliesTeaser';
import ApplyCTABlock from '@/components/ApplyCTABlock';
import GenomyTeaser from '@/components/GenomyTeaser';
import Footer from '@/components/Footer';
import SchemaOrg, { orgSchema, websiteSchema, homeFaqSchema } from '@/components/SchemaOrg';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'AmaQithi — San (AbaThwa) History, Families and Heritage | White Kei River, Eastern Cape',
  description:
    'AmaQithi are San (AbaThwa) people of the White Kei River basin in Lady Frere, Eastern Cape. Documented history of the AmaQithi clan — their origins at Rhodana, their role alongside the Thembu, their families across South Africa, and their ongoing work to preserve San identity through oral history and DNA research.',
  keywords: [
    'AmaQithi', 'Qithi clan', 'AmaQithi history', 'AmaQithi families', 'AmaQithi clan history',
    'Mqithi', 'Qwabi', 'San people Lady Frere', 'AbaThwa Eastern Cape',
    'White Kei River San', 'Cacadu mountains San history', 'Qithi village Lady Frere',
    'AmaQithi support', 'AmaQithi trust', 'San First People Eastern Cape',
    'San Thembu history', 'Rhodana history', 'Queen Nonesi Rhodana', "Stormberg san people",
    "Rhadu", "Mnono", "AmaLebe", "Amaqithi clan history", "Amaqithi clan families", "Amaqithi clan villages", "Amaqithi clan support", "Amaqithi clan trust", "Amaqithi clan initiatives", "Amaqithi clan genomy", "Amaqithi clan DNA", "Amaqithi clan heritage", "Amaqithi clan identity", "Amaqithi clan news", "Amaqithi clan events", "Amaqithi clan contact",
  ],
  openGraph: {
    title: 'AmaQithi — San (AbaThwa) First People of the White Kei River',
    description:
      'The authoritative source on AmaQithi clan history. San First People of Lady Frere, the Cacadu mountains and White Kei River basin — not Thembu by origin.',
    url: BASE,
    siteName: 'AmaQithi',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: `${BASE}/logo.png`,
        width: 1024,
        height: 1024,
        alt: 'AmaQithi clan seal — San First People of the White Kei River',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmaQithi — San First People of the Eastern Cape',
    description: 'The authoritative source on AmaQithi clan history, families, and San heritage.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: BASE },
};

export default function Home() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, websiteSchema, homeFaqSchema]} />
      <Nav />
      <main>
        <Hero />
        <div className="section-rule" />
        <IdentityTeaser />
        <div className="section-rule" />
        <InitiativesTeaser />
        <div className="section-rule" />
        <FamiliesTeaser />
        <div className="section-rule" />
        <ApplyCTABlock />
        <div className="section-rule" />
        <GenomyTeaser />
      </main>
      <Footer />
    </>
  );
}
