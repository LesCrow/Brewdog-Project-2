import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import CartItem from "./CartItem";

function ShoppingCart() {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <div>
      {showCart && (
        <div>
          <div>
            <button type="button" onClick={showHideCart}>
              X
            </button>
          </div>
          <div>
            {cartItems.length === 0 ? (
              <span>Sorry Mate your cart is empty !!</span>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div>
            <div>Cart Total</div>
            <div>
              {cartItems.reduce((amount, item) => item.target_fg + amount, 0)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
