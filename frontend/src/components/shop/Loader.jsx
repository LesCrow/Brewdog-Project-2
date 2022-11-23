import React from "react";
import loader from "../../../public/animation.gif";

function Loader() {
  return (
    <div className="h-60 w-60 md:h-80 md:w-80 flex justify-center items-center">
      <img src={loader} alt="loading beer" />
    </div>
  );
}

export default Loader;
