import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mithi Cravings | Premium Handmade Bakery | Custom Cakes & Artisan Treats',
  description: 'Indulge in handcrafted cakes, cookies, and brownies made with love and premium ingredients. No preservatives, freshly baked daily, delivered with care. Order your sweet moments today.',
  keywords: 'premium bakery, handmade cakes, artisan cookies, gourmet brownies, custom cakes, fresh baked goods, no preservatives, celebration cakes, Mumbai bakery, home delivery',
  authors: [{ name: 'Mithi Cravings' }],
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1754964450/469590153_943912297673989_222213_zfzalg.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
      },
    ],
  },
  openGraph: {
    title: 'Mithi Cravings - Premium Handmade Bakery',
    description: 'Handcrafted cakes, cookies, and brownies made with love and premium ingredients. Freshly baked daily with no preservatives.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://mithicravings.com',
    siteName: 'Mithi Cravings',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mithi Cravings - Premium Bakery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mithi Cravings - Premium Handmade Bakery',
    description: 'Handcrafted cakes, cookies, and brownies made with love.',
    images: ['/og-image.jpg'],
  },
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/twosapiens/image/upload/v1754964450/469590153_943912297673989_222213_zfzalg.png" />
        {/* Apple touch icon is provided via metadata icons above */}
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body className="font-inter antialiased bg-gradient-to-br from-pink-50 via-cream-50 to-beige-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}