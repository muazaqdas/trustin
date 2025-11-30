import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './BenefitVisual.css';

const BenefitVisual = ({ type = 'isometric', benefit }) => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (type === 'animated' && benefit.lottieAnimation) {
      setLoading(true);
      setError(false);

      // Load Lottie animation
      fetch(benefit.lottieAnimation)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Lottie animation loaded:', benefit.lottieAnimation);
          setAnimationData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading Lottie animation:', benefit.lottieAnimation, err);
          setError(true);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setAnimationData(null);
    }
  }, [type, benefit.lottieAnimation]);

  // Render Lottie animation
  if (type === 'animated') {
    if (loading) {
      return (
        <div className="benefit-visual benefit-visual-loading">
          <div className="benefit-loader"></div>
        </div>
      );
    }

    if (error || !animationData) {
      // Fallback to icon if animation fails to load
      return (
        <div className="benefit-visual benefit-visual-icon">
          <div className="benefit-icon">{benefit.icon}</div>
        </div>
      );
    }

    return (
      <div className="benefit-visual benefit-visual-animated">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    );
  }

  // Render Isometric illustration
  if (type === 'isometric') {
    return (
      <div className="benefit-visual benefit-visual-isometric">
        <img
          src={benefit.isometricImage}
          alt={benefit.title}
          className="isometric-image"
          onError={(e) => {
            // Fallback to icon if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="benefit-icon" style={{ display: 'none' }}>
          {benefit.icon}
        </div>
      </div>
    );
  }

  // Default fallback to icon
  return (
    <div className="benefit-visual benefit-visual-icon">
      <div className="benefit-icon">{benefit.icon}</div>
    </div>
  );
};

export default BenefitVisual;
