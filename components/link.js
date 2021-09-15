import NextLink from "next/link";

export default function Link({
  href,
  as,
  children,
  className,
  variant,
  ...props
}) {
  const headingLinkStyles = (
    <style jsx>{`
      a {
        text-transform: capitalize;
      }
      a:hover,
      a:focus {
        color: var(--color-accent-default);
      }
    `}</style>
  );
  const otherLinkStyles = (
    <style jsx>{`
      a {
        font-family: "SourceSansProSmallCaps";
        font-variant-caps: all-small-caps;
      }
      a:hover,
      a:focus {
        color: var(--color-accent-default);
      }
    `}</style>
  );
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {headingLinkStyles}
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a {...props}>
        {otherLinkStyles}
        {children}
      </a>
    </NextLink>
  );
}
