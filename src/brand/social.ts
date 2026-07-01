import { brand } from "./constants";

export const social = {
  openGraph: {
    title: brand.name,
    description:
      "Military Medical Skills. Practised Under Pressure.",
    url: brand.url,
    siteName: brand.name,
    images: [
      {
        url: "/images/branding/hero.png",
        width: 1200,
        height: 630,
        alt: "Medic Trainer",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description:
      "Military Medical Skills. Practised Under Pressure.",
    images: ["/images/branding/hero.png"],
  },
};