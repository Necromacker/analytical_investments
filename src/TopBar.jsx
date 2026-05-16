import React from 'react';

const TopBar = () => {
  return (
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
          <a href="https://www.facebook.com/analyticalinvestment" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/analytical-investments/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/analyticalinvestments?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://api.whatsapp.com/send/?phone=919606601808&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
