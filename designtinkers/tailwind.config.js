const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: '#583C78',
        purple2: '#C874AE',
        green1: '#4E781C',
        green2: '#78B82A',
        green3: '#C1D996',
        gray1: '#707070',
        orange: '#FF7600',
        blue: '#5CA2F7',
        blue2: '#2C4E78',
      },
    },
    container: {
      center: true,
    },
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
    },
    
    fontFamily: {
      sans: ['"Poppins", sans-serif'],
     }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
