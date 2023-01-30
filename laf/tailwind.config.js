const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        'dark1': '#3e4d57',
        'dark2': '#7c9db2',
        'dark3': '#4d606d',
        'orange1': '#ff6c2e',
        'grey1': '#f0f0f0',
        'grey2': '#505050',
        'grey3': '#bbc0c8',
        'grey4': '#c4ced4',
        'green1': '#0091a1',
        'yellow1': '#ffa41d',
        'blue1': '#1294d7',
        'blue2': '#70b4c3',
      },
      fontFamily: {
        'russo':  ['"Russo One", sans-serif'],
       },
       fontSize: {
        xxs: ['10px', '20px']
      },
      flex: {
        'none-auto': '0 0 auto'
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
      'sans': ['"Lato", sans-serif'],
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
