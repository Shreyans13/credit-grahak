import React, { useState } from 'react';
import './KYCPage.css';

interface KYCPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const KYCPage: React.FC<KYCPageProps> = ({ onBack, onContinue }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    panNumber: '',
    age: '',
    gender: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.fullName && formData.panNumber && formData.age && formData.gender;

  return (
    <div className="kyc-page">
      <header className="kyc-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">KYC Verification</span>
        <div className="header-spacer"></div>
      </header>

      <main className="kyc-content">
        <div className="step-indicator">
          <span className="step-label">Step 1: Basic Information</span>
          <span className="step-count">1 of 3</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '33%' }}></div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Personal Details</h2>
          <p className="section-subtitle">Please provide your details as per official documents.</p>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">Full Name (as per PAN)</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">PAN Number</label>
            <div className="input-with-icon">
              <input
                type="text"
                className="form-input"
                placeholder="ABCDE1234F"
                value={formData.panNumber}
                onChange={(e) => handleChange('panNumber', e.target.value.toUpperCase())}
                maxLength={10}
              />
              <span className="material-icons input-icon">credit_card</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <div className="gender-options">
              <label className={`gender-option ${formData.gender === 'male' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={(e) => handleChange('gender', e.target.value)}
                />
                <span className="gender-icon">♂</span>
                <span className="gender-label">Male</span>
              </label>

              <label className={`gender-option ${formData.gender === 'female' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={(e) => handleChange('gender', e.target.value)}
                />
                <span className="gender-icon">♀</span>
                <span className="gender-label">Female</span>
              </label>

              <label className={`gender-option ${formData.gender === 'other' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={(e) => handleChange('gender', e.target.value)}
                />
                <span className="gender-icon">⚧</span>
                <span className="gender-label">Other</span>
              </label>
            </div>
          </div>
        </div>

        <div className="info-box">
          <span className="material-icons info-icon">info</span>
          <p className="info-text">
            We use this data only for identity verification through government-approved channels. Your data is encrypted and secure.
          </p>
        </div>

        <button
          className="continue-button"
          onClick={onContinue}
          disabled={!isFormValid}
        >
          <span>Save & Continue</span>
          <span className="material-icons">arrow_forward</span>
        </button>
      </main>
    </div>
  );
};

export default KYCPage;
