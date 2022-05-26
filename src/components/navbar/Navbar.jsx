import classes from "./Navbar.module.scss";
import { images } from "../../UI/images";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/context";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <div>
          <ul className={classes.ulist}>
            <li className={classes.menu}>
              <Link className={classes["menu-link"]} to="/">
                MENU
              </Link>
            </li>
            <li>
              <a className={classes["dummy-link"]} href="#">
                RESTAURANTS
              </a>{" "}
            </li>
            <li>
              <a className={classes["dummy-link"]} href="#">
                SAFETY
              </a>
            </li>
            <li>PIZZA HUT TAKEAWAY</li>
            <li>CONTACT</li>
            <li></li>
          </ul>
        </div>
        <div className={classes["right-section"]}>
          <div className={classes["cart-components"]}>
            <img className={classes["cart-img"]} src={images.cart_img} alt="" />
            <Link className={classes.cart} to="/cart">
              Cart ({cartItems.length})
            </Link>
          </div>
          <h1>EN</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
