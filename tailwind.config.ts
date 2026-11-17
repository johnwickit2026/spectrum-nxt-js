import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sis: {
          orange: {
            burnt: "#BF5700",
            DEFAULT: "#FC800A",
            light: "#FFF3E6",
            hover: "#E06B00",
          },
          purple: {
            DEFAULT: "#92278F",
            pink: "#DD70DA",
            light: "#F7EBF7",
            hover: "#7E1F7C",
          },
          green: {
            DEFAULT: "#8AB326",
            light: "#F2F7E6",
            dark: "#6F921B",
          },
          navy: {
            DEFAULT: "#171E45",
            light: "#262E5F",
            dark: "#0F142E",
          },
          cream: "#FBF1E3",
          warmgray: "#EBE8E2",
          darkgray: "#444444",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(23, 30, 69, 0.06), 0 2px 6px -1px rgba(23, 30, 69, 0.04)",
        "card-hover": "0 14px 30px -4px rgba(23, 30, 69, 0.12), 0 4px 10px -2px rgba(23, 30, 69, 0.06)",
        glow: "0 0 25px rgba(252, 128, 10, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
