import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PricingCard from '../components/ui/PricingCard';
import { processContent } from '../data/processContent';
import './Process.css';

const Process = () => {

  return (
    <div className="process-page">
      {/* Hero Section */}
      <section className="process-hero">
        <div className="container">
          <div className="process-hero-content slide-up">
            <h1 className="page-title">{processContent.hero.title}</h1>
            <p className="page-subtitle">
              {processContent.hero.subtitle}
            </p>
            <h3 className="page-intro-title">{processContent.hero.introductionTitle}</h3>
            {processContent.hero.introduction && (
              <div className="hero-introduction">
                {processContent.hero.introduction.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container">
          <div className="timeline">
            {processContent.processSteps.map((step, index) => (
              <div key={step.number} className={`timeline-item slide-up stagger-${(index % 3) + 1}`}>
                <div className="timeline-marker">
                  <div className="timeline-number">{step.number}</div>
                </div>
                <Card variant="default" hover className="timeline-content">
                  <h3 className="timeline-title">{step.title}</h3>
                </Card>
                {index < processContent.processSteps.length - 1 && <div className="timeline-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Pricing Packages Section */}
      <section className="section pricing-section" id="packages">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{processContent.pricing.heading}</h2>
            <p className="section-subtitle">
              {processContent.pricing.subtitle}
            </p>
          </div>

          <div className="pricing-grid">
            {processContent.pricing.packages.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          <div className="pricing-included">
            <Card variant="glass" className="included-card">
              <h3 className="included-title">{processContent.pricing.whatsIncluded.title}</h3>
              {processContent.pricing.whatsIncluded.subtitle && (
                <h4 className="included-subtitle">{processContent.pricing.whatsIncluded.subtitle}</h4>
              )}
              <ul className="included-list">
                {processContent.pricing.whatsIncluded.includedItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.number}. {item.label}</strong>
                    <ul className="included-details">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              {processContent.pricing.whatsIncluded.notIncluded && (
                <div className="not-included-section">
                  <h4 className="not-included-title">{processContent.pricing.whatsIncluded.notIncluded.title}</h4>
                  {processContent.pricing.whatsIncluded.notIncluded.subtitle && (
                    <p className="not-included-subtitle">{processContent.pricing.whatsIncluded.notIncluded.subtitle}</p>
                  )}
                  <ul className="not-included-list">
                    {processContent.pricing.whatsIncluded.notIncluded.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {processContent.pricing.whatsIncluded.note && (
                <p className="included-note">{processContent.pricing.whatsIncluded.note}</p>
              )}
            </Card>
          </div>

          <div className="pricing-disclaimer">
            <p className="disclaimer-text">
              {processContent.pricing.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section requirements-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{processContent.requirements.heading}</h2>
            <p className="section-subtitle">
              {processContent.requirements.subtitle}
            </p>
          </div>
          <Card variant="glass" className="requirements-card">
            <ul className="requirement-list">
              {processContent.requirements.items.map((item, index) => (
                <li key={index} className="requirement-item">
                  <div className="requirement-number">{item.number}</div>
                  <div className="requirement-content">
                    <h3 className="requirement-label">{item.label}</h3>
                    <p className="requirement-description">
                      {item.description.split('\n').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx < item.description.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <div className="requirements-note">
            <p>
              {processContent.requirements.note}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section process-cta-section">
        <div className="container">
          <Card variant="gradient" className="process-cta-card">
            <div className="process-cta-content">
              <h2 className="process-cta-title">{processContent.cta.title}</h2>
              <p className="process-cta-subtitle">
                {processContent.cta.subtitle}
              </p>
              <div className="process-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    {processContent.cta.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Process;
