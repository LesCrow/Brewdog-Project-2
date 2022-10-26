import Title from "@components/Title";
import React from "react";

function Brewery() {
  return (
    <div>
      <Title title={"BREWERY"} />

      <img className="" src="src/assets/history-2012.jpeg" alt="brewery" />

      <h2 className="text-center text-5xl">NOTRE BRASSERIE A ELLON</h2>
      <h3 className="text-right text-2xl">Ingredients</h3>
      <p className="text-right">
        Il ne faut que 4 ingrédients pour brasser de la bière, mais ce que nous
        faisons avec ces ingrédients est ce qui la rend spéciale. L'orge maltée
        la plus fine, le houblon de haute qualité, l'eau de source écossaise
        purifiée et nos propres souches de levure maison se réunissent en
        harmonie pour créer de la bière pour tous.
      </p>
      <img
        src="src/assets/155_-_bronze_beers_-_may_2021_19052021_-_brewdog_-_grant_anderson_-_fullsize.jpeg"
        alt="technique"
      />
      <h3 className="text-center text-2xl">
        DE LA BONNE BIÈRE QUI FAIT DU BIEN
      </h3>
      <p>
        La qualité exceptionnelle est la pierre angulaire de notre brasserie.
        Toutes les bières BrewDog sont brassées à partir d'orge maltée et de
        houblon de la meilleure qualité provenant des meilleurs producteurs du
        monde entier.
      </p>
      <img src="src/assets/Beer_Quality_4.webp" alt="beer" />
      <h3 className="text-left text-2xl">TECHNIQUE DE BRASSAGE</h3>

      <p className="text-left">
        Notre brasserie ultramoderne de l'Aberdeenshire est le royaume de
        l'acier et des rêves. Nous disposons de 3 sites de brassage et d'un kit
        pilote d'innovation. Nous utilisons également l'énergie éolienne pour
        fabriquer notre bière, ainsi que des sous-produits de brassage (comme le
        CO2, l'eau et le biométhane) pour aider à la fabrication de la bière.
      </p>
    </div>
  );
}

export default Brewery;
