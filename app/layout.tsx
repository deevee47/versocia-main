import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Versocia - Social Media Marketing Agency",
  description:
    "Versocia is a leading digital marketing agency that helps businesses attract more customers through effective and data-driven marketing strategies.",
  keywords:
    "digital marketing agency, online advertising, business growth, SEO, social media marketing, SMMA, lead generation, marketing services, paid ads, marketing strategy",
  icons: {
    icon: "https://i.ibb.co/BCQxch3/blackbg-logo.jpg",
  },
  openGraph: {
    title: "Versocia - Social Media Marketing Agency",
    description:
      "Versocia is a leading digital marketing agency that helps businesses attract more customers through effective and data-driven marketing strategies.",
    url: "https://www.versocia.com/",
    siteName: "Versocia",
    images: [
      {
        url: "https://i.ibb.co/BCQxch3/blackbg-logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
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