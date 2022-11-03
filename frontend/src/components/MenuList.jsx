import React from "react";
import { motion } from "framer-motion";

function MenuList() {
  return (
    <motion.nav
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: "just" }}
      className="bg-nav-blue "
    >
      <ul className="text-white flex flex-col h-screen justify-around items-center">
        <li>
          <p className="text-2xl">THE SHOP</p>
        </li>
        <li>
          <p className="text-3xl">THE BREWERY</p>
        </li>
        <li>
          <p className="text-4xl">CONTACT US</p>
        </li>
      </ul>
    </motion.nav>
  );
}

export default MenuList;
