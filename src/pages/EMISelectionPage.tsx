import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './EMISelectionPage.css';

interface EMISelectionPageProps {
  onBack: () => void;
  onSelectPlan: (amount: number, months: number, lenderName: string) => void;
}

const EMISelectionPage: React.FC<EMISelectionPageProps> = ({ onBack, onSelectPlan }) => {
  const { t, language } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<number | null>(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLender] = useState('DMI Finance');

  const plans = [
    {
      id: 0,
      amount: 3333,
      months: 6,
      interest: 0,
      isRecommended: true,
      discount: 1200
    },
    {
      id: 1,
      amount: 1900,
      months: 12,
      interest: 12,
      isRecommended: false,
      discount: 0
    }
  ];

  const handleSpeak = () => {
    const text = language === 'hi'
      ? '20,000 रुपये के बेड के लिए हमारे बेस्ट ऑफर्स देखें। अनुशंसित प्लान: 6 महीने के लिए 3,333 रुपये प्रति महीने, 0% ब्याज। एक्स्ट्रा डिस्काउंट: 1,200 रुपये।'
      : 'See our best offers for the 20,000 rupees bed. Recommended plan: 3,333 rupees per month for 6 months, 0% interest. Extra discount: 1,200 rupees.';
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleContinue = () => {
    if (selectedPlan !== null) {
      const plan = plans[selectedPlan];
      onSelectPlan(plan.amount, plan.months, selectedLender);
    }
  };

  return (
    <div className="emi-selection-page">
      <header className="emi-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="header-title">{t.emiSelection.title}</h2>
        <LanguageSelector />
      </header>

      <main className="emi-content">
        <div className="lender-info">
          <div className="lender-badge">
            <span className="lender-name">DMI Finance</span>
            <span className="lender-subtitle">{t.emiSelection.trustedLender}</span>
          </div>
          <span className="verified-badge-small">
            <span className="material-icons">verified</span>
            {t.emiSelection.verified}
          </span>
        </div>

        <div className="offer-banner">
          <p className="offer-text">{t.emiSelection.offerText}</p>
          <p className="offer-subtext">{t.emiSelection.approvalConfirmed}</p>
        </div>

        <button 
          className={`speaker-action ${isSpeaking ? 'speaking' : ''}`}
          onClick={handleSpeak}
        >
          <span className="material-icons">volume_up</span>
          <span>{t.emiSelection.listen}</span>
        </button>

        <div className="emi-plans-section">
          <h3 className="section-title">{t.emiSelection.bestPlan}</h3>
          
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`emi-plan-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.isRecommended ? 'recommended' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.isRecommended && (
                <div className="recommended-badge">{t.emiSelection.recommended}</div>
              )}
              
              <div className="plan-header">
                <div className="plan-amount">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.amount.toLocaleString()}</span>
                  <span className="period">/ {t.emiSelection.month}</span>
                </div>
                <div className="plan-duration">
                  {plan.months} {t.emiSelection.months}
                </div>
              </div>

              <div className="plan-details">
                <span className="interest-badge">
                  {plan.interest === 0 ? t.emiSelection.zeroInterest : `${plan.interest}% ${t.emiSelection.interest}`}
                </span>
                {plan.discount > 0 && (
                  <span className="discount-badge">
                    <span className="material-icons">redeem</span>
                    {t.emiSelection.extraDiscount}: -₹{plan.discount.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="security-note">
          <span className="material-icons">shield</span>
          <p>{t.emiSelection.securityText}</p>
        </div>

        <button className="continue-button" onClick={handleContinue}>
          <span>{t.common.continue}</span>
          <span className="material-icons">arrow_forward</span>
        </button>
      </main>
    </div>
  );
};

export default EMISelectionPage;
