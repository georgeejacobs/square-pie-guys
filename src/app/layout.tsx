import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Square Pie Guys",
  description: "Bold, energetic, and community-focused with a playful Detroit-style pizza personality. The brand embraces being 'square' as a positive identity, emphasizing aut",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton:ital,wght@0,400" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
