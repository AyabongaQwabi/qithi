import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AmaQithi — The Clan Portal',
  description:
    'The AmaQithi clan portal. San (AbaThwa) First People of the White Kei River basin, Lady Frere and the Cacadu mountains, Eastern Cape. Exclusively for AmaQithi families and verified descendants.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://qithi.co.za'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: 'AmaQithi',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${cormorant.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-body), Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
