// import { ToastContainer } from "react-toastify";
import React from "react";

import PageBeers from "./components/PageBeers";

// import Beers from "@components/Beers";
// import ContactForm from "@components/ContactForm";
// import Brewery from "./components/Brewery";
//

// import Footer from "./components/Footer";
// import Age from "./components/Age";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      <PageBeers />
      {/* <Header
        handleDisplayBurger={handleDisplayBurger}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />

     
      
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <Brewery />

      <ToastContainer />
      <Beers />
      <div className="w-screen bg-black min-h-screen flex relative items-center align-middle justify-center">
        <ContactForm />{" "}
      </div>
      <div className="w-screen flex bg-black">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
