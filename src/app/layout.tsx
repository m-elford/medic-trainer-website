import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { brand } from "@/brand/constants";
import { siteMetadata } from "@/brand/metadata";
import { social } from "@/brand/social";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.metadataBase),
  title: {
    default: siteMetadata.title,
    template: `%s | ${brand.name}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: brand.owner }],
  creator: brand.name,
  openGraph: social.openGraph,
  twitter: social.twitter,
  icons: {
    icon: "/images/logos/logo-main.png",
    apple: "/images/logos/logo-main.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}