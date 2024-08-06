import './NavBar.css'
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          
          {isScrolled ? (
            <div className="menu-button">
              <button onClick={toggleMenu}>
                <Menu size={24} color='#fff' />
              </button>
            </div>
          ) : (
            <div className="nav-links">
              <ul>
                {navItems.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {isScrolled && isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Navbar;