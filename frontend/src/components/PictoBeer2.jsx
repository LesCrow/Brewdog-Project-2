import React from "react";
import PropTypes from "prop-types";

function PictoBeer2({ onClick }) {
  return (
    <div>
      <img
        onClick={onClick}
        src="src/assets/animation.gif"
        alt="icone menu burger"
        className="h-14 ml-2"
      />
    </div>
  );
}

PictoBeer2.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PictoBeer2;
