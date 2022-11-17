import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ContactForm from "./components/contact/ContactForm";
import Brewery from "./pages/Brewery";
import Layout from "./components/layout/Layout";
import CartContextProvider from "./context/Cart/CartState";

function App() {
  return (
    <CartContextProvider>
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
    </CartContextProvider>
  );
}

export default App;
