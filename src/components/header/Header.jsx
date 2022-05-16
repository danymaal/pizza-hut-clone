import classes from './Header.module.scss'
import image from '../../assets/pizzahut-logo.de3ee51.svg'

const Header = () => {
    return (
        <div className={classes.headerWrapper}>

        <div className={classes.header}>
            <div><img src = {image} alt = 'logo img'/></div>
            <button className={classes.button}>Log In</button>
        </div>
        </div>
        )

}

export default Header