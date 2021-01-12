module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "480px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
