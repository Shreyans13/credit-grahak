import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
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
    name: 'DMI',
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
    name: 'Bajaj Finserv',
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
  const { t } = useLanguage();
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
        <h2 className="header-title">{t.eligibleLenders?.title}</h2>
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
                <span className="verified-text">{t.eligibleLenders?.verifiedOffers}</span>
              </span>
              <h1 className="hero-title">{t.eligibleLenders?.heroTitle}</h1>
            </div>
          </div>
        </div>

        <div className="success-card">
          <div className="success-icon-wrapper">
            <span className="material-icons">check_circle</span>
          </div>
          <div className="success-text">
            <p className="success-title">{t.eligibleLenders?.successTitle}</p>
            <p className="success-subtitle">{t.eligibleLenders?.successSubtitle}</p>
          </div>
        </div>

        <div className="headline-section">
          <h3 className="headline-title">{t.eligibleLenders?.headlineTitle}</h3>
          <p className="headline-subtitle">{t.eligibleLenders?.headlineSubtitle}</p>
        </div>

        <div className="lenders-list">
          {lenders.map((lender) => {
            const detailLabelText = lender.detailLabel === 'Interest Rate'
              ? t.eligibleLenders?.interestRate
              : lender.detailLabel === 'Processing Fee'
              ? t.eligibleLenders?.processingFee
              : t.eligibleLenders?.bestFor;
            return (
            <div
              key={lender.id}
              className={`lender-card ${selectedLender === lender.id ? 'selected' : ''}`}
              onClick={() => setSelectedLender(lender.id)}
            >
              <div className="lender-card-header">
                <div className="lender-left-section">
                  <div className="lender-icon-box">
                    <span className="material-icons">{lender.icon}</span>
                  </div>
                  <div className="lender-name-section">
                    <p className="lender-name-text">{lender.name}</p>
                    <div className={`lender-badge-text ${getTaglineClass(lender.taglineColor)}`}>
                      <span className="material-icons">{lender.taglineIcon}</span>
                      <span>{lender.tagline}</span>
                    </div>
                  </div>
                </div>
                <div className="lender-right-section">
                  <p className="limit-text-label">{t.eligibleLenders?.limitUpTo}</p>
                  <p className="limit-text-value">{lender.limitUpTo}</p>
                </div>
              </div>

              <div className="card-footer">
                <div className="detail-info">
                  <p className="detail-label">{detailLabelText}</p>
                  <p className="detail-value">{lender.detailValue}</p>
                </div>
                <button 
                  className={`select-btn ${selectedLender === lender.id ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLender(lender.id);
                  }}
                >
                  {selectedLender === lender.id ? t.eligibleLenders?.selected : t.eligibleLenders?.select}
                </button>
              </div>
            </div>
          );
          })}
        </div>

        <button className="continue-button" onClick={onContinue}>
          {t.eligibleLenders?.continueWithPlan}
        </button>
      </main>
    </div>
  );
};

export default EligibleLendersPage;
