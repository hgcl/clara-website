// Default tailwindcss config fallback at "tailwindcss/stubs/defaultConfig.stub.js"
// Default spacing scale: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
    },
    extend: {
      colors: {
        accent: "#ef4f37",
        white: "#E5E7EB",
        black: "#0f0f0f",
        gray: {
          regular: "#96989e",
          dark: "#171717",
        },
      },
      fontFamily: {
        serif: ["Vesper\\ Libre", ...defaultTheme.fontFamily.serif],
        sans: ["Source\\ Sans\\ Pro", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      inset: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
      },
      lineHeight: {
        tight: 1.2,
      },
      spacing: {
        28: "7rem",
      },
    },
  },
};
