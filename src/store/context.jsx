import { createContext, useEffect } from "react";
import { useState } from "react";
import { images } from "../UI/images";

export const ModalContext = createContext({});

export const CartContext = createContext({});

export const CartProvider = (props) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "MY BOX",
      description:
        "Pizza on dough in style San Francisco, size 23 cm and 2 appetizers up to your choice.",
      price: 209.0,
      image: images.img_1,
      isAddedToCart: false,
    },
    {
      id: 2,
      name: "DUO BOX",
      description:
        "New bigger Duo Box consists of one medium pizza 31 cm with dough in San Francisco...",
      price: 299.0,
      image: images.img_2,
      isAddedToCart: false,
    },
    {
      id: 3,
      name: "2x MEDIUM PIZZA SET",
      description:
        "Choose 2 medium size pizzas for favourable price privet kak dela normalni a u tebya       .",
      price: 379.0,
      image: images.img_3,
      isAddedToCart: false,
    },
    {
      id: 4,
      name: "3x MEDIUM PIZZA SET",
      description:
        "Choose 3 medium size pizzas for favourable price zdarova perec kak tvoi dela .",
      price: 529.0,
      image: images.img_4,
      isAddedToCart: false,
    },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [buttonTitle, setButtonTitle] = useState("Select...");

  const itemsPrice = Number(cartItems.reduce((a, c) => a + c.price, 0));

  const [disabled, setDisabled] = useState(true);
  const onAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setButtonTitle("Item was added");
    setDisabled(false);
  };

  const onRemoveFromCart = (item) => {
    // const exist = cartItems.find((x) => x.id === item.id);
    // if (exist) {
    setCartItems(cartItems.filter((x) => x.id !== item.id));
    // }
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        cartItems: cartItems,
        onAddToCart,
        onRemoveFromCart,
        buttonTitle,
        setButtonTitle,
        itemsPrice,
        disabled,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
