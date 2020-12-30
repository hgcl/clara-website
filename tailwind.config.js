// Add typeface via https://fontsource.github.io/search-directory/
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
    },
    extend: {
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        accent: "#ef4f37",
        white: "#E5E7EB",
        black: "#0f0f0f",
        gray: {
          regular: "#96989e",
          dark: "#171717",
        },
        red: "#B91C1C",
        blue: "#93C5FD",
      },
      fontFamily: {
        // TODO replace sans serif with better font
        serif: ["Vesper\\ Libre", ...defaultTheme.fontFamily.serif],
        sans: ["Source\\ Sans\\ Pro", ...defaultTheme.fontFamily.sans],
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
      inset: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "48px",
        "3xl": "56px",
        "4xl": "64px",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      spacing: {
        2: "2px",
        4: "4px",
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "48px",
        "3xl": "56px",
        "4xl": "64px",
        28: "7rem",
      },
    },
  },
};
