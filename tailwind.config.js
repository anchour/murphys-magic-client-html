/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  safelist: [/.btn--/],
  theme: {
    extend: {
      colors: {
        water: "#0a4de2",
        smoke: "#2b2b2b",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
