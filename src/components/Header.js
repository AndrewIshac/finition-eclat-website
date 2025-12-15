import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBoutiqueOpen, setIsBoutiqueOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsBoutiqueOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={scrollToTop}>
          <img src="/logo.png.jpg" alt="Finition Éclat Logo" className="logo-image" />
          <div className="logo-text">
            <h1>FINITION ÉCLAT</h1>
            <p className="tagline">L'Éclat du Bois que vous désirez</p>
          </div>
        </Link>
        
        <nav className="nav">
          {/* Desktop Menu */}
          <ul className="desktop-menu">
            <li><Link to="/" onClick={scrollToTop}>Accueil</Link></li>
            <li 
              className="dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className="dropdown-trigger">
                Services <span className="arrow">▼</span>
              </span>
              <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                <li><Link to="/services/escaliers" onClick={scrollToTop}>Escaliers</Link></li>
                <li><Link to="/services/cuisine" onClick={scrollToTop}>Cuisine</Link></li>
                <li><Link to="/services/plancher" onClick={scrollToTop}>Plancher</Link></li>
                <li><Link to="/services/portes" onClick={scrollToTop}>Portes</Link></li>
              </ul>
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => setIsBoutiqueOpen(true)}
              onMouseLeave={() => setIsBoutiqueOpen(false)}
            >
              <span className="dropdown-trigger">
                Boutique <span className="arrow">▼</span>
              </span>
              <ul className={`dropdown-menu ${isBoutiqueOpen ? 'show' : ''}`}>
                <li><Link to="/boutique/gants" onClick={scrollToTop}>Gants</Link></li>
                <li><Link to="/boutique/plancher" onClick={scrollToTop}>Plancher</Link></li>
                <li><Link to="/boutique/autres" onClick={scrollToTop}>Autres</Link></li>
              </ul>
            </li>
            <li><Link to="/about" onClick={scrollToTop}>À Propos</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="contact-link">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li className="mobile-submenu-title">Services</li>
          <li className="mobile-submenu-item">
            <Link to="/services/escaliers" onClick={closeMenu}>→ Finition des Escaliers</Link>
          </li>
          <li className="mobile-submenu-item">
            <Link to="/services/cuisine" onClick={closeMenu}>→ Rénovation de Cuisine</Link>
          </li>
          <li className="mobile-submenu-item">
            <Link to="/services/plancher" onClick={closeMenu}>→ Plancher</Link>
          </li>
          <li className="mobile-submenu-item">
            <Link to="/services/portes" onClick={closeMenu}>→ Portes</Link>
          </li>
          <li className="mobile-submenu-title">Boutique</li>
          <li className="mobile-submenu-item">
            <Link to="/boutique/gants" onClick={closeMenu}>→ Gants</Link>
          </li>
          <li className="mobile-submenu-item">
            <Link to="/boutique/plancher" onClick={closeMenu}>→ Plancher</Link>
          </li>
          <li className="mobile-submenu-item">
            <Link to="/boutique/autres" onClick={closeMenu}>→ Autres</Link>
          </li>
          <li><Link to="/about" onClick={closeMenu}>À Propos</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="contact-link-mobile">Contactez-nous</Link></li>
        </ul>
        
        {/* Contact Info in Mobile Menu */}
        <div className="mobile-menu-contact">
          <p><strong>Téléphone:</strong></p>
          <p><a href="tel:+14503411121">(450) 341-1121</a></p>
          <p><a href="tel:+15148343554">(514) 834-3554</a></p>
          <p><strong>Email:</strong></p>
          <p><a href="mailto:info@finitioneclat.ca">info@finitioneclat.ca</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;
