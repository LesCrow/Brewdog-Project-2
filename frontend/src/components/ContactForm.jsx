import React, { useState } from "react";

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Merci!</div>
        <div className="text-md">Nous vous contacterons bientôt.</div>
      </>
    );
  }

  return (
    <div
      className="h-screen flex flex-col 
      items-center justify-center bg-backcolor"
    >
      <div className="mb-3 pt-0">
        <h1 className="text-2xl font-bold">
          <a />
        </h1>
        <h2 className="text-bargreen text-center text-4xl  text-stroke">
          CONTACT
        </h2>
      </div>
      <form
        className="bg-backgreen border 3px border-black	 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <p>LAISSEZ NOUS UN MESSAGE</p>
        <div className="mb-3 pt-0 my-8">
          <input
            type="text"
            placeholder="Nom"
            name="name"
            className="border 3px border-black	px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Message"
            name="message"
            className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0 flex justify-center">
          <button
            className=" bg-black text-white active:bg-blue-600 font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Envoyer le message
          </button>
        </div>
      </form>
      <div>
        <h2 className="text-bargreen text-center text-4xl  text-stroke">
          #BREWDOG FAMILY
        </h2>
      </div>
    </div>
  );
};

export default ContactForm;
