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
        ink: {
          DEFAULT: "#0A0C10",
          raised: "#10141A",
          line: "#1E252E",
        },
        fg: {
          DEFAULT: "#E7EBF0",
          muted: "#9AA4B2",
          faint: "#7C8796",
        },
        accent: {
          DEFAULT: "#6EE7B7",
          soft: "rgba(110, 231, 183, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        shell: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
