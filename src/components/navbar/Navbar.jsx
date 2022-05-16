import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={classes.navbarWrapper}>

        <div className={classes.navbar}>
            <div>
                <ul className={classes.ulist}>
                    <li className={classes.menu}><a>MENU</a></li>
                    <li><a>RESTAURANTS</a>  </li>
                    <li><a>SAFETY</a></li>
                    <li>PIZZA HUT TAKEAWAY</li>
                    <li>CONTACT</li>
                </ul>
            </div>
    <h1>EN</h1>
        </div>
        </div>
    )
}

export default Navbar