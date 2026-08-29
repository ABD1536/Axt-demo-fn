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
        brand: {
          green: "#0acd00",
          "green-hover": "#08b200",
          "green-glow": "rgba(10, 205, 0, 0.4)",
          black: "#000000",
          surface: "#0a0a0a",
          card: "#111111",
          elevated: "#181818",
          border: "#1a1a1a",
        },
        accent: {
          primary: "#0acd00",
          glow: "#0acd00",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        display: ["Syne", "Montserrat", "sans-serif"],
        sans: ["Montserrat", "system-ui", "-apple-system", "sans-serif"],
        serif: ["'Playfair Display'", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        "neon-glow": "0 0 30px rgba(10, 205, 0, 0.35)",
        "neon-sm": "0 0 15px rgba(10, 205, 0, 0.25)",
        "card-dark": "0 20px 50px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "marquee-scroll": "marquee-loop 30s linear infinite",
        "spin-slow": "spin 16s linear infinite",
      },
      keyframes: {
        "marquee-loop": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
