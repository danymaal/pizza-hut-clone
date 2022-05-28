import { createContext } from 'react';

export const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
};

export const ModalContext = createContext({});

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: item => {},
  removeItemFromCart: id => {},
});

export default CartContext;
