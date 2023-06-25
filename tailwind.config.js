/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        softBlue: '#5DA8C9',
        warmPink: '#FF85A1',
        neutralGray: '#707070',
        softGreen: '#A4CFBE',
        backgroundColor: '#F4F7FA',
        primaryTextColor: '#333333',
        secondaryTextColor: '#666666',
        primary: {
          100: "#cce7f5",
          200: "#99cfeb",
          300: "#66b8e0",
          400: "#33a0d6",
          500: "#0088cc",
          600: "#006da3",
          700: "#00527a",
          800: "#003652",
          900: "#001b29"
        },
        secondary: {
          100: "#ffd6e0",
          200: "#ffadc2",
          300: "#ff85a3",
          400: "#ff5c85",
          500: "#ff3366",
          600: "#cc2952",
          700: "#991f3d",
          800: "#661429",
          900: "#330a14"
        },
      },
      fontFamily: {
        header: ["Monteserrat", ...defaultTheme.fontFamily.sans],
        body: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
