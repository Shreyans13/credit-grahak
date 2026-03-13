import React from 'react';
import './WelcomePage.css';

interface WelcomePageProps {
  onGetStarted: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <button className="close-button" aria-label="Close">
          <span className="material-icons">close</span>
        </button>
        <h2 className="header-title">Teakwood's Furniture</h2>
        <div className="header-spacer"></div>
      </header>

      <div className="hero-image-section">
        <div 
          className="hero-image-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop')`
          }}
        >
          <div className="hero-gradient-fade"></div>
        </div>
      </div>

      <main className="welcome-content">
        <div className="hero-text-section">
          <h1 className="hero-title">
            Buy your dream sofa with easy EMI plans
          </h1>
          <p className="hero-subtitle">
            Fast, secure, and hassle-free financing in minutes.
          </p>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="material-icons">speed</span>
            </div>
            <div className="feature-text">
              <p className="feature-title">Instant Approval</p>
              <p className="feature-description">Get a decision in under 60 seconds.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="material-icons">verified_user</span>
            </div>
            <div className="feature-text">
              <p className="feature-title">Secure Payments</p>
              <p className="feature-description">Bank-level encryption for your peace of mind.</p>
            </div>
          </div>
        </div>

        <div className="action-section">
          <button className="get-started-button" onClick={onGetStarted}>
            Get Started
          </button>
          <p className="terms-text">
            By continuing, you agree to our Terms of Service and Privacy Policy. Credit subject to status and eligibility.
          </p>
        </div>
      </main>

      <div className="bottom-spacer"></div>
    </div>
  );
};

export default WelcomePage;
