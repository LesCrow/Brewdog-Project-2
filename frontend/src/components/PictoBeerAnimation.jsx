import React from "react";
import PropTypes from "prop-types";

function PictoBeerAnimation({ onClick }) {
  return (
    <div className="z-20">
      <img
        onClick={onClick}
        src="src/assets/animation.gif"
        alt="icone menu burger"
        className="h-14 w-14 "
      />
    </div>
  );
}

PictoBeerAnimation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PictoBeerAnimation;
