import { ToastContainer } from "react-toastify";
import { React, useState } from "react";

// import ContactForm from "@components/ContactForm";
import Brewery from "./components/Brewery";

import Age from "./components/Age";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <ToastContainer />

      <Brewery />

      {/* <div className="w-screen bg-black min-h-screen flex relative items-center align-middle justify-center">
        <ContactForm />{" "}
      </div> */}
    </div>
  );
}

export default App;
