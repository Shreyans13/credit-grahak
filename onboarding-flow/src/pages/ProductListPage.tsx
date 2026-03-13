import React, { useState } from 'react';
import './ProductListPage.css';

interface ProductListPageProps {
  onBack: () => void;
  onContinue: () => void;
}

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: string;
}

const products: Product[] = [
  { id: '1', name: 'MacBook Air M2', price: '₹85,000', description: '8GB RAM, 256GB SSD', icon: 'laptop_mac' },
  { id: '2', name: 'Samsung Galaxy S23', price: '₹72,000', description: 'Phantom Black, 128GB', icon: 'smartphone' },
  { id: '3', name: 'Dell XPS 13', price: '₹1,15,000', description: 'Intel i7, 16GB RAM', icon: 'laptop_mac' },
  { id: '4', name: 'iPhone 15 Pro', price: '₹1,24,900', description: 'Natural Titanium, 256GB', icon: 'smartphone' },
  { id: '5', name: 'Surface Laptop 5', price: '₹98,500', description: 'Sage Green, Touchscreen', icon: 'laptop_mac' },
  { id: '6', name: 'Galaxy Z Fold 5', price: '₹1,54,000', description: 'Cream, 512GB Storage', icon: 'smartphone' },
];

const ProductListPage: React.FC<ProductListPageProps> = ({ onBack, onContinue }) => {
  const [selectedProduct, setSelectedProduct] = useState<string>('1');
  const [activeTab, setActiveTab] = useState<'all' | 'laptops' | 'mobiles'>('all');

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <div className="product-list-page">
      <header className="product-header">
        <button className="back-button" onClick={onBack}>
          <span className="material-icons">arrow_back</span>
        </button>
        <span className="header-title">Select Product for EMI</span>
        <button className="info-button">
          <span className="material-icons">info</span>
        </button>
      </header>

      <main className="product-content">
        <div className="search-bar">
          <span className="material-icons search-icon">search</span>
          <input type="text" placeholder="Search products..." className="search-input" />
        </div>

        <div className="category-tabs">
          <button
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`tab ${activeTab === 'laptops' ? 'active' : ''}`}
            onClick={() => setActiveTab('laptops')}
          >
            <span className="material-icons">laptop_mac</span>
            Laptops
          </button>
          <button
            className={`tab ${activeTab === 'mobiles' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobiles')}
          >
            <span className="material-icons">smartphone</span>
            Mobiles
          </button>
        </div>

        <div className="products-list">
          {products.map((product) => (
            <button
              key={product.id}
              className={`product-item ${selectedProduct === product.id ? 'selected' : ''}`}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="product-icon">
                <span className="material-icons">{product.icon}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-price">{product.price}</div>
            </button>
          ))}
        </div>

        {selectedProductData && (
          <div className="selected-product-bar">
            <div className="selected-info">
              <span className="selected-label">Selected Product</span>
              <span className="selected-name">{selectedProductData.name}</span>
            </div>
            <div className="emi-info">
              <span className="emi-label">EMI Starts at</span>
              <span className="emi-value">₹7,083/mo</span>
            </div>
          </div>
        )}

        <button className="proceed-button" onClick={onContinue}>
          <span>Proceed to EMI Plans</span>
          <span className="material-icons">arrow_forward</span>
        </button>
      </main>
    </div>
  );
};

export default ProductListPage;
