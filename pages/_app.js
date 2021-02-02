// Typeface: Vesper Libre
import "fontsource-vesper-libre/400.css";

// Typeface: Source Sans Pro
import "fontsource-source-sans-pro/400.css";
import "fontsource-source-sans-pro/400-italic.css";
import "fontsource-source-sans-pro/700.css";
import "fontsource-source-sans-pro/700-italic.css";

import "../styles/index.css";
import { MDXProvider } from "@mdx-js/react";
import WaffleIcon from "../public/icons/WaffleIcon";

const mdComponents = {
  hr: () => <WaffleIcon className="mx-auto my-16" />,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
