import React, { useState, useRef } from 'react';
import './ScanProductPage.css';

interface ScanProductPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const ScanProductPage: React.FC<ScanProductPageProps> = ({ onBack, onContinue }) => {
  const [scanning, setScanning] = useState(false);
  const [productScanned, setProductScanned] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      <header className="scan-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Scan</span>
        <div className="header-spacer"></div>
      </header>

      <main className="scan-content">
        {!productScanned ? (
          <>
            <div className="scan-instructions">
              <h2 className="scan-title">Scan your product</h2>
              <p className="scan-subtitle">
                Position the product within the frame to scan automatically
              </p>
            </div>

            <div className={`scanner-container ${scanning ? 'scanning' : ''}`}>
              <div className="scanner-frame">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
                <div className="scan-line"></div>
              </div>
              <div className="scanner-overlay">
                <span className="material-icons">qr_code_scanner</span>
              </div>
            </div>

            <div className="scan-actions">
              <button className="scan-button" onClick={handleScan} disabled={scanning}>
                <span className="material-icons">qr_code_scanner</span>
                <span>{scanning ? 'Scanning...' : 'Scan Barcode'}</span>
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              <button className="upload-button" onClick={handleUploadClick}>
                <span className="material-icons">upload</span>
                <span>Upload Photo</span>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={() => setProductScanned(true)}
              />
            </div>

            <div className="scan-tips">
              <div className="tip-item">
                <span className="material-icons">lightbulb</span>
                <span>Ensure good lighting for better scan accuracy</span>
              </div>
            </div>
          </>
        ) : (
          <div className="product-result">
            <div className="success-icon">
              <span className="material-icons">check_circle</span>
            </div>
            <h2 className="result-title">Product Scanned!</h2>
            
            <div className="product-card">
              <div className="product-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop" 
                  alt="Premium Velvet Sofa"
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">Premium Velvet Sofa</h3>
                <p className="product-details">Teakwood Furniture</p>
                <p className="product-price">₹45,000</p>
              </div>
            </div>

            <div className="emi-preview">
              <div className="emi-item">
                <span className="emi-label">EMI Starting from</span>
                <span className="emi-value">₹3,750/mo</span>
              </div>
            </div>

            <button className="continue-button" onClick={handleContinue}>
              <span>Find Lenders</span>
              <span className="material-icons">arrow_forward</span>
            </button>

            <button className="scan-again-button" onClick={() => setProductScanned(false)}>
              Scan Another Product
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ScanProductPage;
