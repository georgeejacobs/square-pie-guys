import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Square Pie Guys",
  description: "Square Pie Guys has a bold, energetic personality that's unapologetically confident about their Detroit-style pizza. The brand voice is casual and direct, using",
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
