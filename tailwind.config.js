/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "340px",
            md: "540px",
            lg: "768px",
            xl: "1180px",
        },
        extend: {
            colors: {
                cream: "#EAB308",
                grass: "#198754",
            },
        },
        fontFamily: {
            Jost: ["Jost", "sans-serif"],
            Comic: ["Comic Neue", "cursive"],
        },
        containr: { center: true },
    },
    plugins: [],
};
