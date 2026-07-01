import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL(
    "https://medic-trainer-website-fe5cyabxs-medic-trainer.vercel.app"
  ),
  title: {
    default: "Medic Trainer",
    template: "%s | Medic Trainer",
  },
  description:
    "Medic Trainer is a tactical medical training app for timed drills, equipment preparation, evidence checks and performance tracking.",
  keywords: [
    "Medic Trainer",
    "tactical medical training",
    "military medical training",
    "medical skills app",
    "combat first aid",
    "timed medical drills",
    "TestFlight beta",
  ],
  authors: [{ name: "Matthew Elford" }],
  creator: "Medic Trainer",
  openGraph: {
    title: "Medic Trainer",
    description: "Military medical skills. Practised under pressure.",
    url: "https://medic-trainer-website-fe5cyabxs-medic-trainer.vercel.app",
    siteName: "Medic Trainer",
    images: [
      {
        url: "/images/branding/hero.png",
        width: 1200,
        height: 630,
        alt: "Medic Trainer tactical medical training app",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medic Trainer",
    description: "Military medical skills. Practised under pressure.",
    images: ["/images/branding/hero.png"],
  },
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