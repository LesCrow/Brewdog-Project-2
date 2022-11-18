import React, { useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

import PropTypes from "prop-types";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import CartContext from "../../context/Cart/CartContext";

const dropIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
  exit: { opacity: 0 },
};

function Popup({ beer, open, onClose }) {
  const ref = useRef();
  const { addToCart } = useContext(CartContext);

  useOnClickOutside(ref, () => onClose());

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      {open && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
        >
          <div
            className="w-[600px] flex flex-col bg-white bg-opacity-90
            rounded-lg"
            ref={ref}
          >
            <button
              className="text-xl font-extrabold flex justify-end mr-4 mt-2 "
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
                onClick={() => addToCart(beer)}
                className="text-sm bg-bargreen rounded-md flex justify-center items-center   text-white h-full w-1/4"
              >
                Add to <FaShoppingCart />
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
