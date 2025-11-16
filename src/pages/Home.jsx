import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Home.css';

const Home = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Get your healthcare license in as little as 30 days with our expedited process and expert guidance.'
    },
    {
      icon: '🎯',
      title: 'Expert Support',
      description: 'Our team of licensing specialists ensures your application is complete, accurate, and optimized for approval.'
    },
    {
      icon: '✅',
      title: 'Guaranteed Success',
      description: '98% approval rate. We handle the complexity so you can focus on what matters - patient care.'
    },
    {
      icon: '🌎',
      title: 'Multi-State Licensing',
      description: 'Expand your career opportunities with seamless licensing across multiple jurisdictions.'
    },
    {
      icon: '📋',
      title: 'Complete Documentation',
      description: 'We manage all paperwork, verifications, and communications with licensing boards.'
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Dedicated support team available to answer questions and provide updates throughout the process.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description: 'Fill out our simple online form with your basic information and professional credentials.'
    },
    {
      number: '02',
      title: 'Document Verification',
      description: 'Our team verifies your credentials and prepares your complete licensing application package.'
    },
    {
      number: '03',
      title: 'Board Submission',
      description: 'We submit your application to the licensing board and monitor its progress closely.'
    },
    {
      number: '04',
      title: 'Receive License',
      description: 'Get your official healthcare license and start practicing with confidence.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Licensed Physician',
      content: 'TrustIn made my multi-state licensing process incredibly smooth. What would have taken months took just 6 weeks!',
      rating: 5
    },
    {
      name: 'James Rodriguez, RN',
      role: 'Registered Nurse',
      content: 'The team was professional, responsive, and guided me through every step. Highly recommend their services!',
      rating: 5
    },
    {
      name: 'Maria Chen, PT',
      role: 'Physical Therapist',
      content: 'As an international graduate, I was overwhelmed by the process. TrustIn handled everything perfectly.',
      rating: 5
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Licenses Processed' },
    { number: '98%', label: 'Approval Rate' },
    { number: '30 Days', label: 'Average Processing' },
    { number: '50 States', label: 'Jurisdictions Covered' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <div className="hero-content slide-up">
            <h1 className="hero-title">
              Your Healthcare Licensing,
              <span className="gradient-text"> Simplified</span>
            </h1>
            <p className="hero-subtitle">
              Professional licensing services for doctors, nurses, and allied health professionals.
              Get licensed faster with expert guidance every step of the way.
            </p>
            <div className="hero-cta">
              <Link to="/contact">
                <Button variant="primary" size="xl">
                  Get Licensed in 30 Days
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="white" size="xl">
                  See How It Works
                </Button>
              </Link>
            </div>
            <p className="hero-tagline">Your search ends here.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Card key={index} variant="glass" hover className="stat-card slide-up stagger-1">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose TrustIn?</h2>
            <p className="section-subtitle">
              We make healthcare licensing fast, easy, and stress-free
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="default" hover className={`benefit-card fluid-hover slide-up stagger-${(index % 3) + 1}`}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Four simple steps to get your healthcare license
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className={`step-card slide-up stagger-${(index % 4) + 1}`}>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < steps.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/process">
              <Button variant="secondary" size="lg">
                View Detailed Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Trusted by Healthcare Professionals</h2>
            <p className="section-subtitle">
              See what our clients say about their experience
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="glass" hover className={`testimonial-card slide-up stagger-${(index % 3) + 1}`}>
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section final-cta-section">
        <div className="container">
          <Card variant="gradient" className="final-cta-card">
            <div className="final-cta-content">
              <h2 className="final-cta-title">Ready to Get Licensed?</h2>
              <p className="final-cta-subtitle">
                Join thousands of healthcare professionals who trusted us with their licensing needs.
                Start your application today and get licensed in as little as 30 days.
              </p>
              <div className="final-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    Start Your Application
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="ghost" size="lg">
                    Have Questions?
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

export default Home;
