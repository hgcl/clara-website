import Alert from "../components/alert";
import Footer from "./footer";
import Meta from "./meta";
import Hentry from "./Hentry";
import Hcard from "./Hcard";
import Menu from "./Menu";
import { MenuToggle } from "./MenuToggle";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Layout({ children, title, noHentry, showAlert }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Meta title={title} />
      <div className="min-h-screen z-10 relative pb-16 md:pb-32">
        <Alert showAlert={showAlert} />
        <motion.nav className="z-40 sticky ml-auto right-0 top-8 md:top-12 w-16 md:w-24">
          <Menu open={open} setOpen={setOpen} />
          {!open && (
            <MenuToggle
              toggle={() => setOpen(!open)}
              className="absolute transition duration-300 transform hover:-rotate-90 opacity-75 hover:opacity-100"
            />
          )}
        </motion.nav>
        <Hentry>
          <Hcard />
          {!noHentry && <main>{children}</main>}
        </Hentry>
        {noHentry && <main>{children}</main>}
      </div>
      <Footer />
    </>
  );
}
