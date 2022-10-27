import React from "react";
import PropTypes from "prop-types";

function BeersCards({ beer }) {
  return (
    <li className=" w-32 h-100  flex flex-col justify-end items-center text-center ">
      <img src={beer.image_url} alt={beer.name} className=" h-52 w-16 " />
      <h2 className="font-extrabold  hover:underline-offset-auto  ">
        {beer.name}
      </h2>
      <p className=" font-semibold"> {beer.abv}%</p>
      <p className=" text-xs">{beer.tagline}</p>
      <p className="text-backpink font-semibold">{beer.target_fg} JA$</p>
    </li>
  );
}

BeersCards.propTypes = {
  beer: PropTypes.objectOf().isRequired,
};

export default BeersCards;
