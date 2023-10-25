/** @type {import('tailwindcss').Config} */
import { black, white, zinc, blue } from 'tailwindcss/colors';

export const content = [
  'src/index.html',
  'src/css/style.css',
  'src/js/script.js'
];
export const theme = {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    black: black,
    white: white,
    gray: zinc,
    blue: blue,
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
};
export const plugins = [];
