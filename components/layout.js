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
        <motion.nav className="z-50 sticky ml-auto right-0 top-8 md:top-12 w-16 md:w-24">
          <MenuToggle toggle={() => setOpen((o) => !o)} />
          <Menu open={open} onClose={closeModal} />
        </motion.nav>
        <Hcard />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
