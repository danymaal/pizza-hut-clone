import React, { useContext } from 'react';
import CartContext from '../../../store/context';
import CartItem from '../CartItem/CartItem';
import classes from './Cart.module.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import EmptyCart from '../EmptyCart/EmptyCart';

const Cart = () => {
  const cartContext = useContext(CartContext);

  const onAddItemToCart = item => {
    cartContext.addItemToCart({ ...item, amount: 1 });
  };

  const onRemoveItemFromCart = id => {
    cartContext.removeItemFromCart(id);
  };

  const showCart = cartContext.items.length > 0;
  let showCartItems = false;

  if (showCart) {
    showCartItems = true;
  } else {
    showCartItems = false;
  }

  return (
    <>
      {showCartItems && (
        <div className={classes.container}>
          <div className={classes['items-section']}>
            <h1 className={classes['shopping-title']}>Shopping cart</h1>
            <div className={classes['second-container']}>
              <p className={classes['second-item']}>ITEM</p>
              <p className={classes['second-item']}>ITEM PRICE</p>
              <p className={classes['second-item']}>QUANTITY</p>
              <p className={classes['second-item']}>TOTAL PRICE</p>
            </div>
            {cartContext.items.map(item => (
              <CartItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                id={item.id}
                src={item.src}
                amount={item.amount}
                onAddItem={onAddItemToCart.bind(null, item)}
                onRemoveItem={onRemoveItemFromCart.bind(null, item.id)}
              />
            ))}
          </div>
          <OrderSummary />
        </div>
      )}
      {!showCartItems && <EmptyCart />}
    </>
  );
};
export default Cart;
