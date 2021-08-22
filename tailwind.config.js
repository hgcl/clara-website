// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Vesper\\ Libre", ...defaultTheme.fontFamily.serif],
      sans: ["Source\\ Sans\\ Pro", "Roboto", ...defaultTheme.fontFamily.sans],
      smallcaps: [
        "SourceSansProSmallCaps",
        "Source\\ Sans\\ Pro",
        "Roboto",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    colors: {
      gray: colors.warmGray,
      red: colors.red,
    },
    extend: {
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: null,
            a: null,
            h1: { color: null },
            h2: { color: null },
            h3: { color: null },
            h4: { color: null },
            "ol > li::before": {
              color: "inherit",
            },
            "ul > li::before": {
              backgroundColor: "currentColor",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
