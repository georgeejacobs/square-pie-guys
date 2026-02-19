import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Square Pie Guys',
  description: 'Bold, playful Detroit-style pizza joint bringing unforgettable food experiences to our community. THIS IS YOUR SIGN TO ORDER SOME PIZZA! Experience THE P-LO PIES HERE with our passionate, confident approach to square pizza perfection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} font-body antialiased`}
        style={{
          '--font-heading': 'antique-olive-std-j36jj4, serif',
          '--font-body': 'degular, sans-serif'
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  )
}