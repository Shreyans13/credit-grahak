import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './PaymentSummaryPage.css';

interface PaymentSummaryPageProps {
  onBack: () => void;
  onContinue: () => void;
  selectedPlan: { amount: number; months: number } | null;
}

const PaymentSummaryPage: React.FC<PaymentSummaryPageProps> = ({ 
  onBack, 
  onContinue,
  selectedPlan 
}) => {
  const { t, language } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const productPrice = 20000;
  const lenderDiscount = 1200;
  const totalPayable = productPrice - lenderDiscount;
  const emiAmount = selectedPlan?.amount || 3333;
  const emiMonths = selectedPlan?.months || 6;

  const handleSpeak = () => {
    const text = language === 'hi'
      ? `भुगतान अनुसूची। अभी: 0 रुपये, तुरंत भुगतान। अगले महीने से: ${emiAmount} रुपये प्रति महीने, ईएमआई शुरू होगी। प्रोडक्ट: अल्फा बेड। कुल देय राशि: ${totalPayable} रुपये।`
      : `Payment schedule. Now: 0 rupees, immediate payment. From next month: ${emiAmount} rupees per month, EMI will start. Product: Alpha Bed. Total payable amount: ${totalPayable} rupees.`;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="payment-summary-page">
      <header className="summary-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="header-title">{t.paymentSummary.title}</h2>
        <LanguageSelector />
      </header>

      <main className="summary-content">
        <div className="payment-schedule">
          <h3 className="section-title">{t.paymentSummary.schedule}</h3>
          
          <div className="timeline-container">
            <div className="timeline-row">
              <div className="timeline-icon-column">
                <div className="timeline-icon small">
                  <span className="material-icons">schedule</span>
                </div>
                <div className="timeline-connector"></div>
              </div>
              <div className="timeline-content now">
                <span className="timeline-main-text">{t.paymentSummary.now}: ₹0</span>
                <span className="timeline-note">{t.paymentSummary.immediate}</span>
              </div>
            </div>

            <div className="timeline-row">
              <div className="timeline-icon-column">
                <div className="timeline-icon">
                  <span className="material-icons">calendar_month</span>
                </div>
              </div>
              <div className="timeline-content future">
                <span className="timeline-label">{t.paymentSummary.nextMonth}: ₹{emiAmount.toLocaleString()} ({emiMonths} {language === 'hi' ? 'महीने तक' : 'months'})</span>
                <span className="timeline-note">{t.paymentSummary.emiStart}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-summary">
          <h3 className="section-title">{t.paymentSummary.productSummary}</h3>
          
          <div className="product-card-compact">
            <div className="product-info-row">
              <span className="product-label">{t.paymentSummary.productName}</span>
              <span className="product-price-final">₹{(totalPayable).toLocaleString()}</span>
            </div>
            <button className="view-details-link">
              {t.paymentSummary.viewDetails}
            </button>
          </div>
        </div>

        <div className="price-breakdown">
          <h3 className="section-title">{t.paymentSummary.priceDetails}</h3>
          
          <div className="breakdown-item">
            <span>{t.paymentSummary.itemPrice}</span>
            <span>₹{productPrice.toLocaleString()}</span>
          </div>
          <div className="breakdown-item discount">
            <span>{t.paymentSummary.lenderDiscount}</span>
            <span>-₹{lenderDiscount.toLocaleString()}</span>
          </div>
          <div className="breakdown-item total">
            <span>{t.paymentSummary.totalPayable}</span>
            <span>₹{totalPayable.toLocaleString()}</span>
          </div>
        </div>

        <button className="continue-button" onClick={onContinue}>
          <span>{t.common.continue}</span>
          <span className="material-icons">arrow_forward</span>
        </button>

        <p className="security-footer">
          {t.paymentSummary.securedBy}
        </p>
      </main>
    </div>
  );
};

export default PaymentSummaryPage;
