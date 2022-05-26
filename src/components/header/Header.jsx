import classes from './Header.module.scss';
import image from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <div>
          <Link to="/">
            <img src={image} alt="logo img" />
          </Link>
        </div>
        <button className={classes.button}>Log In</button>
      </div>
    </div>
  );
};

export default Header;
