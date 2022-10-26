import React from "react";
import PropTypes from "prop-types";

function BeersCards({ beer }) {
  return (
    <li className="border-solid border-black border-2 w-64 h-72  flex flex-col justify-center items-center ">
      <h2 className="font-bold ">{beer.name}</h2>
      <img src={beer.image_url} alt="de la biere" className=" h-52 w-16 " />
      <p>{beer.tagline}</p>
      <p> {beer.abv}%</p>
    </li>
  );
}

BeersCards.propTypes = {
  beer: PropTypes.objectOf().isRequired,
};

export default BeersCards;
