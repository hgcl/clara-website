import Alert from "../components/alert";
// import Footer from "./footer";
import Meta from "./meta";
import Hentry from "./Hentry";
import Hcard from "./Hcard";
import Menu from "./Menu";
import { MenuToggle } from "./MenuToggle";
import React, { useState } from "react";

export default function Layout({
  children,
  title,
  noHentry,
  showAlert,
  noBottomMargin,
}) {
  const bottomMargin = noBottomMargin ? "" : "mb-16 md:mb-32";
  const [open, setOpen] = useState(false);
  return (
    <>
      <Meta title={title} />
      <div className={`min-h-screen z-10 relative ${bottomMargin}`}>
        <Alert showAlert={showAlert} />
        <Menu open={open} setOpen={setOpen} />
        {!open && (
          <MenuToggle toggle={() => setOpen(!open)} className="w-screen" />
        )}
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
