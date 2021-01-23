import Head from "next/head";
// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta({ title }) {
  return (
    <Head>
      <title>{title && `${title} | `}Clara Le</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {/* <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      /> 
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />*/}
      {/* Webmentions endpoint as follows: */}
      <link
        rel="webmention"
        href="https://webmention.io/clarale.com/webmention"
      />
      <link rel="pingback" href="https://webmention.io/clarale.com/xmlrpc" />
      {/* Authorization endpoint and set up microsub endpoint: */}
      <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
      <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
      <link rel="microsub" href="https://aperture.p3k.io/microsub/591" />
    </Head>
  );
}
