module.exports = {
  content: ["./src/**/*.pug", "./src/**/*.js", "./src/**/*.css"],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      colors: {
        'gray1': '#3C3C3C',
        'orange1': '#F29034',
        'orange2': '#D76E0D',
        'green1': '#005E6A',
        'green2': '#074952',
      },
      fontSize: {
        '2xl': '1.75rem',
        '4xl': '2.875rem',
      }
    },
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

