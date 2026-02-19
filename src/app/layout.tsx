import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Square Pie Guys",
  description: "Square Pie Guys speaks with a bold, authentic, and community-focused voice that celebrates Detroit-style pizza culture. The brand emphasizes being 'square' as a",
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
