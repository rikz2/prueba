/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
  },

  theme: {
    extend: {
      colors:{
        primary:{
          900: '#EC8B68',
          100: '#FFDBBB',
        },
        secondary:{
          900: '#3C5262' 
        },
        ternary:{
          900: '#F6E5D5',
          800: '#FBF1E8',
        }
      }
    },
  },
  plugins: [],
}

