// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      width:{
        '900c':'900px'
      }
    },
  },
  plugins: [],
}
