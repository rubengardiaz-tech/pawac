import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Tipografía principal: Inter (limpia y muy legible)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Metadatos para SEO — todo en español
export const metadata: Metadata = {
  title: 'PAWAC — Construyendo paz a través del arte y la cultura',
  description:
    'Asociación PAWAC (Peacebuilding Also With Art and Culture): asociación cultural sin ánimo de lucro en Lanzarote dedicada a la construcción de paz basada en las artes de forma decolonial, participativa y plural.',
  generator: 'v0.app',
  keywords: [
    'PAWAC',
    'construcción de paz',
    'arte y cultura',
    'Arts-Based Peacebuilding',
    'Lanzarote',
    'Canarias',
    'no violencia',
    'diálogo intercultural',
  ],
  openGraph: {
    title: 'PAWAC — Construyendo paz a través del arte y la cultura',
    description:
      'Arts-Based Peacebuilding decolonial, participativo y plural desde Lanzarote.',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0d7377',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
