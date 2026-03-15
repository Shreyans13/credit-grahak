import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
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

// Sections will use translated titles from t.loanAgreement.*

const LoanAgreementPage: React.FC<LoanAgreementPageProps> = ({ onBack, onContinue }) => {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<string[]>(['loan-amount']);
  const [agreed, setAgreed] = useState(false);

  const sections: Section[] = [
    { id: 'loan-amount', title: t.loanAgreement.loanAmount, content: 'The principal loan amount is $5,000.00 with an annual percentage rate (APR) of 5.99%. Interest is calculated daily based on the outstanding balance and added to your monthly statement.' },
    { id: 'repayment', title: t.loanAgreement.repayment, content: 'Repayments are scheduled monthly over a period of 36 months. Each payment will be automatically deducted from your linked bank account on the 1st of every month starting from next month.' },
    { id: 'terms', title: t.loanAgreement.termsConditions, content: 'By signing this agreement, you acknowledge that you have read and understood all financial obligations. Failure to make payments may result in penalties and impact your credit score.' },
    { id: 'early-repayment', title: t.loanAgreement.earlyRepayment, content: 'You may repay the full loan balance at any time without incurring any additional fees or penalties. Early repayment will reduce the total interest paid over the life of the loan.' }
  ];

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
        <span className="header-title">{t.loanAgreement.title}</span>
        <div className="header-spacer"></div>
      </header>

      <main className="agreement-content">
        <div className="review-header">
          <h2 className="review-title">{t.loanAgreement.reviewTitle}</h2>
          <p className="review-subtitle">{t.loanAgreement.reviewSubtitle}</p>
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
            {t.loanAgreement.agreementText}
          </span>
        </label>

        <button
          className="sign-button"
          onClick={onContinue}
          disabled={!agreed}
        >
          {t.loanAgreement.signAgreement}
        </button>

        <p className="security-text">
          {t.loanAgreement.securityText}
        </p>
      </main>
    </div>
  );
};

export default LoanAgreementPage;
