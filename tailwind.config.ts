import type { Config } from "tailwindcss";
// const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        spaceMono: ["var(--font-spaceMono)"],
        nanumPen: ["var(--font-nanumPen)"],
        circular: ["var(--font-circular)"],
      },
      colors: {
        primary: "#1C1C28",
        secondary: "#C8C7D8",
        grandBlue: "#6966FF",
        bgSecondary: "#393953",
        tertiary: "#A59EBA",
      },
      fontSize: {
        hero: ["80px", "88px"],
        herox: ["60px", "72px"],
        heroLg: ["40px", "48px"],
        heroM: ["24px", "32px"],
        heroS: ["20px", "24px"],
        lg: ["18px", "24px"],
        md: ["16px", "24px"],
        sm: ["14px", "24px"],
        monoXl: ["20px", "24px"],
        monoLg: ["18px", "24px"],
        monoMd: ["16px", "24px"],
        monoSm: ["14px", "24px"],
        label: ["16px", "24px"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    // require("prettier-plugin-tailwindcss"),
  ],
};
export default config;
