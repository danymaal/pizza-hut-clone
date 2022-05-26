import { createContext } from 'react';

export const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
};

export const ModalContext = createContext({});

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: item => {},
});

export default CartContext;
