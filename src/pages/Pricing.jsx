import React from 'react';
import PricingCard from '../components/ui/PricingCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'GP/Dentist Package',
      price: '$2,100',
      description: 'Perfect for General Practitioners and Dentists seeking DHA or MOH licensing in the UAE',
      features: [
        'Prometric exam assistance and guidance',
        'Comprehensive study materials and resources',
        'DataFlow application follow-up',
        'Timeline monitoring and updates',
        'Personalized support throughout the process',
      ],
      popular: false,
      category: 'gp',
    },
    {
      title: 'Specialist/Fellowship Package',
      price: '$2,700',
      description: 'Designed for Specialist doctors and Fellowship holders pursuing UAE healthcare licensing',
      features: [
        'Prometric exam assistance and guidance',
        'Comprehensive study materials and resources',
        'DataFlow application follow-up',
        'Timeline monitoring and updates',
        'Personalized support throughout the process',
      ],
      popular: true,
      category: 'specialist',
    },
    {
      title: 'Consultant Package',
      price: '$3,000',
      description: 'Premium support for Consultant-level doctors navigating UAE licensing requirements',
      features: [
        'Prometric exam assistance and guidance',
        'Comprehensive study materials and resources',
        'DataFlow application follow-up',
        'Timeline monitoring and updates',
        'Personalized support throughout the process',
      ],
      popular: false,
      category: 'consultant',
    },
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero-content slide-up">
            <h1 className="page-title">Transparent Pricing for UAE Doctor Licensing</h1>
            <p className="page-subtitle">
              Choose the package that matches your professional level. All packages include comprehensive support throughout your DHA or MOH licensing journey.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-intro">
            <h2 className="section-title">Choose Your Package</h2>
            <p className="section-description">
              All packages are priced in USD and include end-to-end support for your UAE healthcare licensing process.
              Whether you're a GP, Specialist, or Consultant, we have the right package for your needs.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          <div className="pricing-note">
            <div className="note-card">
              <h3>What's Included in All Packages</h3>
              <ul className="note-list">
                <li>
                  <strong>Prometric Exam Support:</strong> Expert guidance and preparation assistance for your licensing examination
                </li>
                <li>
                  <strong>Study Materials:</strong> Access to comprehensive resources tailored to your specialization
                </li>
                <li>
                  <strong>DataFlow Assistance:</strong> Complete support with your primary source verification application
                </li>
                <li>
                  <strong>Timeline Monitoring:</strong> Regular updates on your application status and next steps
                </li>
                <li>
                  <strong>Personalized Support:</strong> Dedicated consultant available throughout your 3-6 month licensing journey
                </li>
              </ul>
            </div>
          </div>

          <div className="pricing-faq-cta">
            <h3>Have Questions About Our Packages?</h3>
            <p>
              Not sure which package is right for you? Check out our frequently asked questions or get in touch with our team for personalized guidance.
            </p>
            <div className="pricing-cta-buttons">
              <Link to="/faq">
                <Button variant="outline" size="lg">
                  View FAQs
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="pricing-disclaimer">
            <p className="disclaimer-text">
              <strong>Note:</strong> Pricing is subject to change. All fees are in USD and cover consultancy services only.
              Government fees, examination fees, and document attestation charges are not included and will be paid directly
              by the applicant to the respective authorities. Timeline for licensing completion typically ranges from 3-6 months
              depending on your credentials tier and document preparation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
