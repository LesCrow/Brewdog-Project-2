import React from "react";

function Title({ title }) {
  return (
    <div>
      <h1 className=" w-full text-center text-5xl  text-stroke text-nav-blue bord  ">
        {title}{" "}
      </h1>
    </div>
  );
}

export default Title;
