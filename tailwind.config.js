/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        // Primary
        smoke: `var(--color-primary-smoke)`,
        bone: `var(--color-primary-bone)`,
        dove: `var(--color-primary-dove)`,

        // Secondary
        water: `var(--color-secondary-water)`,
        green: `var(--color-secondary-light)`,
        earth: `var(--color-secondary-earth)`,
      },

      fontFamily: {
        sans: [`var(--font-sans)`],
        heading: [`var(--font-heading)`],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: `1.5rem`,
          sm: `2rem`,
        },
        screens: {
          "2xl": "1368px",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
