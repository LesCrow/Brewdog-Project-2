import React from "react";

function MenuList() {
  return (
    <nav className="bg-nav-blue ">
      <ul className="flex flex-col h-screen  justify-around items-center">
        <li>
          <p className="text-5xl">THE SHOP</p>
        </li>
        <li>
          <p className="text-5xl">THE BREWERY</p>
        </li>
        <li>
          <p className="text-5xl">CONTACT US</p>
        </li>
      </ul>
    </nav>
  );
}

export default MenuList;
