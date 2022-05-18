import classes from "./Button.module.scss";

const Button = ({ onAddToCart, item }) => {
  return (
    <button className={classes.button} onClick={() => onAddToCart(item)}>
      Select...
    </button>
  );
};

export default Button;
