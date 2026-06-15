import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import IdentityTeaser from '@/components/IdentityTeaser';
import InitiativesTeaser from '@/components/InitiativesTeaser';
import FamiliesTeaser from '@/components/FamiliesTeaser';
import ApplyCTABlock from '@/components/ApplyCTABlock';
import GenomyTeaser from '@/components/GenomyTeaser';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AmaQithi — San First People of the White Kei River',
  description:
    'A walled digital portal exclusively for AmaQithi (San/AbaThwa) families and verified descendants. Lady Frere. The Cacadu mountains. The Eastern Cape.',
  openGraph: {
    title: 'AmaQithi — San First People of the White Kei River',
    description:
      'A walled digital portal exclusively for AmaQithi (San/AbaThwa) families and verified descendants.',
    url: 'https://qithi.co.za',
    siteName: 'AmaQithi',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
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
