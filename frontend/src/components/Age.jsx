import React from "react";

function Age() {
  return (
    <div className="age">
      <img src="src/assets/LogoEnterTheWebSite.png" alt="Age" />
      <h1>How old are you ?</h1>
      <div>
        <input name="Day" placeholder="Day" />
        <input name="Month" placeholder="Month" />
        <input name="Years" placeholder="Years" />
        <button type="submit">Cheers!</button>
      </div>
    </div>
  );
}

export default Age;
