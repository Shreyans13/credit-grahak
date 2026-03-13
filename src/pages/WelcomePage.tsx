import React from 'react';
import './WelcomePage.css';

interface WelcomePageProps {
  onGetStarted: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <div className="header-left">
          <span className="material-icons store-icon">storefront</span>
          <span className="header-title">Merchant Partner</span>
        </div>
        <button className="help-button" aria-label="Help">
          <span className="material-icons">help_outline</span>
        </button>
      </header>

      <main className="welcome-content">
        <div className="hero-image-container">
          <img 
            src="/images/welcome-hero.jpg" 
            alt="Merchant EMI Services" 
            className="hero-image"
          />
        </div>

        <div className="hero-section">
          <h1 className="hero-title">
            Empower your shop with Instant EMIs
          </h1>
          <p className="hero-subtitle">
            Help your customers buy laptops and mobiles with easy finance.
          </p>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon fast">
              <span className="material-icons">bolt</span>
            </div>
            <span className="feature-label">Fast Approval</span>
          </div>

          <div className="feature-card">
            <div className="feature-icon secure">
              <span className="material-icons">verified_user</span>
            </div>
            <span className="feature-label">Secure</span>
          </div>

          <div className="feature-card">
            <div className="feature-icon growth">
              <span className="material-icons">trending_up</span>
            </div>
            <span className="feature-label">Grow Sales</span>
          </div>
        </div>

        <div className="action-section">
          <button className="get-started-button" onClick={onGetStarted}>
            <span>Get Started</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </main>

      <footer className="welcome-footer">
        <p>Powered by India's leading fintech network</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
