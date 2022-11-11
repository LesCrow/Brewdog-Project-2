import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brewery from "./pages/Brewery";
import Age from "./components/pop-up/Age";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <BrowserRouter>
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/brewery" element={<Brewery />} />
        {/* Si l'url ne corresond à rien de déclaré */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
