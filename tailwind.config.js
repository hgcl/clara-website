// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true /* enable !important tag to overwrite the Tailwind CSS Typography default */,
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
      current: "currentColor",
      accent: {
        dark: "#ab3535",
        DEFAULT: "#e83737",
        light: "#fc4444",
      },
      gray: {
        darkest: "#131315",
        dark: "#1c1c1f",
        DEFAULT: "#54545d",
        light: "#E3E3E3",
        lightest: "#f5f5f6",
      },
    },
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
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
              paddingTop: "3px",
            },
            "ul > li::before": {
              backgroundColor: "currentColor",
              marginTop: "1px",
            },
            blockquote: null,
            "blockquote p:first-of-type::before": null,
            "blockquote p:last-of-type::after": null,
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
