import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src="/LOGO.png" alt="Analytical Investment" className="navbar-logo-img" />
        </Link>
      </div>

      <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={`nav-item ${activePage === 'home' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" className={`nav-item ${activePage === 'about' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>

        <div className="nav-item dropdown">
          <div className="dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)}>
            Products <i className={`fas fa-chevron-down ${productsOpen ? 'up' : ''}`}></i>
          </div>
          <div className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
            <Link to="/insurance" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
            <Link to="/mutual-funds" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
            <Link to="/services" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/without-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Without Collateral</Link>
            <Link to="/with-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
          </div>
        </div>

        <Link to="/emi-calculator" className={`nav-item ${activePage === 'emi' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>EMI Calculator</Link>
        <Link to="/blog" className={`nav-item ${activePage === 'blog' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        <Link to="/contact" className={`nav-item ${activePage === 'contact' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
      </div>

      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

export default Navbar;
