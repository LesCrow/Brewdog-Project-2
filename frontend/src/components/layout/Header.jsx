import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
      <ShoppingCart />
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
          <img
            onClick={handleDisplaySearchBar}
            className="h-8 w-8 md:h-14 md:w-14"
            src="src/assets/loupe.png"
            alt="icone loupe"
          />
          {isSearchBarActive && <SearchBar />}

          {/* Shopping cart icon */}
          {!isSearchBarActive && (
            <div>
              <img
                className="h-8 w-8 md:h-14 md:w-14 ml-5"
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
