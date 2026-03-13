import React, { useState } from 'react';
import './EligibleLendersPage.css';

interface EligibleLendersPageProps {
  onBack: () => void;
  onContinue: () => void;
}

interface Lender {
  id: string;
  name: string;
  badge: string;
  maxApproval: string;
  tenure: string;
  roi: string;
  icon: string;
}

const lenders: Lender[] = [
  {
    id: '1',
    name: 'Bajaj Finserv',
    badge: 'Trusted Partner',
    maxApproval: '₹50,000',
    tenure: '12 Months',
    roi: '14% p.a.',
    icon: 'account_balance'
  },
  {
    id: '2',
    name: 'HDFC FlexiPay',
    badge: 'Insta-Approval',
    maxApproval: '₹50,000',
    tenure: '24 Months',
    roi: '15.5% p.a.',
    icon: 'account_balance_wallet'
  },
  {
    id: '3',
    name: 'Axio',
    badge: 'Zero Processing Fee',
    maxApproval: '₹50,000',
    tenure: '6 Months',
    roi: '12% p.a.',
    icon: 'payments'
  }
];

const EligibleLendersPage: React.FC<EligibleLendersPageProps> = ({ onBack, onContinue }) => {
  const [selectedLender, setSelectedLender] = useState<string>('1');

  return (
    <div className="lenders-page">
      <header className="lenders-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Eligible Lenders</span>
        <button className="help-button">
          <span className="material-icons">help_outline</span>
        </button>
      </header>

      <main className="lenders-content">
        <div className="step-indicator">
          <span className="step-label">Lender Selection</span>
          <span className="step-count">Step 3 of 3</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '100%' }}></div>
        </div>

        <div className="status-badge">
          <span className="material-icons status-icon">check_circle</span>
          <span>Finalizing your application</span>
        </div>

        <div className="success-banner">
          <span className="material-icons banner-icon">check_circle</span>
          <div className="banner-text">
            <h3>Great news!</h3>
            <p>You have unlocked these premium lenders based on your business profile.</p>
          </div>
        </div>

        <h2 className="section-title">Recommended for You</h2>
        <p className="section-subtitle">Select a lender to proceed with the final agreement.</p>

        <div className="lenders-list">
          {lenders.map((lender) => (
            <button
              key={lender.id}
              className={`lender-card ${selectedLender === lender.id ? 'selected' : ''}`}
              onClick={() => setSelectedLender(lender.id)}
            >
              <div className="lender-header">
                <div className="lender-icon">
                  <span className="material-icons">{lender.icon}</span>
                </div>
                <div className="lender-info">
                  <h3 className="lender-name">{lender.name}</h3>
                  <span className="lender-badge">{lender.badge}</span>
                </div>
              </div>

              <div className="approval-info">
                <span className="approval-label">Max Approval</span>
                <span className="approval-value">{lender.maxApproval}</span>
              </div>

              <div className="lender-details">
                <div className="detail-item">
                  <span className="material-icons">schedule</span>
                  <span>Tenure: {lender.tenure}</span>
                </div>
                <div className="detail-item">
                  <span className="material-icons">percent</span>
                  <span>ROI: {lender.roi}</span>
                </div>
              </div>

              <div className="select-button">
                {selectedLender === lender.id ? 'Selected' : 'Select Plan'}
              </div>
            </button>
          ))}
        </div>

        <button className="continue-button" onClick={onContinue}>
          Continue with Selected Plan
        </button>
      </main>

      <nav className="bottom-nav">
        <button className="nav-item active">
          <span className="material-icons">home</span>
          <span>Home</span>
        </button>
        <button className="nav-item">
          <span className="material-icons">account_balance_wallet</span>
          <span>Loans</span>
        </button>
        <button className="nav-item">
          <span className="material-icons">sell</span>
          <span>Offers</span>
        </button>
        <button className="nav-item">
          <span className="material-icons">account_circle</span>
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default EligibleLendersPage;
