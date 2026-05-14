import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Rate vs. Reality: Why Interest Rate Isn't Everything",
      date: "May 13, 2026",
      readTime: "1 minute read",
      video: "https://analyticalinvestments.com/wp-content/uploads/2026/05/WhatsApp-Video-2026-05-10-at-11.11.37.mp4",
      content: "Most business owners focus on getting the lowest interest rate. That makes sense. But a loan should not be judged by rate alone. The real impact of borrowing is often shaped elsewhere — the repayment flexibility, the tenure, the structure, and how comfortably the..."
    },
    {
      id: 2,
      title: "The Cost You Don’t See in Loan Decisions",
      date: "March 27, 2026",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      content: "When a loan consultant says they don’t charge you, the question is not “why”. It is “how”. Most people stop at the first answer. Very few pause to understand the structure behind it. In many cases, professional loan consultants are compensated..."
    },
    {
      id: 3,
      title: "The Hidden Side of Early Loan Closure",
      date: "March 23, 2026",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      content: "Closing a loan early sounds like a clear win. But it is not always the right decision. Yes, you may save on interest. Yes, you may become debt-free sooner. But what often gets overlooked is the impact on liquidity, prepayment conditions,..."
    },
    {
      id: 4,
      title: "Structure Over Eligibility: Telling the Right Story",
      date: "January 5, 2026",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
      content: "Many entrepreneurs don’t get stuck because of loans. Sometimes it simply means the story was not told the right way. We have seen businesses get rejected by one institution and then get approved when the structure, clarity, and documentation were aligned properly."
    },
    {
      id: 5,
      title: "Public Liability: The Overlooked Risk",
      date: "December 31, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      content: "One accident outside your control can still become your responsibility. I often see businesses focus on internal risks. Machinery. Inventory. Employees. What gets overlooked is the risk that comes from everyday interaction with the public..."
    },
    {
      id: 6,
      title: "Marine Risk: Protecting the Vessel and the Cargo",
      date: "December 29, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1494412574743-019475224a46?auto=format&fit=crop&w=800&q=80",
      content: "The vessel is the business before the cargo ever moves. When people talk about marine risk, the focus is often on goods in transit. But the real exposure starts with the vessel itself. A ship is not just a mode of transport..."
    },
    {
      id: 7,
      title: "Product Responsibility: Risk Doesn't End at Sale",
      date: "December 27, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      content: "Your product leaves your hands. Responsibility does not. I often see businesses believe risk ends once a product is sold. In reality, that is when a different kind of risk begins. If a product causes injury, illness, or property damage..."
    },
    {
      id: 8,
      title: "People First: The Importance of Group Life Insurance",
      date: "December 24, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      content: "Most businesses insure assets before they insure people. I often see organisations protecting property, equipment, and inventory. But the people who actually run the business are left exposed. Group term life insurance exists for a simple reason."
    },
    {
      id: 9,
      title: "Recovery Is Not Free: Health Insurance Limits",
      date: "December 18, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      content: "Health insurance pays hospital bills. Then what? A critical illness doesn’t stop at discharge. Treatment may be over, but recovery is just beginning and that phase is rarely cost-free. Income pauses or reduces. Care expenses continue..."
    },
    {
      id: 10,
      title: "Insurance Is a Discipline, Not a Deadline",
      date: "December 18, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=800&q=80",
      content: "Many people say they’ll buy insurance later, when income grows or life feels more settled. But time doesn’t wait for readiness, and neither do premiums. The earlier you start, the more room you give your future. Approvals come easier."
    },
    {
      id: 11,
      title: "The Tipping Point: When Debt Becomes a Burden",
      date: "December 9, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
      content: "Debt is one of the most powerful tools a business can use, until it isn’t. Most businesses don’t get into trouble because they borrowed. They struggle because they over-leveraged without the margins to support that borrowing..."
    },
    {
      id: 12,
      title: "Health Insurance: Secure Tomorrow's Risk Today",
      date: "December 5, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      content: "People delay health insurance because they assume age and fitness protect them. It’s a reasonable thought, but it overlooks how the product actually works. Health insurance isn’t bought for today. It’s bought to secure tomorrow’s risk..."
    },
    {
      id: 13,
      title: "SME Limits: Discipline Over Birthright",
      date: "December 3, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      content: "Many SMEs believe working capital limits are guaranteed. It feels like a given, especially with the way government schemes are promoted. But loan facilities are not a birth right. They are a reflection of discipline..."
    },
    {
      id: 14,
      title: "The Power of a Simple Clause",
      date: "November 22, 2025",
      readTime: "2 minutes read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      content: "A simple clause in your loan agreement could save your business. During my years of restructuring debt for MSMEs, I’ve seen companies falter not from poor business models but from rigid financial agreements..."
    },
    {
      id: 15,
      title: "Why More Businesses Are Choosing NBFCs",
      date: "November 22, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1512428559083-a401c33c2b55?auto=format&fit=crop&w=800&q=80",
      content: "More businesses are choosing NBFCs — and it’s not because they enjoy paying a higher rate. It’s because timing, flexibility, and practicality matter more than a marginal saving. NBFCs step in where traditional frameworks slow down..."
    },
    {
      id: 16,
      title: "Banks vs NBFCs: The Real Difference",
      date: "November 20, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80",
      content: "People often assume the only difference between banks and NBFCs is the interest rate. It’s not. The real difference shows up in the experience. Banks move with caution. Their valuations are conservative, their documentation asks are rigid..."
    },
    {
      id: 17,
      title: "Secured vs Unsecured: One Loan to Rule Them All",
      date: "November 19, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
      content: "I get this question often. Is it better to keep one large secured loan or multiple smaller unsecured facilities? From years of watching businesses grow, my answer is simple. One well structured secured loan almost always wins..."
    },
    {
      id: 18,
      title: "Industrial Land: Turning Rejections into Success",
      date: "November 18, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      content: "High value, low liquidity, and complicated documentation are some of the difficulties that industrial land frequently presents. Almost all major banks rejected the proposal from a warehouse owner who came to us with a 1-acre property..."
    },
    {
      id: 19,
      title: "In Finance, a 'No' is Not Always the End",
      date: "November 12, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      content: "Sometimes it simply means the story was not told the right way. We have seen businesses get rejected by one institution and then get approved when the structure, clarity, and documentation were aligned properly..."
    },
    {
      id: 20,
      title: "Progress Begins with Perspective",
      date: "November 4, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      content: "Due to its high value, low liquidity, and difficult recovery, industrial land is frequently viewed as risky. Therefore, most banks retreated when a client came to us with more than an acre of land but unfinished Katha documentation..."
    },
    {
      id: 21,
      title: "Borrowing For Growth: The Hidden Engine",
      date: "November 1, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      content: "What if “debt” isn’t a burden, but the hidden engine behind breakout growth? Smart founders don’t fear borrowing; they use it to scale faster without giving up control. When used intentionally, debt unlocks quick capital..."
    },
    {
      id: 22,
      title: "Collaboration and Complex Credit",
      date: "October 30, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      content: "A builder and a few landowners formed a partnership to develop a commercial property, but no bank was willing to put their trust in them. Too many owners caused their Lease Rent Discounting loan to be repeatedly rejected..."
    },
    {
      id: 23,
      title: "Clarity is Possible When Security Isn't",
      date: "October 30, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      content: "A school needed money for urgent repairs, but they couldn’t get a secured loan because their property was involved in a legal battle. We took a different route even though banks wouldn’t take on the case. We helped the institution stay..."
    },
    {
      id: 24,
      title: "Low-Rate Personal Loans: Strategy Matters",
      date: "October 29, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
      content: "Think all personal loans come with sky-high interest rates? Think again. In reality, securing a low-rate loan is absolutely possible with the right strategy. Your credit score, loan amount, and terms play a huge role..."
    },
    {
      id: 25,
      title: "Simplified Success: Efficiency Wins",
      date: "October 28, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=800&q=80",
      content: "The simplest situations can sometimes say the most. A customer who had everything in order, including flawless paperwork, decided to pass through us instead. Why? Because efficiency in the loan industry matters..."
    },
    {
      id: 26,
      title: "Clarity Creates Confidence: Textile Retailer Case",
      date: "October 24, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      content: "An established textile retailer had a difficult time during the pandemic. The majority of banks declined to take over their 5.5 crore loan. When they reached out, we took action to reorganize and secure their future..."
    },
    {
      id: 27,
      title: "Vision Meets Viability: Warehouse Dreams",
      date: "October 23, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      content: "A patch of farmland is what most people saw. Our customer saw warehouses. In an ambitious move that most banks avoid, a recently established company sought to purchase agricultural land and convert it for commercial use..."
    },
    {
      id: 28,
      title: "Self-Employed People Can Get Loans!",
      date: "October 22, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      content: "Think being self-employed disqualifies you from getting a loan? Think again. The idea that only salaried employees can secure loans is a myth that’s long overdue for debunking. You have unique advantages as a professional..."
    },
    {
      id: 29,
      title: "Not Every Victory is a Sanction: Trust Matters",
      date: "September 29, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1556761175-5973eb0732da?auto=format&fit=crop&w=800&q=80",
      content: "One of a devoted businessman’s three mortgaged properties needed to be released. His bank declined. We intervened, negotiated a better agreement, released the property, and provided an additional INR 3 crore in funding..."
    },
    {
      id: 30,
      title: "Real Results: ₹2.10 Cr Sanctioned for Dentist",
      date: "July 29, 2025",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      content: "Real People. Real Results. When a Dentist came to us after being turned down by multiple banks due to low reported income, they had nearly given up. We stepped in, realigned the case with a smarter strategy..."
    },
    {
      id: 31,
      title: "A Manufacturer's Journey: Chennai Story",
      date: "May 11, 2024",
      readTime: "2 minutes read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      content: "A Genset Manufacturer’s Journey – How we helped him double his turnover from Rs.100 Cr to Rs.200 Cr. Imagine that you are about to grow a lot but can’t because you don’t have enough money. That’s how things started..."
    },
    {
      id: 32,
      title: "NBFC Rescues Entrepreneur's Property Dream",
      date: "May 11, 2024",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      content: "An entrepreneur lady faced multiple rejections for a 2.5 crore home loan due to old CIBIL issues. Banks were uncooperative, but an NBFC came to the rescue, recognizing her property value and business potential..."
    },
    {
      id: 33,
      title: "The 1.75 Crore Loan Story",
      date: "May 11, 2024",
      readTime: "1 minute read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
      content: "A client urgently needed a Rs 1 Crore loan. Time was tight, and missing the deadline meant losing substantial savings. At Analytical Investments, we jumped into action. Our team fast-tracked the process, ensuring success..."
    }
  ];

  return (
    <div className="blog-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="contact-item"><i className="fas fa-map-marker-alt"></i> HQ, Jayanagar, Bengaluru</div>
          <div className="contact-item"><i className="fas fa-envelope"></i> ravi@analyticalinvestments.com</div>
          <div className="contact-item"><i className="fas fa-phone-alt"></i> (+91) 831 731 8136</div>
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
          <Link to="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <div className="nav-item dropdown">
            <div className="dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)}>
              Products <i className={`fas fa-chevron-down ${productsOpen ? 'up' : ''}`}></i>
            </div>
            <div className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
              <Link to="/insurance" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
              <Link to="/mutual-funds" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link to="/services" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/without-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>Without Collateral</Link>
              <Link to="/with-collateral" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>With Collateral</Link>
            </div>
          </div>
          <Link to="/emi-calculator" className="nav-item" onClick={() => setMobileMenuOpen(false)}>EMI Calculator</Link>
          <Link to="/blog" className="nav-item active" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>

      <header className="blog-hero">
        <div className="container">
          <h1>Financial Insights & Stories</h1>
          <p>Expert perspectives on loans, insurance, and business growth.</p>
        </div>
      </header>

      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-media">
                  {post.video ? (
                    <video controls className="blog-video">
                      <source src={post.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={post.image} alt={post.title} className="blog-image" />
                  )}
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.content}</p>
                  <Link to={`/blog/${post.id}`} className="continue-reading">
                    Continue Reading <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <li><Link to="/services">Services</Link></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col services">
            <h3>Our Products</h3>
            <ul>
              <li><Link to="/without-collateral">Without Collateral</Link></li>
              <li><Link to="/with-collateral">With Collateral</Link></li>
              <li><Link to="/insurance">Insurance Services</Link></li>
              <li><Link to="/mutual-funds">Mutual Funds</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>
          <div className="footer-col contact">
            <h3>Contact Us</h3>
            <div className="footer-contact-item"><i className="fas fa-map-marker-alt"></i> <span>HQ, Jayanagar, Bengaluru</span></div>
            <div className="footer-contact-item"><i className="fas fa-envelope"></i> <span>ravi@analyticalinvestments.com</span></div>
            <div className="footer-contact-item"><i className="fas fa-phone-alt"></i> <span>(+91) 831 731 8136</span></div>
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
    </div>
  );
};

export default BlogPage;
