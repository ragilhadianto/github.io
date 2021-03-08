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
      xl: "1100px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
