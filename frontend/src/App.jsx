import { ToastContainer } from "react-toastify";
import React, { useRef, useState } from "react";
import Header from "@components/Header";
import MenuListDesktop from "@components/MenuListDesktop";
import MenuListMobile from "@components/MenuListMobile";
import Brewery from "./components/Brewery";

import useWindowSize from "./hooks/useWindowDimension";
import useOnClickOutside from "./hooks/useOnClickOutside";
import "./App.css";
import Age from "./components/Age";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsBurgerMenuOpen(false));

  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const size = useWindowSize();
  const { width } = size;

  return (
    <div>
      <Header
        handleDisplayBurger={handleDisplayBurger}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />

      {width < 768 && isBurgerMenuOpen && <MenuListMobile />}
      {width > 768 && isBurgerMenuOpen && <MenuListDesktop ref={ref} />}
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <Brewery />

      <ToastContainer />
    </div>
  );
}

export default App;
