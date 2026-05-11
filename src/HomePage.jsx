import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Excellent customer service. Highly recommend for a professional and trustworthy experience.",
      name: "Dawn Paul",
      title: "BUSINESS SYSTEMS MANAGER - MEZZAN HOLDING CO. - KUWAIT"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "I am currently taking help from Mr. Dipin of Analytical Investment for my requirement. Mr. Dipin and team are extremely professional, cordial and helpful. He has a vast experience and contacts in the sector and always ready to help. I can approach him with any of my problems.",
      name: "Anindya & Moutushi",
      title: "SENIOR MANAGER - IT FIRM - BANGALORE"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Mr. Dipin, I must commend you for the exceptional service and support you offered throughout my house acquisition. Your efforts greatly contributed to a seamless, effortless, and stress-free process. Based on this experience, I have no doubt that your new enterprise will achieve tremendous success.",
      name: "Vipin E",
      title: "PROJECT MANAGER - MINDTECK - BANGALORE"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Extremely professional and knowledgeable. They made the entire loan process very simple and transparent. I highly recommend Analytical Investment for any financial advisory needs.",
      name: "Sandeep Rao",
      title: "FINANCIAL ANALYST - BENGALURU"
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The team at Analytical Investment is fantastic. They understood my requirements perfectly and provided the best real estate options within my budget. Their end-to-end support is truly commendable.",
      name: "Priyanka Sharma",
      title: "DIRECTOR - TECH SOLUTIONS"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <div className="home-page">
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
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/LOGO.png" alt="Analytical Investment" className="navbar-logo-img" />
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>About US</a>

          <div className="nav-item dropdown">
            <div className="dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)}>
              Products <i className={`fas fa-chevron-down ${productsOpen ? 'up' : ''}`}></i>
            </div>
            <div className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
              <a href="#insurance" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Insurance</a>
              <a href="#mutual-funds" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</a>
              <a href="#services" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Services</a>
            </div>
          </div>

          <a href="#emi" className="nav-item" onClick={() => setMobileMenuOpen(false)}>EMI Calculator</a>
          <a href="#blog" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="#contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact US</a>

        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Analytical Investment</h1>

          <p>Reducing interest rate on your existing loan</p>
          <button className="apply-btn">Contact us</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Consultant" />
              <div className="image-caption">
                <h3>Your All-in-One Banking, Investment Partner</h3>
              </div>
            </div>
          </div>
          <div className="about-right">
            <span className="welcome-tag">WELCOME TO</span>
            <h2 className="about-title">Analytical Investment</h2>
            <div className="title-underline"></div>
            <h4 className="about-subtitle">Your Trusted Partner for Banking, Investment and Real Estate Solutions</h4>
            <div className="about-text">
              <p>
                <strong>Analytical Investment</strong> provides sound solutions in banking, investment, and real estate. We specialize in securing various loans at the lowest possible interest rates, even for existing ones, through our partnerships with over 120+ leading banks.
              </p>
              <p>
                From wealth management services like insurance and mutual funds to comprehensive real estate advisory for buying, selling, or renting properties, we offer end-to-end support tailored to the needs of individuals and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-main-title">OUR SERVICES</h2>
        <div className="services-container">
          <div className="service-card dark">
            <div className="service-front">
              <i className="fas fa-university service-icon"></i>
              <h3>LOAN SOLUTIONS</h3>
            </div>
            <div className="service-hover">
              <ul>
                <li>Personal Loan</li>
                <li>Home Loan</li>
                <li>Business Loan</li>
                <li>Loan Against Property</li>
                <li>Gold Loan</li>
              </ul>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>

          <div className="service-card gold">
            <div className="service-front">
              <i className="fas fa-briefcase service-icon"></i>
              <h3>INSURANCE SERVICES</h3>
            </div>
            <div className="service-hover">
              <ul>
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Motor Insurance</li>
                <li>Property Insurance</li>
                <li>Travel Insurance</li>
                <li>Business Insurance</li>
              </ul>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>

          <div className="service-card dark">
            <div className="service-front">
              <i className="fas fa-building service-icon"></i>
              <h3>INVESTMENT SOLUTIONS</h3>
            </div>
            <div className="service-hover">
              <ul>
                <li>Mutual Funds</li>
                <li>Fixed Deposits</li>
                <li>Stock Market</li>
                <li>SIP</li>
                <li>Bonds</li>
              </ul>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>

          <div className="service-card dark">
            <div className="service-front">
              <i className="fas fa-money-bill-wave service-icon"></i>
              <h3>WEALTH MANAGEMENT SERVICES</h3>
            </div>
            <div className="service-hover">
              <ul>
                <li>Portfolio Management</li>
                <li>Retirement Planning</li>
                <li>Tax Planning</li>
                <li>Estate Planning</li>
                <li>Risk Management</li>
              </ul>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>

          <div className="service-card gold">
            <div className="service-front">
              <i className="fas fa-home service-icon"></i>
              <h3>REAL ESTATE ADVISORY</h3>
            </div>
            <div className="service-hover">
              <ul>
                <li>Property Valuation</li>
                <li>Legal Advisory</li>
                <li>Property Management</li>
                <li>Buy/Sell Guidance</li>
                <li>Investment Strategy</li>
              </ul>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>
      {/* What Sets Us Apart Section */}
      <section className="apart-section">
        <h2 className="apart-main-title">WHAT SETS US APART?</h2>
        <div className="apart-container">
          <div className="apart-left">
            <div className="apart-item">
              <h3>25+ Years of Expertise</h3>
              <p>Decades of experience in loans, insurance, and real estate advisory.</p>
            </div>
            <div className="apart-item">
              <h3>Trusted by 3,000+ Clients</h3>
              <p>Serving individuals, families, professionals, and NRIs across India and beyond.</p>
            </div>
            <div className="apart-item">
              <h3>Multiple Services, One Platform</h3>
              <p>Loans, insurance, investments, and property — all under one roof.</p>
            </div>
          </div>

          <div className="apart-center">
            <div className="apart-logo-box">
              <img src="/Final Ai LOGO.png" alt="Analytical Investment" />
            </div>
          </div>

          <div className="apart-right">
            <div className="apart-item">
              <h3>Strong Bank Partnerships</h3>
              <p>Access to leading banks for better rates and faster approvals.</p>
            </div>
            <div className="apart-item">
              <h3>End-to-End Support</h3>
              <p>We handle everything — from paperwork to disbursement.</p>
            </div>
            <div className="apart-item">
              <h3>Client-First Approach</h3>
              <p>Transparent, ethical, and focused on your financial goals.</p>
            </div>
          </div>
        </div>
        <div className="apart-footer">
          <button className="apply-btn-navy">APPLY NOW</button>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <span className="testimonials-tag">WHAT OUR CUSTOMERS SAY</span>
          <h2 className="testimonials-title">OUR TESTIMONIALS</h2>
          <div className="title-underline-grey"></div>
        </div>

        <div className="testimonials-container">
          <button className="nav-arrow left" onClick={prevTestimonial}><i className="fas fa-chevron-left"></i></button>

          <div className="testimonials-track-wrapper">
            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${currentTestimonial * (isMobile ? 100 : 33.333)}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="testimonial-card"
                >
                  <div className="customer-img">
                    <img src={t.img} alt={t.name} />
                  </div>
                  <p className="quote">"{t.quote}"</p>
                  <h4 className="customer-name">{t.name}</h4>
                  <span className="customer-title">{t.title}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-arrow right" onClick={nextTestimonial}><i className="fas fa-chevron-right"></i></button>
        </div>

        <div className="pagination-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Achieve Your Financial and Real Estate Goals?</h2>
          <p>Contact Analytical Investment Today and let our experts guide you toward smarter, more confident decisions.</p>
          <div className="cta-btns">
            <button className="cta-btn gold">Contact Us</button>
            <button className="cta-btn outline">Learn More</button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="location-container">
          <div className="location-left">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5866!2d77.5891!3d12.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b17a151515%3A0x1a15151515151515!2sWork%20District!5e0!3m2!1sen!2sin!4v1715160000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
          <div className="location-right">
            <h2 className="location-title">OUR OFFICE LOCATION</h2>
            <p className="location-address">
              ANALYTICAL INVESTMENT, C/O WORK DISTRICT, #45, 46 (NEW NO: 14) BLN ARCADE, 7TH B MAIN ROAD, 4TH BLOCK JAYANAGAR, BENGALURU-560011
            </p>
            <div className="location-socials">
              <a href="#" className="social-box fb"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-box x"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="social-box ig"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-box li"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col about">
            <img src="/Final Ai LOGO.png" alt="Analytical Investment" className="footer-logo" />
            <p>Analytical Investment is your trusted partner for financial and real estate solutions with over 25 years of expertise.</p>
            <div className="footer-socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-col links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col services">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Loan Solutions</a></li>
              <li><a href="#">Insurance Services</a></li>
              <li><a href="#">Investment Solutions</a></li>
              <li><a href="#">Wealth Management</a></li>
              <li><a href="#">Real Estate Advisory</a></li>
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

export default HomePage;
