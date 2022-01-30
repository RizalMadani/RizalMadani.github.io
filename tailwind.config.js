const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    'index.html',
    'src/js/script.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
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
