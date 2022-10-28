import React from "react";
import PropTypes from "prop-types";

function PictoBeer({ onClick }) {
  return (
    <div>
      <img
        onClick={onClick}
        src="src/assets/chopeBiereAnimation1.png"
        alt="icone menu burger"
        className="h-14 ml-2"
      />
    </div>
  );
}

PictoBeer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PictoBeer;
