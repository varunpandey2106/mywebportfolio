const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      animation: {
        gradient: 'text 4s ease infinite',
        // glow: 'glow 2s ease-in-out alternate infinite',
        'fade-in': 'fade-in 3s ease-in-out forwards',
        title: 'title 3s ease-out forwards',
        'fade-left': 'fade-left 3s ease-in-out forwards',
        'fade-right': 'fade-right 3s ease-in-out forwards',
      },
      fontFamily: {
        sans: ['var(--font-worksans)', ...defaultTheme.fontFamily.sans],
        poppins: ['var(--font-poppins)'],
        heading: ['var(--font-calsans)'],
      },
      screens: {
        sm: '500px',
        tab: '601px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
};
