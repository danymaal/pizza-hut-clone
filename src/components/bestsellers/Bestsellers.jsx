import classes from "./Bestsellers.module.scss";
import BestsellerItem from "./BestsellerItem";
import { useContext, useState } from "react";
import { CartContext, CartProvider } from "../../store/context";
import { v4 } from "uuid";

const Bestsellers = () => {
  const { items, onAddToCart, cartItems } = useContext(CartContext);

  return (
    <CartProvider>
      <div>
        <div className={classes.section}>
          <h1 className={classes.title}>BESTSELLERS</h1>
        </div>
        <div className={classes["item-wrapper"]}>
          <div className={classes.grid}>
            {items.map((item) => (
              <BestsellerItem
                key={v4()}
                name={item.name}
                description={item.description}
                price={item.price}
                src={item.image}
                onAddToCart={onAddToCart}
                item={item}
                id={v4()}
                isAddedToCart={item.isAddedToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default Bestsellers;
