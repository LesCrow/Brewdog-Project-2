import React from "react";
import { toast, useToast } from "react-toastify";

// import useWindowSize from "./hooks/useWindowDimension";

function NewsletterInput() {
  // const size = useWindowSize();
  // const { width } = size;s

  const [email, setEmail] = React.useState("");
  const notify = (message) => toast(message);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 10) {
      notify(
        "Thank your for your subscription ! You will now recieve our news in your mailbox !"
      );
    }
  };

  return (
    <div className="flex w-full m-3 justify-center">
      <div className=" bg-cream   h-full flex justify-center items-center align-middle ">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex w-full">
            <div className=" bg-cream p-2 border-2 border-black h-full flex justify-center items-center align-middle ">
              <p>EMAIL</p>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="🔔ENTREZ VOTRE EMAIL🔔"
              value={email}
              className="w-full focus:border-black focus:outline-none px-5 border-2 border-black bg-navBlue-400"
            />
            <input
              className="cursor-pointer hover:opacity-50 border-2 p-2 border-black"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsletterInput;
