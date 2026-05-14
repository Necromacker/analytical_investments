import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      question: "What documents are required for the loan application?",
      answer: (
        <ul>
          <li>KYC'S Of Both Company and Director's</li>
          <li>ITR'S, Computation of Income</li>
          <li>GSTR3B</li>
          <li>CIBIL Score</li>
          <li>Bank Statement if Loan Taken in Other's Banks, of Both Company and Individual's.</li>
          <li>Financials of Both Company and Individuals.</li>
        </ul>
      )
    },
    {
      question: "Can I apply for a loan if I have existing debts?",
      answer: "Yes, you can apply for a loan even if you have existing debts. We will evaluate your debt-to-income ratio and overall financial health to determine the best solution for you. Debt consolidation is also an option we offer to simplify your repayments."
    },
    {
      question: "How can I get a loan instantly?",
      answer: "While 'instant' depends on the type of loan, we expedite the process through digital documentation and quick verification. Unsecured personal or business loans can often be processed within 24-48 hours once all documents are submitted."
    },
    {
      question: "How can you reduce the interest rate on my loan?",
      answer: "We help reduce interest rates through negotiation with lenders, balance transfers to banks with lower rates, or by improving your CIBIL score through our rectification services."
    },
    {
      question: "Are there any specific income requirements for loan?",
      answer: "Income requirements vary by loan type and lender. Generally, for business loans, we look at your annual turnover and profitability. For individual loans, your monthly salary and existing obligations are the primary factors."
    }
  ];

  return (
    <div className="contact-page">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="contact" />

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-narrow-container">
          <div className="map-container">
            <iframe 
              title="Analytical Investments Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5447285623326!2d77.5873!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159048c90969%3A0xc07887e35b7501b1!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1715690000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Cards Section (Now Between Map and Form) */}
      <section className="contact-details-section">
        <div className="contact-narrow-container">
          <div className="info-cards-row">
            <div className="info-card">
              <div className="info-icon"><i className="fab fa-whatsapp"></i></div>
              <div className="info-text">
                <h4>WhatsApp</h4>
                <p>(+91) 831 731 8136</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div className="info-text">
                <h4>Email</h4>
                <p>ravi@analyticalinvestments.com</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>(+91) 831 731 8136</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Form Section */}
      <section className="contact-form-section">
        <div className="contact-narrow-container">
          <div className="contact-form-panel">
            <div className="form-header">
              <h2>GET IN TOUCH</h2>
              <div className="title-underline"></div>
            </div>
            <form className="get-in-touch-form">
              <div className="form-grid">
                <div className="form-group">
                  <select required>
                    <option value="" disabled selected>Select Occupation</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="business">Business Owner</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Full Name*" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number*" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email ID*" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <input type="number" placeholder="Loan Amount Required" />
                </div>
                <div className="form-group full-width">
                  <select required>
                    <option value="" disabled selected>Select Loan/Credit Type</option>
                    <option value="unsecured-business">Unsecured Business Loan</option>
                    <option value="home-loan">Home Loan</option>
                    <option value="lap">Loan Against Property</option>
                    <option value="machinery">Machinery Finance</option>
                    <option value="insurance">Insurance</option>
                    <option value="mutual-funds">Mutual Funds</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently asked questions</h2>
            <div className="faq-shape"></div>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <i className={`fas ${activeFaq === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
                <div className="faq-answer">
                  <div className="answer-content">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
