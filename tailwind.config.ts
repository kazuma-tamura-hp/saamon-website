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
        primary: "#24272B",
        accent: "#FA8072",
        surface: "#F2F2F2",
        "brand-blue": "#002F6C",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(250,128,114,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(0,47,108,0.35), transparent 40%), radial-gradient(circle at 50% 80%, rgba(36,39,43,0.45), transparent 50%)",
        "grid-overlay":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-overlay": "60px 60px",
      },
      boxShadow: {
        glow: "0 0 45px rgba(0,47,108,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;

