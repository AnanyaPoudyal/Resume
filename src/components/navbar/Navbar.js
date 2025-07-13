import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <p>Ananya Poudyal</p>
            </div>
            <nav className={menuOpen ? 'open' : ''}>
                <a href="#home"> Home </a>
                <a href="#project"> Project </a>
                <a href="#certification">Certification</a>
                <a href="mailto:ananyapoudyal2@gmail.com" className="contact-btn">
                    Contact Me
                </a>
            </nav>
            <div className='hamburger' onClick={toggleMenu}>
                =
            </div>
        </div>

    );
}
export default Navbar;