import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ScannedIdentityData } from './VerifyIdentityPage';
import './KYCPage.css';

interface KYCPageProps {
  onBack: () => void;
  onContinue: () => void;
  scannedData?: ScannedIdentityData | null;
}

const KYCPage: React.FC<KYCPageProps> = ({ onBack, onContinue, scannedData }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    panNumber: '',
    age: '',
    gender: ''
  });

  useEffect(() => {
    if (scannedData) {
      setFormData({
        fullName: scannedData.fullName || '',
        panNumber: scannedData.panNumber || '',
        age: scannedData.age || '',
        gender: scannedData.gender || ''
      });
    }
  }, [scannedData]);

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
        <span className="header-title">{t.kyc.title}</span>
        <div className="header-spacer"></div>
      </header>

      <main className="kyc-content">
        <div className="section-header">
          <h2 className="section-title">{t.kyc.personalDetails}</h2>
          <p className="section-subtitle">{t.kyc.personalDetailsSubtitle}</p>
        </div>

        {scannedData && (
          <div className="auto-filled-banner">
            <span className="material-icons auto-fill-icon">check_circle</span>
            <span className="auto-fill-text">{t.verifyIdentity?.autoFilled || 'Auto-filled from scanned document'}</span>
          </div>
        )}

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">{t.kyc.fullName}</label>
            <input
              type="text"
              className="form-input"
              placeholder={t.kyc.fullNamePlaceholder}
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.kyc.panNumber}</label>
            <div className="input-with-icon">
              <input
                type="text"
                className="form-input"
                placeholder={t.kyc.panPlaceholder}
                value={formData.panNumber}
                onChange={(e) => handleChange('panNumber', e.target.value.toUpperCase())}
                maxLength={10}
              />
              <span className="material-icons input-icon">credit_card</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{t.kyc.age}</label>
            <input
              type="number"
              className="form-input"
              placeholder={t.kyc.agePlaceholder}
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.kyc.gender}</label>
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
                <span className="gender-label">{t.kyc.male}</span>
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
                <span className="gender-label">{t.kyc.female}</span>
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
                <span className="gender-label">{t.kyc.other}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="info-box">
          <span className="material-icons info-icon">info</span>
          <p className="info-text">
            {t.kyc.infoText}
          </p>
        </div>

        <button
          className="continue-button"
          onClick={onContinue}
          disabled={!isFormValid}
        >
          <span>{t.kyc.saveContinue}</span>
          <span className="material-icons">arrow_forward</span>
        </button>
      </main>
    </div>
  );
};

export default KYCPage;
