/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      teal: colors.teal,
      yellow: colors.yellow,
      indigo: colors.indigo,
      sky: colors.sky,
      purple: colors.purple,
      slate: colors.slate,
      pink: colors.pink,
      orange: colors.orange,
      // primary: '#0855c4',
      primary: '#7D8506',
      secondary: '#F9A825',
      background: "#e5e5e5",
      surface: "#ffffff",
      "vtd-primary": colors.sky, // Light mode Datepicker color
      "vtd-secondary": colors.gray, // Dark mode Datepicker color
    },
    container: {
      center: true,
      // padding: '2rem',
    },
  },
  plugins: [],
}

