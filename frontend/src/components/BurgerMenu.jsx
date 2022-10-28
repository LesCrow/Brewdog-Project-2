import React, { useState } from "react";
import MenuList from "./MenuList";

import PictoBeer from "./PictoBeer";
import PictoBeer2 from "./PictoBeer2";

function BurgerMenu() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  return (
    <div>
      {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
      <div className="border-r-2">
        {isBurgerMenuOpen && <PictoBeer2 onClick={handleDisplayBurger} />}

        {isBurgerMenuOpen && <MenuList />}
      </div>
    </div>
  );
}

export default BurgerMenu;
