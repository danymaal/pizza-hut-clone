import React, { useContext } from 'react';
import CartContext from '../../store/context';
import CartItem from './CartItem';

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div>
      {cartContext.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Cart;
