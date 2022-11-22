import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BeersCards from "../components/shop/BeersCards";

function BeerDetails() {
  const [dataBeer, setDataBeer] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((response) => setDataBeer(response.data));
  }, []);

  return (
    <div>
      <BeersCards beer={dataBeer} />
    </div>
  );
}

export default BeerDetails;
