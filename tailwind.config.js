/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      Poppins:['Poppins, san-serif']
    },

    container:{
      center: true,
      padding: '1rem',
      screens:{
        lg: '1124px',
        xl:'1124px',
        '2xl':'1124px'
      }
    },
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      }
    },
  },
  plugins: [],
}

