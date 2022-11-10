import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import Home from "./components/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Age from "./components/Age";
import Beers from "./components/Beers";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <ToastContainer />
      <Home />
      <Beers />
    </div>
  );
}

export default App;
