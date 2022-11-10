import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ref = useRef();
const [showDescription, setShowDescription] = useState(false);

useOnClickOutside(ref, () => setShowDescription(false));

const dropIn = {
  hidden: { y: "-100vh" },
  visible: {
    y: "0",
    opacity: "1",
    transition: {
      duration: 0.9,
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
  exit: { y: "100vh" },
};

function Popup({ beer, closePopUp }) {
  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      {" "}
      {showDescription && (
        <motion.div
          ref={ref}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closePopUp}
          className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
        >
          <div className="w-[600px] flex flex-col bg-white bg-opacity-70 rounded-lg">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="text-white text-xl"
              type="button"
              onClick={closePopUp}
            >
              X
            </motion.button>
            <div className="p-2 flex flex-col items-center">
              <img
                className="h-52 w-16 "
                src={beer.image_url}
                alt="Une biere"
              />
              <h2 className="">{beer.name}</h2>

              <h1>{beer.description}</h1>
            </div>
            <div className="flex flex-row justify-around">
              <p className="text-bargreen font-semibold underline ">
                {" "}
                {beer.abv}%
              </p>
              <p className="text-backpink font-semibold ">
                {beer.target_fg} JA$
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                type="button"
                className="text-sm bg-bargreen rounded-md   w-20 mb-2 h-6 "
              >
                Panier
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
Popup.propTypes = {
  beer: PropTypes.objectOf().isRequired,
  closePopUp: PropTypes.func.isRequired,
};
export default Popup;
