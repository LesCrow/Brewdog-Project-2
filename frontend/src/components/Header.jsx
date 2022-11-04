import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import PictoBeer from "./PictoBeer";
import PictoBeerAnimation from "./PictoBeerAnimation";

function Header({
  isBurgerMenuOpen,

  handleDisplayBurger,
}) {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  function handleDisplaySearchBar() {
    setIsSearchBarActive(!isSearchBarActive);
  }

  return (
    <div>
      <div className="bg-navBlue h-20 flex justify-around items-center">
        {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
        {isBurgerMenuOpen && (
          <PictoBeerAnimation onClick={handleDisplayBurger} />
        )}

        {/* Logo */}
        <img
          className="h-24 w-20 mt-8 ml-4"
          src="src/assets/logo_brewdog.png"
          alt="brewdog logo"
        />

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
            <img
              className="h-8 w-8 "
              src="src/assets/panier.png"
              alt="icone panier"
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
