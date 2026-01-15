import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1200px" }
    },
    extend: {
      colors: {
        ink: "rgb(15 23 42)",
        paper: "rgb(255 255 255)",
        muted: "rgb(71 85 105)",
        border: "rgb(226 232 240)",

        // Pick’n GO base (muy similar a HelloFresh en vibra, sin copiar)
        brand: "rgb(6 122 70)",       // verde sólido
        brandDark: "rgb(5 99 58)",
        brandSoft: "rgb(6 122 70 / 0.10)",
        brandSoft2: "rgb(6 122 70 / 0.18)",

        // “Hero mix” (pasteles para fondo tipo HelloFresh)
        heroMint: "rgb(210 244 225)",   // menta suave
        heroLime: "rgb(232 247 206)",   // lima suave
        heroButter: "rgb(255 244 204)", // amarillo mantequilla
        heroLav: "rgb(239 232 255)",    // lavanda suave

        premium: "rgb(0 120 191)",
        premiumSoft: "rgb(105 179 231 / 0.20)",

        allergy: "rgb(99 169 31)",
        allergySoft: "rgb(198 220 147 / 0.45)",

        standard: "rgb(251 178 11)",
        standardSoft: "rgb(252 231 164 / 0.60)",

        navy: "rgb(44 66 89)",
        orange: "rgb(231 127 40)"
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(2, 6, 23, 0.08)",
        softer: "0 8px 18px rgba(2, 6, 23, 0.06)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 22s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
