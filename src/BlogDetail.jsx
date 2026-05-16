import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from './blogData';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';
import './BlogPage.css'; // Reusing BlogPage styles for consistency

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  React.useEffect(() => {
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
       <TopBar />

      {/* Navbar */}
      <Navbar activePage="blog" />

      <section className="blog-detail-section" style={{ padding: '100px 5% 60px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/blog" className="back-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--primary-blue)', fontWeight: '700', marginBottom: '30px', textDecoration: 'none' }}>
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Link>
          
          <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#f8fafc', display: 'flex', justifyContent: 'center' }}>
            {post.video ? (
              <video controls style={{ width: '100%', display: 'block', maxHeight: '600px', backgroundColor: '#000' }}>
                <source src={post.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'contain', display: 'block' }} />
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
              Financial decisions can often be complex and overwhelming. At Analytical Investments, we aim to simplify these choices by providing expert guidance and transparent information. Our goal is to help you navigate the landscape of loans, insurance, and investments with confidence.
            </p>
            <p>
              Stay tuned for more insights and updates from our experts as we continue to explore the world of finance and help you achieve your financial goals.
            </p>
          </div>

          <div className="blog-share" style={{ marginTop: '60px', padding: '40px', background: '#f8fafc', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>Did you find this helpful? Share it!</h3>
            <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <a href="https://www.facebook.com/analyticalinvestment" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/analytical-investments/" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/analyticalinvestments?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=919606601808&text&type=phone_number&app_absent=0" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
