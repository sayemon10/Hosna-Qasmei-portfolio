import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Timeo Williams',
  description: 'Citizen-Warrior, Technologist',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico']
  },
  manifest: '/favicon/site.webmanifest',
  metadataBase: new URL('https://timeowilliams.com'),
  openGraph: {
    title: 'Timeo Williams',
    description: 'Citizen-Warrior, Technologist',
    images: [{ url: '/favicon/android-chrome-512x512.png' }],
  },
  twitter: {
    card: 'summary',
    title: 'Timeo Williams',
    description: 'Citizen-Warrior, Technologist',
    images: ['/favicon/android-chrome-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#1A1A1A" />
        <meta name="theme-color" content="#1A1A1A" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
