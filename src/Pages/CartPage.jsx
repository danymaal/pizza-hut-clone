import Cart from "../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../store/context";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Cart cartItems={cartItems} />
    </>
  );
};

export default CartPage;
