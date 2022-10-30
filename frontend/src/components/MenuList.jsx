import React from "react";

function MenuList() {
  return (
    <div>
      <nav>
        <ul className="bg-nav-blue h-screen flex flex-col justify-around items-center">
          <li>
            <p>THE SHOP</p>
          </li>
          <li>
            <p>THE BREWERY</p>
          </li>
          <li>
            <p>CONTACT US</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuList;
