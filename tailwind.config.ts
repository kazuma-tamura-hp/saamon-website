// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saamon: {
          base: "#F2F2F2",      // ページ背景
          baseSoft: "#FFFFFF",  // カード背景
          primary: "#002F6C",   // ネイビー（メイン）
          accent: "#FA8072",    // CTAカラー
          text: "#1A1A1A",      // メインテキスト
          textMuted: "#4A4A4A", // サブテキスト
        },
      },

      // ▼ フォントを Inter → Noto Sans に変更
      fontFamily: {
        sans: ["var(--font-noto)", "Noto Sans", "sans-serif"],
      },

      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.05)",
        cardHover: "0 8px 32px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
