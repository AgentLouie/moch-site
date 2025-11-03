/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // 👈 main font
        garamond: ["Cormorant Garamond", "serif"], // optional for your logo or headers
        bungee: ['Bungee', 'sans-serif'],
      },
      colors: {
      bg: "#0a0a0f",           // base background
      surface: "#141421",      // card/nav background
      accent1: "#a78bfa",      // violet
      accent2: "#f5a9b8",      // pink
      accent3: "#86efac",      // mint
      glow: "rgba(167,139,250,0.3)", // subtle glow
      },
       animation: {
      "pulse-slow": "pulse 4s ease-in-out infinite",
    },
    },
  },
  plugins: [],
}
