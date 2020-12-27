import NextLink from "next/link";

// Code below is a duplicate from Link.js
// TODO Un-duplicate this component
export default function Link({ href, as, children, className }) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a className={`${className}`} href={href}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} as={as}>
      <a className={`${className}`}>{children}</a>
    </NextLink>
  );
}
