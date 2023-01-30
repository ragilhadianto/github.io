module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "gray1": "#1a191b",
                "gray2": "#666666",
            },
            screens: {
                sm: "375px",
            },
        },
        container: {
            center: true,
          },
          screens: {
            xs: "100%",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
          },
        fontFamily: {
            sans: "Inter, sans-serif",
        },
    },
    plugins: [],
};
