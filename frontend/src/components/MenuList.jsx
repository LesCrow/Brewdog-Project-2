import React from "react";

function MenuList() {
  return (
    <nav className="bg-nav-blue ">
      <ul className="text-white flex flex-col h-screen justify-around items-center">
        <li>
          <p className="text-3xl">THE SHOP</p>
        </li>
        <li>
          <p className="text-3xl">THE BREWERY</p>
        </li>
        <li>
          <p className="text-3xl">CONTACT US</p>
        </li>
      </ul>
    </nav>
  );
}

export default MenuList;
