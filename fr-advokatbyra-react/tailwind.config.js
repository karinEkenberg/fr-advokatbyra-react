/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C3457",
        bg: "#F0F0F0",
        bgsec: "#F5F5F5",
        links: "#F28E2B",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        slab: ["Roboto slab", "sans-serif"]
      },
    },
  },
  plugins: [],
};
