import React from "react";

function NewsletterInput() {
  return (
    <div className="flex w-full">
      <div className=" bg-cream p-2 border-2 border-black h-full flex justify-center items-center align-middle ">
        <p>EMAIL</p>
      </div>
      <input className="w-full focus:border-black focus:outline-none px-5 border-2 border-black bg-navBlue-400" />
      <div>
        <p>SUBSCRIBE</p>
      </div>
    </div>
  );
}

export default NewsletterInput;
