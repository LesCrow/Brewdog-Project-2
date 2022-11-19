import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Logo from "../global/Logo";
import SearchBar from "../header/SearchBar";
import PictoBeer from "../header/PictoBeer";
import PictoBeerAnimation from "../header/PictoBeerAnimation";
import CartContext from "../../context/Cart/CartContext";
import ShoppingCart from "../shop/ShoppingCart";

function Header({ isBurgerMenuOpen, handleDisplayBurger }) {
  const { cartItems, showHideCart } = useContext(CartContext);
  // Display search bar
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  function handleDisplaySearchBar() {
    setIsSearchBarActive(!isSearchBarActive);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <ShoppingCart />
      </div>

      <div className="bg-navBlue h-40 md:h-52 flex justify-around items-center ml-[-30px]">
        {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
        {isBurgerMenuOpen && (
          <PictoBeerAnimation onClick={handleDisplayBurger} />
        )}
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Display search bar */}
        <div className=" flex items-center">
          <HiMagnifyingGlass
            onClick={handleDisplaySearchBar}
            className="h-8 w-8 md:h-14 md:w-14 md:mr-10"
            src="src/assets/loupe.png"
            alt="icone loupe"
          />

          {isSearchBarActive && <SearchBar />}

          {/* Shopping cart icon */}
          {!isSearchBarActive && (
            <div className=" flex flex-row justify-center items-center">
              <RiShoppingCartLine
                onClick={showHideCart}
                className="h-9 w-9  md:h-14 md:w-14"
              />
              {cartItems.length > 0 && (
                <motion.div
                  initial={{ y: -400 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.8 }}
                  className="  ml-1 bg-backcolor rounded-full h-6 w-6 flex justify-center font-fun"
                >
                  <motion.span>{cartItems.length}</motion.span>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  isBurgerMenuOpen: PropTypes.bool.isRequired,
  handleDisplayBurger: PropTypes.func.isRequired,
};

export default Header;
