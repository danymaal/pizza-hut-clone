import classes from "./Bestsellers.module.scss";
import BestsellerItem from "./BestsellerItem";
import { images } from "../../UI/images";
import { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import { CartContext, CartProvider } from "../../store/context";
import { v4 } from "uuid";

const Bestsellers = () => {
  const { items, onAddToCart, cartItems } = useContext(CartContext);

  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     name: "MY BOX",
  //     description:
  //       "Pizza on dough in style San Francisco, size 23 cm and 2 appetizers up to your choice.",
  //     price: "209.00 CZK",
  //     image: images.img_1,
  //   },
  //   {
  //     id: 2,
  //     name: "DUO BOX",
  //     description:
  //       "New bigger Duo Box consists of one medium pizza 31 cm with dough in San Francisco...",
  //     price: "299.00 CZK",
  //     image: images.img_2,
  //   },
  //   {
  //     id: 3,
  //     name: "2x MEDIUM PIZZA SET",
  //     description:
  //       "Choose 2 medium size pizzas for favourable price privet kak dela normalni a u tebya       .",
  //     price: "379.00 CZK",
  //     image: images.img_3,
  //   },
  //   {
  //     id: 4,
  //     name: "3x MEDIUM PIZZA SET",
  //     description:
  //       "Choose 3 medium size pizzas for favourable price zdarova perec kak tvoi dela .",
  //     price: "529.00 CZK",
  //     image: images.img_4,
  //   },
  // ]);
  // const [cartItems, setCartItems] = useState([]);
  //
  // const onAddToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

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
              />
            ))}
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default Bestsellers;
