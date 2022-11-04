import React from "react";
import PropTypes from "prop-types";

function Title({ title }) {
  return (
    <div>
      <h1 className=" w-full text-center text-5xl  text-stroke text-nav-blue bord  ">
        {title}{" "}
      </h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
