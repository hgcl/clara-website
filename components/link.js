import NextLink from "next/link";

export default function Link({ href, as, children, className }) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        className={`${className} tracking-wide all-small-caps`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a className={`${className} tracking-wide all-small-caps`}>{children}</a>
    </NextLink>
  );
}
