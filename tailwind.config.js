// Add typeface via https://fontsource.github.io/search-directory/#inconsolata
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        accent: "#ffe700",
        white: "#E5E7EB",
        black: "#0f0f0f",
        gray: {
          dark: "#171717",
        },
        red: "#B91C1C",
        blue: "##93C5FD",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        // TODO replace sans serif with better font
        serif: ["Vesper\\ Libre", ...defaultTheme.fontFamily.serif],
        // sans: ['Vesper\\ Libre', ...defaultTheme.fontFamily.sans],
      },
      // TODO select a fewer number of font sizes and harmonize
      fontSize: {
        xs: ".75rem",
        lg: "1.125rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
