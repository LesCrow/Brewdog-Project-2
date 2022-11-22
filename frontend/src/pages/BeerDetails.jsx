import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BeersCards from "../components/shop/BeersCards";

function BeerDetails() {
  const [dataBeer, setDataBeer] = useState([]);
  const { id } = useParams();
  const getBeer = () => {
    axios.get(`https://api.punkapi.com/v2/beers/${id}`).then((response) => {
      setDataBeer(response.data);
    });
  };
  useEffect(() => {
    getBeer();
  }, [id]);

  if (dataBeer.length === 0) return <div>Loading ...</div>;

  return (
    <div className="flex justify-center my-5">
      <BeersCards beer={dataBeer[0]} />
    </div>
  );
}

export default BeerDetails;
