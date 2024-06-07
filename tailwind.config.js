/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Cairo:['Cairo'],
        Comfortaa:['Comfortaa'],
        Tomorrow:['Tomorrow'],
       },
       colors:{
        main:['red-200'],
        second:['red-300'],
        b1:['stone-900'],
        b2:['stone-600'],
       }
    },
  },
  plugins: [],
}

