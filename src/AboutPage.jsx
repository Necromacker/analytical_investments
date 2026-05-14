import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

// Import Assets
import MajImg from './assets/Maj Ravindra Bhatnagar.jpg';
import KeshavImg from './assets/Keshav Gowda.jpg';
import PavanImg from './assets/Pavan Kumar k.png';
import AshokImg from './assets/Adv. Ashok Nair. K.jpg';
import SureshImg from './assets/Suresh Kumar P.jpg';

const AboutPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="about-page">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="about" />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">ABOUT US</h1>

          <p className="about-quote">
            We turn intelligence into impactful loan strategies powering your financial success
          </p>
          <Link to="/contact" className="apply-btn">Contact us</Link>
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
      <section className="team-section promoter-section" id="promoter">
        <h2 className="team-main-title">MEET OUR PROMOTER</h2>
        <div className="team-grid">
          {/* Maj Ravindra Bhatnagar */}
          <div className="card">
            <button className="mail">
              <svg className="lucide lucide-mail" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
            <div className="profile-pic">
              <img src={MajImg} alt="Maj Ravindra Bhatnagar" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">Maj Ravindra Bhatnagar</span>
                <span className="role">Founder</span>
                <span className="about-me">
                  Army veteran who found his calling solving financial challenges for MSMEs. Delivering bespoke debt restructuring and strategic solutions since 1994.
                </span>
              </div>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="contact-btn-wrapper">
                <Link to="/contact" className="button">Contact Me</Link>
              </div>
            </div>
          </div>

          {/* Keshav Gowda */}
          <div className="card">
            <button className="mail">
              <svg className="lucide lucide-mail" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
            <div className="profile-pic">
              <img src={KeshavImg} alt="Keshav Gowda" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">Keshav Gowda</span>
                <span className="role">Senior Consultant</span>
                <span className="about-me">
                  Seasoned professional with 15+ years' experience in loan business and real estate. Expert in project management and strategic planning.
                </span>
              </div>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="contact-btn-wrapper">
                <Link to="/contact" className="button">Contact Me</Link>
              </div>
            </div>
          </div>

          {/* Pavan Kumar k */}
          <div className="card">
            <button className="mail">
              <svg className="lucide lucide-mail" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
            <div className="profile-pic">
              <img src={PavanImg} alt="Pavan Kumar k" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">Pavan Kumar k</span>
                <span className="role">Marketing Head</span>
                <span className="about-me">
                  Skilled in lead generation and digital campaigns. Experienced with Google Ads, Meta, and modern CRM tools to drive brand growth.
                </span>
              </div>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="contact-btn-wrapper">
                <Link to="/contact" className="button">Contact Me</Link>
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
          <div className="card">
            <button className="mail">
              <svg className="lucide lucide-mail" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
            <div className="profile-pic">
              <img src={AshokImg} alt="Adv. Ashok Nair. K" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">Adv. Ashok Nair. K</span>
                <span className="role">Legal Advisor</span>
                <span className="about-me">
                  Specialist in corporate legal strategy, contract management, and GDPR compliance. Creating worry-free legal environments for businesses.
                </span>
              </div>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="contact-btn-wrapper">
                <Link to="/contact" className="button">Contact Me</Link>
              </div>
            </div>
          </div>

          {/* Suresh Kumar P */}
          <div className="card">
            <button className="mail">
              <svg className="lucide lucide-mail" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
            <div className="profile-pic">
              <img src={SureshImg} alt="Suresh Kumar P" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">Suresh Kumar P</span>
                <span className="role">Ops Excellence</span>
                <span className="about-me">
                  Functional leader in technology and manufacturing. Business Excellence coach focused on sustaining growth through operational frameworks.
                </span>
              </div>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="contact-btn-wrapper">
                <Link to="/contact" className="button">Contact Me</Link>
              </div>
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

export default AboutPage;
