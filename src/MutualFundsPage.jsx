import React from 'react';
import { Link } from 'react-router-dom';
import './MutualFundsPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

const MutualFundsPage = () => {

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mutual-funds-page">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="products" />

      {/* Hero Section */}
      <section className="mf-hero">
        <div className="mf-hero-content">
          <h1 className="mf-hero-title">Mutual Funds with Purpose. Backed by Expertise.</h1>
          <p className="mf-subtitle">Grow your wealth with professionally managed diversified portfolios.</p>
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
            <Link to="/contact" className="mf-whatsapp-btn">
              Talk to our Expert
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <a href="https://api.whatsapp.com/send/?phone=919606601808&text&type=phone_number&app_absent=0" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default MutualFundsPage;
