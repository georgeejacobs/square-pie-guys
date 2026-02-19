import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-heading' })
const interBody = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Square Pie Guys',
  description: 'Square Pie Guys brings you authentic Detroit-style pizza with an energetic, community-focused approach. We\'re square in all the right ways - celebrating local connections, high-quality ingredients, and that perfect crispy, cheesy edge that makes our pizza unforgettable.',
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