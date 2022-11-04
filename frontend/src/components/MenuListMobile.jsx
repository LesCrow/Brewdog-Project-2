import React from "react";
import { motion } from "framer-motion";
import MenuLinks from "./MenuLinks";

function MenuListMobile() {
  return (
    <motion.nav
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, type: "just" }}
      className="bg-navBlue-400"
    >
      <ul>
        <MenuLinks />
      </ul>
    </motion.nav>
  );
}

export default MenuListMobile;
