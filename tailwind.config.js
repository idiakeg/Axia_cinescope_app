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
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            animation: {
                shimmer: "shimmer 2.5s infinite linear",
                pulseSoft: "pulseSoft 2s ease-in-out infinite",
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
