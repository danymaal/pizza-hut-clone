import classes from "./BestsellerItem.module.scss";
import Button from "../../UI/Button";

const BestesellerItem = ({
  name,
  description,
  price,
  src,
  onAddToCart,
  item,
  id,
}) => {
  return (
    <div className={classes.block}>
      <img src={src} alt="product img" className={classes["food-img"]} />
      <div className={classes.content}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>
        <div className={classes.bottom}>
          <span className={classes.price}>{`${price} CZK`}</span>
          <Button onAddToCart={onAddToCart} item={item} id={id} />
        </div>
      </div>
    </div>
  );
};

export default BestesellerItem;
