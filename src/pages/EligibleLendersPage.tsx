import React, { useState } from 'react';
import './EligibleLendersPage.css';

interface EligibleLendersPageProps {
  onBack: () => void;
  onContinue: () => void;
}

interface Lender {
  id: string;
  name: string;
  tagline: string;
  taglineIcon: string;
  taglineColor: 'green' | 'slate' | 'primary';
  limitUpTo: string;
  detailLabel: string;
  detailValue: string;
  logoUrl?: string;
  icon?: string;
}

const lenders: Lender[] = [
  {
    id: '1',
    name: 'Bajaj Finserv',
    tagline: 'Instant Approval',
    taglineIcon: 'bolt',
    taglineColor: 'green',
    limitUpTo: '₹75,000',
    detailLabel: 'Interest Rate',
    detailValue: '0% EMIs Available',
    icon: 'account_balance'
  },
  {
    id: '2',
    name: 'HDFC Bank',
    tagline: '12-24 Months Tenure',
    taglineIcon: 'schedule',
    taglineColor: 'slate',
    limitUpTo: '₹1,20,000',
    detailLabel: 'Processing Fee',
    detailValue: 'Flat ₹499',
    icon: 'account_balance_wallet'
  },
  {
    id: '3',
    name: 'Axio (formerly Capital Float)',
    tagline: 'No Paperwork',
    taglineIcon: 'stars',
    taglineColor: 'primary',
    limitUpTo: '₹50,000',
    detailLabel: 'Best For',
    detailValue: 'Small Monthly EMIs',
    icon: 'payments'
  }
];

const EligibleLendersPage: React.FC<EligibleLendersPageProps> = ({ onBack, onContinue }) => {
  const [selectedLender, setSelectedLender] = useState<string>('1');

  const getTaglineClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'tagline-green';
      case 'primary':
        return 'tagline-primary';
      default:
        return 'tagline-slate';
    }
  };

  return (
    <div className="lenders-page">
      <header className="lenders-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="header-title">Checkout</h2>
        <button className="help-button">
          <span className="material-icons">help_outline</span>
        </button>
      </header>

      <main className="lenders-content">
        <div className="hero-section">
          <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-content">
              <span className="verified-badge">
                <span className="material-icons">verified</span>
                <span className="verified-text">Verified Offers</span>
              </span>
              <h1 className="hero-title">Your New Sofa is Just a Step Away</h1>
            </div>
          </div>
        </div>

        <div className="success-card">
          <div className="success-icon-wrapper">
            <span className="material-icons">check_circle</span>
          </div>
          <div className="success-text">
            <p className="success-title">Success!</p>
            <p className="success-subtitle">Your credit profile matches our partners.</p>
          </div>
        </div>

        <div className="headline-section">
          <h3 className="headline-title">
            Great news! You have unlocked these lenders for your Sofa
          </h3>
          <p className="headline-subtitle">Select your preferred financing partner to continue</p>
        </div>

        <div className="lenders-list">
          {lenders.map((lender) => (
            <div
              key={lender.id}
              className={`lender-card ${selectedLender === lender.id ? 'selected' : ''}`}
              onClick={() => setSelectedLender(lender.id)}
            >
              <div className="card-header">
                <div className="lender-info-left">
                  <div className="lender-logo">
                    {lender.logoUrl ? (
                      <img src={lender.logoUrl} alt={lender.name} />
                    ) : (
                      <span className="material-icons">{lender.icon}</span>
                    )}
                  </div>
                  <div className="lender-details-text">
                    <p className="lender-name">{lender.name}</p>
                    <div className={`lender-tagline ${getTaglineClass(lender.taglineColor)}`}>
                      <span className="material-icons">{lender.taglineIcon}</span>
                      <span>{lender.tagline}</span>
                    </div>
                  </div>
                </div>
                <div className="lender-limit">
                  <p className="limit-label">Limit Up To</p>
                  <p className="limit-value">{lender.limitUpTo}</p>
                </div>
              </div>

              <div className="card-footer">
                <div className="detail-info">
                  <p className="detail-label">{lender.detailLabel}</p>
                  <p className="detail-value">{lender.detailValue}</p>
                </div>
                <button 
                  className={`select-btn ${selectedLender === lender.id ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLender(lender.id);
                  }}
                >
                  {selectedLender === lender.id ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="continue-button" onClick={onContinue}>
          Continue with Selected Plan
        </button>
      </main>
    </div>
  );
};

export default EligibleLendersPage;
