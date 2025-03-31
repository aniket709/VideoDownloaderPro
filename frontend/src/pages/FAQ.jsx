import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/how-to-use">How to Use</a></li>
          <li><a href="/faq" className="active">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* FAQ Content */}
      <div className="faq-content">
        <h1>Frequently Asked Questions</h1>
        
        <div className="faq-item">
          <h3>❓ How do I download videos?</h3>
          <p>Just paste the video URL in the input field and click the "Download" button.</p>
        </div>

        <div className="faq-item">
          <h3>❓ Is it free to use?</h3>
          <p>Yes! Our service is completely free.</p>
        </div>

        <div className="faq-item">
          <h3>❓ Which platforms are supported?</h3>
          <p>Currently, we support YouTube, Instagram, and Facebook.</p>
        </div>

        <div className="faq-item">
          <h3>❓ Can I download private videos?</h3>
          <p>No, we only support downloading public videos.</p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 VideoDownloaderPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FAQ;
