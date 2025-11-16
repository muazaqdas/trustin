import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Process.css';

const Process = () => {
  const detailedSteps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We start with a free consultation to understand your specific needs, profession, and target jurisdiction.',
      details: [
        'Assess your current credentials and qualifications',
        'Identify licensing requirements for your profession',
        'Determine timeline and cost estimates',
        'Create a personalized licensing strategy'
      ],
      duration: '1-2 days'
    },
    {
      number: 2,
      title: 'Document Collection',
      description: 'Our team guides you through gathering all necessary documentation for your application.',
      details: [
        'Provide comprehensive document checklist',
        'Assist with transcript and credential requests',
        'Coordinate background checks and verifications',
        'Review all documents for completeness and accuracy'
      ],
      duration: '1-2 weeks'
    },
    {
      number: 3,
      title: 'Application Preparation',
      description: 'We meticulously prepare your complete licensing application package.',
      details: [
        'Complete all required forms and paperwork',
        'Compile and organize supporting documentation',
        'Ensure compliance with all board requirements',
        'Quality check every detail for accuracy'
      ],
      duration: '3-5 days'
    },
    {
      number: 4,
      title: 'Board Submission',
      description: 'Your application is submitted to the appropriate licensing board with all required materials.',
      details: [
        'Submit application through proper channels',
        'Track submission and confirm receipt',
        'Monitor application status daily',
        'Respond to any board inquiries immediately'
      ],
      duration: 'Same day'
    },
    {
      number: 5,
      title: 'Processing & Follow-up',
      description: 'We actively monitor your application and handle all communications with the licensing board.',
      details: [
        'Regular status updates to you',
        'Prompt responses to board requests',
        'Address any questions or issues',
        'Expedite processing when possible'
      ],
      duration: '2-8 weeks'
    },
    {
      number: 6,
      title: 'License Issuance',
      description: 'Receive your official healthcare license and start practicing with confidence.',
      details: [
        'Confirm license approval and issuance',
        'Provide license verification documentation',
        'Explain renewal requirements and deadlines',
        'Offer ongoing renewal support services'
      ],
      duration: 'Upon approval'
    }
  ];

  const requirements = [
    {
      category: 'Education',
      items: [
        'Official transcripts from all attended institutions',
        'Degree certificates and diplomas',
        'Course completion certificates',
        'Clinical rotation documentation (if applicable)'
      ]
    },
    {
      category: 'Professional',
      items: [
        'Current professional licenses (if any)',
        'Board certifications',
        'Continuing education certificates',
        'Work experience verification letters'
      ]
    },
    {
      category: 'Personal',
      items: [
        'Government-issued photo ID',
        'Social Security Number or Tax ID',
        'Passport (for international applicants)',
        'Proof of legal name changes (if applicable)'
      ]
    },
    {
      category: 'Background',
      items: [
        'Criminal background check',
        'Professional references (2-3 required)',
        'Malpractice history disclosure',
        'Disciplinary action disclosures (if any)'
      ]
    }
  ];

  return (
    <div className="process-page">
      {/* Hero Section */}
      <section className="process-hero">
        <div className="container">
          <div className="process-hero-content slide-up">
            <h1 className="page-title">Our Licensing Process</h1>
            <p className="page-subtitle">
              A proven, streamlined approach to getting your healthcare license quickly and efficiently.
              We handle the complexity so you can focus on your career.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container">
          <div className="timeline">
            {detailedSteps.map((step, index) => (
              <div key={step.number} className={`timeline-item slide-up stagger-${(index % 3) + 1}`}>
                <div className="timeline-marker">
                  <div className="timeline-number">{step.number}</div>
                </div>
                <Card variant="default" hover className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{step.title}</h3>
                    <span className="timeline-duration">{step.duration}</span>
                  </div>
                  <p className="timeline-description">{step.description}</p>
                  <ul className="timeline-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </Card>
                {index < detailedSteps.length - 1 && <div className="timeline-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section requirements-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What You'll Need</h2>
            <p className="section-subtitle">
              Common documents required for healthcare licensing applications
            </p>
          </div>
          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <Card key={index} variant="glass" hover className={`requirement-card fluid-hover slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="requirement-category">{req.category}</h3>
                <ul className="requirement-list">
                  {req.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="requirements-note">
            <p>
              <strong>Note:</strong> Specific requirements vary by profession and jurisdiction.
              TrustIn provides a personalized checklist based on your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section process-cta-section">
        <div className="container">
          <Card variant="gradient" className="process-cta-card">
            <div className="process-cta-content">
              <h2 className="process-cta-title">Ready to Start Your Licensing Journey?</h2>
              <p className="process-cta-subtitle">
                Let our experts handle the complexity while you focus on preparing for your new role.
                Get started today with a free consultation.
              </p>
              <div className="process-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    Begin Your Application
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="ghost" size="lg">
                    Common Questions
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
