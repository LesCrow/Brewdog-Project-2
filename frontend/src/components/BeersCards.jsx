import React, { useState } from "react";
import PropTypes from "prop-types";

function BeersCards({ beer, isActive }) {
  const [isDemo, setIsDemo] = useState("false");

  function HandleOverBeer() {
    setIsDemo((e) => !e);
  }
  return (
    <li
      className=" w-32 h-100 flex flex-col justify-end items-center text-center relative "
      onMouseOver={HandleOverBeer}
      onFocus={HandleOverBeer}
    >
      <img
        src={beer.image_url}
        alt={beer.name}
        className={
          isDemo ? "hover:rotate-12 duration-75 h-52 w-16" : "h-52 w-16"
        }
      />
      <h2 className="font-extrabold  hover:underline-offset-auto  ">
        {beer.name}
      </h2>
      <p className="text-bargreen font-semibold underline"> {beer.abv}%</p>
      <p className=" text-xs">{beer.tagline}</p>
      <p className="text-backpink font-semibold">{beer.target_fg} JA$</p>
      {isActive ? (
        <p className="">
          {beer.food_pairing.map((e) => (
            <li className="">{e}.</li>
          ))}
        </p>
      ) : (
        ""
      )}
    </li>
  );
}

BeersCards.propTypes = {
  beer: PropTypes.objectOf().isRequired,
  isActive: PropTypes.func.isRequired,
};

export default BeersCards;
