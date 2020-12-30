export default function Figure({ children }) {
  // TODO change mt-2 to something else once spacing scale has been fixed
  return <figure className="mt-2 mb-8">{children}</figure>;
}
