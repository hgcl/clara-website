import NextLink from "next/link";

export default function Link({ href, as, children, className, variant }) {
  const isExternal = href.startsWith("http");
  const linkStyles =
    variant === "heading"
      ? `capitalize ${className}`
      : `${className} all-small-caps`;
  if (isExternal) {
    return (
      <a
        className={linkStyles}
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
      <a className={linkStyles}>{children}</a>
    </NextLink>
  );
}
