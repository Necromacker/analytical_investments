import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';
import { blogPosts } from './blogData';

const BlogPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar activePage="blog" />

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

      <Footer />
    </div>
  );
};

export default BlogPage;
