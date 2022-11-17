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
            className="flex w-5/6 overflow-y-auto h-5/6 flex-col bg-white 
            rounded-lg"
          >
            <div className="fixed flex flex-row justify-around items-center z-10  bg-bargreen h-10 w-5/6 rounded-t-lg">
              <h3 className="">Shopping Cart</h3>
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
                <div className="p-6 ">
                  <table className="w-full overflow-y-auto mt-4 ">
                    <tr className="hidden">
                      {categories.map((cat) => (
                        <th>{cat}</th>
                      ))}
                    </tr>

                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </table>
                  <div className="flex justify-end pt-10  ">
                    <div className="bg-backpink rounded-lg h-10 w-36 flex justify-center items-center">
                      Cart Total :{" "}
                      {cartItems.reduce(
                        (amount, item) => item.target_fg + amount,
                        0
                      )}
                      $
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
