import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  // Display menu burger
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  // const ref = useRef();
  // useOnClickOutside(ref, () => setIsBurgerMenuOpen(false));

  function handleDisplayBurger() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  // Hook to get window size
  // const size = useWindowSize();
  // const { width } = size;

  return (
    <div>
      <Header
        handleDisplayBurger={handleDisplayBurger}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.bool.isRequired,
};

export default Layout;
