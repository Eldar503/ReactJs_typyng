
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__top"></div>
                <div className="header__bottom"></div>
                <nav className="header__nav">
                    <ul className="nav__menu">
                        <li className="header__item"><a href="#" className="nav__link">Home</a></li>
                        <li className="header__item"><a href="#" className="nav__link">New In</a></li>
                        <li className="header__item"><a href="#" className="nav__link"></a></li>
                        <li className="header__item"><a href="#" className="nav__link"></a></li>
                        <li className="header__item"><a href="#" className="nav__link"></a></li>
                        <li className="header__item"><a href="#" className="nav__link"></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;