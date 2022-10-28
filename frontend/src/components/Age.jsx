/* eslint-disable no-alert */
import React, { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { days, months, years } from "../utils/constants";

function Age({ setIsVerified }) {
  const [month, setMonths] = useState("");
  const [day, setDays] = useState("");
  const [year, setYears] = useState("");
  const notify = (message) => toast(message);
  const today = new Date(Date.now());

  const handleMonthChange = (e) => {
    setMonths(e.target.value);
  };

  const handleDayChange = (e) => {
    setDays(e.target.value);
  };

  const handleYearChange = (e) => {
    setYears(e.target.value);
  };

  const handleVerification = () => {
    if (year && month && day) {
      const todayYear = today.getFullYear();
      if (todayYear - year >= 18) {
        notify("Bienvennue sur notre site");
        return setIsVerified(true);
      }
      return notify("Interdit aux mineurs !");
    }
    return notify("Veuillez remplir tous les champs");
  };

  return (
    <div className="w-screen h-screen bg-default flex flex-col justify-center align-middle items-center">
      <img
        className="flex w-auto"
        src="src/assets/LogoEnterTheWebSite.png"
        alt="Age"
      />
      <h1 className="text-bargreen text-center text-4xl text-stroke text-white pt-10">
        How old are you ?
      </h1>
      <div className="flex flex-row space-x-10 p-10 h-40">
        <select
          className="border-black border-2 px-10 py-5"
          onChange={handleYearChange}
          name="years"
        >
          <option>Years</option>
          {years.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
        <select
          className="border-black border-2 px-12"
          onChange={handleDayChange}
          name="days"
        >
          <option>Days</option>
          {days.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
        <select
          className="border-black border-2 px-6"
          onChange={handleMonthChange}
          name="months"
        >
          <option className="text-center"> Months </option>
          {months.map((element, index) => (
            <option key={element} value={index + 1}>
              {element}
            </option>
          ))}
        </select>
      </div>
      <button
        className="flex bg-button p-2 rounded text-white text-stroke"
        onClick={handleVerification}
        type="submit"
        alt="Cheers"
      >
        Cheers!
      </button>
    </div>
  );
}

Age.propTypes = {
  setIsVerified: PropTypes.func.isRequired,
};

export default Age;
