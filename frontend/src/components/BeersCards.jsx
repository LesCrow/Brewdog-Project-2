import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

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

function BeersCards({ beer, isActive }) {
  const [isDemo, setIsDemo] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  function HandleOverBeer() {
    setIsDemo((e) => !e);
  }

  function HandleOverOpacity() {
    setIsOpacity((j) => !j);
  }
  function HandleOverDescription() {
    setShowDescription(!showDescription);
  }
  function closePopUp() {
    setShowDescription(false);
  }

  return (
    <div className="flex flex-row">
      <li
        className="relative flex flex-col justify-end items-center"
        onMouseEnter={HandleOverOpacity}
        onMouseLeave={HandleOverOpacity}
      >
        {isOpacity && (
          <div className="absolute m-36">
            <p className="text-bargreen font-semibold">{beer.tagline}</p>
          </div>
        )}
        <div
          className={
            isOpacity
              ? "w-32 h-100  flex flex-col justify-end items-center text-center relative opacity-10"
              : "w-32 h-100  flex flex-col justify-end items-center text-center relative"
          }
        >
          <img
            onMouseEnter={HandleOverBeer}
            onMouseLeave={HandleOverBeer}
            src={beer.image_url}
            alt={beer.name}
            className={
              isDemo ? "hover:rotate-12 duration-75 h-52 w-16" : "h-52 w-16"
            }
          />
          <h2 className="hover:underline-offset-auto  ">{beer.name}</h2>
          <p className="text-bargreen font-semibold underline"> {beer.abv}%</p>
          <p className="text-backpink font-semibold">{beer.target_fg} JA$</p>
          {isActive && (
            <p className="">
              {beer.food_pairing.map((e) => (
                <li className="">{e}.</li>
              ))}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.2 }}
            type="button"
            className="text-sm bg-bargreen rounded-md flex justify-center items-center w-20 mb-2 h-6"
          >
            Panier
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2 }}
            type="button"
            className="text-sm bg-backpink rounded-md flex justify-center items-center w-28  h-6"
            onClick={HandleOverDescription}
          >
            Description
          </motion.button>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {" "}
            {showDescription && (
              <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setShowDescription(!showDescription)}
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
        </div>
      </li>
    </div>
  );
}

BeersCards.propTypes = {
  beer: PropTypes.objectOf().isRequired,
  isActive: PropTypes.func.isRequired,
};

export default BeersCards;
