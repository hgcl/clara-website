import NextLink from "next/link";

export default function Link({ href, as, children, className }) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a className={`underline ${className}`} href={href}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a className={`underline ${className}`}>{children}</a>
    </NextLink>
  );
}
