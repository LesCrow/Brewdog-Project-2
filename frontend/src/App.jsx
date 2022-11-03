import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Age from "./components/Age";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="w-screen bg-black h-screen flex items-center align-middle justify-center">
      {!isVerified && <Age setIsVerified={setIsVerified} />}
      <p className="text-white">
        HOME PAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        quos, quo facere soluta doloremque beatae, perferendis a quod magnam
        assumenda natus odio, reprehenderit temporibus in illum iste aperiam
        earum porro. Illo sint voluptatibus quaerat, pariatur corrupti esse nam
        sequi dicta neque possimus nostrum placeat, eum nisi amet id voluptas
        harum mollitia doloribus nesciunt quo iste dolor saepe dolores minima!
        Sapiente, voluptas omnis officiis modi consequatur perferendis doloribus
        laboriosam soluta inventore, illo ea enim quod ab alias quasi natus nisi
        error ipsum corrupti facere odit fugiat consectetur dolores quaerat!
        Repellendus facilis beatae et dignissimos quia unde necessitatibus porro
        ducimus dicta doloribus!
      </p>

      <ToastContainer />
    </div>
  );
}

export default App;
