import type { Metadata } from 'next';
import "./globals.css";
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://printforge-83lh.onrender.com'),
  title: 'PrintForge — 3D Printing Model Catalog Platform',
  description: 'High-performance 3D printing model discovery catalog engineered with Next.js 15 App Router, React 19, and SQLite. Features URL-driven search, filtering, and dynamic pagination.',
  openGraph: {
    type: 'website',
    url: 'https://printforge-83lh.onrender.com',
    title: 'PrintForge — 3D Printing Model Catalog Platform',
    description: 'High-performance 3D printing model discovery catalog engineered with Next.js 15 App Router, React 19, and SQLite. Features URL-driven search, filtering, and dynamic pagination.',
    images: [
      {
        url: '/og-image.webp',
        width: 1840,
        height: 1036,
        alt: 'PrintForge 3D Printing Model Catalog Platform Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrintForge — 3D Printing Model Catalog Platform',
    description: 'High-performance 3D printing model discovery catalog engineered with Next.js 15 App Router, React 19, and SQLite. Features URL-driven search, filtering, and dynamic pagination.',
    images: ['/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
