/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

function ShoppingCart({
  visibility,
  products,
  onQuantityChange,
  HandleDisplayCart,
}) {
  return (
    <div
      style={{ display: visibility ? "block" : "none" }}
      className="fixed  inset-0  bg-black bg-opacity-25 backdrop-blur-sm z-10 flex"
    >
      <div
        className="w-[600px] flex bg-white bg-opacity-70
            rounded-lg justify-center items-center"
      >
        <div>
          <h2>ShoppingCart</h2>
          <button onClick={HandleDisplayCart} type="button">
            X
          </button>
        </div>
        <div>
          {products.length === 0 && <span>Your basket is empty mate !!</span>}
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image_url} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.target_fg * product.count}$</p>
              </div>
              <select
                value={product.count}
                onChange={(e) => {
                  onQuantityChange(product.id, e.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ShoppingCart.PropTypes = {
  isVisibility: PropTypes.bool.isRequired,
  products: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default ShoppingCart;
