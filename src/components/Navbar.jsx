import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import './styles/navbar.css';
import cartIcon from '../assets/cart-icon.png'

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartTotalItems, setCartTotalItems] = useState(0);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsNavbarSticky(true);
            } else {
                setIsNavbarSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isNavbarSticky ? 'sticky' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="container">
                <div className="brand-name">
                    <NavLink to="/home">Brand Name</NavLink>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                    <NavLink to="/home" exact activeClassName="active" onClick={toggleMobileMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/shop" activeClassName="active" onClick={toggleMobileMenu}>
                        Shop
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active" onClick={toggleMobileMenu}>
                        Contact
                    </NavLink>
                </div>
                <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="your-cart">
                    <div><img className='cart-icon' src={cartIcon} alt="Cart"  onClick={toggleCart}/></div>
                    <div className='badge'>{cartTotalItems}</div>
                </div>
                <Cart isOpen={isCartOpen} closeCart={toggleCart} onTotalItemsChange={setCartTotalItems}/>
            </div>
        </nav>
    );
}

export default Navbar;
