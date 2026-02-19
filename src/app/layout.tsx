import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const degular = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const antiqueOliveNord = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Square Pie Guys',
  description: 'Square Pie Guys embodies a bold, community-focused personality with playful confidence and authentic Detroit-style pizza pride. We speak with enthusiasm about quality ingredients and unforgettable experiences while maintaining approachable, down-to-earth messaging that celebrates both food and friendship.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${degular.variable} ${antiqueOliveNord.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}