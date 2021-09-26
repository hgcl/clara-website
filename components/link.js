import NextLink from "next/link";

export default function Link({
  href,
  as,
  children,
  className,
  variant,
  ...props
}) {
  const linkStyles = (
    <style jsx>{`
      a {
        font-family: "SourceSansProSmallCaps";
        font-variant-caps: all-small-caps;
      }
      a:hover,
      a:focus {
        color: var(--color-accent-default);
      }
      .heading-style {
        font-family: var(--font-family-heading);
        text-transform: capitalize;
        font-variant-caps: normal;
      }
    `}</style>
  );
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        className={`${variant === "heading" && "heading-style"}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {linkStyles}
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a className={`${variant === "heading" && "heading-style"}`} {...props}>
        {linkStyles}
        {children}
      </a>
    </NextLink>
  );
}
