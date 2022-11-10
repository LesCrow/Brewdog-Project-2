/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

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

function Popup({ beer, open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      {" "}
      {open && (
        <motion.div
          onClick={onClose}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
        >
          <div
            className="w-[600px] flex flex-col bg-white bg-opacity-70 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-white text-xl font-extrabold flex justify-end mr-4 mt-2"
              type="button"
              onClick={onClose}
            >
              X
            </button>
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
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Popup;
