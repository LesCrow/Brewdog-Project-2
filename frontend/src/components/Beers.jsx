import axios from "axios";
import React, { useEffect, useState } from "react";
import BeersCards from "./BeersCards";

const typeBoxes = ["% alcool croissant", "% alcool decroissant"];

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
    if (selectedCheckRadio) {
      return data.sort((a, b) => a.abv - b.abv);
    }
    return data;
  };

  return (
    <div className="">
      <div className="w-100 bg-slate-500">
        <label>nombres de bierres affiché : {beerValue} </label>
        <br />
        <input
          className="w-1/6"
          type="range"
          min="1"
          max="25"
          defaultValue={beerValue}
          onChange={(e) => setBeerValue(e.target.value)}
        />
        <ul>
          {typeBoxes.map((box) => {
            return (
              <li key={box}>
                <input
                  type="checkbox"
                  value={box}
                  id={box}
                  checked={box === selectedCheckRadio}
                  onChange={(e) => setSelectedCheckRadio(e.target.value)}
                />
                <label htmlFor={box}>{box}</label>
              </li>
            );
          })}
        </ul>
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
