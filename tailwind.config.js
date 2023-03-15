// const { theme } = require('@sanity/demo/tailwind')
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './sanity/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Space: ['Space Grotesk']
      },
      colors: {
        neutral: colors.neutral,
        'pixlviol-100': '#ba97ff',
        'pixlviol-200': '#ae86ff',
        'pixlviol-300': '#a375ff',
        'pixlviol-400': '#9763ff',
        'pixlviol-500': '#8c52ff', // logo color
        'pixlviol-600': '#7630ff',
        'pixlviol-700': '#4f00ec',
        'pixlviol-800': '#4400ca',
        'pixlviol-900': '#3800a9',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // \\\require("@tailwindcss/aspect-ratio"),
    // require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
}



