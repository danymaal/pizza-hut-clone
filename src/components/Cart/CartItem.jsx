const CartItem = ({ name, description, price }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
};

export default CartItem;
