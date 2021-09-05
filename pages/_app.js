// Typeface: Vesper Libre
import "fontsource-vesper-libre/400.css";

// Typeface: Source Sans Pro
import "fontsource-source-sans-pro/400.css";
import "fontsource-source-sans-pro/400-italic.css";
import "fontsource-source-sans-pro/700.css";
import "fontsource-source-sans-pro/700-italic.css";

import splitbee from "@splitbee/web";
import "tailwindcss/tailwind.css";
import "../styles/index.css";
import { MDXProvider } from "@mdx-js/react";
import WaffleIcon from "../public/icons/WaffleIcon";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

// Editing MDX shortcodes: https://css-tricks.com/working-with-mdx-custom-elements-and-shortcodes/
const mdComponents = {
  hr: () => <WaffleIcon className="mx-auto my-16" />,
  strong: (props) => <span className="all-small-caps" {...props} />,
  a: (props) => (
    <a
      {...props}
      className="all-small-caps focus:text-accent hover:text-accent"
    />
  ),
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
