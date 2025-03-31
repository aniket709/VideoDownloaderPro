import React from 'react';
import '../styles/HowToUse.css';

const HowToUse = () => {
  return (
    <div className="how-to-use-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/how-to-use" className="active">How to Use</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h1>How to Use VideoDownloaderPro</h1>
        <p>Follow these simple steps to download your favorite videos:</p>
        
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>Copy the URL of the video you want to download.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Paste the URL in the input box on the homepage.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>Click the 'Download' button and select the format.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>Wait for the download to complete and enjoy your video!</p>
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

export default HowToUse;
