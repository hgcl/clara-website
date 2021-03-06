import NextLink from "next/link";

export default function Link({
  href,
  as,
  children,
  className,
  variant,
  ...props
}) {
  const isExternal = href.startsWith("http");
  const linkStyles =
    variant === "heading"
      ? `${className} capitalize`
      : `${className} all-small-caps`;
  if (isExternal) {
    return (
      <a
        className={linkStyles}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a className={linkStyles} {...props}>
        {children}
      </a>
    </NextLink>
  );
}
