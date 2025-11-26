import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PricingCard from '../components/ui/PricingCard';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Initial Consultation & Package Selection'
    },
    {
      number: 2,
      title: 'Document Attestation'
    },
    {
      number: 3,
      title: 'DataFlow Verification'
    },
    {
      number: 4,
      title: 'Prometric Exam Preparation'
    },
    {
      number: 5,
      title: 'License Application Submission'
    },
    {
      number: 6,
      title: 'Final Approval & License Issuance'
    }
  ];

  const pricingPackages = [
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

  const requirements = [
    {
      category: 'Academic Documents',
      items: [
        'MBBS or equivalent medical degree (attested)',
        'Postgraduate certificates (MD/MS/Fellowship for specialists)',
        'University transcripts (attested)',
        'Internship completion certificate',
        'All certificates attested through proper chain'
      ]
    },
    {
      category: 'Professional Documents',
      items: [
        'Valid medical license from home country',
        'Experience certificates from all employers',
        'Current employer good standing certificate',
        'Specialist registration (for specialists/consultants)',
        'CPD/CME certificates (if available)'
      ]
    },
    {
      category: 'Personal Documents',
      items: [
        'Valid passport (minimum 6 months validity)',
        'Passport-sized photographs (white background)',
        'Updated CV in standard format',
        'Proof of name change (if applicable)',
        'Marriage certificate (if name changed)'
      ]
    },
    {
      category: 'Verification Documents',
      items: [
        'DataFlow verification report',
        'Prometric exam result (pass certificate)',
        'Medical fitness certificate (UAE)',
        'Passport copy and visa (when in UAE)',
        'Emirates ID application (final stage)'
      ]
    }
  ];

  return (
    <div className="process-page">
      {/* Hero Section */}
      <section className="process-hero">
        <div className="container">
          <div className="process-hero-content slide-up">
            <h1 className="page-title">UAE Doctor Licensing Process</h1>
            <p className="page-subtitle">
              A proven, step-by-step approach to obtaining your DHA or MOH license in 3-6 months.
              We handle the complexity of DataFlow, attestation, and Prometric so you can focus on your medical career.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container">
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div key={step.number} className={`timeline-item slide-up stagger-${(index % 3) + 1}`}>
                <div className="timeline-marker">
                  <div className="timeline-number">{step.number}</div>
                </div>
                <Card variant="default" hover className="timeline-content">
                  <h3 className="timeline-title">{step.title}</h3>
                </Card>
                {index < processSteps.length - 1 && <div className="timeline-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Pricing Packages Section */}
      <section className="section pricing-section" id="packages">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Choose Your Package</h2>
            <p className="section-subtitle">
              All packages include comprehensive support throughout your DHA or MOH licensing journey
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPackages.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          <div className="pricing-included">
            <Card variant="glass" className="included-card">
              <h3 className="included-title">What's Included in All Packages</h3>
              <ul className="included-list">
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
            </Card>
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

      {/* Requirements Section */}
      <section className="section requirements-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What You'll Need</h2>
            <p className="section-subtitle">
              Essential documents required for DHA and MOH licensing in the UAE
            </p>
          </div>
          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <Card key={index} variant="glass" hover className={`requirement-card fluid-hover slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="requirement-category">{req.category}</h3>
                <ul className="requirement-list">
                  {req.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="checkmark"><MdCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="requirements-note">
            <p>
              <strong>Note:</strong> Specific requirements vary by specialization, credential tier, and DHA vs MOH licensing.
              TrustIn Consultancy provides a personalized checklist and attestation guidance based on your unique credentials.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section process-cta-section">
        <div className="container">
          <Card variant="gradient" className="process-cta-card">
            <div className="process-cta-content">
              <h2 className="process-cta-title">Ready to Start Your UAE Licensing Journey?</h2>
              <p className="process-cta-subtitle">
                Let our experts guide you through DataFlow, Prometric, and DHA/MOH applications while you prepare for your medical career in the UAE.
                Get started today with a consultation and package selection.
              </p>
              <div className="process-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    Begin Your Consultation
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
