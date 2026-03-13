import React, { useState } from 'react';
import './LoanAgreementPage.css';

interface LoanAgreementPageProps {
  onBack: () => void;
  onContinue: () => void;
}

interface Section {
  id: string;
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    id: 'loan-amount',
    title: 'Loan Amount & Interest',
    content: 'The principal loan amount is $5,000.00 with an annual percentage rate (APR) of 5.99%. Interest is calculated daily based on the outstanding balance and added to your monthly statement.'
  },
  {
    id: 'repayment',
    title: 'Repayment Schedule',
    content: 'Repayments are scheduled monthly over a period of 36 months. Each payment will be automatically deducted from your linked bank account on the 1st of every month starting from next month.'
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    content: 'By signing this agreement, you acknowledge that you have read and understood all financial obligations. Failure to make payments may result in penalties and impact your credit score.'
  },
  {
    id: 'early-repayment',
    title: 'Early Repayment',
    content: 'You may repay the full loan balance at any time without incurring any additional fees or penalties. Early repayment will reduce the total interest paid over the life of the loan.'
  }
];

const LoanAgreementPage: React.FC<LoanAgreementPageProps> = ({ onBack, onContinue }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['loan-amount']);
  const [agreed, setAgreed] = useState(false);

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id)
        ? prev.filter(s => s !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="agreement-page">
      <header className="agreement-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Loan Agreement</span>
        <div className="header-spacer"></div>
      </header>

      <main className="agreement-content">
        <div className="step-indicator">
          <span className="step-label">Application Progress</span>
          <span className="step-count">Step 9 of 11</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '82%' }}></div>
        </div>

        <div className="review-header">
          <h2 className="review-title">Review your agreement</h2>
          <p className="review-subtitle">
            Please read the following terms and conditions carefully before proceeding with your signature.
          </p>
        </div>

        <div className="sections-list">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section-card ${expandedSections.includes(section.id) ? 'expanded' : ''}`}
            >
              <button
                className="section-header-btn"
                onClick={() => toggleSection(section.id)}
              >
                <span className="section-title-text">{section.title}</span>
                <span className="material-icons expand-icon">
                  {expandedSections.includes(section.id) ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {expandedSections.includes(section.id) && (
                <div className="section-content">
                  <p>{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <label className={`agreement-checkbox ${agreed ? 'checked' : ''}`}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span className="checkmark">
            {agreed && <span className="material-icons">check</span>}
          </span>
          <span className="agreement-text">
            I confirm that I have read and agree to the Loan Agreement and Privacy Policy.
          </span>
        </label>

        <button
          className="sign-button"
          onClick={onContinue}
          disabled={!agreed}
        >
          Sign Agreement
        </button>

        <p className="security-text">
          Securely encrypted with 256-bit SSL
        </p>
      </main>
    </div>
  );
};

export default LoanAgreementPage;
