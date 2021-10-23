import Document, { Html, Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  render() {
    const styles = flush();
    return (
      <>
        <Html lang="en">
          <Head>
            <link
              rel="alternate"
              type="application/rss+xml"
              title="Clara Le | Blog"
              href="https://clarale.com/rss.xml"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
