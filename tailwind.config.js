/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], 
      },
      colors: {
        primary: '#414D55', 
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50%))' },
        }
      },
      animation: {
        'scroll': 'scroll 80s linear infinite',
      },
    },
  },
  plugins: [],
};