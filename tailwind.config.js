/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      gotham:['"gotham pro"', 'sans-serif']
    },
    extend: {
      fontSize:{
        '8xl' : '6rem'
      },
      spacing:{
        '144': '36rem'
      }
    },
  },
  plugins: [],
}
