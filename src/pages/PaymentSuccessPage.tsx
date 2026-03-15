import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './PaymentSuccessPage.css';

interface PaymentSuccessPageProps {
  onGoHome: () => void;
}

const PaymentSuccessPage: React.FC<PaymentSuccessPageProps> = ({ onGoHome }) => {
  const { t, language } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const orderData = {
    orderId: 'ORD-99281',
    date: 'Oct 24, 2023, 10:30 AM',
    paymentMethod: 'UPI (GPay)',
    transactionId: 'TXN8827361524',
    amount: 18800,
    merchant: language === 'hi' ? 'राहुल फर्नीचर' : 'Rahul Furniture'
  };

  const handleSpeak = () => {
    const text = language === 'hi'
      ? `बधाई हो! आपका ऑर्डर कन्फर्म हो गया है। ${orderData.merchant} को ${orderData.amount} रुपये का भुगतान हो गया है। ऑर्डर आईडी: ${orderData.orderId}.`
      : `Congratulations! Your order is confirmed. Payment of ${orderData.amount} rupees has been made to ${orderData.merchant}. Order ID: ${orderData.orderId}.`;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="payment-success-page">
      <header className="success-header">
        <button className="back-button" onClick={onGoHome}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="header-title">{t.paymentSuccess.title}</h2>
        <div className="header-spacer"></div>
      </header>

      <main className="success-content">
        <div className="success-animation">
          <div className="success-circle">
            <span className="material-icons">check_circle</span>
          </div>
        </div>

        <div className="success-message">
          <h2 className="success-title">{t.paymentSuccess.paymentSuccess}</h2>
          <p className="success-subtitle">
            {t.paymentSuccess.paidTo.replace('{merchant}', orderData.merchant).replace('{amount}', orderData.amount.toLocaleString())}
          </p>
        </div>

        <button 
          className={`speaker-button-large ${isSpeaking ? 'speaking' : ''}`}
          onClick={handleSpeak}
        >
          <span className="material-icons">volume_up</span>
          <span>{t.paymentSuccess.congratulations}</span>
        </button>

        <div className="order-details-card">
          <div className="detail-row">
            <span className="detail-label">{t.paymentSuccess.orderId}</span>
            <span className="detail-value">#{orderData.orderId}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">{t.paymentSuccess.date}</span>
            <span className="detail-value">{orderData.date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">{t.paymentSuccess.paymentMethod}</span>
            <span className="detail-value">{orderData.paymentMethod}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">{t.paymentSuccess.transactionId}</span>
            <span className="detail-value">{orderData.transactionId}</span>
          </div>
        </div>

        <div className="success-actions">
          <button className="secondary-button">
            {t.paymentSuccess.viewOrderDetails}
          </button>
          
          <button className="primary-button" onClick={onGoHome}>
            {t.paymentSuccess.goHome}
          </button>
        </div>
      </main>
    </div>
  );
};

export default PaymentSuccessPage;
