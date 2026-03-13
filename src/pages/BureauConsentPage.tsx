import React, { useState } from 'react';
import './BureauConsentPage.css';

interface BureauConsentPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const BureauConsentPage: React.FC<BureauConsentPageProps> = ({ onBack, onContinue }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <div className="bureau-page">
      <header className="bureau-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Verification</span>
        <div className="header-spacer"></div>
      </header>

      <main className="bureau-content">
        <div className="shield-section">
          <div className="shield-icon">
            <span className="material-icons">shield_lock</span>
          </div>
          <h2 className="shield-title">Secure Your Profile</h2>
          <p className="shield-description">
            We need to check your credit history to unlock the best lenders for your customers. 
            This helps us ensure the highest approval rates for your business.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <span className="material-icons feature-icon">check_circle</span>
            <span className="feature-text">Bank-grade Security</span>
          </div>
          <div className="feature-item">
            <span className="material-icons feature-icon">verified_user</span>
            <span className="feature-text">RBI Regulated Partners</span>
          </div>
        </div>

        <div className="bureau-logos">
          <div className="logo-item">CIBIL</div>
          <div className="logo-item">EXPERIAN</div>
          <div className="logo-item">EQUIFAX</div>
        </div>

        <div className="consent-section">
          <label className={`consent-checkbox ${consentGiven ? 'checked' : ''}`}>
            <input
              type="checkbox"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
            />
            <span className="checkmark">
              {consentGiven && <span className="material-icons">check</span>}
            </span>
            <span className="consent-text">
              I provide my consent to fetch my credit bureau profile for business verification purposes. 
              I understand this will not impact my personal credit score.
            </span>
          </label>
        </div>

        <button
          className="verify-button"
          onClick={onContinue}
          disabled={!consentGiven}
        >
          <span>Verify Profile</span>
          <span className="material-icons">arrow_forward</span>
        </button>

        <p className="security-note">100% Secure & Confidential</p>
      </main>
    </div>
  );
};

export default BureauConsentPage;
