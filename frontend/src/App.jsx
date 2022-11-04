import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Age from "./components/Age";
import "react-toastify/dist/ReactToastify.css";
import Brewery from "./components/Brewery";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="w-screen bg-black min-h-screen flex relative items-center align-middle justify-center">
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <Brewery />
      <ToastContainer />
    </div>
  );
}

export default App;
