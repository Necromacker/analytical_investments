import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import Footer from './Footer';

const ServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "CIBIL Rectification",
      icon: "fa-file-invoice-dollar",
      content: "CIBIL rectification is the process of correcting errors on your credit report. Common errors include inaccurate personal details, incorrect account information, duplicate accounts, and outdated data. To rectify these errors, obtain your CIBIL report, identify discrepancies, and raise a dispute online or via mail with supporting documents. CIBIL will investigate and update your report if the errors are verified. Remember, a clean and accurate CIBIL report is key to accessing credit and financial opportunities."
    },
    {
      title: "Interest Rate Reduction",
      icon: "fa-percentage",
      content: "Interest rate reduction lowers the cost of borrowing money, benefiting borrowers in India. Strategies to achieve this include negotiation, balance transfers, debt consolidation, improving credit scores, and refinancing. Lower rates translate to reduced monthly payments, faster debt repayment, and improved financial health. Remember, success isn't guaranteed and might require preparation and professional guidance."
    },
    {
      title: "Pre-Closure Charges Nego",
      icon: "fa-handshake-slash",
      content: "Negotiating pre-closure charges when seeking an interest rate reduction can be beneficial, especially in India where high interest rates are common. Before approaching your lender, strengthen your position with a good credit history, timely payments, and research on competitor rates. Highlight the benefits of retaining your business and express willingness to consider alternatives like balance transfers. Be prepared for negotiation, emphasizing your loyalty and financial responsibility."
    },
    {
      title: "Saving Calculation",
      icon: "fa-calculator",
      content: "A savings calculation estimates how much money you'll accumulate over time by saving regularly. It considers factors like the initial deposit, regular contributions, interest rate, and time period. You can use a simple formula or online calculators to determine this. Regular saving, even small amounts, combined with compound interest, can significantly grow your wealth over the long term. It's crucial to start early, be consistent, and choose investment options wisely to maximize your savings potential."
    },
    {
      title: "Tax Efficient Loans",
      icon: "fa-piggy-bank",
      content: "Tax-efficient loans minimize tax liability on borrowed funds by leveraging tax deductions or tax-free proceeds. Strategic loan structuring reduces overall tax burdens while securing necessary funding. Consultation with financial advisors or tax professionals ensures compliance with relevant tax laws."
    },
    {
      title: "Loan Consolidation",
      icon: "fa-layer-group",
      content: "Loan consolidation simplifies debt management by combining multiple high-interest debts into a single new loan with a lower interest rate. This strategy can reduce monthly payments, making it easier to manage finances. In India, loan consolidation is helpful for individuals with multiple credit card debts or personal loans. However, be aware of processing fees, potential impact on credit score, and the overall cost of the new loan. Consider factors like interest rate, loan tenure, and prepayment penalties before opting for loan consolidation."
    }
  ];

  return (
    <div className="services-page">
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
              <Link to="/mutual-funds" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link to="/services" className="dropdown-item active" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/without-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Without Collateral</Link>
              <Link to="/with-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
            </div>
          </div>

          <Link to="/emi-calculator" className="nav-item" onClick={() => setMobileMenuOpen(false)}>EMI Calculator</Link>
          <Link to="/blog" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Financial Services</h1>
          <p className="services-subtitle">Expert solutions tailored to optimize your financial journey and maximize savings.</p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-card-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <div className="service-underline"></div>
                  <p>{service.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="services-footer-cta">
            <Link to="/contact" className="talk-expert-btn blue">
              TALK TO AN EXPERT <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <a href="https://wa.me/918317318136" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default ServicesPage;
