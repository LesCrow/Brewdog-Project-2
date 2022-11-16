import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "../header/SearchBar";
import PictoBeer from "../header/PictoBeer";
import PictoBeerAnimation from "../header/PictoBeerAnimation";
import ShoppingCart from "../ShoppingCart";

function Header({ isBurgerMenuOpen, handleDisplayBurger }) {
  // Display search bar
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [cartsVisibility, setCartsVisible] = useState(false);
  const [productsInCart] = useState([]);
  function handleDisplaySearchBar() {
    setIsSearchBarActive(!isSearchBarActive);
  }
  function HandleDisplayCart() {
    setCartsVisible(!cartsVisibility);
  }

  return (
    <div>
      <ShoppingCart
        HandleDisplayCart={HandleDisplayCart}
        visibility={cartsVisibility}
        products={productsInCart}
      />
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
            <img
              className="h-8 w-8 ml-5"
              src="src/assets/panier.png"
              alt="icone panier"
              onClick={HandleDisplayCart}
            />
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
