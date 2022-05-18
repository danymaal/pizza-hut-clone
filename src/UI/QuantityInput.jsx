import classes from "./QuantityInput.module.scss";

const QuantityInput = () => {
  return (
    <div className={classes.quantity}>
      <h3 className={classes.item}>+</h3>
      <h4 className={classes.item}>0</h4>
      <h3 className={classes.item}>-</h3>
    </div>
  );
};

export default QuantityInput;
