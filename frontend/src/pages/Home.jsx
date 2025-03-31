import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/how-to-use">
              <i className="fas fa-book"></i> How to Use
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <i className="fas fa-question-circle"></i> FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="main-title">Download Videos with Ease</h1>
        <p>
          Your one-stop solution for downloading videos from
          <span className="youtube"> YouTube</span>, 
          <span className="instagram"> Instagram</span>, and 
          <span className="facebook"> Facebook</span>
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          <Link to="/youtube" className="social-icon youtube">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="/instagram" className="social-icon instagram">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/facebook" className="social-icon facebook">
            <i className="fab fa-facebook"></i>
          </Link>
        </div>

        <h2 className="section-title">Why Choose VideoDownloaderPro?</h2>

        <div className="features">
          <div className="feature-card">
            <i className="fas fa-bolt"></i>
            <h3>Lightning-Fast Download</h3>
            <p>Download videos in seconds with our optimized servers.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-globe"></i>
            <h3>Multiple Platforms</h3>
          </div>

          <div className="feature-card">
            <i className="fas fa-user-friends"></i>
            <h3>User-Friendly Interface</h3>
            <p>Simple and intuitive - just paste the URL and download!</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 VideoDownloaderPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
