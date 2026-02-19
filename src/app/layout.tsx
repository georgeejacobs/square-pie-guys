import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const interBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Square Pie Guys',
  description: 'Square Pie Guys projects a bold, energetic personality with strong community values and passionate service. We embrace being "Square" as a way to celebrate diverse tastes, foster connections, and create lasting memories while making the highest quality Detroit-style pizza possible.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interBody.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}