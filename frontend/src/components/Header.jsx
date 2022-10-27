import React, { useState } from "react";
import SearchBar from "./SearchBar";

function Header() {
  const [isSearchBar, setIsSearchBar] = useState(false);

  function handleDisplaySearchBar() {
    setIsSearchBar(!isSearchBar);
  }

  return (
    <div className="bg-nav-blue h-20 flex justify-between items-center">
      <img
        className=" h-14 ml-2"
        src="src/assets/chopeBiereAnimation1.png"
        alt="icone menu burger"
      />
      <img
        className="h-24 w-20 mt-8"
        src="src/assets/logo_brewdog.png"
        alt="brewdog logo"
      />
      <div className="flex  mr-2">
        <img
          onClick={handleDisplaySearchBar}
          className="h-8 w-8"
          src="src/assets/loupe.png"
          alt="icone loupe"
        />
        {isSearchBar ? <SearchBar /> : <div />}

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
