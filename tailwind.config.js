const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#538A3E",
        },
        white: {
          background: "#f4f4f4",
          default: "#fff",
        },
        gray: {
          default: "#585B5C",
        },
        red: {
          default: "#F94646",
        },
      },
      fontFamily: {
        indie: ["var(--font-indie)", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
