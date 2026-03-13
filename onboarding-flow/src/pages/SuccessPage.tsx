import React from 'react';
import './SuccessPage.css';

interface SuccessPageProps {
  onGoToDashboard: () => void;
  onDownloadReceipt: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onGoToDashboard, onDownloadReceipt }) => {
  return (
    <div className="success-page">
      <header className="success-header">
        <button className="close-button" aria-label="Close">
          <span className="material-icons">close</span>
        </button>
        <span className="header-label">Success</span>
        <div className="header-spacer"></div>
      </header>

      <main className="success-content">
        <div className="progress-section">
          <span className="progress-label">Application Progress</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%' }}></div>
          </div>
          <span className="progress-text">11 of 11</span>
        </div>

        <div className="success-message">
          <div className="success-icon">
            <span className="material-icons celebration">celebration</span>
          </div>
          <h1 className="success-title">Loan Successfully Granted!</h1>
          <p className="success-description">
            Your funds are being prepared and will be credited to your account shortly.
          </p>
        </div>

        <div className="loan-details">
          <div className="detail-card">
            <span className="detail-label">Loan Amount</span>
            <span className="detail-value">$25,000.00</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">First EMI Date</span>
            <span className="detail-value">Oct 12, 2023</span>
          </div>
        </div>

        <div className="action-buttons">
          <button className="dashboard-button" onClick={onGoToDashboard}>
            Go to Dashboard
          </button>
          <button className="receipt-button" onClick={onDownloadReceipt}>
            <span className="material-icons">download_for_offline</span>
            <span>Download Receipt</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;
