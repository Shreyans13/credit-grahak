import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import VerifyIdentityPage from './pages/VerifyIdentityPage';
import BureauConsentPage from './pages/BureauConsentPage';
import ScanProductPage from './pages/ScanProductPage';
import EligibleLendersPage from './pages/EligibleLendersPage';
import OfferDetailsPage from './pages/OfferDetailsPage';
import LoanAgreementPage from './pages/LoanAgreementPage';
import SecurityVerificationPage from './pages/SecurityVerificationPage';
import SuccessPage from './pages/SuccessPage';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

export type Screen = 
  | 'welcome' 
  | 'login'
  | 'verify-identity'
  | 'bureau-consent'
  | 'scan-product'
  | 'eligible-lenders'
  | 'offer-details'
  | 'loan-agreement'
  | 'security-verification'
  | 'success';

const screenOrder: Screen[] = [
  'welcome',
  'login',
  'verify-identity',
  'bureau-consent',
  'scan-product',
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
        <LanguageSelector />
        {currentScreen === 'welcome' && (
          <WelcomePage onGetStarted={goNext} />
        )}
        {currentScreen === 'login' && (
          <LoginPage onBack={goBack} onSendOTP={goNext} />
        )}
        {currentScreen === 'verify-identity' && (
          <VerifyIdentityPage 
            onBack={goBack} 
            onContinue={goNext} 
          />
        )}
        {currentScreen === 'bureau-consent' && (
          <BureauConsentPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'scan-product' && (
          <ScanProductPage onBack={goBack} onContinue={goNext} />
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
