import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function CartItemQuantity({ cartItems }) {
  const totalItem = cartItems.reduce(
    (acc, curr) => acc.quantity + curr.quantity,
    0
  );
  return (
    <motion.div
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", bounce: 0.8 }}
      className=" absolute ml-20 bg-backcolor rounded-full h-6 w-6 flex justify-center font-fun"
    >
      <motion.span>{cartItems.length}</motion.span>
    </motion.div>
  );
}

CartItemQuantity.propTypes = {
  cartItems: PropTypes.objectOf().isRequired,
};
export default CartItemQuantity;
