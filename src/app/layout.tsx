import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medic Trainer",
  description:
    "A tactical medical training app for timed drills, equipment preparation, evidence checks and performance tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}