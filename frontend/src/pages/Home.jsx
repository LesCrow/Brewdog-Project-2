import React from "react";
import Title from "../components/global/Title";
import MyCarousel from "../components/home/Carousel";

function Home() {
  return (
    <div>
      <div className="w-full bg-home bg-cover relative ">
        <div>
          {" "}
          <MyCarousel />
        </div>
        <div className="z-10  mt-[30px] relative w-full">
          <div className="flex-col sm:flex-row w-full pb-10 pt-0.5 flex ">
            <div className=" w-full flex justify-center items-center">
              <img
                className=" flex p-3 object-cover bg-center h-60"
                src="src/assets/ecureuil 1.jpg"
                alt="ecureuil"
              />
            </div>
            <div className=" w-full flex ">
              <p className=" flex text-left text-[10px] md:text-[15px] m-5 ">
                The brewery was established in 2007 by Martin Dickie and James
                Watt. Both twenty-four years old at the time, we rented set up
                in Fraserburgh, took out some bank loans a little scary, slammed
                all our money into stainless steel and we took to brewing pure,
                hard craft beers. We brewed a beer at 55° and packaged it in
                bodies of road-killed and stuffed animals. It was the beer most
                expensive in the world, and also an unlikely encounter between
                three worlds apart: art, craft beer and taxidermy. We opened 17
                bars and we also installed a top canning line in our Ellon
                brewery
              </p>
            </div>
          </div>
          <h2 className="text-center  text-2xl text-white ">
            A BEER THAT BREAKS CODE
          </h2>
          <img
            className=" p-3 object-cover bg-center w-full h-100"
            src="src/assets/Group 1.png"
            alt="groupe 1"
          />
          <div className="w-full p-10">
            <h3 className="text-center text-2xl p-[10px] font-normal hover:font-bold">
              <Title title="EVENTS" />
            </h3>
          </div>
          <img
            className="p-3 object-cover bg-center w-full h-100"
            src="src/assets/Group 5.png"
            alt="events"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
