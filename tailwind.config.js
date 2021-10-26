const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    'index.html',
    'nav-toggler.html',
    'assets/js/script.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {
      fontFamily: {
        'sans': ['"Red Hat Text"', 'sans-serif'],
        'display': ['"Red Rose"', 'cursive']
      },
      boxShadow: {
        'header': '0 1px 40px rgba(250, 250, 250, 0.1)'
      },
      backgroundImage: {
        'alt-header': 'linear-gradient(180deg, currentColor 75%, rgba(255, 255, 255, 0))'
      },
    },
  },
  plugins: [],
}
