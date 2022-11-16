import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const FORM_ENDPOINT = "";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const ref2 = useRef(null);

  const inView2 = useInView(ref2);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thanks!</div>
        <div className="text-md">We will contact you soon.</div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-backcolor w-full">
      <div className="absolute top-0  bg-backcolor left-0 w-full h-full">
        <div className="bg-backpink transform translate-y-56 sm:translate-y-56 md:translate-y-1 lg:translate-y-1 w-full h-full" />
      </div>
      <div className="z-10 pt-20 relative w-full ">
        <div className="mb-3 pt-0 ">
          <h1 className="text-bargreen text-center text-4xl  text-stroke ">
            CONTACT
          </h1>
          <img className="p-5" src="src/assets/dogtop.jpeg" alt="banimage" />
        </div>
        <div className="flex justify-center sm:justify-between w-full flex-row-reverse">
          <form
            ref={ref2}
            className="bg-backgreen border z-50 3px border-black	shadow-md rounded min-w-full sm:min-w-[400px] px-14 pt-20 pb-8 m-10"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <p className="flex justify-center">LEAVE US A MESSAGE</p>

            <div className="mb-3 pt-5 my-8">
              <input
                type="text"
                placeholder="Last name"
                name="Last name"
                className="border 3px border-black	px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-5 ">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-5 ">
              <input
                type="Object"
                placeholder="Object"
                name="Object"
                className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>

            <div className="mb-3 pt-5">
              <textarea
                placeholder="Message"
                name="message"
                className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-10 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.2 }}
                className=" bg-black text-white active:bg-blue-600 font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Send
              </motion.button>
            </div>
          </form>
          <div className="relative hidden sm:flex md:flex lg:flex  flex-col">
            <motion.div
              style={{
                transform: inView2
                  ? "translateX(100px)"
                  : "translateX(-1000px)",
                opacity: inView2 ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="text-start relative flex my-10 justify-start w-96 "
            >
              <img
                className="text-xs objet-cover h-full w-full"
                src="src/assets/space.jpeg"
                alt="spaceimage"
              />
              <div className="w-full h-full absolute bg-white bg-opacity-30 bottom-5 left-5" />
            </motion.div>
            <motion.div
              style={{
                transform: inView2 ? "translateX(500px)" : "translateX(1000px)",
                opacity: inView2 ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              transition={{ delay: 3 }}
              className="text-start flex my-10 relative justify-start  w-96"
            >
              <img
                className="text-xs object-cover h-full w-full"
                src="src/assets/concert.jpeg"
                alt="concertimage"
              />
              <div className="w-full h-full absolute bg-white bg-opacity-30 bottom-5 left-5" />
            </motion.div>
          </div>
        </div>
        <div>
          <h2 className="text-bargreen text-center text-4xl  text-stroke ">
            #BREWDOG FAMILY
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
