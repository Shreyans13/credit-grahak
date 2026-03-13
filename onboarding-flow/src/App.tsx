import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import KYCPage from './pages/KYCPage';
import BureauConsentPage from './pages/BureauConsentPage';
import ProductSelectionPage from './pages/ProductSelectionPage';
import ProductListPage from './pages/ProductListPage';
import EligibleLendersPage from './pages/EligibleLendersPage';
import OfferDetailsPage from './pages/OfferDetailsPage';
import LoanAgreementPage from './pages/LoanAgreementPage';
import SecurityVerificationPage from './pages/SecurityVerificationPage';
import SuccessPage from './pages/SuccessPage';
import './App.css';

export type Screen = 
  | 'welcome' 
  | 'login'
  | 'kyc'
  | 'bureau-consent'
  | 'product-selection'
  | 'product-list'
  | 'eligible-lenders'
  | 'offer-details'
  | 'loan-agreement'
  | 'security-verification'
  | 'success';

const screenOrder: Screen[] = [
  'welcome',
  'login',
  'kyc',
  'bureau-consent',
  'product-selection',
  'product-list',
  'eligible-lenders',
  'offer-details',
  'loan-agreement',
  'security-verification',
  'success'
];

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    const currentIndex = screenOrder.indexOf(currentScreen);
    if (currentIndex > 0) {
      setCurrentScreen(screenOrder[currentIndex - 1]);
    }
  };

  const goNext = () => {
    const currentIndex = screenOrder.indexOf(currentScreen);
    if (currentIndex < screenOrder.length - 1) {
      setCurrentScreen(screenOrder[currentIndex + 1]);
    }
  };

  const handleGoToDashboard = () => {
    alert('Navigating to Dashboard...');
  };

  const handleDownloadReceipt = () => {
    alert('Downloading receipt...');
  };

  const handleViewOtherOffers = () => {
    navigateTo('eligible-lenders');
  };

  return (
    <div className="app">
      <div className="mobile-container">
        {currentScreen === 'welcome' && (
          <WelcomePage onGetStarted={goNext} />
        )}
        {currentScreen === 'login' && (
          <LoginPage onBack={goBack} onSendOTP={goNext} />
        )}
        {currentScreen === 'kyc' && (
          <KYCPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'bureau-consent' && (
          <BureauConsentPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'product-selection' && (
          <ProductSelectionPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'product-list' && (
          <ProductListPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'eligible-lenders' && (
          <EligibleLendersPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'offer-details' && (
          <OfferDetailsPage 
            onBack={goBack} 
            onContinue={goNext}
            onViewOtherOffers={handleViewOtherOffers}
          />
        )}
        {currentScreen === 'loan-agreement' && (
          <LoanAgreementPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'security-verification' && (
          <SecurityVerificationPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'success' && (
          <SuccessPage
            onGoToDashboard={handleGoToDashboard}
            onDownloadReceipt={handleDownloadReceipt}
          />
        )}
      </div>
    </div>
  );
}

export default App;
