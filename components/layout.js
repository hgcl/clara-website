// import Alert from "../components/alert";
import Footer from "./footer";
import Meta from "./meta";
// import Menu from "./Menu-v1";
import Hcard from "./Hcard";
import Menu from "./Menu";
import { MenuToggle } from "./MenuToggle";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Alert at page top + footer

export default function Layout({ preview, children, title }) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <Meta title={title} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <motion.nav className="border-2 border-orange-500 z-50 sticky top-8 right-0 w-16 ml-auto">
          <MenuToggle
            toggle={() => setOpen((o) => !o)}
            className="border-2 border-yellow-500"
          />
          <Menu open={open} onClose={closeModal} />
        </motion.nav>
        <Hcard />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
