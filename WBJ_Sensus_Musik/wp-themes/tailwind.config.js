module.exports = {
  content: ["./**/*.php", "./**/*.html", "./**/*.js", "./**/*.css"],
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
      transitionDelay: {
        1250: "1250ms",
        1500: "1500ms",
        2000: "2000ms",
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
