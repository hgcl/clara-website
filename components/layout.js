import Alert from "../components/alert";
// import Footer from "./footer";
import Meta from "./meta";
import Hentry from "./Hentry";
import Hcard from "./Hcard";
import Navbar from "./Navbar";

export default function Layout({
  children,
  title,
  noHentry,
  showAlert,
  noBottomMargin,
}) {
  const bottomMargin = noBottomMargin ? "" : "mb-16 md:mb-32";
  return (
    <>
      <Meta title={title} />
      <div className={`min-h-screen z-10 relative ${bottomMargin}`}>
        <Alert showAlert={showAlert} />
        <Navbar />
        <Hentry>
          <Hcard />
          {!noHentry && <main>{children}</main>}
        </Hentry>
        {noHentry && <main>{children}</main>}
      </div>
      {/* <Footer /> */}
    </>
  );
}
