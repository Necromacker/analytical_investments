import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MutualFundsPage.css';

const MutualFundsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mutual-funds-page">
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
              <Link to="/insurance" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
              <Link to="/mutual-funds" className="dropdown-item active" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link to="/services" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/without-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Without Collateral</Link>
              <Link to="/with-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
            </div>
          </div>

          <Link to="/emi-calculator" className="nav-item" onClick={() => setMobileMenuOpen(false)}>EMI Calculator</Link>
          <a href="/#blog" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="/#contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mf-hero">
        <div className="mf-hero-content">
          <h1 className="mf-hero-title">Mutual Funds with Purpose. Backed by Expertise.</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mf-intro">
        <div className="container">
          <div className="mf-intro-flex">
            <div className="mf-intro-content">
              <h2 className="mf-section-title">Grow Your Wealth, the Smarter Way</h2>
              <div className="title-underline-left"></div>
              <p>
                At Analytical Investments, mutual funds are not just another product — they’re a powerful tool to help you reach your financial goals. Whether you’re a first-time investor or a seasoned professional, our mutual fund solutions are tailored to your needs, backed by experienced guidance and technology-enabled execution.
              </p>
            </div>
            <div className="mf-intro-image">
              <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grow Your Wealth" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="mf-why">
        <div className="container">
          <h2 className="section-title">Why Invest Through Us?</h2>
          
          <div className="mf-why-grid">
            <div className="mf-why-card">
              <div className="mf-why-icon"><i className="fas fa-hands-helping"></i></div>
              <h3>Handholding for First-Time Investors</h3>
              <p>From explaining basics to setting up investments, we walk with you at every step.</p>
            </div>
            <div className="mf-why-card">
              <div className="mf-why-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Goal-Based Investing</h3>
              <p>Whether it’s retirement, children’s education, or wealth creation, we map your investments to your life’s goals.</p>
            </div>
            <div className="mf-why-card">
              <div className="mf-why-icon"><i className="fas fa-user-tie"></i></div>
              <h3>Always-on Guidance</h3>
              <p>You get access to personalized attention — not just a dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mf-process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle-center">Simple. Paperless. Personal.</p>
          
          <div className="mf-process-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>We Understand Your Goals</h3>
                <p>Through a quick consultation, we identify what truly matters to you.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>We Recommend the Right Funds</h3>
                <p>Based on your goals, risk profile, and time horizon.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>We Guide You Through Execution</h3>
                <p>Easy, paperless investment process.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>We Stay in Touch</h3>
                <p>Ongoing portfolio reviews and periodic rebalancing as required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mf-cta">
        <div className="container">
          <div className="mf-cta-content">
            <h2>Let’s Talk Investments</h2>
            <p>Have questions? Need clarity? Want to get started?</p>
            <p className="whatsapp-text">Tap the WhatsApp button and our expert will guide you from there</p>
            <a href="https://wa.me/918317318136" className="mf-whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> Whatsapp Now
            </a>
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
            <h3>Our Products</h3>
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
            <div className="footer-contact-item"><i className="fas fa-map-marker-alt"></i> <span>HQ, Jayanagar, Bengaluru</span></div>
            <div className="footer-contact-item"><i className="fas fa-envelope"></i> <span>ravi@analyticalinvestments.com</span></div>
            <div className="footer-contact-item"><i className="fas fa-phone-alt"></i> <span>(+91) 831 731 8136</span></div>
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

export default MutualFundsPage;
