import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

// Import Assets
import MajImg from './assets/Maj Ravindra Bhatnagar.jpg';
import KeshavImg from './assets/Keshav Gowda.jpg';
import PavanImg from './assets/Pavan Kumar k.png';
import AshokImg from './assets/Adv. Ashok Nair. K.jpg';
import SureshImg from './assets/Suresh Kumar P.jpg';

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="about-page">
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
          <Link to="/about" className="nav-item active" onClick={() => setMobileMenuOpen(false)}>About US</Link>

          <div className="nav-item dropdown">
            <div className="dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)}>
              Products <i className={`fas fa-chevron-down ${productsOpen ? 'up' : ''}`}></i>
            </div>
            <div className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
              <Link to="/insurance" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
              <Link to="/mutual-funds" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link to="/#services" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
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
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">ABOUT US</h1>

          <p className="about-quote">
            We turn intelligence into impactful loan strategies powering your financial success
          </p>
          <button className="apply-btn" onClick={() => window.location.href = '/#contact'}>Contact us</button>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="vm-container">
          {/* Vision */}
          <div className="vm-row">
            <div className="vm-text">
              <div className="vm-tag">OUR VISION</div>
              <h2>Pioneering Financial Optimization</h2>
              <p>
                To be India's premier financial optimization partner, transforming how individuals and businesses access credit. We aim to simplify the complex financial landscape by providing unmatched clarity, strategic intelligence, and guaranteed results across every loan and investment opportunity.
              </p>
            </div>
            <div className="vm-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Vision" />
            </div>
          </div>

          {/* Mission */}
          <div className="vm-row">
            <div className="vm-image">
              <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Mission" />
            </div>
            <div className="vm-text">
              <div className="vm-tag">OUR MISSION</div>
              <h2>Strategic Advisory for Real Results</h2>
              <p>
                Our mission is to bridge the gap between financial aspirations and actual solutions. Through data-driven advisory and our network of 120+ partner banks, we ensure our clients secure the most optimized financial terms, allowing them to focus on growth while we handle the complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promoter Section */}
      <section className="team-section promoter-section">
        <h2 className="team-main-title">MEET OUR PROMOTER</h2>
        <div className="team-container">
          {/* Maj Ravindra Bhatnagar */}
          <div className="team-card promoter-card large">
            <div className="team-img-box">
              <img src={MajImg} alt="Maj Ravindra Bhatnagar" />
            </div>
            <div className="team-info">
              <div className="name-social-group">
                <h3>Maj Ravindra Bhatnagar</h3>
                <a href="#" className="linkedin-link"><i className="fab fa-linkedin"></i></a>
              </div>
              <p className="team-role">Founder</p>
              <p className="team-bio">
                As an Army veteran, I started my firm as a wealth management practice in 1994 but soon found my calling solving the financial challenges of India's MSMEs (Rs.5Cr to 50 Cr). Through my firm, I've been able to focus on delivering bespoke debt restructuring and financial solutions that change the conversation for these businesses. I have seen their tenacity with my own eyes, and I do not think we do enough as a lender to assist them in growing responsibly by means of increasing loan sizes and reducing our rate. With a deep understanding of the sector-specific nuances, my team structures debt solutions to reduce the financial strain and provide MSMEs an open landscape for growth. Our mission is to be a catalyst, backing these companies tirelessly & enabling them in their growth journey.
              </p>
            </div>
          </div>

          <div className="team-grid">
            {/* Keshav Gowda */}
            <div className="team-card">
              <div className="team-img-box">
                <img src={KeshavImg} alt="Keshav Gowda" />
              </div>
              <div className="team-info">
                <div className="name-social-group">
                  <h3>Keshav Gowda</h3>
                  <a href="#" className="linkedin-link"><i className="fab fa-linkedin"></i></a>
                </div>
                <p className="team-bio">
                  A seasoned professional with 15+ years' experience, including 5 years in real estate. Known for expertise in loan business and financial consulting. Strong in project management, team leadership, and strategic planning.
                </p>
              </div>
            </div>

            {/* Pavan Kumar k */}
            <div className="team-card">
              <div className="team-img-box">
                <img src={PavanImg} alt="Pavan Kumar k" />
              </div>
              <div className="team-info">
                <div className="name-social-group">
                  <h3>Pavan Kumar k</h3>
                  <a href="#" className="linkedin-link"><i className="fab fa-linkedin"></i></a>
                </div>
                <p className="team-role">Marketing Head</p>
                <p className="team-bio">
                  Marketing Head with proven expertise in the loan and financial services industry. Skilled in lead generation, digital campaigns, and brand strategy. Experienced with Google Ads, Meta, and CRM tools like Salesforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="team-section advisor-section">
        <h2 className="team-main-title">MEET OUR ADVISORS</h2>
        <div className="team-grid">
          {/* Adv. Ashok Nair. K */}
          <div className="team-card">
            <div className="team-img-box">
              <img src={AshokImg} alt="Adv. Ashok Nair. K" />
            </div>
            <div className="team-info">
              <div className="name-social-group">
                <h3>Adv. Ashok Nair. K</h3>
                <a href="#" className="linkedin-link"><i className="fab fa-linkedin"></i></a>
              </div>
              <p className="team-role">Legal Advisor</p>
              <p className="team-bio">
                Transitioning from civil law to corporate legal strategy, they specialize in creating worry-free legal environments for businesses. Expertise lies in contract management, GDPR compliance, and intellectual property.
              </p>
            </div>
          </div>

          {/* Suresh Kumar P */}
          <div className="team-card">
            <div className="team-img-box">
              <img src={SureshImg} alt="Suresh Kumar P" />
            </div>
            <div className="team-info">
              <div className="name-social-group">
                <h3>Suresh Kumar P</h3>
                <a href="#" className="linkedin-link"><i className="fab fa-linkedin"></i></a>
              </div>
              <p className="team-role">Growth and Operational Excellence Consultant</p>
              <p className="team-bio">
                An experienced Business Excellence coach and functional leader in technology, software, and manufacturing. Specialties include setting up Organizations and Operational frameworks that sustain growth.
              </p>
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
              <li><a href="/#services">Services</a></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col services">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/#services">Loan Solutions</a></li>
              <li><Link to="/insurance">Insurance Services</Link></li>
              <li><Link to="/mutual-funds">Mutual Funds</Link></li>
              <li><a href="/#services">Wealth Management</a></li>
              <li><a href="/#services">Real Estate Advisory</a></li>
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

export default AboutPage;
