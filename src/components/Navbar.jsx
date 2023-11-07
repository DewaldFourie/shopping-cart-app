import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
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
                    <NavLink to="/">Brand Name</NavLink>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                    <NavLink to="/" exact activeClassName="active" onClick={toggleMobileMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/shop" activeClassName="active" onClick={toggleMobileMenu}>
                        Shop
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active" onClick={toggleMobileMenu}>
                        Contact
                    </NavLink>
                </div>
                <div className="your-cart">
                    <NavLink to="/" onClick={toggleMobileMenu}>
                        Cart
                    </NavLink>
                </div>
                <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
