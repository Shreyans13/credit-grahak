import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './VerifyIdentityPage.css';

interface VerifyIdentityPageProps {
  onBack: () => void;
  onContinue: () => void;
}

export interface ScannedIdentityData {
  fullName: string;
  panNumber: string;
  age: string;
  gender: 'male' | 'female' | 'other';
  aadhaarNumber: string;
  address: string;
}

const VerifyIdentityPage: React.FC<VerifyIdentityPageProps> = ({ onBack, onContinue }) => {
  const { t } = useLanguage();
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ScannedIdentityData>({
    fullName: '',
    panNumber: '',
    age: '',
    gender: 'male',
    aadhaarNumber: '',
    address: ''
  });

  const handleCameraClick = () => {
    setIsScanning(true);
    setTimeout(() => {
      const mockData: ScannedIdentityData = {
        fullName: 'Rahul Sharma',
        panNumber: 'ABCDE1234F',
        age: '28',
        gender: 'male',
        aadhaarNumber: 'XXXX-XXXX-1234',
        address: '123, Main Street, Mumbai, Maharashtra - 400001'
      };
      setFormData(mockData);
      setIsScanning(false);
      setScanComplete(true);
    }, 2000);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsScanning(true);
      setTimeout(() => {
        const mockData: ScannedIdentityData = {
          fullName: 'Rahul Sharma',
          panNumber: 'ABCDE1234F',
          age: '28',
          gender: 'male',
          aadhaarNumber: 'XXXX-XXXX-1234',
          address: '123, Main Street, Mumbai, Maharashtra - 400001'
        };
        setFormData(mockData);
        setIsScanning(false);
        setScanComplete(true);
      }, 1500);
    }
  };

  const handleChange = (field: keyof ScannedIdentityData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    onContinue();
  };

  const handleScanAgain = () => {
    setScanComplete(false);
    setIsScanning(false);
    setIsEditing(false);
    setFormData({
      fullName: '',
      panNumber: '',
      age: '',
      gender: 'male',
      aadhaarNumber: '',
      address: ''
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const isFormValid = formData.fullName && formData.panNumber && formData.age && formData.gender;

  return (
    <div className="verify-identity-page">
      <header className="verify-identity-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">{t.verifyIdentity?.title || 'Verify Identity'}</span>
        <div className="header-spacer"></div>
      </header>

      <main className="verify-identity-content">
        {scanComplete ? (
          <div className="scan-success-section">
            <div className="success-icon-container">
              <span className="material-icons success-icon">check_circle</span>
            </div>
            <h2 className="success-title">{t.verifyIdentity?.scanSuccess || 'Document Scanned!'}</h2>
            <p className="success-subtitle">
              {t.verifyIdentity?.successSubtitle || 'Your Aadhaar details have been extracted successfully.'}
            </p>

            <div className="extracted-details-card">
              <div className="details-header">
                <h3 className="details-title">{t.verifyIdentity?.extractedDetails || 'Extracted Details'}</h3>
                <button className="edit-toggle-button" onClick={toggleEdit}>
                  <span className="material-icons">{isEditing ? 'close' : 'edit'}</span>
                  {isEditing ? (t.common?.close || 'Close') : (t.common?.edit || 'Edit')}
                </button>
              </div>

              {isEditing ? (
                <div className="editable-form">
                  <div className="form-group">
                    <label className="form-label">{t.kyc?.fullName || 'Full Name'}</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder={t.kyc?.fullNamePlaceholder || 'Enter your full name'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.kyc?.panNumber || 'PAN Number'}</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.panNumber}
                      onChange={(e) => handleChange('panNumber', e.target.value.toUpperCase())}
                      placeholder={t.kyc?.panPlaceholder || 'ABCDE1234F'}
                      maxLength={10}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.kyc?.age || 'Age'}</label>
                    <input
                      type="number"
                      className="form-input"
                      value={formData.age}
                      onChange={(e) => handleChange('age', e.target.value)}
                      placeholder={t.kyc?.agePlaceholder || 'Enter your age'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.kyc?.gender || 'Gender'}</label>
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
                        <span className="gender-label">{t.kyc?.male || 'Male'}</span>
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
                        <span className="gender-label">{t.kyc?.female || 'Female'}</span>
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
                        <span className="gender-label">{t.kyc?.other || 'Other'}</span>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="details-list">
                  <div className="detail-item">
                    <span className="detail-label">{t.kyc?.fullName || 'Full Name'}</span>
                    <span className="detail-value">{formData.fullName}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t.kyc?.panNumber || 'PAN Number'}</span>
                    <span className="detail-value">{formData.panNumber}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t.kyc?.age || 'Age'}</span>
                    <span className="detail-value">{formData.age} years</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">{t.kyc?.gender || 'Gender'}</span>
                    <span className="detail-value">
                      {formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="info-box">
              <span className="material-icons info-icon">info</span>
              <p className="info-text">{t.kyc?.infoText || 'We use this data only for identity verification through government-approved channels. Your data is encrypted and secure.'}</p>
            </div>

            <div className="action-buttons">
              <button className="scan-again-button" onClick={handleScanAgain}>
                <span className="material-icons">refresh</span>
                {t.verifyIdentity?.scanAgain || 'Scan Again'}
              </button>
              <button 
                className="continue-button" 
                onClick={handleContinue}
                disabled={!isFormValid}
              >
                <span>{t.verifyIdentity?.continue || 'Continue'}</span>
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="heading-section">
              <h1 className="page-title">{t.verifyIdentity?.pageTitle || "Let's verify your identity"}</h1>
              <p className="page-subtitle">
                {t.verifyIdentity?.pageSubtitle || 'Please upload your Aadhaar card for faster processing and secure verification. This helps us ensure a safe shopping experience.'}
              </p>
            </div>

            {isScanning ? (
              <div className="scanning-overlay">
                <div className="scanning-animation">
                  <div className="scanner-line"></div>
                  <span className="material-icons scanning-icon">document_scanner</span>
                </div>
                <p className="scanning-text">{t.verifyIdentity?.scanning || 'Scanning document...'}</p>
              </div>
            ) : (
              <div className="action-cards">
                <div className="action-card" onClick={handleCameraClick}>
                  <div className="card-header">
                    <div className="card-title-section">
                      <span className="material-icons card-icon camera-icon">photo_camera</span>
                      <div className="card-text">
                        <p className="card-title">{t.verifyIdentity?.takePhoto || 'Take a Photo'}</p>
                        <p className="card-description">
                          {t.verifyIdentity?.cameraDescription || 'Use your camera to scan your document in real-time'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-image-container">
                    <div className="card-placeholder-image camera-placeholder">
                      <span className="material-icons placeholder-icon">camera_alt</span>
                      <span className="placeholder-text">Camera Preview</span>
                    </div>
                  </div>
                  <button className="card-action-button camera-button">
                    {t.verifyIdentity?.openCamera || 'Open Camera'}
                  </button>
                </div>

                <div className="action-card" onClick={handleUploadClick}>
                  <div className="card-header">
                    <div className="card-title-section">
                      <span className="material-icons card-icon upload-icon">image</span>
                      <div className="card-text">
                        <p className="card-title">{t.verifyIdentity?.uploadGallery || 'Upload from Gallery'}</p>
                        <p className="card-description">
                          {t.verifyIdentity?.galleryDescription || 'Select an existing photo or PDF from your device storage'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-image-container">
                    <div className="card-placeholder-image gallery-placeholder">
                      <span className="material-icons placeholder-icon">collections</span>
                      <span className="placeholder-text">Gallery Preview</span>
                    </div>
                  </div>
                  <button className="card-action-button gallery-button">
                    {t.verifyIdentity?.chooseFile || 'Choose File'}
                  </button>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*,.pdf"
                  style={{ display: 'none' }}
                />
              </div>
            )}

            <div className="trust-indicator">
              <span className="material-icons trust-icon">lock</span>
              <span className="trust-text">{t.verifyIdentity?.secureEncrypted || 'Secure & Encrypted'}</span>
            </div>

            {!scanComplete && !isScanning && (
              <div className="bottom-cta">
                <button className="scan-document-button" onClick={handleCameraClick}>
                  <span className="material-icons">document_scanner</span>
                  <span>{t.verifyIdentity?.scanDocument || 'Scan Document'}</span>
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default VerifyIdentityPage;
