/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#3DDEED",
                secondary: "#BD00FF",
                dimGreen: "#182627",
                dimPurple: "#20112D",
                bgInput: "#7B678A",
                textInput: "#BEAFC3",
            },
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};
