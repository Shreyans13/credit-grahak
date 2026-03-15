import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: 'hi' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectorRef}
      className={`language-selector ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="material-icons language-icon">language</span>
      <span className="language-text">
        {language === 'hi' ? t.common.hindi : t.common.english}
      </span>
      <span className="material-icons language-arrow">
        {isOpen ? 'expand_less' : 'expand_more'}
      </span>

      {isOpen && (
        <div className="language-dropdown" onClick={(e) => e.stopPropagation()}>
          <div
            className={`language-option ${language === 'hi' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('hi')}
          >
            <span className="option-text">{t.common.hindi}</span>
            {language === 'hi' && (
              <span className="material-icons check-icon">check</span>
            )}
          </div>
          <div
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <span className="option-text">{t.common.english}</span>
            {language === 'en' && (
              <span className="material-icons check-icon">check</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
