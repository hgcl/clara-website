// Typeface: Vesper Libre
import "fontsource-vesper-libre/400.css";

// Typeface: Source Sans Pro
import "fontsource-source-sans-pro/400.css";
import "fontsource-source-sans-pro/400-italic.css";
import "fontsource-source-sans-pro/700.css";
import "fontsource-source-sans-pro/700-italic.css";

import splitbee from "@splitbee/web";
import "../styles/preflight.css";
import "../styles/global.css";
import { MDXProvider } from "@mdx-js/react";
import WaffleIcon from "../public/icons/WaffleIcon";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

// Editing MDX shortcodes: https://css-tricks.com/working-with-mdx-custom-elements-and-shortcodes/
const mdComponents = {
  // eslint-disable-next-line react/display-name
  hr: () => <WaffleIcon />,
  strong: (props) => <span {...props} />,
  a: (props) => <a {...props} />,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
