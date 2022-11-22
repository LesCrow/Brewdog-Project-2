import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchBar() {
  const [dataBeer, setDataBeer] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState("");

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDataBeer(response.data));
  }, []);

  return (
    <div>
      <div className="w-16 md:w-full">
        <input
          list="beers"
          name="beers-choice"
          type="search"
          placeholder="Search a beer"
          className="h-8 w-full   rounded-md "
          onChange={(e) => {
            setSelectedBeer(e.target.value);
          }}
        />
        <div className="flex bg-slate-700  rounded-md z-40 flex-col absolute">
          {dataBeer.length > 0 &&
            dataBeer
              .filter((item) => item.name.toLowerCase().includes(selectedBeer))
              .map((beer) => (
                <Link to={`/beers/${beer.id}`}>
                  <span
                    className="text-white w-full text-left text-ellipsis hover:bg-slate-400 px-2 cursor-pointer"
                    value={beer.id}
                  >
                    {beer.name}
                  </span>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
