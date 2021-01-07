// import Alert from "../components/alert";
import Footer from "./footer";
import Meta from "./meta";
import Menu from "./Menu";
import Hcard from "../components/Hcard";

// Alert at page top + footer

export default function Layout({ preview, children, title }) {
  return (
    <>
      <Meta title={title} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Menu />
        <Hcard />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
