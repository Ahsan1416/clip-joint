import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clipjoint.com.au'),
  title: {
    default: 'Clip Joint Education & Salons | Adelaide, South Australia | RTO 0186',
    template: '%s | Clip Joint Adelaide',
  },
  description:
    "Adelaide's leading hairdressing academy and luxury salons celebrating 50 years of style. Clip Joint Education is a Registered Training Organisation (RTO 0186, CRICOS 02103K) and Australia's exclusive Sassoon Academy School Connection member.",
  keywords: [
    'Hairdressing course Adelaide',
    'Clip Joint Education',
    'Clip Joint Salons',
    'RTO 0186',
    'CRICOS 02103K',
    'Sassoon Academy Australia',
    'Hair salon Melbourne Street North Adelaide',
    'Burnside Village hair salon',
    'Certificate III in Hairdressing',
    'Student hair salon Adelaide CBD',
    'Hair apprenticeship South Australia',
    'Adelaide Fashion Week hair stylist',
  ],
  authors: [{ name: 'Clip Joint' }],
  creator: 'Clip Joint Education & Salons',
  publisher: 'Clip Joint Education (RTO 0186)',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.clipjoint.com.au',
    siteName: 'Clip Joint Adelaide',
    title: 'Clip Joint Education & Salons | Adelaide, South Australia',
    description:
      "South Australia's premier hairdressing academy (RTO 0186) and luxury salons. Exclusive Sassoon Academy School Connection in Australia.",
    images: [
      {
        url: '/images/hero-salon.jpg',
        width: 1200,
        height: 630,
        alt: 'Clip Joint Education & Salons Adelaide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clip Joint Education & Salons Adelaide',
    description:
      "Premier hairdressing training (RTO 0186) & luxury salons celebrating 50 years in Adelaide, SA.",
    images: ['/images/hero-salon.jpg'],
  },
  alternates: {
    canonical: 'https://www.clipjoint.com.au',
  },
  icons: {
    icon: '/images/portal-education.png',
    apple: '/images/portal-education.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#09090b] text-zinc-100 min-h-screen selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}

