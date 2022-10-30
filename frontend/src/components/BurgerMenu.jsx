import React, { useState } from "react";
import PictoBeer from "./PictoBeer";
import PictoBeerAnimation from "./PictoBeerAnimation";

function BurgerMenu() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  return (
    <div>
      {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}

      {isBurgerMenuOpen && <PictoBeerAnimation onClick={handleDisplayBurger} />}
    </div>
  );
}

export default BurgerMenu;
