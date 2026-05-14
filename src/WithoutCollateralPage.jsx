import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WithoutCollateralPage.css';

const WithoutCollateralPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Unsecured Business Loan",
      icon: "fa-briefcase",
      subtitle: "Your Vision, Our Support – No Collateral Needed!",
      content: "Unsecured business loans are loans provided to businesses without requiring collateral. This means that the borrower does not have to pledge any assets like property, equipment, or inventory to secure the loan. Instead, the loan is granted based on the creditworthiness of the business and its owners, as well as other factors like business performance, revenue, and overall financial health."
    },
    {
      title: "Unsecured Working Capital",
      icon: "fa-hand-holding-usd",
      subtitle: "Grow your business with CGTMSE",
      content: "To grow your business, Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is jointly set up by Ministry of Micro, Small & Medium Enterprises (MSME), Government of India. This scheme ensures cash flow of institutional credit to Micro & Small Enterprises (MSEs) without the need for third-party guarantees or collateral."
    },
    {
      title: "Invoice Discounting",
      icon: "fa-file-invoice",
      subtitle: "Unlock Cash Tied Up in Unpaid Invoices",
      content: "Invoice discounting enables businesses to gain instant access to cash tied up in unpaid invoices and tap into the value of their sales ledger. It’s simple: when you invoice a customer or client, you receive the amount from the lender after deducting a small percentage of invoice value, providing your business with a cash flow boost."
    },
    {
      title: "Purchase Finance (PO Financing)",
      icon: "fa-shopping-cart",
      subtitle: "Fund Your Large Orders Seamlessly",
      content: "Purchase order, or, 'PO financing' is an arrangement where a third party agrees to give a supplier enough money to fund a customer’s purchase order. In some cases, purchase order loans will finance an entire order, ensuring you never miss a business opportunity due to capital constraints."
    },
    {
      title: "Drop Line Overdraft (OD)",
      icon: "fa-chart-line",
      subtitle: "Flexible Credit for Your Business",
      content: "Dropline overdraft is basically a combination of an overdraft and a term loan. It can be availed on a monthly, quarterly or yearly basis. Banks do not levy a yearly renewal charge for a dropline overdraft; there will be a reduction of limit on a month-on-month or yearly basis till the loan becomes completely paid up. One pays interest only for the utilized amount."
    },
    {
      title: "Channel Finance",
      icon: "fa-network-wired",
      subtitle: "Empower Your Supply Chain",
      content: "Channel financing is a type of working capital loan that provides funds to channel partners, such as distributors, dealers, or buyers, who purchase goods or services from a corporate entity. This streamlines the supply chain and ensures smooth operations for all stakeholders."
    }
  ];

  return (
    <div className="collateral-page without-collateral">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="contact-item"><i className="fas fa-map-marker-alt"></i> HQ, Jayanagar, Bengaluru</div>
          <div className="contact-item"><i className="fas fa-envelope"></i> ravi@analyticalinvestments.com</div>
          <div className="contact-item"><i className="fas fa-phone-alt"></i> (+91) 831 731 8136</div>
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
              <Link to="/mutual-funds" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link to="/services" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/without-collateral" className="dropdown-item active" onClick={() => setMobileMenuOpen(false)}>Without Collateral</Link>
              <Link to="/with-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
            </div>
          </div>

          <Link to="/emi-calculator" className="nav-item" onClick={() => setMobileMenuOpen(false)}>EMI Calculator</Link>
          <Link to="/blog" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <a href="/#contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>

      <header className="collateral-hero">
        <div className="container">
          <h1>Without Collateral Loans</h1>
          <p className="hero-subtitle">Fueling your business growth without the burden of assets.</p>
        </div>
      </header>

      <section className="collateral-content">
        <div className="container">
          <div className="product-grid">
            {products.map((p, i) => (
              <div key={i} className="product-card">
                <div className="card-icon"><i className={`fas ${p.icon}`}></i></div>
                <h2>{p.title}</h2>
                <div className="card-divider"></div>
                <p className="product-tagline">{p.subtitle}</p>
                <p className="product-desc">{p.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <li><Link to="/blog">Blog</Link></li>
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
    </div>
  );
};

export default WithoutCollateralPage;
