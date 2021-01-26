// import Alert from "../components/alert";
import Footer from "./footer";
import Meta from "./meta";
import Hentry from "./Hentry";
import Hcard from "./Hcard";
import Menu from "./Menu";
import { MenuToggle } from "./MenuToggle";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Alert at page top + footer

export default function Layout({ preview, children, title, noHentry }) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <Meta title={title} />
      <div className="min-h-screen z-10 relative bg-gray-dark pb-16">
        {/* <Alert preview={preview} /> */}
        <motion.nav className="z-30 sticky ml-auto right-0 top-8 md:top-12 w-16 md:w-24">
          <Menu open={open} onClose={closeModal} />
          {!open && (
            <MenuToggle
              toggle={() => setOpen((o) => !o)}
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
