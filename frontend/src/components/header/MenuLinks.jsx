import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../../utils/constants";

function MenuLinks({ isBurgerMenuOpen }) {
  return (
    <div className="w-full h-screen  flex flex-col justify-around items-center text-white text-3xl">
      {navLinks.map((link, index) => (
        <motion.li
          style={{ fontSize: `${30 + index * 10}px` }}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, type: "spring" }}
          onClick={!isBurgerMenuOpen}
        >
          <Link to={link.to}>{link.page}</Link>
        </motion.li>
      ))}
    </div>
  );
}

MenuLinks.propTypes = {
  isBurgerMenuOpen: PropTypes.bool.isRequired,
};

export default MenuLinks;
