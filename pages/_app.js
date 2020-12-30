// Typeface: Vesper Libre
import "fontsource-vesper-libre/400.css";

// Typeface: Source Sans Pro
import "fontsource-source-sans-pro/400.css";
import "fontsource-source-sans-pro/400-italic.css";
import "fontsource-source-sans-pro/700.css";
import "fontsource-source-sans-pro/700-italic.css";

import "fontsource-vesper-libre";
import "fontsource-source-sans-pro";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
