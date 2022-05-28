import classes from './CartItem.module.scss';
import AmountInput from '../AmountInput/AmountInput';

const CartItem = ({
  name,
  description,
  price,
  src,
  amount,
  onAddItem,
  onRemoveItem,
}) => {
  const totalPrice = price * amount;

  return (
    <div className={classes.container}>
      <div className={classes['item-description']}>
        <img className={classes.image} src={src} alt="cart item img" />
        <div>
          <h1>{name}</h1>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
      <strong>{`${price}.00 CZK`}</strong>
      {/*<p>{amount}</p>*/}
      <div>
        <AmountInput
          amount={amount}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
        />
      </div>
      <p>{`${totalPrice}.00 CZK`}</p>
    </div>
  );
};

export default CartItem;
