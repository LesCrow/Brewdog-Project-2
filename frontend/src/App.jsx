import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brewery from "./pages/Brewery";
import ContactForm from "./components/contact/ContactForm";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/brewery" element={<Brewery />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Si l'url ne corresond à rien de déclaré */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
