import React from "react";
import { motion } from "framer-motion";
import { menuLinks } from "../../utils/constants";

function MenuLinks() {
  return (
    <div className="w-full h-screen  flex flex-col justify-around items-center text-white text-3xl">
      {menuLinks.map((link, index) => (
        <motion.li
          style={{ fontSize: `${30 + index * 10}px` }}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, type: "spring" }}
        >
          {link}
        </motion.li>
      ))}
    </div>
  );
}

export default MenuLinks;
