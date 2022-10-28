import axios from "axios";
import React, { useEffect, useState } from "react";
import BeersCards from "./BeersCards";

const typeBoxes = [
  "Trier par : ",
  "% alcool croissant",
  "% alcool decroissant",
  "prix croissant",
  "prix decroissant",
];

function Beers() {
  const [selectedCheckRadio, setSelectedCheckRadio] = useState();
  const [dataBeer, setDataBeer] = useState([]);
  const [beerValue, setBeerValue] = useState(25);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDataBeer(response.data));
  }, []);

  const handleSorting = (data) => {
    if (selectedCheckRadio === "% alcool croissant") {
      return data.sort((a, b) => a.abv - b.abv);
    }
    if (selectedCheckRadio === "% alcool decroissant") {
      return data.sort((a, b) => b.abv - a.abv);
    }
    if (selectedCheckRadio === "prix croissant") {
      return data.sort((a, b) => a.target_fg - b.target_fg);
    }
    if (selectedCheckRadio === "prix decroissant") {
      return data.sort((a, b) => b.target_fg - a.target_fg);
    }
    return data;
  };

  return (
    <div className="">
      <div className=" w-100 bg-slate-500 flex flex-row justify-around h-18 items-center align-middle">
        <label>
          nombres de bierres affiché : {beerValue}
          <br />
          <input
            className=""
            type="range"
            min="1"
            max="25"
            defaultValue={beerValue}
            onChange={(e) => setBeerValue(e.target.value)}
          />
        </label>
        <select
          onChange={(e) => setSelectedCheckRadio(e.target.value)}
          className="h-8 w-36 border-solid "
        >
          {typeBoxes.map((box) => {
            return (
              <option key={box} value={box}>
                {box}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="flex flex-row flex-wrap justify-center	 gap-y-9  gap-x-6 ">
        {dataBeer.length &&
          handleSorting(dataBeer)
            .slice(0, beerValue)
            .map((beer) => <BeersCards key={beer.id} beer={beer} />)}
      </ul>
    </div>
  );
}

export default Beers;
