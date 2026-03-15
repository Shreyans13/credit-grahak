import { useState } from 'react';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import IDScanPage from './pages/IDScanPage';
import DetailsConfirmationPage from './pages/DetailsConfirmationPage';
import BureauConsentPage from './pages/BureauConsentPage';
import EMISelectionPage from './pages/EMISelectionPage';
import PaymentSummaryPage from './pages/PaymentSummaryPage';
import PINEntryPage from './pages/PINEntryPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import './App.css';

export type Screen = 
  | 'product'
  | 'login'
  | 'id-scan'
  | 'details-confirmation'
  | 'bureau-consent'
  | 'emi-selection'
  | 'payment-summary'
  | 'pin-entry'
  | 'payment-success';

const screenOrder: Screen[] = [
  'product',
  'login',
  'id-scan',
  'details-confirmation',
  'bureau-consent',
  'emi-selection',
  'payment-summary',
  'pin-entry',
  'payment-success'
];

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('product');
  const [selectedPlan, setSelectedPlan] = useState<{amount: number; months: number; lenderName: string} | null>(null);

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

  const handlePlanSelect = (amount: number, months: number, lenderName: string) => {
    setSelectedPlan({ amount, months, lenderName });
    goNext();
  };

  const handleGoHome = () => {
    setCurrentScreen('product');
    setSelectedPlan(null);
  };

  return (
    <div className="app">
      <div className="mobile-container">
        {currentScreen === 'product' && (
          <ProductPage onContinue={goNext} />
        )}
        {currentScreen === 'login' && (
          <LoginPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'id-scan' && (
          <IDScanPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'details-confirmation' && (
          <DetailsConfirmationPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'bureau-consent' && (
          <BureauConsentPage onBack={goBack} onContinue={goNext} />
        )}
        {currentScreen === 'emi-selection' && (
          <EMISelectionPage onBack={goBack} onSelectPlan={handlePlanSelect} />
        )}
        {currentScreen === 'payment-summary' && (
          <PaymentSummaryPage 
            onBack={goBack} 
            onContinue={goNext}
            selectedPlan={selectedPlan}
          />
        )}
        {currentScreen === 'pin-entry' && (
          <PINEntryPage 
            onBack={goBack} 
            onContinue={goNext} 
            lenderName={selectedPlan?.lenderName || 'DMI Finance'}
          />
        )}
        {currentScreen === 'payment-success' && (
          <PaymentSuccessPage onGoHome={handleGoHome} />
        )}
      </div>
    </div>
  );
}

export default App;
