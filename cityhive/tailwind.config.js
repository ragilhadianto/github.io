const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow1: '#FEBE2C',
        yellow2: '#7E5E15',
        red1: '#C70000',
        green1: '#5AAB1D',
        grey1: '#1F2024',
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
      xl: "1280px",
    },
    
    fontFamily: {
      sans: ['"Rubik", sans-serif'],
     }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
