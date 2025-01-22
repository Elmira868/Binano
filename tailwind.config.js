/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "Vazir-Light": "vazir-light",
        "Vazir-Medium": "vazir-medium",
        "Vazir-Bold": "vazir-bold",
      },
      colors:{
        'primary-red':'#ff002b',
      },
    },
  },
  plugins: [],
}

