import React from 'react';
import { Link } from 'react-router-dom';
import { MdBolt, MdGpsFixed, MdCheckCircle, MdPublic, MdAssignment, MdHandshake, MdArrowForward, MdStar } from 'react-icons/md';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Home.css';

const Home = () => {
  const benefits = [
    {
      icon: <MdBolt />,
      title: 'Streamlined Process',
      description: 'Complete your DHA, MOH or DOH licensing in 3-6 months with our expert guidance through every step.'
    },
    {
      icon: <MdGpsFixed />,
      title: 'Expert Support',
      description: 'Our specialized team ensures your DataFlow verification and Prometric exam preparation are optimized for success.'
    },
    {
      icon: <MdCheckCircle />,
      title: 'Proven Track Record',
      description: 'High approval rate for doctors across all specialties. We handle the complexity so you can focus on your medical career.'
    },
    {
      icon: <MdPublic />,
      title: 'All Emirates Coverage',
      description: 'Assistance with DHA or DOH licensing for Dubai and MOH licensing for all other emirates across the UAE.'
    },
    {
      icon: <MdAssignment />,
      title: 'Complete Documentation',
      description: 'We manage attestation, DataFlow verification, exam scheduling, and all communications with authorities.'
    },
    {
      icon: <MdHandshake />,
      title: 'Personalized Support',
      description: 'Dedicated consultant available throughout your 3-6 month licensing journey with regular updates.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Submit your information and select your package. We assess your credentials and provide a customized timeline.'
    },
    {
      number: '02',
      title: 'Document Preparation',
      description: 'We guide you through attestation and DataFlow verification, ensuring all documents meet DHA/DOH/MOH requirements.'
    },
    {
      number: '03',
      title: 'Exam Preparation',
      description: 'Access comprehensive study materials and expert guidance for your Prometric examination.'
    },
    {
      number: '04',
      title: 'License Approval',
      description: 'We handle your DHA, MOH or DOH application and monitor progress until you receive your official license.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Ahmed Al-Mansouri',
      role: 'General Practitioner - DHA Licensed',
      content: 'TrustIn Consultancy guided me through the entire DHA licensing process. Their support with DataFlow and Prometric was invaluable!',
      rating: 5
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Specialist - Cardiology',
      content: 'The team was professional and kept me updated throughout. They made the complex MOH licensing process manageable and stress-free.',
      rating: 5
    },
    {
      name: 'Dr. James Wilson',
      role: 'Consultant - Internal Medicine',
      content: 'As an international doctor, I was overwhelmed by UAE licensing requirements. TrustIn handled everything expertly from attestation to final approval.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Doctors Licensed' },
    { number: '95%', label: 'Success Rate' },
    { number: '3-6 Months', label: 'Average Timeline' },
    { number: 'All Emirates', label: 'DHA, DOH & MOH Coverage' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <div className="hero-content slide-up">
            <h1 className="hero-title">
              UAE Doctor Licensing,
              <span className="gradient-text"> Simplified</span>
            </h1>
            <p className="hero-subtitle">
              Professional DHA, DOH and MOH licensing consultancy for General Practitioners, Specialists, and Consultants.
              Get licensed in the UAE with expert guidance through every step of your journey.
            </p>
            <div className="hero-cta">
              <Link to="/contact">
                <Button variant="primary" size="xl">
                  Start Your Journey Today
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
            <h2 className="section-title">Why Choose TrustIn Consultancy?</h2>
            <p className="section-subtitle">
              We make UAE doctor licensing straightforward, efficient, and stress-free
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
              Four simple steps to get your DHA, MOH or DOH license
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className={`step-card slide-up stagger-${(index % 4) + 1}`}>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < steps.length - 1 && <div className="step-arrow"><MdArrowForward /></div>}
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
            <h2 className="section-title">Trusted by Doctors Across the UAE</h2>
            <p className="section-subtitle">
              See what our clients say about their licensing experience
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="glass" hover className={`testimonial-card slide-up stagger-${(index % 3) + 1}`}>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <MdStar key={i} />
                  ))}
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
              <h2 className="final-cta-title">Ready to Get Licensed in the UAE?</h2>
              <p className="final-cta-subtitle">
                Join hundreds of doctors who trusted us with their DHA, DOH and MOH licensing needs.
                Start your consultation today and begin your journey to practice medicine in the UAE.
              </p>
              <div className="final-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    Start Your Consultation
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
