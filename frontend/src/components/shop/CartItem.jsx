import React, { useContext } from "react";
import PropTypes from "prop-types";

import CartContext from "../../context/Cart/CartContext";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <tr className=" border-b-4 border-black">
      <th className="">
        <img
          src={item.image_url}
          alt="une biere"
          className="w-8 h-28 mx-4 my-4 "
        />
      </th>
      <th>{item.name}</th>
      <th> {item.target_fg}$</th>
      <th>
        <button
          onClick={() => removeItem(item.id)}
          type="button"
          className="bg-red-600 rounded-full w-6"
        >
          X
        </button>
      </th>
    </tr>
  );
}
CartItem.propTypes = {
  item: PropTypes.objectOf().isRequired,
};

export default CartItem;
