/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      display: ['responsive'], 
      visibility: ['responsive'],
    },
    
  },
  plugins: [ require('daisyui'),],
}

