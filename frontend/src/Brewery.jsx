import Title from "@components/Title";
import React from "react";

function Brewery() {
  return (
    <div>
      <img
        className="absolute  object-fill z-0 top-0 left-0 "
        src="src/assets/Brewery phone.png"
        alt="backgroundImage"
      />

      <div className="z-10 relative w-full">
        <div className="bg-backcolor">
          <Title title={"BREWERY"} />

          <img
            className="object-cover bg-center w-full h-40"
            src="src/assets/history-2012.jpeg"
            alt="brewery"
          />
        </div>
        <div className="w-full p-10">
          <h2 className="text-left  text-2xl ">NOTRE BRASSERIE A ELLON</h2>
          <h3 className=" text-right text-2xl p-2">Ingredients</h3>
          <p className="text-right text-[15px]">
            Il ne faut que 4 ingrédients pour brasser de la bière, mais ce que
            nous faisons avec ces ingrédients est ce qui la rend spéciale.
            L'orge maltée la plus fine, le houblon de haute qualité, l'eau de
            source écossaise purifiée et nos propres souches de levure maison se
            réunissent en harmonie pour créer de la bière pour tous.
          </p>
        </div>
        <img
          className="object-cover bg-center w-full h-40"
          src="src/assets/155_-_bronze_beers_-_may_2021_19052021_-_brewdog_-_grant_anderson_-_fullsize.jpeg"
          alt="technique"
        />
        <div className="w-full p-10">
          <h3 className="text-center text-2xl p-[10px] font-normal hover:font-bold">
            DE LA BONNE BIÈRE QUI FAIT DU BIEN
          </h3>
          <p className="text-center text-[15px]">
            La qualité exceptionnelle est la pierre angulaire de notre
            brasserie. Toutes les bières BrewDog sont brassées à partir d'orge
            maltée et de houblon de la meilleure qualité provenant des meilleurs
            producteurs du monde entier.
          </p>
        </div>
        <img
          className="object-cover bg-center w-full h-40"
          src="src/assets/Beer_Quality_4.webp"
          alt="beer"
        />
        <div className="w-full p-10">
          <h3 className="text-left text-2xl font-normal hover:font-bold">
            TECHNIQUE DE BRASSAGE
          </h3>

          <p className="text-left p-2">
            Notre brasserie ultramoderne de l'Aberdeenshire est le royaume de
            l'acier et des rêves. Nous disposons de 3 sites de brassage et d'un
            kit pilote d'innovation. Nous utilisons également l'énergie éolienne
            pour fabriquer notre bière, ainsi que des sous-produits de brassage
            (comme le CO2, l'eau et le biométhane) pour aider à la fabrication
            de la bière.
          </p>
        </div>
      </div>
      <h2 className="text-5xl">#BREW</h2>
    </div>
  );
}

export default Brewery;
