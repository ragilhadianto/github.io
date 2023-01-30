/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "orange1": "#EF3E42"
            },
            screens: {
                sm: "375px",
            },
        },
        fontFamily: {
            sans: "Helvetica Neue LT Pro, Arial, sans-serif",
        },
    },
    plugins: [],
};
