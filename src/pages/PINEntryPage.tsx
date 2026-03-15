import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './PINEntryPage.css';

interface PINEntryPageProps {
  onBack: () => void;
  onContinue: () => void;
  lenderName: string;
}

const PINEntryPage: React.FC<PINEntryPageProps> = ({ onBack, onContinue, lenderName }) => {
  const { t } = useLanguage();
  const [otp, setOtp] = useState('');

  const totalAmount = 18800;

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setOtp(prev => prev.slice(0, -1));
    } else if (otp.length < 6) {
      setOtp(prev => prev + key);
    }
  };

  const handleSubmit = () => {
    if (otp.length === 6) {
      onContinue();
    }
  };

  return (
    <div className="pin-entry-page">
      <header className="pin-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="header-title">{t.pinEntry.title}</h2>
        <LanguageSelector />
      </header>

      <main className="pin-content">
        <div className="amount-display">
          <span className="amount-label">{t.pinEntry.totalAmount}</span>
          <span className="amount-value">₹{totalAmount.toLocaleString()}</span>
        </div>

        <div className="bank-info">
          <span className="material-icons bank-icon">account_balance</span>
          <span className="bank-name">{lenderName}</span>
        </div>

        <div className="pin-section">
          <h3 className="pin-title">{t.pinEntry.enterOtp}</h3>
          <p className="pin-subtitle">{t.pinEntry.otpSubtitle}</p>

          <div className="pin-dots">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index} 
                className={`pin-dot ${index < otp.length ? 'filled' : ''}`}
              >
                {index < otp.length && <div className="dot-inner"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="keypad">
          <div className="keypad-row">
            <button className="key" onClick={() => handleKeyPress('1')}>1</button>
            <button className="key" onClick={() => handleKeyPress('2')}>2</button>
            <button className="key" onClick={() => handleKeyPress('3')}>3</button>
          </div>
          <div className="keypad-row">
            <button className="key" onClick={() => handleKeyPress('4')}>4</button>
            <button className="key" onClick={() => handleKeyPress('5')}>5</button>
            <button className="key" onClick={() => handleKeyPress('6')}>6</button>
          </div>
          <div className="keypad-row">
            <button className="key" onClick={() => handleKeyPress('7')}>7</button>
            <button className="key" onClick={() => handleKeyPress('8')}>8</button>
            <button className="key" onClick={() => handleKeyPress('9')}>9</button>
          </div>
          <div className="keypad-row">
            <div className="key empty"></div>
            <button className="key" onClick={() => handleKeyPress('0')}>0</button>
            <button className="key backspace" onClick={() => handleKeyPress('backspace')}>
              <span className="material-icons">backspace</span>
            </button>
          </div>
        </div>

        <button 
          className="pay-button" 
          onClick={handleSubmit}
          disabled={otp.length !== 6}
        >
          <span className="material-icons">lock</span>
          <span>{t.pinEntry.signAndPay} ₹{totalAmount.toLocaleString()}</span>
        </button>

        <div className="security-badge">
          <span className="material-icons">verified_user</span>
          <span>{t.pinEntry.securePayment}</span>
        </div>
      </main>
    </div>
  );
};

export default PINEntryPage;
