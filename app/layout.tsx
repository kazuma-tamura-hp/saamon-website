import { Analytics } from "@vercel/analytics/react";  // ← 追加

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

// ▼ Noto Sans を読み込む
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
});

// ===== Saamon の基本情報 =====
const COMPANY_NAME = "Saamon";
const COMPANY_URL = "https://saamon.com";
const COMPANY_DESCRIPTION =
  "Saamon builds autonomous delivery robots for affordable, reliable, zero-emission last-mile delivery.";
const COMPANY_LOGO = "https://saamon.com/ogp.png";
const COMPANY_FOUNDING_YEAR = "2025";

const PRODUCT_NAME = "Saamon Autonomous Delivery Robot";
const PRODUCT_DESCRIPTION =
  "An electric autonomous delivery robot designed for last-mile delivery for restaurants, grocery retailers, and enterprise logistics.";

// JPY / USD / EUR それぞれのオファーを定義
const PRODUCT_OFFERS = [
  {
    "@type": "Offer",
    url: COMPANY_URL,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "JPY",
    },
    availability: "https://schema.org/PreOrder",
  },
  {
    "@type": "Offer",
    url: COMPANY_URL,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
    },
    availability: "https://schema.org/PreOrder",
  },
  {
    "@type": "Offer",
    url: COMPANY_URL,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
    },
    availability: "https://schema.org/PreOrder",
  },
];

// ▼ 構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${COMPANY_URL}/#organization`,
      name: COMPANY_NAME,
      url: COMPANY_URL,
      description: COMPANY_DESCRIPTION,
      logo: COMPANY_LOGO,
      foundingDate: COMPANY_FOUNDING_YEAR,
    },
    {
      "@type": "Product",
      "@id": `${COMPANY_URL}/#product`,
      name: PRODUCT_NAME,
      description: PRODUCT_DESCRIPTION,
      brand: {
        "@id": `${COMPANY_URL}/#organization`,
      },
      url: COMPANY_URL,
      category: "Autonomous delivery robot",
      offers: PRODUCT_OFFERS,
    },
  ],
};

export const metadata: Metadata = {
  title: "Saamon | Autonomous Delivery Robots for Last-Mile Delivery",
  description: COMPANY_DESCRIPTION,
  metadataBase: new URL(COMPANY_URL),
  openGraph: {
    title: "Saamon | Autonomous Delivery Robots for Last-Mile Delivery",
    description:
      "Autonomous delivery robots for food delivery, grocery logistics, and enterprise operations.",
    url: COMPANY_URL,
    siteName: COMPANY_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Saamon – Autonomous delivery robots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saamon | Autonomous Delivery Robots for Last-Mile Delivery",
    description:
      "Electric autonomous delivery robots for improved logistics efficiency.",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="IEtVIF2dzMjq7Inm2C9DUPSPjrLmjHsrPmrA_OhB9jw"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="font-sans antialiased bg-[#f2f2f2] text-[#111827]">
        {children}

        {/* ← Analytics をここに追加 */}
        <Analytics />
      </body>
    </html>
  );
}
