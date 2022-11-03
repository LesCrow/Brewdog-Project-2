import React from "react";

function footer() {
  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="Email"
          name="Email"
          className=""
          required
        />
        <input
          type="text"
          placeholder="Suscribe"
          name="Suscribe"
          className=""
          required
        />
        <h2>
          <p>Email</p>
          <p>Suscribe</p>
        </h2>
        <div>
          <h3>SHOP</h3>
          <h3>BREWERY</h3>
          <h3>CONTACT</h3>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-4 place-content-between h-48 ...">
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>SMDJT-2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default footer;
