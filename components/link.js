import NextLink from "next/link";

export default function Link({ href, as, children, className }) {
  const isExternal = href.startsWith("http");
  const linkstyle = {
    "font-variant-caps": "all-small-caps",
  };
  if (isExternal) {
    return (
      <a className={`${className}`} href={href} style={linkstyle}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a className={`${className}`} style={linkstyle}>
        {children}
      </a>
    </NextLink>
  );
}
