import React from 'react';
import './OfferDetailsPage.css';

interface OfferDetailsPageProps {
  onBack: () => void;
  onContinue: () => void;
  onViewOtherOffers: () => void;
}

const OfferDetailsPage: React.FC<OfferDetailsPageProps> = ({ 
  onBack, 
  onContinue, 
  onViewOtherOffers 
}) => {
  return (
    <div className="offer-page">
      <header className="offer-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Loan Details</span>
        <button className="help-button">
          <span className="material-icons">help_outline</span>
        </button>
      </header>

      <main className="offer-content">
        <div className="approval-banner">
          <span className="material-icons banner-icon">check_circle</span>
          <div className="banner-text">
            <h3>Great news!</h3>
            <p>Your application for ₹50,000 has been approved by our partner.</p>
          </div>
        </div>

        <div className="lender-card">
          <div className="lender-info">
            <div className="lender-logo">
              <span className="material-icons">account_balance</span>
            </div>
            <div className="lender-details">
              <h3 className="lender-name">DMI</h3>
              <div className="verified-badge">
                <span className="material-icons">verified</span>
                <span>Verified Lender</span>
              </div>
            </div>
          </div>
          <span className="selected-badge">SELECTED</span>
        </div>

        <div className="emi-highlight">
          <span className="emi-label">Monthly Installment (EMI)</span>
          <span className="emi-value">₹4,500/mo</span>
        </div>

        <div className="loan-details">
          <div className="detail-row">
            <div className="detail-icon">
              <span className="material-icons">calendar_today</span>
            </div>
            <div className="detail-content">
              <span className="detail-label">Tenure</span>
              <span className="detail-value">12 Months</span>
            </div>
          </div>

          <div className="detail-row">
            <div className="detail-icon">
              <span className="material-icons">percent</span>
            </div>
            <div className="detail-content">
              <span className="detail-label">Interest Rate</span>
              <span className="detail-value">14% p.a.</span>
            </div>
          </div>
        </div>

        <div className="fees-section">
          <div className="fee-row">
            <span className="fee-label">Processing Fee (2%)</span>
            <span className="fee-value">₹1,000</span>
          </div>
          <div className="fee-row">
            <span className="fee-label">GST on Processing Fee</span>
            <span className="fee-value">₹180</span>
          </div>
          <div className="fee-row total">
            <span className="fee-label">Total Repayment</span>
            <span className="fee-value">₹54,000</span>
          </div>
        </div>

        <div className="consent-box">
          <span className="material-icons consent-icon">info</span>
          <p className="consent-text">
            By proceeding, you agree to the lender's digital loan agreement and authorization for auto-debit (eNACH/Mandate).
          </p>
        </div>

        <button className="view-offers-link" onClick={onViewOtherOffers}>
          View other offers
        </button>

        <button className="confirm-button" onClick={onContinue}>
          <span>Confirm & Proceed</span>
          <span className="material-icons">arrow_forward</span>
        </button>
      </main>
    </div>
  );
};

export default OfferDetailsPage;
