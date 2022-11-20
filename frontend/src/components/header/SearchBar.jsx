import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [filtered, setFiltered] = useState("");

  return (
    <div>
      <Link to="/shop">
        <input
          type="text"
          placeholder="Search a beer"
          className="h-8 w-16 md:w-[80%] mr-4  rounded-md ml-2 "
          onChange={(e) => {
            setFiltered(e.target.value);
          }}
        />
        {console.error(filtered)}
      </Link>
    </div>
  );
}

export default SearchBar;
