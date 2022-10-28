import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

import SearchBar from "./SearchBar";

function Header() {
  // constants declaration
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);

  // function declaration
  function handleDisplaySearchBar() {
    setIsSearchBarActive(!isSearchBarActive);
  }

  return (
    <div className="bg-nav-blue h-20 flex justify-between items-center">
      {/* Burger menu opener */}
      <BurgerMenu />

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
          className="h-8 w-8 mr-4"
          src="src/assets/loupe.png"
          alt="icone loupe"
        />
        {isSearchBarActive && <SearchBar />}

        {/* Shopping cart icon */}
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
