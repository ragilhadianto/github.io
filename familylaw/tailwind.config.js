const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        'blue1': '#0A2540',
        'gray1': '#909090',
        'gray2': '#EEEEEE',
        'orange1': '#BF7F48',
      },
      fontFamily: {
        'lucida':  ['"Lucida Grande", sans-serif'],
        'proxima':  ['"Proxima Nova Rg", sans-serif'],
        'proxima-lt':  ['"Proxima Nova Lt", sans-serif'],
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
      xl: "1320px",
    },
    fontFamily: {
      'sans': ['"Proxima Nova Rg", sans-serif'],
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
