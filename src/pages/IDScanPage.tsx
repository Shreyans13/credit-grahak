import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import './IDScanPage.css';

interface IDScanPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const IDScanPage: React.FC<IDScanPageProps> = ({ onBack, onContinue }) => {
  const { t, language } = useLanguage();
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scanned) {
      const timer = setTimeout(() => {
        onContinue();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [scanned, onContinue]);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 2000);
  };

  const handleContinue = () => {
    onContinue();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSpeak = () => {
    const text = language === 'hi'
      ? 'अपने आईडी कार्ड की साफ़ फोटो खींचें ताकि डिटेल्स अपने आप भर जाएं।'
      : 'Take a clear photo of your ID card so details are auto-filled.';
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    window.speechSynthesis.speak(utterance);
  };

  if (scanned) {
    return (
      <div className="id-scan-page">
        <header className="scan-header">
          <button className="back-button" onClick={onBack}>
            <span className="material-icons">arrow_back</span>
          </button>
          <h2 className="header-title">{t.idScan.scanningTitle}</h2>
          <LanguageSelector />
        </header>

        <main className="scan-content success">
          <div className="scanning-indicator">
            <div className="spinner"></div>
            <p>{t.idScan.verifyingIdentity}</p>
            <p className="auto-continue-text">Continuing automatically...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="id-scan-page">
      <header className="scan-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="header-title">{t.idScan.title}</h2>
        <LanguageSelector />
      </header>

      <main className="scan-content">
        <div className="speaker-banner" onClick={handleSpeak}>
          <span className="material-icons">volume_up</span>
          <p>{t.idScan.instruction}</p>
        </div>

        <div className="scanner-container">
          <div className={`scanner-frame ${scanning ? 'scanning' : ''}`}>
            <div className="id-card-placeholder">
              <span className="material-icons id-icon">contact_page</span>
              <div className="id-person">
                <span className="material-icons">person</span>
                <p>{t.idScan.placeHere}</p>
              </div>
            </div>
            
            {scanning && <div className="scan-line"></div>}
          </div>
        </div>

        <div className="guidelines">
          <div className="guideline-item">
            <span className="material-icons">wb_sunny</span>
            <span>{t.idScan.goodLighting}</span>
          </div>
          <div className="guideline-item">
            <span className="material-icons">straighten</span>
            <span>{t.idScan.keepStraight}</span>
          </div>
          <div className="guideline-item">
            <span className="material-icons">blur_off</span>
            <span>{t.idScan.notBlurry}</span>
          </div>
        </div>

        <div className="scan-actions">
          <button className="capture-button" onClick={handleScan} disabled={scanning}>
            <span className="material-icons">photo_camera</span>
          </button>
          
          <button className="upload-button" onClick={handleUploadClick}>
            <span className="material-icons">upload_file</span>
            <span>{t.idScan.uploadGallery}</span>
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: 'none' }}
          onChange={() => setScanned(true)}
        />
      </main>
    </div>
  );
};

export default IDScanPage;
