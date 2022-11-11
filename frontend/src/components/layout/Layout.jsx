import { React, useState, useRef } from "react";
import PropTypes from "prop-types";
import useWindowSize from "../../hooks/useWindowDimension";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Header from "./Header";
import Footer from "./Footer";
import MenuListMobile from "../header/MenuMobile";
import MenuListDesktop from "../header/MenuDesktop";

function Layout({ children }) {
  // Hook to get window size
  const size = useWindowSize();
  const { width } = size;

  // Display menu burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  // Hook to close burger menu when clicked outside
  const ref = useRef();
  useOnClickOutside(ref, () => setIsBurgerMenuOpen(false));

  return (
    <div>
      <Header
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleDisplayBurger={handleDisplayBurger}
      />
      {width < 768 && isBurgerMenuOpen && <MenuListMobile />}
      {width > 768 && isBurgerMenuOpen && <MenuListDesktop ref={ref} />}
      {!isBurgerMenuOpen && <main>{children}</main>}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.bool.isRequired,
};

export default Layout;
