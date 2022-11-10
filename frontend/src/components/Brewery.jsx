import Title from "@components/Title";
import React from "react";

function Brewery() {
  return (
    <div className="w-full bg-basic bg-cover relative ">
      {/* <img
        className="absolute object-cover z-0 top-0 left-0 "
        src="src/assets/Brewery phone.png"
        alt="backgroundImage"
      /> */}

      <div className="z-10 relative w-full">
        <div className="">
          <Title title="BREWERY" />

          <img
            className=" p-3 object-cover bg-center w-full h-40"
            src="src/assets/history-2012.jpeg"
            alt="brewery"
          />
        </div>
        <div className="w-full p-10">
          <h2 className="text-left  text-2xl text-white ">
            OUR BREWERY IN ELLON
          </h2>
          <h3 className=" text-right text-2xl p-2">INGREDIENTS</h3>
          <p className="text-right text-[15px]">
            It only takes 4 ingredients to brew beer, but what we make with
            these ingredients is what makes it special. The finest malted
            barley, high quality hops, water from purified Scottish source and
            our own in-house yeast strains come together in harmony to create
            beer for all.
          </p>
        </div>
        <img
          className=" p-3 object-cover bg-center w-full h-40"
          src="src/assets/155_-_bronze_beers_-_may_2021_19052021_-_brewdog_-_grant_anderson_-_fullsize.jpeg"
          alt="technique"
        />
        <div className="w-full p-10">
          <h3 className="text-center text-2xl p-[10px] font-normal hover:font-bold">
            GOOD BEER THAT FEELS GOOD
          </h3>
          <p className="text-center text-[15px]">
            Exceptional quality is the cornerstone of our brewery. All BrewDog
            beers are brewed from barley top quality malt and hops from the best
            producers around the world.
          </p>
        </div>
        <img
          className="p-3 object-cover bg-center w-full h-40"
          src="src/assets/Beer_Quality_4.webp"
          alt="beer"
        />
        <div className="w-full p-10">
          <h3 className="text-left text-2xl font-normal hover:font-bold">
            BREWING TECHNIQUE
          </h3>

          <p className="text-left p-2">
            Our state-of-the-art Aberdeenshire brewery is the kingdom of steel
            and dreams. We have 3 brewing sites and a innovation pilot kit. We
            also use wind power to make our beer, as well as brewing by-products
            (such as CO2, water and biomethane) to help manufacture some beer.
          </p>
          <h1 className="text-5xl text-center  text-nav-blue bord ">#BREW</h1>
        </div>
      </div>
    </div>
  );
}

export default Brewery;
