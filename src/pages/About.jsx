import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './About.css';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We maintain the highest standards in every application we process, ensuring accuracy and completeness.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Transparent communication and honest guidance throughout your entire licensing journey.'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Streamlined processes and expert knowledge to get you licensed faster than traditional methods.'
    },
    {
      icon: '💙',
      title: 'Commitment',
      description: 'Dedicated to your success with personalized support and ongoing assistance when you need it.'
    }
  ];

  const credentials = [
    {
      title: 'Certified Licensing Specialists',
      description: 'Our team consists of professionals with extensive experience in healthcare licensing across all 50 states.'
    },
    {
      title: 'Industry Partnerships',
      description: 'Established relationships with state licensing boards and regulatory agencies for smoother processing.'
    },
    {
      title: 'Proven Track Record',
      description: 'Over 5,000 successful licensing applications with a 98% approval rate since our founding.'
    },
    {
      title: 'Continuing Education',
      description: 'Our team stays current with all regulatory changes and licensing requirements updates.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content slide-up">
            <h1 className="page-title">About TrustIn</h1>
            <p className="page-subtitle">
              Your trusted partner in healthcare professional licensing.
              We simplify the complex licensing process so you can focus on what matters most - patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text slide-in-left">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-description">
                At TrustIn, we believe that healthcare professionals should spend their time caring for patients,
                not navigating complex bureaucracy. Our mission is to streamline the licensing process,
                making it faster, easier, and less stressful for doctors, nurses, and allied health professionals
                across the United States.
              </p>
              <p className="mission-description">
                Since our founding, we've helped thousands of healthcare professionals obtain their licenses
                and advance their careers. We combine expert knowledge, proven processes, and personalized
                service to deliver results that exceed expectations.
              </p>
            </div>
            <div className="mission-visual slide-in-right">
              <Card variant="glass" className="mission-stats-card">
                <div className="mission-stat">
                  <h3 className="stat-number">5,000+</h3>
                  <p className="stat-label">Licenses Processed</p>
                </div>
                <div className="mission-stat">
                  <h3 className="stat-number">98%</h3>
                  <p className="stat-label">Approval Rate</p>
                </div>
                <div className="mission-stat">
                  <h3 className="stat-number">50</h3>
                  <p className="stat-label">States Covered</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <Card key={index} variant="default" hover className={`value-card fluid-hover slide-up stagger-${(index % 4) + 1}`}>
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section credentials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Trust Us</h2>
            <p className="section-subtitle">
              Our credentials and commitment to excellence
            </p>
          </div>
          <div className="credentials-grid">
            {credentials.map((cred, index) => (
              <Card key={index} variant="glass" hover className={`credential-card slide-up stagger-${(index % 2) + 1}`}>
                <h3 className="credential-title">{cred.title}</h3>
                <p className="credential-description">{cred.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="section differentiators-section">
        <div className="container">
          <Card variant="gradient" className="differentiators-card">
            <h2 className="differentiators-title">What Sets Us Apart</h2>
            <div className="differentiators-grid">
              <div className="differentiator-item">
                <div className="differentiator-number">01</div>
                <h3 className="differentiator-title">Personalized Service</h3>
                <p className="differentiator-description">
                  Every client receives individual attention and a customized licensing strategy
                  tailored to their unique situation.
                </p>
              </div>
              <div className="differentiator-item">
                <div className="differentiator-number">02</div>
                <h3 className="differentiator-title">Expert Knowledge</h3>
                <p className="differentiator-description">
                  Our team stays current with all 50 states' requirements and regulatory changes,
                  ensuring accurate applications.
                </p>
              </div>
              <div className="differentiator-item">
                <div className="differentiator-number">03</div>
                <h3 className="differentiator-title">Proven Results</h3>
                <p className="differentiator-description">
                  98% approval rate and average 30-day processing time demonstrate our
                  effectiveness and efficiency.
                </p>
              </div>
              <div className="differentiator-item">
                <div className="differentiator-number">04</div>
                <h3 className="differentiator-title">Ongoing Support</h3>
                <p className="differentiator-description">
                  We don't disappear after license issuance - we're here for renewals,
                  additional states, and ongoing compliance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Experience the TrustIn Difference</h2>
            <p className="about-cta-subtitle">
              Join thousands of satisfied healthcare professionals who chose TrustIn for their licensing needs.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="secondary" size="lg">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
