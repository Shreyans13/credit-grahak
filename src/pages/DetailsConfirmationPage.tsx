import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './DetailsConfirmationPage.css';

interface DetailsConfirmationPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const DetailsConfirmationPage: React.FC<DetailsConfirmationPageProps> = ({ onBack, onContinue }) => {
  const { t, language } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const userDetails = {
    name: language === 'hi' ? 'राहुल शर्मा' : 'Rahul Sharma',
    dob: '12/05/1992',
    address: language === 'hi' 
      ? 'मकान नंबर 45, गांधी नगर, हुबली, कर्नाटक - 580020'
      : 'House No. 45, Gandhi Nagar, Hubli, Karnataka - 580020',
    aadhar: 'XXXX XXXX 4567'
  };

  const handleSpeak = () => {
    const text = language === 'hi'
      ? `हमने आपकी आईडी से ये जानकारी ली है। नाम: ${userDetails.name}। जन्म तिथि: ${userDetails.dob}। पता: ${userDetails.address}। क्या यह सही है?`
      : `We have extracted this information from your ID. Name: ${userDetails.name}. Date of Birth: ${userDetails.dob}. Address: ${userDetails.address}. Is this correct?`;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="details-confirmation-page">
      <header className="details-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="header-title">{t.detailsConfirmation.title}</h2>
        <LanguageSelector />
      </header>

      <main className="details-content">
        <div className="success-banner">
          <button 
            className={`speaker-button ${isSpeaking ? 'speaking' : ''}`}
            onClick={handleSpeak}
          >
            <span className="material-icons">graphic_eq</span>
          </button>
          <div className="banner-text">
            <p>{t.detailsConfirmation.extractedInfo}</p>
            <span className="voice-label">{t.detailsConfirmation.voiceAssistant}</span>
          </div>
        </div>

        <div className="scan-success-message">
          <span className="material-icons success-icon">check</span>
          <div className="success-text">
            <h3>{t.detailsConfirmation.scanSuccess}</h3>
            <p>{t.detailsConfirmation.detailsFilled}</p>
          </div>
        </div>

        <div className="verified-details">
          <h3 className="section-title">{t.detailsConfirmation.verifiedInfo}</h3>
          
          <div className="detail-item">
            <span className="detail-label">{t.detailsConfirmation.name}</span>
            <div className="detail-value">
              <span>{userDetails.name}</span>
              <span className="verified-badge">
                <span className="material-icons">verified</span>
                {t.detailsConfirmation.verified}
              </span>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-label">{t.detailsConfirmation.dob}</span>
            <div className="detail-value">
              <span>{userDetails.dob}</span>
              <span className="verified-badge">
                <span className="material-icons">verified</span>
                {t.detailsConfirmation.verified}
              </span>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-label">{t.detailsConfirmation.address}</span>
            <div className="detail-value">
              <span>{userDetails.address}</span>
              <span className="verified-badge">
                <span className="material-icons">verified</span>
                {t.detailsConfirmation.verified}
              </span>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-label">{t.detailsConfirmation.aadhar}</span>
            <div className="detail-value">
              <span>{userDetails.aadhar}</span>
              <span className="verified-badge">
                <span className="material-icons">verified</span>
                {t.detailsConfirmation.verified}
              </span>
            </div>
          </div>
        </div>

        <button className="edit-details-button">
          {t.detailsConfirmation.changeInfo}
        </button>

        <div className="progress-steps">
          <div className="step completed">
            <span className="step-number">1</span>
            <span className="step-label">{t.detailsConfirmation.scan}</span>
          </div>
          <div className="step active">
            <span className="step-number">2</span>
            <span className="step-label">{t.detailsConfirmation.check}</span>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <span className="step-label">{t.detailsConfirmation.complete}</span>
          </div>
        </div>

        <button className="confirm-button" onClick={onContinue}>
          {t.detailsConfirmation.yesCorrect}
        </button>
      </main>
    </div>
  );
};

export default DetailsConfirmationPage;
