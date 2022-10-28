import React, { useState } from "react";
import PictoBeer from "./PictoBeer";
import PictoBeer2 from "./PictoBeer2";
import SearchBar from "./SearchBar";

function Header() {
  // constants declaration
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  // function declaration
  function handleDisplaySearchBar() {
    setIsSearchBarActive(!isSearchBarActive);
  }
  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    // Burger menu opener
    <div className="bg-nav-blue h-20 flex justify-between items-center">
      {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
      {isBurgerMenuOpen && <PictoBeer2 onClick={handleDisplayBurger} />}

      {/* Logo */}
      <img
        className=" logo h-24 w-20 mt-8"
        src="src/assets/logo_brewdog.png"
        alt="brewdog logo"
      />

      {/* Display search bar */}
      <div className="flex  mr-2">
        <img
          onClick={handleDisplaySearchBar}
          className="h-8 w-8"
          src="src/assets/loupe.png"
          alt="icone loupe"
        />
        {isSearchBarActive && <SearchBar />}
        <img
          className="h-8 w-8 "
          src="src/assets/panier.png"
          alt="icone panier"
        />
      </div>
    </div>
  );
}

export default Header;
