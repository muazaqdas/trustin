import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Process.css';

const Process = () => {
  const detailedSteps = [
    {
      number: 1,
      title: 'Initial Consultation & Package Selection',
      description: 'We start with a comprehensive consultation to assess your credentials and recommend the right package for your level.',
      details: [
        'Evaluate your medical degree and specialization',
        'Determine credential tier (Tier 1, 2, or 3)',
        'Recommend GP, Specialist, or Consultant package',
        'Provide customized timeline (3-6 months)',
        'Explain DHA vs MOH licensing options'
      ],
      duration: '1-3 days'
    },
    {
      number: 2,
      title: 'Document Attestation',
      description: 'We guide you through the multi-step attestation process required for UAE licensing.',
      details: [
        'Provide comprehensive attestation checklist',
        'Guide through home country attestation chain',
        'Assist with UAE Embassy attestation',
        'Coordinate MOFA attestation in UAE',
        'Ensure all documents meet DHA/MOH standards'
      ],
      duration: '3-6 weeks'
    },
    {
      number: 3,
      title: 'DataFlow Verification',
      description: 'We manage your primary source verification application through DataFlow.',
      details: [
        'Complete DataFlow online application',
        'Upload all attested documents',
        'Coordinate with your universities and employers',
        'Monitor verification progress',
        'Receive DataFlow verification report'
      ],
      duration: '4-12 weeks (varies by tier)'
    },
    {
      number: 4,
      title: 'Prometric Exam Preparation',
      description: 'We provide comprehensive support for your DHA or MOH Prometric examination.',
      details: [
        'Access to specialty-specific study materials',
        'Expert guidance on exam format and content',
        'Assistance with exam registration',
        'Test-taking strategies and tips',
        'Support for retakes if needed'
      ],
      duration: '2-4 months (flexible)'
    },
    {
      number: 5,
      title: 'License Application Submission',
      description: 'We prepare and submit your complete DHA or MOH license application.',
      details: [
        'Create account on DHA/MOH portal',
        'Submit all verified documents',
        'Upload DataFlow and Prometric results',
        'Pay licensing fees on your behalf',
        'Schedule assessment appointments if required'
      ],
      duration: '1-2 weeks'
    },
    {
      number: 6,
      title: 'Final Approval & License Issuance',
      description: 'Receive your official DHA or MOH license and begin practicing in the UAE.',
      details: [
        'Monitor application until approval',
        'Coordinate medical fitness test',
        'Assist with Emirates ID application',
        'Receive official medical license',
        'Provide guidance on license renewal'
      ],
      duration: '2-4 weeks'
    }
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
                <Link to="/pricing">
                  <Button variant="ghost" size="lg">
                    View Packages
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
