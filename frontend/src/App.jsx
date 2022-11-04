import Header from "@components/Header";
import MenuListDesktop from "@components/MenuListDesktop";
import React, { useRef, useState } from "react";

import "./App.css";
import useOnClickOutside from "./hooks/useOnClickOutside";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsBurgerMenuOpen(false));

  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div>
      <Header
        handleDisplayBurger={handleDisplayBurger}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />

      {isBurgerMenuOpen && <MenuListDesktop ref={ref} />}
    </div>
  );
}

export default App;
