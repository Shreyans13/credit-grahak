import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './ProductPage.css';

interface ProductPageProps {
  onContinue: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onContinue }) => {
  const { t, language } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    const text = language === 'hi' 
      ? '0% अतिरिक्त लागत ईएमआई। अल्फा क्वीन साइज टीक बेड। कीमत 20,000 रुपये। ब्रांड सबवेंशन लागू: आप 3,500 रुपये बचाते हैं। भारत की सबसे कम कीमत की गारंटी।'
      : '0% additional cost EMI. Alpha Queen Size Teak Bed. Price 20,000 rupees. Brand subsidy applied: You save 3,500 rupees. India lowest price guarantee.';
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="product-page">
      <header className="product-header">
        <div className="header-left">
          <LanguageSelector />
        </div>
        <div className="header-right">
          <button 
            className={`icon-button speaker-btn ${isSpeaking ? 'speaking' : ''}`}
            onClick={handleSpeak}
            aria-label="Speak"
          >
            <span className="material-icons">volume_up</span>
          </button>
          <button className="icon-button" aria-label="Notifications">
            <span className="material-icons">notifications</span>
          </button>
        </div>
      </header>

      <div className="store-info">
        <div className="store-badge">
          <div className="store-icon-wrapper">
            <span className="material-icons">store</span>
          </div>
          <div className="store-details">
            <div className="store-name-row">
              <h2 className="store-name">{t.product.storeName}</h2>
              <span className="material-icons verified-icon">verified</span>
            </div>
            <p className="store-subtitle">{t.product.verifiedDealer}</p>
          </div>
        </div>
      </div>

      <div className="product-image-section">
        <div 
          className="product-image-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop')`
          }}
        >
          <div className="emi-badge">
            <span>{t.product.zeroEmi}</span>
          </div>
        </div>
      </div>

      <div className="product-info-section">
        <h1 className="product-name">{t.product.productName}</h1>
        <div className="product-price">
          <span className="current-price">{t.product.currentPrice}</span>
          <span className="original-price">{t.product.originalPrice}</span>
        </div>

        <div className="subsidy-banner">
          <span className="material-icons celebration-icon">celebration</span>
          <span className="subsidy-text">{t.product.subsidyText}</span>
        </div>
      </div>

      <div className="price-guarantee-section">
        <div className="guarantee-badge-large">
          <span className="material-icons">verified_user</span>
          <span>{t.product.priceGuarantee}</span>
        </div>
      </div>

      <div className="price-comparison">
        <h3 className="comparison-title">{t.product.priceComparison}</h3>
        <p className="comparison-subtitle">{t.product.bestDeal}</p>
        
        <div className="comparison-list">
          <div className="comparison-item">
            <div className="comparison-left">
              <span className="platform-logo amazon">Amazon</span>
              <div className="price-bar-container">
                <div className="price-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
            <span className="price">{t.product.amazonPrice}</span>
          </div>
          <div className="comparison-item">
            <div className="comparison-left">
              <span className="platform-logo flipkart">Flipkart</span>
              <div className="price-bar-container">
                <div className="price-bar" style={{ width: '93%' }}></div>
              </div>
            </div>
            <span className="price">{t.product.flipkartPrice}</span>
          </div>
          <div className="comparison-item best">
            <div className="comparison-left">
              <span className="platform-logo smartscan">{t.product.hereLabel}</span>
              <div className="price-bar-container">
                <div className="price-bar best-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <span className="price">{t.product.ourPrice}</span>
          </div>
        </div>
      </div>

      <div className="trust-badges">
        <div className="trust-item">
          <span className="material-icons">security</span>
          <span>{t.product.securePayment}</span>
        </div>
        <div className="trust-item">
          <span className="material-icons">local_shipping</span>
          <span>{t.product.insuredDelivery}</span>
        </div>
        <div className="trust-item">
          <span className="material-icons">history</span>
          <span>{t.product.easyReturns}</span>
        </div>
      </div>

      <div className="action-section">
        <button className="continue-button" onClick={onContinue}>
          <span className="material-icons">lock</span>
          <span>{t.product.viewPaymentOptions}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
