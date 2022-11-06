import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  // const ref = useRef();
  // useOnClickOutside(ref, () => setIsBurgerMenuOpen(false));

  // Hook to get window size
  // const size = useWindowSize();
  // const { width } = size;

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.bool.isRequired,
};

export default Layout;
