import React from 'react';
import './TrustBadge.css';

const TrustBadge = ({ icon, title, subtitle, variant = 'default' }) => {
  return (
    <div className={`trust-badge trust-badge-${variant}`}>
      <div className="trust-badge-icon">{icon}</div>
      <div className="trust-badge-content">
        <div className="trust-badge-title">{title}</div>
        {subtitle && <div className="trust-badge-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

export default TrustBadge;
