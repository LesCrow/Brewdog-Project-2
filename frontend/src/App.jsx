import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Age from "./components/Age";
import "react-toastify/dist/ReactToastify.css";
import Brewery from "./components/Brewery";
import ContactForm from "@components/ContactForm";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="w-screen bg-black min-h-screen flex relative items-center align-middle justify-center">
      <ContactForm />
    </div>
  );
}

export default App;
