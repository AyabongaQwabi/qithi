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

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://qithi.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'AmaQithi — San (AbaThwa) First People of the Eastern Cape',
    template: '%s | AmaQithi',
  },
  description:
    'AmaQithi are San (AbaThwa) First People of the White Kei River basin, Lady Frere, Eastern Cape. The authoritative source on AmaQithi clan history, Qithi village, Mqithi lineage, and San heritage in the Cacadu mountains.',
  keywords: [
    'AmaQithi',
    'Qithi clan',
    'Mqithi',
    'Qwabi',
    'AbaThwa',
    'San people Eastern Cape',
    'San First People South Africa',
    'White Kei River history',
    'Lady Frere history',
    'Cacadu mountains San',
    'AmaQithi history',
    'AmaQithi families',
    'AmaQithi clan',
    'Qithi village Lady Frere',
    'Rhodana history Thembu',
    'Queen Nonesi Rhodana',
    'San Thembu alliance Eastern Cape',
    'AbaThwa Eastern Cape',
    'Khoisan Eastern Cape',
    'San click consonant Xhosa',
    'Qwabi Joka',
    'AmaQithi support',
    'AmaQithi trust',
    'AmaQithi genealogy',
  ],
  authors: [{ name: 'AmaQithi Clan Portal', url: BASE }],
  creator: 'AmaQithi',
  publisher: 'AmaQithi',
  category: 'history',
  classification: 'Indigenous Heritage, San History, Eastern Cape, South Africa',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: 'AmaQithi',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'AmaQithi — San First People of the White Kei River',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@amaqithi',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'manifest', url: '/favicon/site.webmanifest' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: BASE,
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="geo.region" content="ZA-EC" />
        <meta name="geo.placename" content="Lady Frere, Eastern Cape, South Africa" />
        <meta name="geo.position" content="-31.7048;27.2328" />
        <meta name="ICBM" content="-31.7048, 27.2328" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body style={{ fontFamily: 'var(--font-body), Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
