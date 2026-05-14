import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import Footer from './Footer';
import './BlogPage.css'; // Reusing BlogPage styles for consistency

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="blog-detail-not-found">
        <h1>Post Not Found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

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
            <a href="https://hi-in.facebook.com/analyticalinvestment" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/analytical-investments/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/analyticalinvestments/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=919606601808&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
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
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About Us</Link>
          <Link to="/blog" className="nav-item active">Blog</Link>
          <Link to="/contact" className="nav-item">Contact Us</Link>
        </div>
      </nav>

      <section className="blog-detail-section" style={{ padding: '100px 5% 60px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/blog" className="back-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--primary-blue)', fontWeight: '700', marginBottom: '30px', textDecoration: 'none' }}>
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Link>
          
          <div className="blog-media" style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            {post.video ? (
              <video controls className="blog-video" style={{ width: '100%', display: 'block' }}>
                <source src={post.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={post.image} alt={post.title} className="blog-image" style={{ width: '100%', display: 'block', height: 'auto' }} />
            )}
          </div>

          <div className="blog-meta" style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#64748b', fontSize: '14px' }}>
            <span className="blog-date"><i className="far fa-calendar-alt"></i> {post.date}</span>
            <span className="blog-read-time"><i className="far fa-clock"></i> {post.readTime}</span>
          </div>

          <h1 className="blog-title" style={{ fontSize: '42px', color: 'var(--primary-blue)', fontWeight: '800', marginBottom: '30px', lineHeight: '1.2' }}>{post.title}</h1>
          
          <div className="blog-full-content" style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '25px' }}>{post.fullContent || post.content}</p>
            {/* Added more placeholder text if needed */}
            <p style={{ marginBottom: '25px' }}>
              Financial decisions can often be complex and overwhelming. At Analytical Investment, we aim to simplify these choices by providing expert guidance and transparent information. Our goal is to help you navigate the landscape of loans, insurance, and investments with confidence.
            </p>
            <p>
              Stay tuned for more insights and updates from our experts as we continue to explore the world of finance and help you achieve your financial goals.
            </p>
          </div>

          <div className="blog-share" style={{ marginTop: '60px', padding: '40px', background: '#f8fafc', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>Did you find this helpful? Share it!</h3>
            <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <a href="#" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }}><i className="fab fa-facebook-f"></i></a>
                <a href="#" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }}><i className="fab fa-linkedin-in"></i></a>
                <a href="#" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }}><i className="fab fa-twitter"></i></a>
                <a href="#" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }}><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
