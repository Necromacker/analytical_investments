import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WithCollateralPage.css';

const WithCollateralPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="collateral-page with-collateral">
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
              <Link to="/without-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Without Collateral</Link>
              <Link to="/with-collateral" className="dropdown-item active" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
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

      <header className="collateral-hero">
        <div className="container">
          <h1>With Collateral Loans</h1>
          <p className="hero-subtitle">Secured financial solutions to help you achieve your biggest dreams.</p>
        </div>
      </header>

      <section className="collateral-content">
        <div className="container">
          {/* Home Loans */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Unlock Your Dream Home with Comprehensive Financing Solutions</p>
              
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Home Purchase</h4>
                  <p>Competitive rates and flexible repayment for your dream residential property.</p>
                </div>
                <div className="sub-item">
                  <h4>Interior & Construction</h4>
                  <p>Finance for stylish modern interiors or building your home from the ground up.</p>
                </div>
                <div className="sub-item">
                  <h4>Composite & NRI</h4>
                  <p>Combined construction financing or specialized home loan solutions for NRIs.</p>
                </div>
                <div className="sub-item">
                  <h4>Balance Transfer</h4>
                  <p>Lower your monthly EMIs by transferring your existing loan to our bank partners.</p>
                </div>
                <div className="sub-item">
                  <h4>Top-Up Loan</h4>
                  <p>Get additional funds on your existing home loan for any personal or business need.</p>
                </div>
                <div className="sub-item">
                  <h4>Plot Purchase</h4>
                  <p>Finance for purchasing residential plots in approved layouts and developments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mortgage Loans */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Mortgage Loan (LAP): The Foundation of Your Financial Dreams</p>
              <p>A secured loan using your residential or commercial property as collateral to unlock liquid funds for your aspirations.</p>
              
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Secured & Long-Term</h4>
                  <p>Pledged property ensures the lowest interest rates over extended repayment tenures.</p>
                </div>
                <div className="sub-item">
                  <h4>Fixed/Floating Rates</h4>
                  <p>Choose between stable fixed rates or market-linked floating rates for your planning.</p>
                </div>
                <div className="sub-item">
                  <h4>Commercial Purchase</h4>
                  <p>Acquire offices, shops, or warehouses to expand your business empire footprint.</p>
                </div>
                <div className="sub-item">
                  <h4>Smart LAP</h4>
                  <p>Leverage your property value for business expansion, education, or financial emergencies.</p>
                </div>
                <div className="sub-item">
                  <h4>Industrial Refinance</h4>
                  <p>Refinance your industrial property to gain liquidity for operational scaling.</p>
                </div>
                <div className="sub-item">
                  <h4>Debt Consolidation</h4>
                  <p>Use your property equity to pay off high-interest unsecured debts into one low EMI.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Finance */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Turning Large-Scale Visions into Reality Through Strategic Finance</p>
              <p>Specialized financing relying on a project’s projected cash flow. Minimized sponsor risk for complex developments.</p>
              
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Non-Recourse Finance</h4>
                  <p>Risk is primarily limited to the project's own assets and future generated cash flow.</p>
                </div>
                <div className="sub-item">
                  <h4>Infrastructure & Energy</h4>
                  <p>Customized funding for roads, bridges, renewable energy, and large-scale utilities.</p>
                </div>
                <div className="sub-item">
                  <h4>Real Estate Projects</h4>
                  <p>Construction finance for residential townships and commercial business parks.</p>
                </div>
                <div className="sub-item">
                  <h4>Risk Mitigation</h4>
                  <p>Structured finance that incorporates insurance and hedging to protect project viability.</p>
                </div>
                <div className="sub-item">
                  <h4>Working Capital Gap</h4>
                  <p>Bridge the gap between project expenses and milestone payments with liquid cash.</p>
                </div>
                <div className="sub-item">
                  <h4>Debt Syndication</h4>
                  <p>Collaborative financing from multiple banks for extremely high-value projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Machinery Finance */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Fueling Industrial Productivity – One Machine at a Time</p>
              <p>Acquire new or used equipment to upgrade capabilities and stay competitive without depleting capital.</p>
              
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>New Equipment</h4>
                  <p>100% financing for the latest technology to boost your manufacturing output.</p>
                </div>
                <div className="sub-item">
                  <h4>Used Machinery</h4>
                  <p>Get funds for quality pre-owned machinery to scale affordably and efficiently.</p>
                </div>
                <div className="sub-item">
                  <h4>Sale & Leaseback</h4>
                  <p>Unlock capital from your existing machinery while continuing to use it for production.</p>
                </div>
                <div className="sub-item">
                  <h4>Tax Optimization</h4>
                  <p>Benefit from depreciation and interest deductions to lower your overall tax burden.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lease Rent Discounting */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Monetize Your Future Rental Income Today for Immediate Growth</p>
              <p>Leverage future lease payments from MNCs or reputed tenants to secure immediate lump-sum funds.</p>
              
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Immediate Liquidity</h4>
                  <p>Access massive upfront capital without selling your high-yielding properties.</p>
                </div>
                <div className="sub-item">
                  <h4>Commercial LRD</h4>
                  <p>Discount rentals from office spaces, tech parks, and premium retail showrooms.</p>
                </div>
                <div className="sub-item">
                  <h4>Industrial LRD</h4>
                  <p>Leverage long-term warehouse leases to fund your next business venture.</p>
                </div>
                <div className="sub-item">
                  <h4>Zero Prepayment</h4>
                  <p>Flexible terms that allow you to settle the loan as your rental income grows.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Against Securities */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Liquidity Without Disrupting Your Portfolio’s Growth Potential</p>
              <p>Leverage stocks, mutual funds, or bonds as collateral. Access cash quickly while maintaining your long-term growth.</p>
              
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Instant Overdraft</h4>
                  <p>Get a credit line against your demat holdings with zero commitment charges.</p>
                </div>
                <div className="sub-item">
                  <h4>No Capital Gains</h4>
                  <p>Avoid selling your securities and triggering taxes; just borrow against them.</p>
                </div>
                <div className="sub-item">
                  <h4>Mutual Fund LAS</h4>
                  <p>Unlock value from both equity and debt mutual funds at very low interest rates.</p>
                </div>
                <div className="sub-item">
                  <h4>Flexible Repayment</h4>
                  <p>Pay interest only on the amount utilized, perfect for short-term cash flow gaps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Loans */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Investing in Your Future – Global Education Made Accessible</p>
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Secured EDU</h4>
                  <p>Pledge property for the lowest possible rates and high limits for Ivy League studies.</p>
                </div>
                <div className="sub-item">
                  <h4>Unsecured EDU</h4>
                  <p>Based on your GRE/GMAT scores and university ranking. No collateral required.</p>
                </div>
                <div className="sub-item">
                  <h4>Living Expenses</h4>
                  <p>Comprehensive funding that covers tuition, travel, stay, and personal equipment.</p>
                </div>
                <div className="sub-item">
                  <h4>Tax Benefits</h4>
                  <p>Avail full tax deduction on interest paid under Section 80E of the IT Act.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart LAP & Drop Line OD */}
          <div className="product-section">
            <div className="product-text">
              <p className="highlight">Modern Credit Lines – Smart Capital for Smart Businesses</p>
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Smart LAP</h4>
                  <p>Fast-track processing for up to 80% of property value with minimal documentation.</p>
                </div>
                <div className="sub-item">
                  <h4>Drop Line OD</h4>
                  <p>A hybrid credit line where the limit gradually reduces as you repay the principal.</p>
                </div>
                <div className="sub-item">
                  <h4>Working Capital</h4>
                  <p>Seamlessly manage your day-to-day business operations with a linked current account.</p>
                </div>
                <div className="sub-item">
                  <h4>No End-Use Restriction</h4>
                  <p>Use the funds for anything from machinery purchase to managing inventory cycles.</p>
                </div>
                <div className="sub-item">
                  <h4>Asset Optimization</h4>
                  <p>Convert your idle property value into a productive engine for your business.</p>
                </div>
                <div className="sub-item">
                  <h4>Low Maintenance</h4>
                  <p>Simplified annual renewals and transparent fee structures for busy entrepreneurs.</p>
                </div>
              </div>
            </div>
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
              <li><Link to="/contact">Contact Us</Link></li>
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

export default WithCollateralPage;
