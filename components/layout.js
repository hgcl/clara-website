import Alert from "./Alert";
import Footer from "../components/Footer";
import Meta from "../components/meta";
import Menu from "../components/Menu";

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
