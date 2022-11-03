import Header from "@components/Header";
import MenuList from "@components/MenuList";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div>
      <Header
        handleDisplayBurger={handleDisplayBurger}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />

      {isBurgerMenuOpen && <MenuList />}
    </div>
  );
}

export default App;
