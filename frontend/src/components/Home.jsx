import Title from "@components/Title";
import React from "react";
import MyCarousel from "./Carousel";

function Home() {
  return (
    <div className="w-full bg-basic bg-cover relative ">
      {/* <img
        className="absolute object-cover z-0 top-0 left-0 "
        src="src/assets/Home phone.png"
        alt="backgroundImage"
      /> */}

      <MyCarousel />

      <div className="z-10  mt-[30px] relative w-full">
        <div className="w-full p-10 flex flex-row">
          <img
            className=" flex p-3 object-cover bg-center h-60"
            src="src/assets/ecureuil 1.jpg"
            alt="ecureuil"
          />
          <p className=" flex text-left text-[15px]">
            La brasserie a été créée en 2007 par Martin Dickie et James Watt.
            Tous les deux âgés de vingt-quatre ans à l'époque, nous avons loué
            une installation à Fraserburgh, contracté quelques prêts bancaires
            un peu flippants, claqué tout notre argent dans de l'inox et on
            s’est mis à brasser des bières artisanales pures et dures. Nous
            avons brassé une bière à 55° et l'avons conditionnée dans des corps
            d'animaux tués sur la route et empaillés. Ce fut la bière la plus
            chère au monde, et aussi une rencontre improbable entre trois
            univers bien à part : l'art, la bière artisanale et la taxidermie.
            Nous avons ouvert 17 bars et nous avons également installé une
            chaîne de mise en canettes top dans notre brasserie d'Ellon
          </p>
        </div>
        <h2 className="text-center  text-2xl text-white ">
          UNE BIERE QUI CASSE LES CODES
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
  );
}

export default Home;
