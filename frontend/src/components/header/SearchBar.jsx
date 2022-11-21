import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BeerDetails from "../shop/BeerDetails";

function SearchBar() {
  const [filtered, setFiltered] = useState("");
  const [dataBeer, setDataBeer] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDataBeer(response.data));
  }, []);

  return (
    <div>
      <Link to="/shop">
        <input
          type="text"
          placeholder="Search a beer"
          className="h-8 w-16 md:w-[80%] mr-4  rounded-md ml-2 "
          onChange={(e) => {
            setFiltered(e.target.value);
          }}
        />
      </Link>

      {dataBeer.map(
        (beer) =>
          beer.name.toLowerCase() === filtered.toLowerCase() && (
            <BeerDetails beer={beer} />
          )
      )}
    </div>
  );
}

export default SearchBar;
