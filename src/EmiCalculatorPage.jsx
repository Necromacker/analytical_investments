import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EmiCalculatorPage.css';

const EmiCalculatorPage = () => {
  const [amount, setAmount] = useState(2500000);
  const [interest, setInterest] = useState(10.5);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState('Yr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const P = amount;
    const R = interest / 12 / 100;
    const N = tenureType === 'Yr' ? tenure * 12 : tenure;

    if (P > 0 && R > 0 && N > 0) {
      const emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalPay = emiVal * N;
      const totalInt = totalPay - P;

      setEmi(Math.round(emiVal));
      setTotalPayment(Math.round(totalPay));
      setTotalInterest(Math.round(totalInt));
    }
  }, [amount, interest, tenure, tenureType]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const interestRatio = (totalInterest / totalPayment) * 100 || 0;
  const strokeDasharray = `${interestRatio} ${100 - interestRatio}`;

  return (
    <div className="emi-calculator-page">
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
              <Link to="/with-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
            </div>
          </div>
          <Link to="/emi-calculator" className="nav-item active" onClick={() => setMobileMenuOpen(false)}>EMI Calculator</Link>
          <Link to="/blog" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>

      <header className="emi-hero">
        <div className="container">
          <h1>EMI Calculator</h1>
          <p>Plan your finances with precision and clarity.</p>
        </div>
      </header>

      <section className="calculator-section">
        <div className="container">
          <div className="calculator-container">
            
            {/* Top Row: Inputs & Numbers */}
            <div className="calculator-top-row">
              
              {/* Div 1: Inputs */}
              <div className="calculator-inputs">
                <div className="input-group">
                  <div className="input-header">
                    <label>Loan Amount</label>
                    <div className="input-value-wrapper">
                      <span>₹</span>
                      <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(Number(e.target.value))} 
                      />
                    </div>
                  </div>
                  <input 
                    type="range" className="range-slider" 
                    min="100000" max="50000000" step="50000"
                    value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>

                <div className="input-group">
                  <div className="input-header">
                    <label>Interest Rate (P.A)</label>
                    <div className="input-value-wrapper">
                      <input 
                        type="number" value={interest} step="0.1"
                        onChange={(e) => setInterest(Number(e.target.value))} 
                      />
                      <span>%</span>
                    </div>
                  </div>
                  <input 
                    type="range" className="range-slider" 
                    min="1" max="20" step="0.1"
                    value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                  />
                </div>

                <div className="input-group">
                  <div className="input-header">
                    <label>Loan Tenure</label>
                    <div className="input-value-wrapper">
                      <input 
                        type="number" value={tenure} 
                        onChange={(e) => setTenure(Number(e.target.value))} 
                      />
                      <span>{tenureType === 'Yr' ? 'Years' : 'Months'}</span>
                    </div>
                  </div>
                  <input 
                    type="range" className="range-slider" 
                    min="1" max={tenureType === 'Yr' ? 30 : 360} step="1"
                    value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                  />
                  <div className="tenure-toggle">
                    <button className={`toggle-btn ${tenureType === 'Yr' ? 'active' : ''}`} onClick={() => setTenureType('Yr')}>Years</button>
                    <button className={`toggle-btn ${tenureType === 'Mo' ? 'active' : ''}`} onClick={() => setTenureType('Mo')}>Months</button>
                  </div>
                </div>
              </div>

              {/* Div 2: Numbers */}
              <div className="calculator-numbers">
                <div className="numbers-bg-svg">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgba(34, 177, 76, 0.03)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29,72.4,41.4C63.6,53.8,51.8,64.1,38.1,71.4C24.4,78.7,8.9,83,1,81.3C-6.9,79.6,-13.8,71.9,-23.5,65.8C-33.2,59.7,-45.7,55.2,-56.9,46.8C-68.1,38.4,-78,26.1,-82.6,12.1C-87.2,-1.9,-86.5,-17.5,-80.6,-31.2C-74.7,-44.9,-63.6,-56.7,-50.5,-64.5C-37.4,-72.3,-22.3,-76.1,-6.6,-78.9C9.1,-81.7,21.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="numbers-header">
                  <h3>Your Estimate</h3>
                </div>
                <div className="result-main-compact">
                  <div className="result-main-text">
                    <p className="result-label">Monthly EMI</p>
                    <h2 className="result-value" style={{ color: 'var(--primary-blue)', fontSize: '32px' }}>{formatCurrency(emi)}</h2>
                  </div>
                  <div className="result-icon-main">
                    <i className="fas fa-coins"></i>
                  </div>
                </div>
                <div className="result-grid-compact">
                  <div className="result-item-compact">
                    <p className="result-label">Total Interest</p>
                    <p className="result-value-small" style={{ color: '#f59e0b' }}>{formatCurrency(totalInterest)}</p>
                  </div>
                  <div className="result-item-compact">
                    <p className="result-label">Total Payment</p>
                    <p className="result-value-small" style={{ color: '#0f172a' }}>{formatCurrency(totalPayment)}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Div 3: Chart (Full Width) */}
            <div className="calculator-chart-full">
              <div className="chart-content-wrapper">
                <div className="chart-section">
                  <div className="chart-wrapper">
                    <svg width="100%" height="100%" viewBox="0 0 42 42">
                      <circle cx="21" cy="21" r="15.915" fill="white" />
                      <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f1f5f9" strokeWidth="4" />
                      <circle className="donut-ring" cx="21" cy="21" r="15.915" fill="transparent" stroke="var(--primary-green)" strokeWidth="4" />
                      <circle 
                        className="donut-segment" 
                        cx="21" cy="21" r="15.915" fill="transparent" stroke="#f59e0b" strokeWidth="4" 
                        strokeDasharray={strokeDasharray} strokeDashoffset="25"
                        style={{ transition: 'stroke-dasharray 0.5s ease' }}
                      />
                      <text x="21" y="20" textAnchor="middle" dy=".3em" fontSize="3" fontWeight="bold" fill="#64748b" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>Breakup</text>
                      <text x="21" y="25" textAnchor="middle" dy=".3em" fontSize="2.5" fill="#94a3b8">of Total Payment</text>
                    </svg>
                  </div>
                </div>
                <div className="chart-details">
                  <div className="legend-item">
                    <div className="legend-color principal"></div>
                    <div>
                      <p className="result-label">Principal Amount</p>
                      <p className="result-value">{formatCurrency(amount)} ({Math.round(100 - interestRatio)}%)</p>
                    </div>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color interest"></div>
                    <div>
                      <p className="result-label">Total Interest</p>
                      <p className="result-value">{formatCurrency(totalInterest)} ({Math.round(interestRatio)}%)</p>
                    </div>
                  </div>
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

export default EmiCalculatorPage;
