import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

// ▼ Noto Sans を読み込む
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Saamon Robotics | Autonomous Delivery",
  description:
    "Seed-stage robotics startup building the future of autonomous last-mile delivery.",
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
      </head>
      <body className="font-sans antialiased bg-[#f2f2f2] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
