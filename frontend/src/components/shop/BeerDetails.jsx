import React from "react";
import PropTypes from "prop-types";

function BeerDetails({ beer }) {
  return (
    <div>
      <ul>
        <li>{beer.name}</li>
      </ul>
    </div>
  );
}

BeerDetails.propTypes = {
  beer: PropTypes.objectOf.isRequired,
};

export default BeerDetails;
