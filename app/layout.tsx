import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'THEE PHYMO – Creative Designer & Ecosystem Experience Operator',
  description: 'Designing Experiences That Connect People, Products & Communities. 6 years of impactful branding, motion design, and digital experiences.',
  keywords: ['Creative Designer', 'Brand Identity', 'Motion Design', 'Logo Design', 'Nigeria', 'THEE PHYMO'],
  authors: [{ name: 'THEE PHYMO' }],
  openGraph: {
    title: 'THEE PHYMO – Creative Designer',
    description: 'Designing Experiences That Connect People, Products & Communities.',
    url: 'https://theephymo.com',
    siteName: 'THEE PHYMO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THEE PHYMO – Creative Designer',
    description: 'Designing Experiences That Connect People, Products & Communities.',
    creator: '@PhenomenalPhymo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-dark dark:bg-bg-dark text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'linear-gradient(135deg, rgba(10,132,255,0.95), rgba(77,163,255,0.9))',
                color: '#fff',
                borderRadius: '14px',
                fontSize: '0.88rem',
                fontWeight: '500',
                fontFamily: 'Space Grotesk, sans-serif',
                border: 'none',
              },
              duration: 3500,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
