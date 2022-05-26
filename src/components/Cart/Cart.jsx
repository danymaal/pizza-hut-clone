import { CartContext } from '../../store/context';
import { useContext } from 'react';
import CartItem from './CartItem';
import { v4 } from 'uuid';
import classes from './Cart.module.scss';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const { cartItems, onRemoveFromCart, itemsPrice } = useContext(CartContext);
  return (
    <>
      {cartItems.length === 0 && <EmptyCart />}
      <div className={classes['main-wrapper']}>
        {cartItems.length > 0 && (
          <>
            <div className={classes['items-section']}>
              <div className={classes['cart-title']}>
                <h1 className={classes['cart-heading']}>Cart</h1>
              </div>
              <div className={classes.container}>
                <div className={classes['container-title']}>Item</div>
                <div>Item Price</div>
                <div>Quantity</div>
                <div>Total price</div>
              </div>

              {cartItems.map(item => (
                <CartItem
                  key={v4()}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  onRemoveFromCart={onRemoveFromCart}
                  item={item}
                />
              ))}
            </div>
            <div className={classes['checkout-section']}>
              <div className={classes['total-content']}>
                <h1 className={classes.summary}>ORDER SUMMARY</h1>
                <h1
                  className={classes['total-price']}
                >{`TOTAL : ${itemsPrice} CZK`}</h1>
                <button className={classes.proceed}>PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
