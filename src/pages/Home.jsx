import React from 'react';
import { Link } from 'react-router-dom';
import { MdBolt, MdGpsFixed, MdCheckCircle, MdPublic, MdAssignment, MdHandshake, MdArrowForward, MdStar } from 'react-icons/md';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import {
  heroContent,
  statsContent,
  benefitsContent,
  howItWorksContent,
  testimonialsContent,
  finalCtaContent
} from '../data/homeContent';
import './Home.css';

const Home = () => {
  // Icon mapping for benefits section
  const iconMap = {
    MdBolt: <MdBolt />,
    MdGpsFixed: <MdGpsFixed />,
    MdCheckCircle: <MdCheckCircle />,
    MdPublic: <MdPublic />,
    MdAssignment: <MdAssignment />,
    MdHandshake: <MdHandshake />
  };

  // Map benefit items with their icons
  const benefits = benefitsContent.items.map(item => ({
    ...item,
    icon: iconMap[item.iconName]
  }));

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <div className="hero-content slide-up">
            <h1 className="hero-title">
              {heroContent.title.main}
              <span className="gradient-text">{heroContent.title.gradient}</span>
            </h1>
            <p className="hero-subtitle">
              {heroContent.subtitle}
            </p>
            <div className="hero-cta">
              <Link to="/contact">
                <Button variant="primary" size="xl">
                  {heroContent.buttons.primary}
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="white" size="xl">
                  {heroContent.buttons.secondary}
                </Button>
              </Link>
            </div>
            <p className="hero-tagline">{heroContent.tagline}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statsContent.map((stat, index) => (
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
            <h2 className="section-title">{benefitsContent.header.title}</h2>
            <p className="section-subtitle">
              {benefitsContent.header.subtitle}
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
            <h2 className="section-title">{howItWorksContent.header.title}</h2>
            <p className="section-subtitle">
              {howItWorksContent.header.subtitle}
            </p>
          </div>
          <div className="steps-grid">
            {howItWorksContent.steps.map((step, index) => (
              <div key={index} className={`step-card slide-up stagger-${(index % 4) + 1}`}>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < howItWorksContent.steps.length - 1 && <div className="step-arrow"><MdArrowForward /></div>}
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/process">
              <Button variant="secondary" size="lg">
                {howItWorksContent.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{testimonialsContent.header.title}</h2>
            <p className="section-subtitle">
              {testimonialsContent.header.subtitle}
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonialsContent.items.map((testimonial, index) => (
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
              <h2 className="final-cta-title">{finalCtaContent.title}</h2>
              <p className="final-cta-subtitle">
                {finalCtaContent.subtitle}
              </p>
              <div className="final-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    {finalCtaContent.buttons.primary}
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="ghost" size="lg">
                    {finalCtaContent.buttons.secondary}
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
