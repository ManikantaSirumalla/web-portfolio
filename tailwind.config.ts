import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        graphite: "#6e6e73",
        mist: "#f5f5f7",
        hairline: "#d2d2d7",
        night: "#000000",
        dusk: "#161617",
        cloud: "#a1a1a6",
        link: "#0066cc",
        "link-dark": "#2997ff",
        action: "#0071e3",
        "action-hover": "#0077ed",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        display: "-0.015em",
        headline: "-0.009em",
        body: "-0.022em",
      },
      maxWidth: {
        page: "1068px",
        wide: "1260px",
      },
      borderRadius: {
        tile: "28px",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
