module.exports = {
  content: ["./src/**/*.pug", "./src/**/*.js", "./src/**/*.css"],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      colors: {
        'red1': '#EE3124',
      },
    },
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}

