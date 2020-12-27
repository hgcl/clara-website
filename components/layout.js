import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Menu from "../components/menu";

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
