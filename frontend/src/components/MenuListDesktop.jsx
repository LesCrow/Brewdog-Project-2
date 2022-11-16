import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import MenuLinks from "./MenuLinks";

const MenuListDesktop = forwardRef((_, ref) => {
  return (
    <motion.nav ref={ref} className="bg-bargreen relative w-1/3 ">
      <motion.div
        animate={{ right: -300, rotate: "-15deg", top: -200 }}
        initial={{ right: 0 }}
        transition={{ type: "spring" }}
        className="absolute  bg-bargreen w-[900px] h-[1380px] border-r-8 border-black"
      />
      <motion.ul className="relative">
        <MenuLinks />
      </motion.ul>
    </motion.nav>
  );
});

export default MenuListDesktop;
