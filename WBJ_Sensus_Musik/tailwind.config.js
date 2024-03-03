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
        pink1: "#F1678B",
        pink2: "#F3ADB4",
        pink3: "#CE345B",
        orange1: "#E85F24",
        blue1: "#4B96BE",
        green1: "#97BA5E",
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
