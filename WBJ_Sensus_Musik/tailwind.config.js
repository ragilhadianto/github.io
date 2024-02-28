module.exports = {
  content: ["./**/*.html", "./**/*.js", "./**/*.css"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    container: false,
    extend: {
      colors: {
        yellow1: "#F7EF65",
      },
    },
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
