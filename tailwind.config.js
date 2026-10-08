/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        franklin: ['"Libre Franklin"', "system-ui", "sans-serif"],
        open: ['"Open Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0F172A",
        body: "#475569",
        muted: "#64748B",
        brand: { DEFAULT: "#2563EB", bright: "#0B5FFF", dark: "#1D4ED8" },
        soft: "#F8FAFC",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,23,42,.10)",
        lift: "0 2px 4px rgba(15,23,42,.05), 0 20px 40px -16px rgba(37,99,235,.28)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        floatAlt: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-3deg)" },
        },
        fadeIn: { from: { opacity: 0, transform: "translateY(8px)" }, to: { opacity: 1, transform: "none" } },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(37,99,235,.35)" },
          "100%": { boxShadow: "0 0 0 14px rgba(37,99,235,0)" },
        },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        floatAlt: "floatAlt 11s ease-in-out infinite",
        fadeIn: "fadeIn .45s ease-out both",
        pulseRing: "pulseRing 2s ease-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
