import classes from "./CartItem.module.scss";
import QuantityInput from "../../UI/QuantityInput";

const CartItem = ({
  name,
  description,
  image,
  price,
  onRemoveFromCart,
  item,
}) => {
  return (
    <div className={classes["all-wrapper"]}>
      <div className={classes["wrapper-items"]}>
        <div className={classes.cart}>
          <div className={classes["cart-item"]}>
            <img className={classes["item-image"]} src={image} />
            <h3>{name}</h3>
            <strong className={classes.price}>{`${price} CZK`}</strong>
            <QuantityInput />
          </div>
          <div className={classes["right-side"]}>
            {/*<button onClick={() => onRemoveFromCart(item)}>Remove</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
