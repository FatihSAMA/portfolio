/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        main : "#B686CD",
        dark : "#0D0C22",
        light : "#FFFFFF",
        hover : '#565564',

      },
      fontFamily : {
        caveat : ['Caveat', 'cursive'],
        inter : ['Inter', 'sans-serif'],
        shadows : ['Shadows Into Light', 'cursive'],
        
      },
      minHeight : {
        hero : 'calc(100vh - 80px)'
      }
      


    },
  },
  plugins: [],
}

