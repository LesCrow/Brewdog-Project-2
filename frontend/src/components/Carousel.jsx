import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel() {
  return (
    <Carousel infiniteLoop showThumbs={false} autoPlay>
      <div className="p-4 w-96">
        <img alt="" src="src/assets/1612-10730.jpg" />
      </div>
      <div className="p-4">
        <img
          alt=""
          src="src/assets/37094-0w470h470_Brewdog_Punk_Ipa_Biere_Ecossaise.jpg"
        />
      </div>
      <div className="p-4">
        <img alt="" src="src/assets/Brewdog-arcade-made-cans-33.webp" />
      </div>
      <div className="p-4">
        <img
          alt=""
          src="src/assets/brewdog-indie-beer-06-2022-5056025408920-32160106381475.webp"
        />
      </div>
      <div className="p-4">
        <img alt="" src="src/assets/brewdog-PunkIPA-2021_1800w.jpg" />
      </div>
      <div className="p-4">
        <img alt="" src="src/assets/fifty_fifty_-_pdp_1_2_1.jpg" />
      </div>
      <div className="p-4">
        <img alt="" src="src/assets/media.auchan.png" />
      </div>
    </Carousel>
  );
}
