import React, { useState } from 'react';
import './ProductSelectionPage.css';

interface ProductSelectionPageProps {
  onBack: () => void;
  onContinue: () => void;
}

type Category = 'laptops' | 'mobiles' | 'appliances' | 'electronics' | 'accessories' | 'wearables';

interface CategoryOption {
  id: Category;
  icon: string;
  label: string;
}

const categories: CategoryOption[] = [
  { id: 'laptops', icon: 'laptop_mac', label: 'Laptops' },
  { id: 'mobiles', icon: 'smartphone', label: 'Mobiles' },
  { id: 'appliances', icon: 'kitchen', label: 'Home Appliances' },
  { id: 'electronics', icon: 'devices_other', label: 'Electronics' },
  { id: 'accessories', icon: 'headset', label: 'Accessories' },
  { id: 'wearables', icon: 'watch', label: 'Wearables' },
];

const ProductSelectionPage: React.FC<ProductSelectionPageProps> = ({ onBack, onContinue }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="product-selection-page">
      <header className="selection-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">What are you selling today?</span>
        <div className="header-spacer"></div>
      </header>

      <main className="selection-content">
        <p className="selection-description">
          Select the category that best matches your inventory to find suitable lending partners.
        </p>

        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-card ${selectedCategory === category.id ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {selectedCategory === category.id && (
                <div className="check-badge">
                  <span className="material-icons">check</span>
                </div>
              )}
              <span className="material-icons category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>

        <div className="insight-box">
          <span className="material-icons insight-icon">lightbulb</span>
          <p className="insight-text">
            <strong>Merchant Insights</strong><br />
            Electronics retailers often qualify for 20% higher credit limits.
          </p>
        </div>

        <button
          className="find-lenders-button"
          onClick={onContinue}
          disabled={!selectedCategory}
        >
          <span>Find Lenders</span>
          <span className="material-icons">chevron_right</span>
        </button>
      </main>
    </div>
  );
};

export default ProductSelectionPage;
