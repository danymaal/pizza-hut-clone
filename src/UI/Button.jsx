import classes from "./Button.module.scss";
import { useContext, useState } from "react";
import CartContext from "../store/context";

const Button = ({ onAddToCart, item, disabled, id, isAddedToCart }) => {
  const { buttonTitle } = useContext(CartContext);

  return (
    <button
      className={classes.button}
      onClick={() => {
        onAddToCart(item, id);
      }}
      disabled={isAddedToCart}
    >
      {buttonTitle}
    </button>
  );
};

export default Button;
