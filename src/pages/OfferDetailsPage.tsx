import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
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
  const { t } = useLanguage();

  return (
    <div className="offer-page">
      <header className="offer-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">{t.offerDetails.title}</span>
        <button className="help-button">
          <span className="material-icons">help_outline</span>
        </button>
      </header>

      <main className="offer-content">
        <div className="approval-banner">
          <span className="material-icons banner-icon">check_circle</span>
          <div className="banner-text">
            <h3>{t.offerDetails.greatNews}</h3>
            <p>{t.offerDetails.approvedAmount}</p>
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
                <span>{t.offerDetails.verifiedLender}</span>
              </div>
            </div>
          </div>
          <span className="selected-badge">{t.offerDetails.selected}</span>
        </div>

        <div className="emi-highlight">
          <span className="emi-label">{t.offerDetails.monthlyEmi}</span>
          <span className="emi-value">₹4,500/mo</span>
        </div>

        <div className="loan-details">
          <div className="detail-row">
            <div className="detail-icon">
              <span className="material-icons">calendar_today</span>
            </div>
            <div className="detail-content">
              <span className="detail-label">{t.offerDetails.tenure}</span>
              <span className="detail-value">12 Months</span>
            </div>
          </div>

          <div className="detail-row">
            <div className="detail-icon">
              <span className="material-icons">percent</span>
            </div>
            <div className="detail-content">
              <span className="detail-label">{t.offerDetails.interestRate}</span>
              <span className="detail-value">14% p.a.</span>
            </div>
          </div>
        </div>

        <div className="fees-section">
          <div className="fee-row">
            <span className="fee-label">{t.offerDetails.processingFeeLabel}</span>
            <span className="fee-value">₹1,000</span>
          </div>
          <div className="fee-row">
            <span className="fee-label">{t.offerDetails.gstLabel}</span>
            <span className="fee-value">₹180</span>
          </div>
          <div className="fee-row total">
            <span className="fee-label">{t.offerDetails.totalRepayment}</span>
            <span className="fee-value">₹54,000</span>
          </div>
        </div>

        <div className="consent-box">
          <span className="material-icons consent-icon">info</span>
          <p className="consent-text">
            {t.offerDetails.consentText}
          </p>
        </div>

        <button className="view-offers-link" onClick={onViewOtherOffers}>
          {t.offerDetails.viewOtherOffers}
        </button>

        <button className="confirm-button" onClick={onContinue}>
          <span>{t.offerDetails.confirmProceed}</span>
          <span className="material-icons">arrow_forward</span>
        </button>
      </main>
    </div>
  );
};

export default OfferDetailsPage;
