// The Navbar components (Parent to the Cart component)

import { useContext ,useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import './styles/navbar.css';
import { CartContext } from '../context/cartContext';
import cartIcon from '../assets/cart-icon.png'
import cartIconWhite from '../assets/cart-icon-white.png'

function Navbar() {
    // getCartItemTotal function from context
    const {getCartItemTotal} = useContext(CartContext)
    // state initiation
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [wiggle, setWiggle] = useState(false);


    // function to toggle the mobile burger menu @ certain media query
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // function to show/hide cart component
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    // function to set Navbar to sticky when scrolling
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

    // ada animation when cart total changes 
    useEffect(() => {
        // Add the 'wiggle' class for a short time when getCartItemTotal changes
        setWiggle(true);
        const timeout = setTimeout(() => {
            setWiggle(false);
        }, 500); 
        return () => clearTimeout(timeout);
    }, [getCartItemTotal]);


    return (
        <nav className={`navbar ${isNavbarSticky ? 'sticky' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="container">
                <div className={`brand-name ${isNavbarSticky ? 'sticky' : ''}`}>
                    <NavLink to="/home">VirtueVogue</NavLink>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile' : '' } ${isNavbarSticky ? 'sticky' : ''}`}>
                    <NavLink to="/home" exact activeClassName="active" onClick={toggleMobileMenu}>
                        HOME
                    </NavLink>
                    <NavLink to="/shop" activeClassName="active" onClick={toggleMobileMenu}>
                        SHOP
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active" onClick={toggleMobileMenu}>
                        CONTACT
                    </NavLink>
                </div>
                <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''} ${isNavbarSticky ? 'sticky' : ''}`} onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className={`your-cart ${wiggle ? 'wiggle' : ''}`}>
                    <div><img className='cart-icon' src={isNavbarSticky ? cartIconWhite : cartIcon} alt="Cart"  onClick={toggleCart}/></div>
                    <div className='badge'>{getCartItemTotal()}</div>
                </div>
                <Cart isOpen={isCartOpen} closeCart={toggleCart}/>
            </div>
        </nav>
    );
}

export default Navbar;
