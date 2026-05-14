import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './InsuranceDetail.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

const insuranceData = {
  'motor-insurance': {
    title: 'Motor Insurance',
    subtitle: 'Protection against accident, theft, and third-party liabilities.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    illustration: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
    plans: [
      { title: 'Private Car', desc: 'Comprehensive protection for your personal automobile.', icon: 'fa-car', color: 'dark' },
      { title: 'Two-Wheeler', desc: 'Secure coverage for your bikes and scooters.', icon: 'fa-motorcycle', color: 'gold' },
      { title: 'Commercial Vehicle', desc: 'Protection for trucks, vans, and business vehicles.', icon: 'fa-truck', color: 'dark' },
      { title: 'Taxi / Uber / Ola', desc: 'Specialized insurance for ride-sharing and taxi services.', icon: 'fa-taxi', color: 'gold' },
      { title: 'Goods Carrying', desc: 'Coverage for vehicles transporting commercial goods.', icon: 'fa-dolly', color: 'dark' },
      { title: 'Passenger Carrying', desc: 'Insurance for buses and people-moving vehicles.', icon: 'fa-bus', color: 'gold' },
      { title: 'Tractor & Farm', desc: 'Specialized protection for agricultural machinery.', icon: 'fa-tractor', color: 'dark' },
      { title: 'Fleet Insurance', desc: 'Efficient coverage for managing multiple business vehicles.', icon: 'fa-layer-group', color: 'gold' }
    ]
  },
  'health-insurance': {
    title: 'Health Insurance',
    subtitle: 'Cover medical emergencies & hospitalisation costs.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80',
    illustration: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    plans: [
      { title: 'Individual Health', desc: 'Personalized medical coverage for a single person.', icon: 'fa-user', color: 'dark' },
      { title: 'Family Floater', desc: 'Shared sum insured for your entire family.', icon: 'fa-users', color: 'gold' },
      { title: 'Senior Citizen', desc: 'Healthcare plans tailored for the elderly.', icon: 'fa-user-nurse', color: 'dark' },
      { title: 'Critical Illness', desc: 'Fixed benefit for life-threatening diseases.', icon: 'fa-heartbeat', color: 'gold' },
      { title: 'Top-Up Plans', desc: 'Additional coverage beyond your base health policy.', icon: 'fa-plus-circle', color: 'dark' },
      { title: 'Maternity Plans', desc: 'Comprehensive cover for pregnancy and newborn care.', icon: 'fa-baby', color: 'gold' },
      { title: 'Personal Accident', desc: 'Financial security against accidental death or disability.', icon: 'fa-hand-holding-medical', color: 'dark' },
      { title: 'Hospital Cash', desc: 'Daily allowance during the period of hospitalisation.', icon: 'fa-money-bill-wave', color: 'gold' },
      { title: 'Disease-Specific', desc: 'Cancer, Cardiac, and other specialized covers.', icon: 'fa-microscope', color: 'dark' }
    ]
  },
  'travel-insurance': {
    title: 'Travel Insurance',
    subtitle: 'Emergency medical, baggage loss, and travel delay coverage.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80',
    illustration: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    plans: [
      { title: 'Domestic Travel', desc: 'Protection for your trips within the country.', icon: 'fa-map-marked-alt', color: 'dark' },
      { title: 'International Travel', desc: 'Global medical and trip protection abroad.', icon: 'fa-globe-americas', color: 'gold' },
      { title: 'Student Travel', desc: 'Specialized cover for students studying overseas.', icon: 'fa-user-graduate', color: 'dark' },
      { title: 'Corporate Travel', desc: 'Bespoke plans for frequent business travelers.', icon: 'fa-briefcase', color: 'gold' },
      { title: 'Senior Citizen Travel', desc: 'Worry-free travel for the elderly with medical focus.', icon: 'fa-blind', color: 'dark' }
    ]
  },
  'home-property-insurance': {
    title: 'Home & Property Insurance',
    subtitle: 'Secure your home, building, and valuable assets.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    illustration: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    plans: [
      { title: 'Home Structure', desc: 'Protects the physical building of your home.', icon: 'fa-house-damage', color: 'dark' },
      { title: 'Home Contents', desc: 'Safeguards furniture, gadgets, and personal belongings.', icon: 'fa-couch', color: 'gold' },
      { title: 'Fire & Allied Perils', desc: 'Protection against fire, lighting, and explosions.', icon: 'fa-fire', color: 'dark' },
      { title: 'Burglary Insurance', desc: 'Secure your property against theft and break-ins.', icon: 'fa-user-ninja', color: 'gold' },
      { title: 'Shop & Office', desc: 'Comprehensive cover for small businesses and stores.', icon: 'fa-store', color: 'dark' },
      { title: 'Industrial All-Risk', desc: 'End-to-end protection for large industrial units.', icon: 'fa-industry', color: 'gold' },
      { title: 'Warehouse Insurance', desc: 'Secure storage facilities and stored goods.', icon: 'fa-warehouse', color: 'dark' }
    ]
  },
  'business-commercial-insurance': {
    title: 'Business & Commercial Insurance',
    subtitle: 'Protect business operations, liabilities, employees, and infrastructure.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    illustration: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    plans: [
      { title: 'Marine Insurance', desc: 'Cargo and Hull protection for sea and air transit.', icon: 'fa-ship', color: 'dark' },
      { title: 'Liability Insurance', desc: 'Public, Product, and Professional Indemnity cover.', icon: 'fa-balance-scale', color: 'gold' },
      { title: 'Employee Protection', desc: 'Workmen Compensation and Group Health plans.', icon: 'fa-user-shield', color: 'dark' },
      { title: 'Fidelity Guarantee', desc: 'Protects against losses from employee fraud or dishonesty.', icon: 'fa-handshake', color: 'gold' },
      { title: 'Management & Cyber', desc: 'Directors & Officers (D&O) and Cyber Insurance.', icon: 'fa-user-lock', color: 'dark' },
      { title: 'Engineering Insurance', desc: 'Machinery Breakdown and Contractor’s All Risk.', icon: 'fa-cogs', color: 'gold' },
      { title: 'Business Interruption', desc: 'Covers loss of profit during operational shutdowns.', icon: 'fa-chart-line', color: 'dark' }
    ]
  },
  'miscellaneous-insurance': {
    title: 'Miscellaneous Insurance',
    subtitle: 'Coverage for lifestyle, valuables, events, and special categories.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    illustration: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    plans: [
      { title: 'Mobile & Gadget', desc: 'Protection against accidental and liquid damage.', icon: 'fa-mobile-alt', color: 'dark' },
      { title: 'Wedding Insurance', desc: 'Secure your special day against unforeseen cancellations.', icon: 'fa-gem', color: 'gold' },
      { title: 'Event Insurance', desc: 'Comprehensive cover for corporate and public events.', icon: 'fa-calendar-check', color: 'dark' },
      { title: 'Art & Jewel', desc: 'High-value protection for collectibles and jewelry.', icon: 'fa-palette', color: 'gold' },
      { title: 'Pet Insurance', desc: 'Healthcare and liability protection for your pets.', icon: 'fa-paw', color: 'dark' }
    ]
  },
  'life-insurance': {
    title: 'Life Insurance',
    subtitle: 'Protect what matters most and start your insurance journey today',
    image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    illustration: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    plans: [
      { title: 'Savings Plans', desc: 'Savings plans offer life coverage, steady growth, guaranteed returns, and low-risk wealth building.', icon: 'fa-piggy-bank', color: 'dark' },
      { title: 'Investment Plans', desc: 'Investment plans offer life cover, flexible premiums, tax benefits, and market-linked growth.', icon: 'fa-chart-line', color: 'gold' },
      { title: 'Retirement Plans', desc: 'Retirement plans offer steady post-retirement income and financial security for the future.', icon: 'fa-user-clock', color: 'dark' }
    ]
  }
};

const InsuranceDetail = () => {
  const { type } = useParams();
  const data = insuranceData[type] || insuranceData['life-insurance'];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="insurance-detail-page">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="insurance" />

      {/* Dynamic Hero Section matching the home page style */}
      <section
        className="detail-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${data.image})` }}
      >
        <div className="detail-hero-content">
          <h1 className="detail-title">{data.title}</h1>
          <p className="detail-subtitle">{data.subtitle}</p>
          <Link to="/contact" className="apply-now-btn">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Our Plans Section matching the image */}
      <section className="our-plans-section">
        <div className="container">
          <div className="plans-header">
            <h2 className="plans-main-title">Our {data.title} Plans</h2>
            <p className="plans-sub-title">Protect Your Future With The Right {data.title} Plans</p>
          </div>

          <div className="plans-grid">
            {data.plans.map((plan, index) => (
              <div key={index} className={`plan-card ${plan.color}`}>
                <div className="plan-icon">
                  <i className={`fas ${plan.icon}`}></i>
                </div>
                <h3>{plan.title}</h3>
                <div className="plan-divider"></div>
                <p>{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section matching the new image */}
      <section className="tailored-feature-section">
        <div className="container feature-container">
          <div className="feature-left">
            <div className="illustration-box">
              <img src={data.illustration} alt="Insurance Protection" className="feature-illustration" />
            </div>
          </div>

          <div className="feature-right">
            <h2 className="feature-title">{data.title} Plans For Every Stage Of Life</h2>
            <p className="feature-desc">
              Secure your future with expert-backed insurance options—built to protect, grow, and provide peace of mind.
            </p>

            <div className="feature-points">
              <div className="point">
                <h3>Comprehensive Coverage</h3>
                <p>Get protection for your family, business, and retirement.</p>
              </div>
              <div className="point">
                <h3>Expert Guidance</h3>
                <p>Personalized advice to help you make informed decisions.</p>
              </div>
            </div>

            <div className="feature-cta-row">
              <Link to="/contact" className="contact-us-btn">
                CONTACT US <i className="fas fa-chevron-right"></i>
              </Link>
              <div className="feature-contact">
                <i className="fas fa-phone-alt"></i>
                <div className="contact-numbers">
                  <span>(+91) 831 731 8136</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Today / Contact Form Section */}
      <section className="plan-today-section">
        <div className="container plan-today-container">
          <div className="plan-today-left">
            <h2 className="plan-today-title">
              Plan today for a worry-free tomorrow — explore {data.title} solutions with us!
            </h2>
            <div className="plan-today-socials">
              <a href="https://hi-in.facebook.com/analyticalinvestment" className="social-circle" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/company/analytical-investments/" className="social-circle" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/analyticalinvestments/" className="social-circle" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=919606601808&text&type=phone_number&app_absent=0" className="social-circle" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="plan-today-right">
            <div className="contact-form-card">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <button type="submit" className="form-submit-btn">
                  CONTACT US
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsuranceDetail;
