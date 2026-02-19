import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Square Pie Guys',
  description: 'Award-winning pizza with a bold, confident personality. Quality ingredients, community-focused dining, and the best square pies around. This is your sign to order some pizza!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-body antialiased`} style={{'--font-heading': 'var(--font-heading)', '--font-body': 'var(--font-heading)'} as React.CSSProperties}>
        {children}
      </body>
    </html>
  )
}