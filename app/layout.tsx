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
const COMPANY_LOGO = "https://saamon.com/ogp.png"; // ロゴ or OGP画像
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

// ▼ 構造化データ（検索エンジン用の自己紹介）
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
      // SNSアカウントが出来たらここを埋めてコメントアウト解除
      // sameAs: [
      //   "https://www.linkedin.com/company/xxxxx",
      //   "https://x.com/xxxxx",
      //   "https://www.facebook.com/xxxxx"
      // ]
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

  // ▼ Open Graph（OGP）
  openGraph: {
    title: "Saamon | Autonomous Delivery Robots for Last-Mile Delivery",
    description:
      "Autonomous delivery robots for food delivery, grocery logistics, and enterprise operations. Reliable electric mobility with reduced operational cost.",
    url: COMPANY_URL,
    siteName: COMPANY_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ogp.png", // public/ogp.png を用意しておくと表示されます
        width: 1200,
        height: 630,
        alt: "Saamon – Autonomous delivery robots",
      },
    ],
  },

  // ▼ Twitterカード
  twitter: {
    card: "summary_large_image",
    title: "Saamon | Autonomous Delivery Robots for Last-Mile Delivery",
    description:
      "Electric autonomous delivery robots that reduce labor costs and improve logistics efficiency for restaurants, grocers, and enterprise delivery networks.",
    images: ["/ogp.png"],
  },

  // ▼ 検索ロボットに「インデックスしていいよ」と伝える
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
        {/* Google Search Console 用 */}
        <meta
          name="google-site-verification"
          content="IEtVIF2dzMjq7Inm2C9DUPSPjrLmjHsrPmrA_OhB9jw"
        />

        {/* ▼ 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#f2f2f2] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
