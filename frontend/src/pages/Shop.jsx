import axios from "axios";
import React, { useEffect, useState } from "react";
import BeersCards from "../components/BeersCards";

const typeBoxes = [
  "Trier par : ",
  "% alcool croissant",
  "% alcool decroissant",
  "prix croissant",
  "prix decroissant",
];

function Shop() {
  const [selectedCheckRadio, setSelectedCheckRadio] = useState();
  const [dataBeer, setDataBeer] = useState([]);
  const [foodPairing, setFoodPairing] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDataBeer(response.data));
  }, []);

  const checkIfFoodPairingMatch = (food, value) => {
    return food.toLowerCase().includes(value.toLowerCase());
  };

  const handleSorting = (beer) => {
    if (selectedCheckRadio === "% alcool croissant") {
      return beer.sort((a, b) => a.abv - b.abv);
    }
    if (selectedCheckRadio === "% alcool decroissant") {
      return beer.sort((a, b) => b.abv - a.abv);
    }
    if (selectedCheckRadio === "prix croissant") {
      return beer.sort((a, b) => a.target_fg - b.target_fg);
    }
    if (selectedCheckRadio === "prix decroissant") {
      return beer.sort((a, b) => b.target_fg - a.target_fg);
    }
    return beer;
  };
  return (
    <div className="">
      <div className=" w-full bg-slate-500 flex justify-around items-center h-10 ">
        <select
          onChange={(e) => setSelectedCheckRadio(e.target.value)}
          className=" w-40 rounded h-6 md:w-60"
        >
          {typeBoxes.map((box) => {
            return (
              <option key={box} value={box}>
                {box}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder=" 🔍 FoodPairing with ..."
          className="w-40 rounded h-6 md:w-60"
          maxLength="50"
          onChange={(e) => setFoodPairing(e.target.value)}
          onClick={setIsActive}
        />
      </div>
      <ul className="flex flex-row flex-wrap justify-center	 gap-y-9  gap-x-6 ">
        {dataBeer.length &&
          handleSorting(dataBeer)
            .filter(
              (beer) =>
                beer.food_pairing.filter((item) =>
                  checkIfFoodPairingMatch(item, foodPairing)
                ).length > 0
            )
            .map((beer) => (
              <BeersCards key={beer.id} beer={beer} isActive={isActive} />
            ))}
      </ul>
    </div>
  );
}

export default Shop;
