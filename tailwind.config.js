/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      beige: '#F7EDE8',
      red: '#CD4631',
      blue: '#81ADC8',
      grey: '#4D4D4D',
      lightBlue: '#EDF3F7',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Montserrat Alternates', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
