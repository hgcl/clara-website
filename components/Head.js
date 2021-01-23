export default function Head({ children }) {
  return (
    <>
      <title>Clara Le</title>
      {/* <meta property="og:image" content={post.ogImage.url} /> */}
      {/* Webmentions */}
      <link
        rel="webmention"
        href="https://webmention.io/clarale.com/webmention"
      />
      <link rel="pingback" href="https://webmention.io/clarale.com/xmlrpc" />
      {/* Authorization endpoint and set up microsub endpoint */}
      <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
      <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
      <link rel="microsub" href="https://aperture.p3k.io/microsub/591" />
    </>
  );
}
