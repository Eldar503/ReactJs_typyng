
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__top"></div>
                <div className="header__bottom"></div>
                <nav className="header__nav nav">
                    <ul className="nav__menu">
                        <li className="header__item"><a href="#" className="nav__link">Home</a></li>
                        <li className="header__item"><a href="#" className="nav__link">New In</a></li>
                        <li className="header__item"><a href="#" className="nav__link">Women Product</a></li>
                        <li className="header__item"><a href="#" className="nav__link">Men Product</a></li>
                        <li className="header__item"><a href="#" className="nav__link">Top Brands</a></li>
                        <li className="header__item"><a href="#" className="nav__link">Special Offers</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;