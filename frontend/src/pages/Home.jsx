import React from "react";
import { motion } from "framer-motion";
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
                className=" flex p-3 object-cover bg-center h-60 md:h-96"
                src="src/assets/ecureuil 1.jpg"
                alt="ecureuil"
              />
            </div>
            <div className=" w-full flex ">
              <p className=" flex text-left text-[10px] md:text-[15px] m-5 md:mt-24 md:mr-9 ">
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
          <h2 className="text-center  text-2xl md:text-5xl text-white ">
            A BEER THAT BREAKS CODE
          </h2>
          <div className="flex w-full items-center justify-center pt-36  z-0">
            <motion.div
              transition={{ delay: 0.2, type: "just" }}
              className="transform -translate-y-16 translate-x-5"
            >
              <img
                className="flex h-36 lg:h-80"
                src="src/assets/history-2015 1.png"
                alt="history-2015"
              />
            </motion.div>
            <motion.div
              transition={{ delay: 0.2, type: "just" }}
              className="z-10"
            >
              <img
                className="flex h-36 lg:h-80"
                src="src/assets/history-2014 1.png"
                alt="history-2014"
              />
            </motion.div>
            <motion.div
              transition={{ delay: 0.2, type: "just" }}
              className="transform -translate-y-20 -translate-x-5 z-20"
            >
              <img
                className="flex h-36 lg:h-80"
                src="src/assets/history-2016 1.png"
                alt="history-2016"
              />
            </motion.div>
          </div>
          <div className="w-full p-10">
            <h3 className="text-center text-2xl p-[10px] font-normal hover:font-bold">
              <Title title="EVENTS" />
            </h3>
          </div>
          <div className="flex w-full justify-center items-center  ">
            <img
              className="h-32 lg:h-80 m-8 lg:m-16 "
              src="src/assets/téléchargement 1.png"
              alt="events"
            />
            <img
              className="h-40 lg:h-96 mb-6 lg:mb-14"
              src="src/assets/biere-festiva-france_montelimar 1.png"
              alt="events"
            />
            <img
              className="h-32 lg:h-80 m-8 lg:m-16"
              src="src/assets/festival-biere-france_lille1 1.png"
              alt="events"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
