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
    <div>
      <div className="bg-nav-blue h-20 flex justify-around items-center">
        {/* Burger menu opener */}
        <BurgerMenu />

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
