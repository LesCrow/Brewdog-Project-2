import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Age from "./components/Age";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <ToastContainer />
    </div>
  );
}

export default App;
