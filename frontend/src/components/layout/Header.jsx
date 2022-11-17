import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiShoppingCartLine } from "react-icons/ri";

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

      <div className="bg-navBlue h-50 flex justify-around items-center ">
        {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
        {isBurgerMenuOpen && (
          <PictoBeerAnimation onClick={handleDisplayBurger} />
        )}
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Display search bar */}
        <div className="flex justify-between  w-20">
          <img
            onClick={handleDisplaySearchBar}
            className="h-8 w-8"
            src="src/assets/loupe.png"
            alt="icone loupe"
          />
          {isSearchBarActive && <SearchBar />}

          {/* Shopping cart icon */}
          {!isSearchBarActive && (
            <div className=" flex flex-col justify-center items-center">
              <RiShoppingCartLine onClick={showHideCart} className="h-9 w-9 " />
              {cartItems.length > 0 && (
                <div className="fixed z-10 ml-1 mb-10">
                  <span>{cartItems.length}</span>
                </div>
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
