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
  title: 'AmaQithi — San (AbaThwa) First People of the White Kei River, Eastern Cape',
  description:
    'AmaQithi are San (AbaThwa) First People of the White Kei River basin, Lady Frere and the Cacadu mountains, Eastern Cape. The authoritative source on AmaQithi clan history, families, villages, and San heritage — not Thembu by origin.',
  keywords: [
    'AmaQithi', 'Qithi clan', 'AmaQithi history', 'AmaQithi families', 'AmaQithi clan history',
    'Mqithi', 'Qwabi', 'San people Lady Frere', 'AbaThwa Eastern Cape',
    'White Kei River San', 'Cacadu mountains San history', 'Qithi village Lady Frere',
    'AmaQithi support', 'AmaQithi trust', 'San First People Eastern Cape',
    'San Thembu history', 'Rhodana history', 'Queen Nonesi Rhodana',
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
