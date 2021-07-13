module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
   
     extend: {
      fontSize: {
        'xxs': '10px',
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
