import NextLink from "next/link";

export default function Link({ href, as, children, className }) {
  const isExternal = href.startsWith("http");
  const linkstyle = {
    "font-variant-caps": "all-small-caps",
  };
  if (isExternal) {
    return (
      <a className={`${className} tracking-wide`} href={href} style={linkstyle}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a className={`${className} tracking-wide`} style={linkstyle}>
        {children}
      </a>
    </NextLink>
  );
}
