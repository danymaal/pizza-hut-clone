import classes from "./CartItem.module.scss";
import QuantityInput from "../../UI/QuantityInput";

const CartItem = ({ name, description, image, price }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cart}>
        <div className={classes["cart-item"]}>
          <img className={classes["item-image"]} src={image} />
          <div className={classes["cart-sides"]}>
            <div className={classes["left-side"]}>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={classes["right-side"]}>
          <strong className={classes.price}>{price}</strong>
          <QuantityInput />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
