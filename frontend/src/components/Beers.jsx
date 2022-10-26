import axios from "axios";
import React, { useEffect, useState } from "react";
import BeersCards from "./BeersCards";

function Beers() {
  const [dataBeer, setDataBeer] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDataBeer(response.data));
  }, []);

  return (
    <div className="">
      <h1>BEERS</h1>
      <ul className="flex flex-row flex-wrap justify-center">
        {dataBeer.map((beer) => (
          <BeersCards key={beer.id} beer={beer} />
        ))}
      </ul>
    </div>
  );
}

export default Beers;
