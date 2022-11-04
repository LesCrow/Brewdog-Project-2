import React, { useRef, useState } from "react";
import Header from "@components/Header";
import MenuListDesktop from "@components/MenuListDesktop";
import MenuListMobile from "@components/MenuListMobile";
import useWindowSize from "./hooks/useWindowDimension";
import useOnClickOutside from "./hooks/useOnClickOutside";
import "./App.css";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsBurgerMenuOpen(false));

  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const size = useWindowSize();
  const { width } = size.width;

  return (
    <div>
      <Header
        handleDisplayBurger={handleDisplayBurger}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />

      {width < 768 && isBurgerMenuOpen && <MenuListMobile />}
      {width > 768 && isBurgerMenuOpen && <MenuListDesktop ref={ref} />}
    </div>
  );
}

export default App;
