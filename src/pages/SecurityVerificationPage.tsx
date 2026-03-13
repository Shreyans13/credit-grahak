import React, { useState, useEffect } from 'react';
import './SecurityVerificationPage.css';

interface SecurityVerificationPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const SecurityVerificationPage: React.FC<SecurityVerificationPageProps> = ({ 
  onBack, 
  onContinue 
}) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(45);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="security-page">
      <header className="security-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Final Step</span>
        <div className="header-spacer"></div>
      </header>

      <main className="security-content">
        <div className="step-indicator">
          <span className="step-label">Verification Progress</span>
          <span className="step-count">10 of 11</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '91%' }}></div>
        </div>

        <div className="shield-section">
          <div className="shield-icon">
            <span className="material-icons">shield_lock</span>
          </div>
          <h2 className="shield-title">Verify & Finalize</h2>
          <p className="shield-description">
            Please enter the 6-digit verification code sent to your registered phone number •••• •••• 82
          </p>
        </div>

        <div className="otp-input-container">
          <input
            type="text"
            className="otp-input"
            placeholder="Enter 6-digit code"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            maxLength={6}
          />
        </div>

        <p className="resend-text">
          Didn't receive the code? <br />
          {timer > 0 ? (
            <span className="timer">Resend Code ({formatTime(timer)})</span>
          ) : (
            <button className="resend-link" onClick={() => setTimer(45)}>
              Resend Code
            </button>
          )}
        </p>

        <label className={`verify-checkbox ${agreed ? 'checked' : ''}`}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span className="checkmark">
            {agreed && <span className="material-icons">check</span>}
          </span>
          <span className="verify-text">
            <span className="material-icons check-icon">check_circle</span>
            Verify & Finalize Agreement
          </span>
        </label>

        <p className="disclaimer-text">
          By clicking verify, you agree to our Terms of Service and electronic signature disclosure.
        </p>

        <button
          className="verify-finalize-button"
          onClick={onContinue}
          disabled={otp.length < 6 || !agreed}
        >
          Verify & Finalize
        </button>
      </main>
    </div>
  );
};

export default SecurityVerificationPage;
