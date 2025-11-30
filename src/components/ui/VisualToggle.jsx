import React from 'react';
import { MdAnimation, MdViewInAr } from 'react-icons/md';
import './VisualToggle.css';

const VisualToggle = ({ value = 'animated', onChange }) => {
  const handleToggle = () => {
    const newValue = value === 'animated' ? 'isometric' : 'animated';
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="visual-toggle-wrapper">
      <div className="visual-toggle-label">Visual Style:</div>
      <div className="visual-toggle">
        <button
          className={`toggle-option ${value === 'animated' ? 'active' : ''}`}
          onClick={() => onChange && onChange('animated')}
          aria-label="Switch to animated illustrations"
          type="button"
        >
          <MdAnimation />
          <span>Animated</span>
        </button>
        <button
          className={`toggle-option ${value === 'isometric' ? 'active' : ''}`}
          onClick={() => onChange && onChange('isometric')}
          aria-label="Switch to isometric illustrations"
          type="button"
        >
          <MdViewInAr />
          <span>Isometric</span>
        </button>
        <div
          className="toggle-slider"
          style={{
            transform: value === 'isometric' ? 'translateX(100%)' : 'translateX(0)'
          }}
        />
      </div>
    </div>
  );
};

export default VisualToggle;
