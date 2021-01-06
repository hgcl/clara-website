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
      ? `capitalize ${className}`
      : `${className} all-small-caps transition duration-500 hover:text-accent focus:text-accent`;
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
