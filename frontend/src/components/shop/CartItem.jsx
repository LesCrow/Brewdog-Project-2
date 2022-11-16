import React, { useContext } from "react";
import PropTypes from "prop-types";

import CartContext from "../../context/Cart/CartContext";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <li>
      <img src={item.image_url} alt="une biere" />
      <div>
        {item.name} {item.target_fg}
      </div>
      <button onClick={() => removeItem(item.id)} type="button">
        X
      </button>
    </li>
  );
}
CartItem.propTypes = {
  item: PropTypes.objectOf().isRequired,
};

export default CartItem;
