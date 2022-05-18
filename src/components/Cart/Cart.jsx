import { CartContext } from "../../store/context";
import { useContext } from "react";
import CartItem from "./CartItem";
import { v4 } from "uuid";
import classes from "./Cart.module.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.length === 0 && (
        <div>
          <div className={classes["no-items"]}>
            <h1 className={classes["no-items__heading"]}>Cart is empty</h1>
          </div>
          <div className={classes["no-items__menu"]}>
            <Link to="/">Go to Menu</Link>
          </div>
        </div>
      )}
      {cartItems &&
        cartItems.map((item) => (
          <CartItem
            key={v4()}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
    </div>
  );
};

export default Cart;
