import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `60,000+ Printable Wall Art Designs — ${siteConfig.brand.name}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.brand.description,
  keywords: [
    "printable wall art",
    "digital wall art download",
    "commercial use wall art",
    "Etsy wall art bundle",
    "print on demand designs",
    "wall art collection",
    "instant download art",
    "Noranzo",
  ],
  openGraph: {
    title: `60,000+ Printable Wall Art Designs — ${siteConfig.brand.name}`,
    description: siteConfig.brand.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `60,000+ Printable Wall Art Designs — ${siteConfig.brand.name}`,
    description: siteConfig.brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
