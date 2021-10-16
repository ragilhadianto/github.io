const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green1: '#134F2B',
        green2: '#094623',
        green3: '#27AE60',
        orange1: '#F26A22',
        brokenwhite: '#FFF7F3',
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
      sans: ['"Nunito Sans", sans-serif'],
     }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
