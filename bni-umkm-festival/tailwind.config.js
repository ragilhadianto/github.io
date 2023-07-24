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
        'orange-hover': '#BB6413',
        'white-hover': '#E1E1E1',
        'green1': '#005E6A',
        'green2': '#074952',
      },
      fontSize: {
        'body': '1.2rem',
        '2xl': '1.75rem',
        '4xl': '2.875rem',
      }
    },
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1140px",
      xxl: "1367px",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

