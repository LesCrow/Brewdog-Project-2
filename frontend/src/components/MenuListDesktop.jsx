import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import MenuLinks from "./MenuLinks";

const MenuListDesktop = forwardRef((_, ref) => {
  return (
    <motion.nav ref={ref} className="bg-nav-blue relative w-1/3 h-[100vh] ">
      <motion.div
        animate={{ right: -300, rotate: "-20deg", top: 0 }}
        initial={{ right: 0 }}
        transition={{ type: "spring" }}
        className="absolute  bg-nav-blue w-[3000px] h-[200vh] border-r-8 border-black"
      />
      <motion.ul className="relative z-10">
        <MenuLinks />
      </motion.ul>
    </motion.nav>
  );
});

export default MenuListDesktop;
