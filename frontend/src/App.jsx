import { ToastContainer } from "react-toastify";
import React, { useRef, useState } from "react";
import Header from "@components/Header";
import MenuListDesktop from "@components/MenuListDesktop";
import MenuListMobile from "@components/MenuListMobile";
import Beers from "@components/Beers";
import ContactForm from "@components/ContactForm";
import Brewery from "./components/Brewery";
import useWindowSize from "./hooks/useWindowDimension";
import useOnClickOutside from "./hooks/useOnClickOutside";

import Footer from "./components/Footer";
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
      {/* {!isVerified && <Age setIsVerified={setIsVerified} />}
      <Brewery />

      <ToastContainer /> */}
      <Beers />
      <div className="w-screen bg-black min-h-screen flex relative items-center align-middle justify-center">
        <ContactForm />{" "}
      </div>
      <div className="w-screen flex bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;
