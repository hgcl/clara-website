// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

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
      accent: {
        dark: "#ab3535",
        DEFAULT: "#CA3B3B",
      },
      gray: {
        darkest: "#131315",
        dark: "#1c1c1f",
        DEFAULT: "#54545d",
        light: "#E3E3E3",
        lightest: "#f5f5f6",
      },
    },
    extend: {
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      screens: {
        xs: "361px",
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
