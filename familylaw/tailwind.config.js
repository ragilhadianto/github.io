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
        gray1: '#333333',
        gray2: '#4F4F4F',
        gray3: '#C1C1C1 ',
        brown1:'#A3A294',
      },
      fontFamily: {
        'nuri':  ['"Nunito Sans", sans-serif'],
        'lib':  ['"Libre Baskerville", sans-serif'],
       },
       fontSize: {
        xxs: ['10px', '20px']
      },
      height: {
        '80': '21.25rem'
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
