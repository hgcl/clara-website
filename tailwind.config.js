// Default tailwindcss config fallback at "tailwindcss/stubs/defaultConfig.stub.js"
// Default spacing scale: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
// Default tailwindcss typography https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindTypography = require("@tailwindcss/typography");

// Funcitons of tailwind typography plugin
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  theme: {
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
    },
    fontFamily: {
      smallcaps: [
        "SourceSansProSmallCaps",
        "Source\\ Sans\\ Pro",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      typography: {
        // Not possible to override p TopMargin without resetting all the sizes / spacings. I chose to override *everything* instead until tailwindcss typography supports different margins.
        DEFAULT: {
          css: {
            color: "#E5E7EB",
          },
        },
        lg: {
          css: [
            {
              fontSize: rem(18),
              lineHeight: round(32 / 18),
              p: {
                // marginTop: em(24, 18),
                marginTop: "0",
                marginBottom: em(24, 18),
              },
              '[class~="lead"]': {
                fontSize: em(22, 18),
                lineHeight: round(32 / 22),
                marginTop: em(24, 22),
                marginBottom: em(24, 22),
              },
              blockquote: {
                marginTop: em(40, 24),
                marginBottom: em(40, 24),
                paddingLeft: em(24, 24),
              },
              h1: {
                fontSize: em(48, 18),
                marginTop: "0",
                marginBottom: em(40, 48),
                lineHeight: round(48 / 48),
              },
              h2: {
                fontSize: em(30, 18),
                marginTop: em(56, 30),
                marginBottom: em(32, 30),
                lineHeight: round(40 / 30),
              },
              h3: {
                fontSize: em(24, 18),
                marginTop: em(40, 24),
                marginBottom: em(16, 24),
                lineHeight: round(36 / 24),
              },
              h4: {
                marginTop: em(32, 18),
                marginBottom: em(8, 18),
                lineHeight: round(28 / 18),
              },
              img: {
                marginTop: em(32, 18),
                marginBottom: em(32, 18),
              },
              video: {
                marginTop: em(32, 18),
                marginBottom: em(32, 18),
              },
              figure: {
                // marginTop: em(32, 18),
                marginTop: em(12, 18),
                marginBottom: em(32, 18),
              },
              "figure > *": {
                marginTop: "0",
                marginBottom: "0",
              },
              "figure figcaption": {
                fontSize: em(16, 18),
                lineHeight: round(24 / 16),
                // marginTop: em(16, 16),
                marginTop: em(8, 16),
              },
              code: {
                fontSize: em(16, 18),
              },
              "h2 code": {
                fontSize: em(26, 30),
              },
              "h3 code": {
                fontSize: em(21, 24),
              },
              pre: {
                fontSize: em(16, 18),
                lineHeight: round(28 / 16),
                marginTop: em(32, 16),
                marginBottom: em(32, 16),
                borderRadius: rem(6),
                paddingTop: em(16, 16),
                paddingRight: em(24, 16),
                paddingBottom: em(16, 16),
                paddingLeft: em(24, 16),
              },
              ol: {
                marginTop: em(24, 18),
                marginBottom: em(24, 18),
                paddingLeft: em(36, 18), // new
              },
              ul: {
                marginTop: em(24, 18),
                marginBottom: em(24, 18),
                paddingLeft: em(36, 18), // new
              },
              li: {
                marginTop: em(12, 18),
                marginBottom: em(12, 18),
              },
              "ol > li": {
                paddingLeft: em(30, 18),
              },
              "ol > li::before": {
                left: "0",
              },
              "ul > li": {
                paddingLeft: em(30, 18),
              },
              "ul > li::before": {
                width: em(6, 18),
                height: em(6, 18),
                top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
                left: em(4, 18),
              },
              "> ul > li p": {
                marginTop: em(16, 18),
                marginBottom: em(16, 18),
              },
              "> ul > li > *:first-child": {
                marginTop: em(24, 18),
              },
              "> ul > li > *:last-child": {
                marginBottom: em(24, 18),
              },
              "> ol > li > *:first-child": {
                marginTop: em(24, 18),
              },
              "> ol > li > *:last-child": {
                marginBottom: em(24, 18),
              },
              "ul ul, ul ol, ol ul, ol ol": {
                marginTop: em(16, 18),
                marginBottom: em(16, 18),
              },
              hr: {
                marginTop: em(56, 18),
                marginBottom: em(56, 18),
              },
              "hr + *": {
                marginTop: "0",
              },
              "h2 + *": {
                marginTop: "0",
              },
              "h3 + *": {
                marginTop: "0",
              },
              "h4 + *": {
                marginTop: "0",
              },
              table: {
                fontSize: em(16, 18),
                lineHeight: round(24 / 16),
              },
              "thead th": {
                paddingRight: em(12, 16),
                paddingBottom: em(12, 16),
                paddingLeft: em(12, 16),
              },
              "thead th:first-child": {
                paddingLeft: "0",
              },
              "thead th:last-child": {
                paddingRight: "0",
              },
              "tbody td": {
                paddingTop: em(12, 16),
                paddingRight: em(12, 16),
                paddingBottom: em(12, 16),
                paddingLeft: em(12, 16),
              },
              "tbody td:first-child": {
                paddingLeft: "0",
              },
              "tbody td:last-child": {
                paddingRight: "0",
              },
            },
            {
              "> :first-child": {
                marginTop: "0",
              },
              "> :last-child": {
                marginBottom: "0",
              },
            },
          ],
        },
        xl: {
          css: [
            {
              fontSize: rem(20),
              lineHeight: round(36 / 20),
              p: {
                // marginTop: em(24, 20),
                marginTop: "0",
                marginBottom: em(24, 20),
              },
              '[class~="lead"]': {
                fontSize: em(24, 20),
                lineHeight: round(36 / 24),
                marginTop: em(24, 24),
                marginBottom: em(24, 24),
              },
              blockquote: {
                marginTop: em(48, 30),
                marginBottom: em(48, 30),
                paddingLeft: em(32, 30),
              },
              h1: {
                fontSize: em(56, 20),
                marginTop: "0",
                marginBottom: em(48, 56),
                lineHeight: round(56 / 56),
              },
              h2: {
                fontSize: em(36, 20),
                marginTop: em(56, 36),
                // marginBottom: em(32, 36),
                marginBottom: em(28, 36),
                lineHeight: round(40 / 36),
              },
              h3: {
                fontSize: em(30, 20),
                marginTop: em(48, 30),
                marginBottom: em(20, 30),
                lineHeight: round(40 / 30),
              },
              h4: {
                marginTop: em(36, 20),
                marginBottom: em(12, 20),
                lineHeight: round(32 / 20),
              },
              img: {
                marginTop: em(40, 20),
                marginBottom: em(40, 20),
              },
              video: {
                marginTop: em(40, 20),
                marginBottom: em(40, 20),
              },
              figure: {
                // marginTop: em(40, 20),
                marginTop: em(12, 20),
                marginBottom: em(40, 20),
              },
              "figure > *": {
                marginTop: "0",
                marginBottom: "0",
              },
              "figure figcaption": {
                fontSize: em(18, 20),
                lineHeight: round(28 / 18),
                marginTop: em(18, 18),
              },
              code: {
                fontSize: em(18, 20),
              },
              "h2 code": {
                fontSize: em(31, 36),
              },
              "h3 code": {
                fontSize: em(27, 30),
              },
              pre: {
                fontSize: em(18, 20),
                lineHeight: round(32 / 18),
                marginTop: em(36, 18),
                marginBottom: em(36, 18),
                borderRadius: rem(8),
                paddingTop: em(20, 18),
                paddingRight: em(24, 18),
                paddingBottom: em(20, 18),
                paddingLeft: em(24, 18),
              },
              ol: {
                marginTop: em(24, 20),
                marginBottom: em(24, 20),
                paddingLeft: em(40, 20), // new
              },
              ul: {
                marginTop: em(24, 20),
                marginBottom: em(24, 20),
                paddingLeft: em(40, 20), // new
              },
              li: {
                marginTop: em(12, 20),
                marginBottom: em(12, 20),
              },
              "ol > li": {
                paddingLeft: em(36, 20),
              },
              "ol > li::before": {
                left: "0",
              },
              "ul > li": {
                paddingLeft: em(36, 20),
              },
              "ul > li::before": {
                width: em(7, 20),
                height: em(7, 20),
                top: `calc(${em(36 / 2, 20)} - ${em(3.5, 20)})`,
                left: em(5, 20),
              },
              "> ul > li p": {
                marginTop: em(16, 20),
                marginBottom: em(16, 20),
              },
              "> ul > li > *:first-child": {
                marginTop: em(24, 20),
              },
              "> ul > li > *:last-child": {
                marginBottom: em(24, 20),
              },
              "> ol > li > *:first-child": {
                marginTop: em(24, 20),
              },
              "> ol > li > *:last-child": {
                marginBottom: em(24, 20),
              },
              "ul ul, ul ol, ol ul, ol ol": {
                marginTop: em(16, 20),
                marginBottom: em(16, 20),
              },
              hr: {
                marginTop: em(56, 20),
                marginBottom: em(56, 20),
              },
              "hr + *": {
                marginTop: "0",
              },
              "h2 + *": {
                marginTop: "0",
              },
              "h3 + *": {
                marginTop: "0",
              },
              "h4 + *": {
                marginTop: "0",
              },
              table: {
                fontSize: em(18, 20),
                lineHeight: round(28 / 18),
              },
              "thead th": {
                paddingRight: em(12, 18),
                paddingBottom: em(16, 18),
                paddingLeft: em(12, 18),
              },
              "thead th:first-child": {
                paddingLeft: "0",
              },
              "thead th:last-child": {
                paddingRight: "0",
              },
              "tbody td": {
                paddingTop: em(16, 18),
                paddingRight: em(12, 18),
                paddingBottom: em(16, 18),
                paddingLeft: em(12, 18),
              },
              "tbody td:first-child": {
                paddingLeft: "0",
              },
              "tbody td:last-child": {
                paddingRight: "0",
              },
            },
            {
              "> :first-child": {
                marginTop: "0",
              },
              "> :last-child": {
                marginBottom: "0",
              },
            },
          ],
        },
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        accent: "#ef4f37",
        accent2: "#a52722",
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
      // gridTemplateColumns: {
      //   'book-grid': 'repeat(auto-fill, minmax(150px, 1fr))',
      // },
      inset: {
        "-10": "-2.5rem",
        "-8": "-2rem",
        "-7": "-1.75rem",
        "-6": "-1.5rem",
        "-5": "-1.25rem",
        "-4": "-1rem",
        "-3": "-0.75rem",
        "-2": "-0.5rem",
        "-1": "-0.25rem",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        40: "9rem",
        48: "10rem",
        56: "11rem",
        64: "12rem",
      },
      lineHeight: {
        tight: 1.2,
      },
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        192: "48rem",
      },
      maxHeight: {
        "1/4": "25%",
      },
      minWidth: {
        "1/4": "25%",
        "1/2": "50%",
      },
      opacity: {
        90: ".9",
      },
      scale: {
        101: "1.01",
      },
      screens: {
        xs: "361px",
      },
      spacing: {
        "2px": "2px",
        28: "7rem",
        36: "9rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
      },
      strokeWidth: {
        6: "6",
      },
    },
  },
  plugins: [tailwindTypography],
};
