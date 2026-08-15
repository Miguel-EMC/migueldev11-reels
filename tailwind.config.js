/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        emcode: {
          bg: "#070D08",
          bgAlt: "#0D160D",
          card: "#0A1A0A",
          border: "#1A3A1A",
          borderLight: "#2D5A2D",
          primary: "#7CFC88",
          primaryNeon: "#00FF41",
          primarySoft: "#B6FFC0",
          primaryDim: "#3D7A45",
          accent: "#5BE06A",
          cyan: "#22D3EE",
          amber: "#FF7A1A",
          rose: "#FF4D4D",
          text: "#E8F5EA",
          textMuted: "#7E8C7E",
          dark: "#050805",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
};
