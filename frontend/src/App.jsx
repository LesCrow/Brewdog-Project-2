import { ToastContainer } from "react-toastify";
import { React, useState } from "react";
import Age from "./components/Age";
import Beers from "./components/Beers";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <ToastContainer />
      <Beers />
    </div>
  );
}

export default App;
