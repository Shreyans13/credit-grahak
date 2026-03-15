import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ScanProductPage.css';

interface ScanProductPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const ScanProductPage: React.FC<ScanProductPageProps> = ({ onBack, onContinue }) => {
  const [scanning, setScanning] = useState(false);
  const [productScanned, setProductScanned] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setProductScanned(true);
    }, 2000);
  };

  const handleContinue = () => {
    onContinue();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="scan-page">
      {!productScanned ? (
        <>
          <header className="scan-header">
            <button className="back-button" onClick={onBack}>
              <span className="material-icons">arrow_back</span>
            </button>
            <h2 className="header-title">{t.scanProduct.title}</h2>
            <div className="header-spacer"></div>
          </header>

          <main className="scan-content">
            <div className="camera-viewfinder">
              <div 
                className="camera-background"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop')`
                }}
              >
                <div className="camera-overlay"></div>
                
                <div className="viewfinder-container">
                  <div className={`viewfinder-brackets ${scanning ? 'scanning' : ''}`}>
                    <div className="viewfinder-row top">
                      <div className="viewfinder-corner top-left"></div>
                      <div className="viewfinder-corner top-right"></div>
                    </div>
                    <div className="scan-line"></div>
                    <div className="viewfinder-row bottom">
                      <div className="viewfinder-corner bottom-left"></div>
                      <div className="viewfinder-corner bottom-right"></div>
                    </div>
                  </div>
                </div>

                <div className="scan-overlay-text">
                  <h3>{t.scanProduct.cameraInstruction}</h3>
                  <p>{t.scanProduct.autoScan}</p>
                </div>

                <div className="camera-controls">
                  <button className="control-btn gallery-btn" onClick={handleUploadClick}>
                    <div className="control-icon">
                      <span className="material-icons">image</span>
                    </div>
                    <span className="control-label">{t.scanProduct.gallery}</span>
                  </button>

                  <button className="capture-btn" onClick={handleScan} disabled={scanning}>
                    <div className="capture-inner">
                      <span className="material-icons">photo_camera</span>
                    </div>
                  </button>

                  <button className="control-btn flash-btn">
                    <div className="control-icon">
                      <span className="material-icons">flash_on</span>
                    </div>
                    <span className="control-label">{t.scanProduct.flash}</span>
                  </button>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={() => setProductScanned(true)}
                />
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          <header className="scan-header">
            <button className="back-button" onClick={onBack}>
              <span className="material-icons">arrow_back</span>
            </button>
            <span className="header-title">{t.scanProduct.title}</span>
            <div className="header-spacer"></div>
          </header>

          <main className="scan-content">
            <div className="product-result">
              <div className="success-icon">
                <span className="material-icons">check_circle</span>
              </div>
              <h2 className="result-title">{t.scanProduct.productScanned}</h2>
              
              <div className="product-card">
                <div className="product-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop" 
                    alt={t.scanProduct.productName}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{t.scanProduct.productName}</h3>
                  <p className="product-details">{t.scanProduct.productDetails}</p>
                  <p className="product-price">₹45,000</p>
                </div>
              </div>

              <div className="emi-preview">
                <div className="emi-item">
                  <span className="emi-label">{t.scanProduct.emiStarting}</span>
                  <span className="emi-value">₹3,750/mo</span>
                </div>
              </div>

              <button className="continue-button" onClick={handleContinue}>
                <span>{t.scanProduct.findLenders}</span>
                <span className="material-icons">arrow_forward</span>
              </button>

              <button className="scan-again-button" onClick={() => setProductScanned(false)}>
                {t.scanProduct.scanAgain}
              </button>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default ScanProductPage;
