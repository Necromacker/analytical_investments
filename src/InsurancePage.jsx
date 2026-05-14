import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InsurancePage.css';

const InsurancePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (type) => {
    navigate(`/insurance/${type}`);
  };

  return (
    <div className="insurance-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i> HQ, Jayanagar, Bengaluru
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i> ravi@analyticalinvestments.com
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i> (+91) 831 731 8136
          </div>
        </div>
        <div className="top-bar-right">
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/918317318136"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src="/LOGO.png" alt="Analytical Investment" className="navbar-logo-img" />
          </Link>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

          <div className="nav-item dropdown">
            <div className="dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)}>
              Products <i className={`fas fa-chevron-down ${productsOpen ? 'up' : ''}`}></i>
            </div>
            <div className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
              <Link to="/insurance" className="dropdown-item active" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
              <Link to="/mutual-funds" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link to="/services" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/without-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Without Collateral</Link>
              <Link to="/with-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
            </div>
          </div>

          <a href="/#emi" className="nav-item" onClick={() => setMobileMenuOpen(false)}>EMI Calculator</a>
          <a href="/#blog" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="/#contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact US</a>
        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="insurance-hero">
        <div className="insurance-hero-content">
          <h1 className="insurance-hero-title">Insurance Services Under One Roof</h1>
          <p className="insurance-subtitle">
            Complete protection for your life, health, assets, business, and investments.
          </p>

          <button className="apply-btn" onClick={() => window.location.href = '/#contact'}>Get a Quote</button>
        </div>
      </section>

      {/* Insurance Services Grid */}
      <section className="insurance-services">
        <div className="container">
          <h2 className="section-title">Types of Insurance We Offer</h2>
          <div className="insurance-grid">
            <div className="ins-card" onClick={() => handleCardClick('motor-insurance')} style={{ cursor: 'pointer' }}>
              <div className="ins-icon"><i className="fas fa-car"></i></div>
              <h3>Motor Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('health-insurance')} style={{ cursor: 'pointer' }}>
              <div className="ins-icon"><i className="fas fa-heartbeat"></i></div>
              <h3>Health Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('travel-insurance')} style={{ cursor: 'pointer' }}>
              <div className="ins-icon"><i className="fas fa-plane"></i></div>
              <h3>Travel Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('home-property-insurance')} style={{ cursor: 'pointer' }}>
              <div className="ins-icon"><i className="fas fa-home"></i></div>
              <h3>Home & Property Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('business-commercial-insurance')} style={{ cursor: 'pointer' }}>
              <div className="ins-icon"><i className="fas fa-building"></i></div>
              <h3>Business / Commercial Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('miscellaneous-insurance')} style={{ cursor: 'pointer' }}>
              <div className="ins-icon"><i className="fas fa-mobile-alt"></i></div>
              <h3>Miscellaneous Insurance</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col about">
            <img src="/LOGO.png" alt="Analytical Investment" className="footer-logo" />
            <p>Analytical Investment is your trusted partner for financial and real estate solutions with over 25 years of expertise.</p>
            <div className="footer-socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/918317318136"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="footer-col links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col services">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/without-collateral">Without Collateral</Link></li>
              <li><Link to="/with-collateral">With Collateral</Link></li>
              <li><Link to="/insurance">Insurance Services</Link></li>
              <li><Link to="/mutual-funds">Mutual Funds</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>

          <div className="footer-col contact">
            <h3>Contact Us</h3>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>HQ, Jayanagar, Bengaluru</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <span>ravi@analyticalinvestments.com</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>(+91) 831 731 8136</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Analytical Investment. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/918317318136" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default InsurancePage;
