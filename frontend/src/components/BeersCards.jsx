import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Popup from "./Popup";

function BeersCards({ beer, isActive }) {
  const [isDemo, setIsDemo] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  function HandleOverBeer() {
    setIsDemo((e) => !e);
  }

  function HandleOverOpacity() {
    setIsOpacity((j) => !j);
  }
  // function HandleOverDescription() {
  //   setShowDescription(!showDescription);
  // }
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
            onClick={() => setShowDescription(true)}
          >
            Description
          </motion.button>
          <Popup
            beer={beer}
            closePopUp={closePopUp}
            showDescription={showDescription}
          />
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
