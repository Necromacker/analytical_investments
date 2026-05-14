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
          <Link to="/"><img src="/LOGO.png" alt="Logo" className="navbar-logo-img" /></Link>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <div className="nav-item dropdown">
            <div className="dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)}>
              Products <i className={`fas fa-chevron-down ${productsOpen ? 'up' : ''}`}></i>
            </div>
            <div className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
              <Link to="/insurance" className="dropdown-item">Insurance</Link>
              <Link to="/mutual-funds" className="dropdown-item">Mutual Funds</Link>
              <Link to="/services" className="dropdown-item">Services</Link>
              <Link to="/without-collateral" className="dropdown-item">Without Collateral</Link>
              <Link to="/with-collateral" className="dropdown-item active">With Collateral</Link>
            </div>
          </div>
          <a href="/#emi" className="nav-item">EMI Calculator</a>
          <a href="/#contact" className="nav-item">Contact US</a>
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
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-home"></i></div>
              <h2>Home Loan Solutions</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <p className="highlight">Unlock Your Dream Home with Our Comprehensive Home Loan Solutions</p>
              <p>Navigating the path to homeownership can be overwhelming. That’s why we offer a wide range of home loan products tailored to your unique needs. Whether you’re buying your first home, building from the ground up, or looking to renovate your current space, we’ve got you covered.</p>
              
              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Home Purchase Loan</h4>
                  <p>Make your dream home a reality with competitive interest rates and flexible repayment options.</p>
                </div>
                <div className="sub-item">
                  <h4>Interior Loan</h4>
                  <p>Transform your house into a stylish home with our interior design financing.</p>
                </div>
                <div className="sub-item">
                  <h4>Construction Loan</h4>
                  <p>Build your dream house from the ground up with our construction loan.</p>
                </div>
                <div className="sub-item">
                  <h4>Composite Loan</h4>
                  <p>Combine construction and home purchase financing into one convenient package.</p>
                </div>
                <div className="sub-item">
                  <h4>NRI Home Loans</h4>
                  <p>Own a piece of your homeland with our NRI home loan solutions even while living abroad.</p>
                </div>
                <div className="sub-item">
                  <h4>Balance Transfer & Top-Up</h4>
                  <p>Lower your rates or get additional funds for your needs through our specialized transfer options.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mortgage Loans */}
          <div className="product-section alternate">
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-building"></i></div>
              <h2>Mortgage Loan (LAP)</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <p className="highlight">Mortgage Loan: The Foundation of Your Dreams</p>
              <p>A mortgage loan is a secured loan where you borrow money from a lender to purchase a property, using the property itself as collateral. It enables you to realize your aspirations of home ownership or expand your real estate portfolio.</p>
              
              <div className="key-takeaways">
                <div className="takeaway-card">
                  <h5>Secured Loans</h5>
                  <p>Property pledged as collateral ensures lender security and better rates.</p>
                </div>
                <div className="takeaway-card">
                  <h5>Long-Term</h5>
                  <p>Typically extends over several years with manageable monthly payments.</p>
                </div>
                <div className="takeaway-card">
                  <h5>Fixed/Floating</h5>
                  <p>Choice of interest rate structures based on your financial planning.</p>
                </div>
              </div>

              <div className="product-sub-grid">
                <div className="sub-item">
                  <h4>Commercial Property</h4>
                  <p>Acquire offices, shops, or warehouses to build your business empire.</p>
                </div>
                <div className="sub-item">
                  <h4>Smart LAP</h4>
                  <p>Leverage your property to access funds for business, education, or emergencies.</p>
                </div>
                <div className="sub-item">
                  <h4>Industrial Construction</h4>
                  <p>Finance the construction of manufacturing units or factory facilities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Finance */}
          <div className="product-section">
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-project-diagram"></i></div>
              <h2>Project Finance</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <p className="highlight">Fueling Ambitious Endeavors – Turning Visions into Reality</p>
              <p>Project finance is a specialized financing method where the lender primarily relies on the project’s projected cash flow and assets to repay the loan. This approach minimizes the sponsors’ financial risk and allows for large-scale, complex projects to be undertaken.</p>
              
              <ul className="feature-list">
                <li><strong>Non-Recourse:</strong> Recourse is typically limited to the project's assets and cash flow.</li>
                <li><strong>Long-Term:</strong> Financing arrangements lasting years or even decades.</li>
                <li><strong>Common Uses:</strong> Infrastructure (roads, bridges), Energy (renewables), and large-scale Real Estate.</li>
              </ul>
            </div>
          </div>

          {/* Machinery Finance */}
          <div className="product-section alternate">
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-cogs"></i></div>
              <h2>Machinery Purchase Finance</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <p className="highlight">Fueling Your Productivity – One Machine at a Time!</p>
              <p>Specialized financial products designed to assist businesses in acquiring new or used machinery. It empowers companies to upgrade their production capabilities and stay competitive without depleting working capital.</p>
              
              <div className="benefit-grid">
                <div className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Preserves Cash Flow</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Flexible Repayment</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Tax Advantages</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Asset-Based Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lease Rent Discounting */}
          <div className="product-section">
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-key"></i></div>
              <h2>Lease Rent Discounting (LRD)</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <p className="highlight">Turn Future Rent into Present Cash – Unlock Your Property’s Potential!</p>
              <p>LRD is a specialized financial product where property owners can leverage their future rental income to secure immediate funds. It involves 'selling' a portion of the future lease payments to a lender at a discounted rate in exchange for upfront cash.</p>
              
              <div className="lrd-features">
                <div className="lrd-card">
                  <p><strong>Immediate Liquidity:</strong> Access funds without selling the property.</p>
                </div>
                <div className="lrd-card">
                  <p><strong>Steady Cash Flow:</strong> Predictable and manageable financial planning.</p>
                </div>
                <div className="lrd-card">
                  <p><strong>Predictable:</strong> Linked to long-term leases with reliable tenants.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Against Securities */}
          <div className="product-section alternate">
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-chart-pie"></i></div>
              <h2>Loan Against Securities (LAS)</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <p className="highlight">Unlock the Power of Your Portfolio – Cash at Your Fingertips Without Selling!</p>
              <p>Allows individuals to leverage their existing investments in securities (stocks, mutual funds, bonds) as collateral. Access funds while preserving your portfolio’s growth potential and avoiding capital gains taxes.</p>
              
              <ul className="las-benefits">
                <li>Lower interest rates than unsecured loans.</li>
                <li>Quick disbursal as collateral is readily available.</li>
                <li>No end-use restrictions – use for any financial need.</li>
                <li>LTV ratio typically ranging from 50% to 70%.</li>
              </ul>
            </div>
          </div>

          {/* Education Loans */}
          <div className="product-section">
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-user-graduate"></i></div>
              <h2>Education Loans (EDU)</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <div className="edu-split">
                <div className="edu-box secured">
                  <h4>Secured EDU Loans</h4>
                  <p>Pledge property or deposits for lower interest rates and higher loan amounts. Best for higher education in India or abroad with longer repayment tenures.</p>
                </div>
                <div className="edu-box unsecured">
                  <h4>Unsecured EDU Loans</h4>
                  <p>Based on academic potential and creditworthiness. No collateral required. Empowering students to focus on studies without arrange assets.</p>
                </div>
              </div>
              <p className="edu-moto"><strong>Our Moto:</strong> Fuel Your Dreams, Empower Your Future! We make education accessible with attractive rates and hassle-free processes.</p>
            </div>
          </div>

          {/* Smart LAP & Drop Line OD (Summarized) */}
          <div className="product-section alternate">
            <div className="section-header">
              <div className="header-icon"><i className="fas fa-lightbulb"></i></div>
              <h2>Smart LAP & Drop Line OD</h2>
              <div className="section-divider"></div>
            </div>
            <div className="product-text">
              <div className="summary-split">
                <div className="summary-card">
                  <h4>Smart LAP</h4>
                  <p>Leverage up to 70-80% of property value with minimal documentation. Ideal for business expansion or debt consolidation.</p>
                </div>
                <div className="summary-card">
                  <h4>Drop Line OD</h4>
                  <p>A flexible business lifeline. Pay interest only on utilized amounts. Linked to your current account for seamless cash flow management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col about">
            <img src="/LOGO.png" alt="Logo" className="footer-logo" />
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
            </ul>
          </div>
          <div className="footer-col contact">
            <h3>Contact Us</h3>
            <div className="footer-contact-item"><i className="fas fa-map-marker-alt"></i> <span>HQ, Jayanagar, Bengaluru</span></div>
            <div className="footer-contact-item"><i className="fas fa-envelope"></i> <span>ravi@analyticalinvestments.com</span></div>
            <div className="footer-contact-item"><i className="fas fa-phone-alt"></i> <span>(+91) 831 731 8136</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WithCollateralPage;
