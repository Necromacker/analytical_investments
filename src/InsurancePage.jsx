import './InsurancePage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const InsurancePage = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (type) => {
    navigate(`/insurance/${type}`);
  };

  return (
    <div className="insurance-page">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="insurance" />

      {/* Hero Section */}
      <section className="insurance-hero">
        <div className="insurance-hero-content">
          <h1 className="insurance-hero-title">Insurance Services Under One Roof</h1>
          <p className="insurance-subtitle">
            Complete protection for your life, health, assets, business, and investments.
          </p>

          <Link to="/contact" className="apply-btn">Get a Quote</Link>
        </div>
      </section>

      {/* Insurance Services Grid */}
      <section className="insurance-services">
        <div className="container">
          <h2 className="section-title">Types of Insurance We Offer</h2>
          <div className="insurance-grid">
            <div className="ins-card" onClick={() => handleCardClick('motor-insurance')} style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
              <div className="ins-icon" style={{ color: 'white' }}><i className="fas fa-car"></i></div>
              <h3 style={{ color: 'white' }}>Motor Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('health-insurance')} style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
              <div className="ins-icon" style={{ color: 'white' }}><i className="fas fa-heartbeat"></i></div>
              <h3 style={{ color: 'white' }}>Health Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('travel-insurance')} style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
              <div className="ins-icon" style={{ color: 'white' }}><i className="fas fa-plane"></i></div>
              <h3 style={{ color: 'white' }}>Travel Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('home-property-insurance')} style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
              <div className="ins-icon" style={{ color: 'white' }}><i className="fas fa-home"></i></div>
              <h3 style={{ color: 'white' }}>Home & Property Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('business-commercial-insurance')} style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
              <div className="ins-icon" style={{ color: 'white' }}><i className="fas fa-building"></i></div>
              <h3 style={{ color: 'white' }}>Tailored Business & Commercial Insurance</h3>
            </div>
            <div className="ins-card" onClick={() => handleCardClick('miscellaneous-insurance')} style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
              <div className="ins-icon" style={{ color: 'white' }}><i className="fas fa-mobile-alt"></i></div>
              <h3 style={{ color: 'white' }}>Miscellaneous Insurance</h3>
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

export default InsurancePage;
