import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
      <ShoppingCart />
      <div className="bg-navBlue h-50 flex justify-between items-center ">
        {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
        {isBurgerMenuOpen && (
          <PictoBeerAnimation onClick={handleDisplayBurger} />
        )}
        {/* Logo */}
        <Link to="/">
          <img
            className="h-28 w-24 mt-6 mb-6 ml-4"
            src="src/assets/logo_brewdog.png"
            alt="brewdog logo"
          />
        </Link>

        {/* Display search bar */}
        <div className="flex  w-[15%] mr-10 ">
          <img
            onClick={handleDisplaySearchBar}
            className="h-8 w-8"
            src="src/assets/loupe.png"
            alt="icone loupe"
          />
          {isSearchBarActive && <SearchBar />}

          {/* Shopping cart icon */}
          {!isSearchBarActive && (
            <div>
              <img
                className="h-8 w-8 ml-5"
                src="src/assets/panier.png"
                alt="icone panier"
                onClick={showHideCart}
              />
              {cartItems.length > 0 && (
                <div>
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
