import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Age from "./components/Age";
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
        {/* Si l'url ne corresond à rien de déclaré */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
