import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import CartItem from "./CartItem";

function ShoppingCart() {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  const categories = ["produits", "descriptif", "prix", "delete"];
  return (
    <div>
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
          <div
            className=" flex w-3/4 flex-col bg-white bg-opacity-70
            rounded-lg "
          >
            <div className="flex justify-between p-4 ">
              <h3>Shopping Cart</h3>
              <h5 onClick={showHideCart} className="cursor-pointer">
                Close Shop
              </h5>
            </div>
            <div>
              {cartItems.length === 0 ? (
                <span className="flex justify-center">
                  Sorry Mate your cart is empty !!
                </span>
              ) : (
                <div className="p-6">
                  <table className="w-full  ">
                    <tr className="hidden">
                      {categories.map((cat) => (
                        <th>{cat}</th>
                      ))}
                    </tr>

                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
        // <div>
        //   <div>
        //     <button type="button" onClick={showHideCart}>
        //       X
        //     </button>
        //   </div>

        //   <div>
        //     <div>Cart Total</div>
        //     <div>
        //       {cartItems.reduce((amount, item) => item.target_fg + amount, 0)}
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
}

export default ShoppingCart;
