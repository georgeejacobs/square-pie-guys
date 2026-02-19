import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import { Oswald } from 'next/font/google'
import './globals.css'

const headingFont = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Oswald({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Square Pie Guys',
  description: 'Bold, energetic, and playful with an aggressive urban vibe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
