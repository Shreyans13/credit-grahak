import React, { useState } from 'react';
import './LoginPage.css';

interface LoginPageProps {
  onBack: () => void;
  onSendOTP: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onSendOTP }) => {
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
      onSendOTP();
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Login</span>
        <div className="header-spacer"></div>
      </header>

      <main className="login-content">
        <div className="login-intro">
          <h1 className="login-title">Welcome to Teakwood's Furniture</h1>
          <p className="login-subtitle">
            Get instant EMI approval and buy your dream furniture today.
          </p>
        </div>

        {!otpSent ? (
          <div className="phone-section">
            <label className="input-label">Phone Number</label>
            <div className="phone-input-container">
              <span className="country-code">+91</span>
              <input
                type="tel"
                className="phone-input"
                placeholder="Enter your phone number"
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
              <span>Send OTP</span>
              <span className="material-icons">arrow_forward</span>
            </button>

            <p className="terms-text">
              By continuing, you agree to Merchant Pay's Terms of Service and Privacy Policy.
            </p>
          </div>
        ) : (
          <div className="otp-section">
            <h2 className="otp-title">Verify Phone</h2>
            <p className="otp-subtitle">
              Enter the 6-digit code sent to +91 {phoneNumber}
            </p>

            <div className="otp-input-container">
              <input
                type="text"
                className="otp-input"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
              />
            </div>

            <p className="resend-text">
              Didn't receive the OTP? <button className="resend-link">Resend OTP</button>
            </p>

            <button
              className="verify-button"
              onClick={handleVerifyOTP}
              disabled={otp.length < 6}
            >
              Verify & Login
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default LoginPage;
