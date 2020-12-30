import Alert from "./Alert";
import Footer from "./Footer";
import Meta from "./meta";
import Menu from "./Menu";

// Alert at page top + footer

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
