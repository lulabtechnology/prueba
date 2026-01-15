import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        ink: "rgb(15 23 42)",
        paper: "rgb(255 255 255)",
        muted: "rgb(71 85 105)",
        border: "rgb(226 232 240)",
        brand: "rgb(6 122 70)",           // HelloFresh-like green (tuned)
        brandDark: "rgb(5 99 58)",
        brandSoft: "rgb(6 122 70 / 0.08)",
        brandSoft2: "rgb(6 122 70 / 0.14)",
        premium: "rgb(0 120 191)",        // Daphne approx (doc palette)
        premiumSoft: "rgb(105 179 231 / 0.18)", // Sky Blue
        allergy: "rgb(99 169 31)",        // #63A91F
        allergySoft: "rgb(198 220 147 / 0.40)", // #C6DC93
        standard: "rgb(251 178 11)",      // #FBB20B
        standardSoft: "rgb(252 231 164 / 0.55)", // #FCE7A4
        navy: "rgb(44 66 89)",            // from logo sample
        orange: "rgb(231 127 40)",        // from logo sample
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(2, 6, 23, 0.08)",
        softer: "0 8px 18px rgba(2, 6, 23, 0.06)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        fadeUp: "fadeUp 600ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
