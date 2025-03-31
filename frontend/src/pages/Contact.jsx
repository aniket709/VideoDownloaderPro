import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/how-to-use">How to Use</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact" className="active">Contact Us</a></li>
        </ul>
      </nav>

      {/* Contact Section */}
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>Get in touch through my social platforms:</p>

        <div className="social-links">
          <a href="https://www.instagram.com/aniketranjan30/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://linkedin.com/in/aniket-ranjan-093173235" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:aniket.ranjan709@mail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 VideoDownloaderPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
