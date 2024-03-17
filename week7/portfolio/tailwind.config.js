/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./portfolio/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        "primary": "#079211",
        "white": "#FFFF",
        "light-gray": "#D1D5DB",
        "gray": "#808080",
        "deep-gray": "#0A0A0F",
        "light-dark": "#313131",
        "dark": "#101017",
        "deep-dark": "#050507",
      }
    },
  },
  plugins: [],
}

