import React from "react";

function Header() {
  return (
    <div className="bg-nav-blue h-32 flex justify-between">
      <img
        className="h-20 mt-4 m-10"
        src="src/assets/chopeBiereAnimation1.png"
        alt="icone menu burger"
      />
      <img
        className="h-56 pt-8"
        src="src/assets/logo_brewdog.png"
        alt="brewdog logo"
      />
      <div className="flex ">
        <img
          className="h-11 mt-10 m-10"
          src="src/assets/loupe.png"
          alt="icone loupe"
        />
        <input
          className=" h-8 rounded-lg mt-10"
          placeholder="Search your beer "
        />
        <img
          className="h-11 mt-10 m-10"
          src="src/assets/panier.png"
          alt="icone panier"
        />
      </div>
    </div>
  );
}

export default Header;
