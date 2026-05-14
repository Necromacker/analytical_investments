import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sathish Narayanan",
      quote: "Secured working capital loan with good options & regular communication (Thanks Princy!) Analytical Investment reached out to multiple banks to get me the best possible options for my working capital loan. They maintained regular communication throughout the process, ensuring a smooth experience.",
      title: "Google Review",
      stars: 5,
      color: "#e91e63"
    },
    {
      id: 2,
      name: "Saleth Premson",
      quote: "Mr. Vaseem's in-depth knowledge and guidance made the home loan transfer process incredibly easy for me. Analytical Investment' commitment to personalized service ensured all my questions and concerns were addressed promptly.",
      title: "Google Review",
      stars: 5,
      color: "#4caf50"
    },
    {
      id: 3,
      name: "Atul Singh",
      quote: "I recommend Analytical Investment for my hassle-free home loan for resale. They supported me throughout the home loan process, from application to disbursement. They protected me from unnecessary expenses and secured a competitive interest rate.",
      title: "Google Review",
      stars: 5,
      color: "#03a9f4"
    },
    {
      id: 4,
      name: "Harish Reddy",
      quote: "Their experience and knowledge of the loan process allowed me to get my loan application approved quickly and efficiently. I only needed to be involved in minimal steps like signing documents.",
      title: "Google Review",
      stars: 5,
      color: "#ff5722"
    },
    {
      id: 5,
      name: "Manisha Shakthidhar",
      quote: "I commend Analytical Investment' team for their excellent communication and proactive approach. Their negotiation skills secured me a loan with a significantly lower interest rate.",
      title: "Google Review",
      stars: 5,
      color: "#2196f3"
    },
    {
      id: 6,
      name: "Prabhu Raj Anjanappa",
      quote: "After facing delays and challenges with securing the desired loan amount, I found success with Analytical Investment. I particularly commend Mr. Ravindra Bhatnagar's initiative and problem-solving skills.",
      title: "Google Review",
      stars: 5,
      color: "#9c27b0",
      letter: "L"
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
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Analytical Investment</h1>

          <p>Reducing interest rate on your existing loan</p>
          <Link to="/contact" className="apply-btn">Contact us</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80" alt="Investment Partner" />
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
              <i className="fas fa-file-invoice-dollar service-icon"></i>
              <h3>CIBIL RECTIFICATION</h3>
            </div>
            <div className="service-hover">
              <p>Correct errors on your credit report and improve your score for better financial opportunities.</p>
              <Link to="/services" className="learn-more">LEARN MORE</Link>
            </div>
          </div>

          <div className="service-card gold">
            <div className="service-front">
              <i className="fas fa-percentage service-icon"></i>
              <h3>INTEREST RATE REDUCTION</h3>
            </div>
            <div className="service-hover">
              <p>Lower your borrowing costs through expert negotiation, balance transfers, and refinancing strategies.</p>
              <Link to="/services" className="learn-more">LEARN MORE</Link>
            </div>
          </div>

          <div className="service-card dark">
            <div className="service-front">
              <i className="fas fa-handshake service-icon"></i>
              <h3>PRE-CLOSURE NEGO</h3>
            </div>
            <div className="service-hover">
              <p>Specialized negotiation to reduce or waive pre-closure charges on your existing loans.</p>
              <Link to="/services" className="learn-more">LEARN MORE</Link>
            </div>
          </div>

          <div className="service-card dark">
            <div className="service-front">
              <i className="fas fa-calculator service-icon"></i>
              <h3>SAVING CALCULATION</h3>
            </div>
            <div className="service-hover">
              <p>Precise wealth accumulation estimates using compound interest and consistent contribution planning.</p>
              <Link to="/services" className="learn-more">LEARN MORE</Link>
            </div>
          </div>

          <div className="service-card gold">
            <div className="service-front">
              <i className="fas fa-piggy-bank service-icon"></i>
              <h3>TAX EFFICIENT LOANS</h3>
            </div>
            <div className="service-hover">
              <p>Strategically structured loans designed to maximize tax deductions and minimize total liability.</p>
              <Link to="/services" className="learn-more">LEARN MORE</Link>
            </div>
          </div>

          <div className="service-card dark">
            <div className="service-front">
              <i className="fas fa-layer-group service-icon"></i>
              <h3>LOAN CONSOLIDATION</h3>
            </div>
            <div className="service-hover">
              <p>Simplify your debt by combining multiple high-interest loans into a single, low-rate monthly payment.</p>
              <Link to="/services" className="learn-more">LEARN MORE</Link>
            </div>
          </div>
        </div>
      </section>
      {/* What Sets Us Apart Section */}
      <section className="apart-section">
        <h2 className="apart-main-title">WE HAVE HELPED MORE THAN 10,000 CUSTOMERS</h2>
        <div className="apart-container">
          <div className="apart-left">
            <div className="apart-item">
              <h3>Scale revenue. Reduce costs.</h3>
              <p>Loans optimized for maximum financial growth.</p>
            </div>
            <div className="apart-item">
              <h3>1 Application, 120+ Banks.</h3>
              <p>Best loan terms. Guaranteed through our massive network.</p>
            </div>
            <div className="apart-item">
              <h3>Beyond banking.</h3>
              <p>Analytical loan solutions tailored to your unique needs.</p>
            </div>
          </div>

          <div className="apart-center">
            <div className="apart-image-card top">
              <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80" alt="Consultation" className="apart-img" />
            </div>
            <div className="apart-image-card bottom">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" alt="Customer Success" className="apart-img" />
            </div>
          </div>

          <div className="apart-right">
            <div className="apart-item">
              <h3>Your existing loan?</h3>
              <p>We'll make it better. Direct, confident, and effective.</p>
            </div>
            <div className="apart-item">
              <h3>Unlock hidden value.</h3>
              <p>Secure higher amounts and lower rates with our expertise.</p>
            </div>
            <div className="apart-item">
              <h3>Don't just compare. Optimize.</h3>
              <p>Increase borrowing power and decrease interest burden.</p>
            </div>
          </div>
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
                  <div className="customer-avatar" style={{ backgroundColor: t.color }}>
                    {t.letter || t.name.charAt(0)}
                  </div>
                  <div className="stars">
                    {[...Array(t.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="quote">"{t.quote}"</p>
                  <h4 className="customer-name">{t.name}</h4>
                  <div className="testimonial-footer">
                    <div className="google-badge">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
                      <span>Posted On Google</span>
                    </div>
                  </div>
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
          <h2>Our Advisors Are Ready To Help</h2>
          <p>Contact Analytical Investment Today and let our experts guide you toward smarter, more confident decisions.</p>
          <div className="cta-btns">
            <Link to="/contact" className="cta-btn gold">Contact Us</Link>
            <Link to="/about#promoter" className="cta-btn outline">Learn More</Link>
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
              <a href="https://hi-in.facebook.com/analyticalinvestment" className="social-box fb" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/company/analytical-investments/" className="social-box li" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/analyticalinvestments/" className="social-box ig" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=919606601808&text&type=phone_number&app_absent=0" className="social-box wa" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
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

export default HomePage;
