import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import Button from './Button';
import './PricingCard.css';

const PricingCard = ({ title, price, description, features, popular, category }) => {
  return (
    <div className={`pricing-card ${popular ? 'pricing-card-popular' : ''}`}>
      {popular && <div className="pricing-badge">Most Popular</div>}

      <div className="pricing-header">
        <h3 className="pricing-title">{title}</h3>
        <div className="pricing-price">
          <span className="price-currency">$</span>
          <span className="price-amount">{price.replace('$', '')}</span>
          <span className="price-period">USD</span>
        </div>
        <p className="pricing-description">{description}</p>
      </div>

      <div className="pricing-features">
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-icon"><MdCheck /></span>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pricing-footer">
        <Link to="/contact" state={{ package: title }}>
          <Button variant={popular ? 'primary' : 'outline'} size="lg" fullWidth>
            Get Started
          </Button>
        </Link>
        <p className="pricing-footer-note">3-6 month timeline</p>
      </div>
    </div>
  );
};

export default PricingCard;
