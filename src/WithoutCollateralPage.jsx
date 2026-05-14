import React from 'react';
import { Link } from 'react-router-dom';
import './WithoutCollateralPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

const WithoutCollateralPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Unsecured Business Loan",
      icon: "fa-briefcase",
      subtitle: "Your Vision, Our Support – No Collateral Needed!",
      content: "Unsecured business loans are loans provided to businesses without requiring collateral. This means that the borrower does not have to pledge any assets like property, equipment, or inventory to secure the loan. Instead, the loan is granted based on the creditworthiness of the business and its owners, as well as other factors like business performance, revenue, and overall financial health."
    },
    {
      title: "Unsecured Working Capital",
      icon: "fa-hand-holding-usd",
      subtitle: "Grow your business with CGTMSE",
      content: "To grow your business, Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is jointly set up by Ministry of Micro, Small & Medium Enterprises (MSME), Government of India. This scheme ensures cash flow of institutional credit to Micro & Small Enterprises (MSEs) without the need for third-party guarantees or collateral."
    },
    {
      title: "Invoice Discounting",
      icon: "fa-file-invoice",
      subtitle: "Unlock Cash Tied Up in Unpaid Invoices",
      content: "Invoice discounting enables businesses to gain instant access to cash tied up in unpaid invoices and tap into the value of their sales ledger. It’s simple: when you invoice a customer or client, you receive the amount from the lender after deducting a small percentage of invoice value, providing your business with a cash flow boost."
    },
    {
      title: "Purchase Finance (PO Financing)",
      icon: "fa-shopping-cart",
      subtitle: "Fund Your Large Orders Seamlessly",
      content: "Purchase order, or, 'PO financing' is an arrangement where a third party agrees to give a supplier enough money to fund a customer’s purchase order. In some cases, purchase order loans will finance an entire order, ensuring you never miss a business opportunity due to capital constraints."
    },
    {
      title: "Drop Line Overdraft (OD)",
      icon: "fa-chart-line",
      subtitle: "Flexible Credit for Your Business",
      content: "Dropline overdraft is basically a combination of an overdraft and a term loan. It can be availed on a monthly, quarterly or yearly basis. Banks do not levy a yearly renewal charge for a dropline overdraft; there will be a reduction of limit on a month-on-month or yearly basis till the loan becomes completely paid up. One pays interest only for the utilized amount."
    },
    {
      title: "Channel Finance",
      icon: "fa-network-wired",
      subtitle: "Empower Your Supply Chain",
      content: "Channel financing is a type of working capital loan that provides funds to channel partners, such as distributors, dealers, or buyers, who purchase goods or services from a corporate entity. This streamlines the supply chain and ensures smooth operations for all stakeholders."
    }
  ];

  return (
    <div className="collateral-page without-collateral">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="products" />

      <header className="collateral-hero">
        <div className="container">
          <h1>Without Collateral Loans</h1>
          <p className="hero-subtitle">Fueling your business growth without the burden of assets.</p>
        </div>
      </header>

      <section className="collateral-content">
        <div className="container">
          <div className="product-grid">
            {products.map((p, i) => (
              <div key={i} className="product-card">
                <div className="card-icon"><i className={`fas ${p.icon}`}></i></div>
                <h2>{p.title}</h2>
                <div className="card-divider"></div>
                <p className="product-tagline">{p.subtitle}</p>
                <p className="product-desc">{p.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WithoutCollateralPage;
