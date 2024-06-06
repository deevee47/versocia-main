import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Versocia - Language School Marketing Agency",
  description:
    "Versocia is a leading language school marketing agency that helps educational institutions attract more students through effective digital marketing strategies.",
  keywords: "language school marketing, language school advertising, language school promotion, language school social media, language school SEO",
  icons: {
    icon: "/white-icon.png",
  },
  openGraph: {
    title: "Versocia - Language School Marketing Agency",
    description:
      "Versocia is a leading language school marketing agency that helps educational institutions attract more students through effective digital marketing strategies.",
    url: "https://www.versocia.com/",
    siteName: "Versocia",
    images: [
      {
        url: "https://www.versocia.com/versocia-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Versocia - Language School Marketing Agency",
    description:
      "Versocia is a leading language school marketing agency that helps educational institutions attract more students through effective digital marketing strategies.",
    images: [
      "https://www.versocia.com/versocia-twitter-image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth transition-all ease-in" lang="en">
      <head>
        <link rel="icon" href="/white-icon.png"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
