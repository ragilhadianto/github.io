module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xs': '.65rem',
       },
       lineHeight: {
        '11': '3rem',
        '2': '0.2rem',
        '32': '32px',
       },
       letterSpacing: {
        widest: '.25em',
        widest3: '.3rem',      
        widest1: '.18rem',
        widest125: '.125rem',
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
      xl: "1367px",
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
