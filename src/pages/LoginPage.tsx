import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './LoginPage.css';

interface LoginPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onContinue }) => {
  const { t } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    if (phoneNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      onContinue();
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">{t.login.title}</span>
        <LanguageSelector />
      </header>

      <main className="login-content">
        <div className="login-intro">
          <h1 className="login-title">{t.login.welcomeText}</h1>
          <p className="login-subtitle">
            {t.login.subtitle}
          </p>
        </div>

        {!otpSent ? (
          <div className="phone-section">
            <label className="input-label">{t.login.phoneLabel}</label>
            <div className="phone-input-container">
              <span className="country-code">+91</span>
              <input
                type="tel"
                className="phone-input"
                placeholder={t.login.phonePlaceholder}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                maxLength={10}
              />
              <span className="material-icons phone-icon">phone_iphone</span>
            </div>

            <button
              className="send-otp-button"
              onClick={handleSendOTP}
              disabled={phoneNumber.length < 10}
            >
              <span>{t.login.sendOtp}</span>
              <span className="material-icons">arrow_forward</span>
            </button>

            <p className="terms-text">
              By continuing, you agree to Merchant Pay's Terms of Service and Privacy Policy.
            </p>
          </div>
        ) : (
          <div className="otp-section">
            <h2 className="otp-title">{t.login.verifyTitle}</h2>
            <p className="otp-subtitle">
              {t.login.otpSubtitle.replace('{phone}', phoneNumber)}
            </p>

            <div className="otp-input-container">
              <input
                type="text"
                className="otp-input"
                placeholder={t.login.otpPlaceholder}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
              />
            </div>

            <p className="resend-text">
              Didn't receive the OTP? <button className="resend-link">{t.login.resendOtp}</button>
            </p>

            <button
              className="verify-button"
              onClick={handleVerifyOTP}
              disabled={otp.length < 6}
            >
              {t.login.verifyLogin}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default LoginPage;
