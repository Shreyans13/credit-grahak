import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './WelcomePage.css';

interface WelcomePageProps {
  onGetStarted: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onGetStarted }) => {
  const { t } = useLanguage();

  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <button className="close-button" aria-label="Close">
          <span className="material-icons">close</span>
        </button>
        <h2 className="header-title">{t.welcome.storeName}</h2>
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
            {t.welcome.heroTitle}
          </h1>
          <p className="hero-subtitle">
            {t.welcome.heroSubtitle}
          </p>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="material-icons">speed</span>
            </div>
            <div className="feature-text">
              <p className="feature-title">{t.welcome.instantApproval}</p>
              <p className="feature-description">{t.welcome.instantApprovalDesc}</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="material-icons">verified_user</span>
            </div>
            <div className="feature-text">
              <p className="feature-title">{t.welcome.securePayments}</p>
              <p className="feature-description">{t.welcome.securePaymentsDesc}</p>
            </div>
          </div>
        </div>

        <div className="action-section">
          <button className="get-started-button" onClick={onGetStarted}>
            {t.welcome.getStarted}
          </button>
          <p className="terms-text">
            {t.welcome.termsText}
          </p>
        </div>
      </main>

      <div className="bottom-spacer"></div>
    </div>
  );
};

export default WelcomePage;
