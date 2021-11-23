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
        grey2: '#808080',
        grey3: '#B1B2B2',
        grey4: '#707070',
        blue1: '#0F68C9',
      },
      height: {
        h480: '480px'
       },
       fontSize: {
        'xxs': '10px',
       }
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
