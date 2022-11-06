import React, { useState } from "react";
import SearchBar from "../SearchBar";
import PictoBeer from "../PictoBeer";
import PictoBeerAnimation from "../PictoBeerAnimation";

function Header() {
  // Display search bar
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  function handleDisplaySearchBar() {
    setIsSearchBarActive(!isSearchBarActive);
  }

  // Display menu burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div>
      <div className="bg-navBlue h-20 flex justify-around items-center">
        {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
        {isBurgerMenuOpen && (
          <PictoBeerAnimation onClick={handleDisplayBurger} />
        )}

        {/* {width < 768 && isBurgerMenuOpen && <MenuListMobile />}
        {width > 768 && isBurgerMenuOpen && <MenuListDesktop ref={ref} />} */}

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

export default Header;
