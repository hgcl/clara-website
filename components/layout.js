import Alert from "./alert";
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
  const styles = (
    <style jsx>{`
      .page-bottom {
        margin-bottom: calc(var(--margin-bottom-default) * 1.5);
      }
      .no-bottom-margin {
        margin-bottom: 0;
      }
    `}</style>
  );
  return (
    <>
      <Meta title={title} />
      <div className={`page-bottom ${noBottomMargin && "no-bottom-margin"}`}>
        {styles}
        <Alert showAlert={showAlert} />
        <Navbar />
        <Hentry>
          <Hcard />
          {!noHentry && <main>{children}</main>}
        </Hentry>
        {noHentry && <main>{children}</main>}
      </div>
    </>
  );
}
