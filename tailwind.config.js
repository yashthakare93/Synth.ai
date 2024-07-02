module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      width: {
        '900c': '900px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
