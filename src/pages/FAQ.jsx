import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import Card from '../components/ui/Card';
import { faqData } from '../data/faqData';
import './FAQ.css';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content slide-up">
            <h1 className="page-title">Frequently Asked Questions</h1>
            <p className="page-subtitle">
              Find answers to common questions about healthcare licensing and our services.
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section faq-search-section">
        <div className="container">
          <div className="faq-search-wrapper slide-up">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              className="faq-search-input"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="search-results-text">
              Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section faq-accordion-section">
        <div className="container">
          {filteredFaqs.length > 0 ? (
            <div className="fade-in">
              <Accordion items={filteredFaqs} />
            </div>
          ) : (
            <Card variant="default" className="no-results-card">
              <div className="no-results">
                <div className="no-results-icon">❓</div>
                <h3 className="no-results-title">No Results Found</h3>
                <p className="no-results-text">
                  We couldn't find any questions matching "{searchTerm}".
                  Try different keywords or contact us directly.
                </p>
                <Button variant="primary" size="md" onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="section faq-categories-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Browse by Topic</h2>
            <p className="section-subtitle">
              Quick access to information about specific licensing topics
            </p>
          </div>
          <div className="categories-grid">
            <Card variant="glass" hover className="category-card fluid-hover slide-up stagger-1">
              <div className="category-icon">📋</div>
              <h3 className="category-title">Getting Started</h3>
              <p className="category-description">
                Learn about the basics of healthcare licensing and what you need to begin
              </p>
            </Card>
            <Card variant="glass" hover className="category-card fluid-hover slide-up stagger-2">
              <div className="category-icon">📄</div>
              <h3 className="category-title">Documentation</h3>
              <p className="category-description">
                Find out what documents and credentials are required for your application
              </p>
            </Card>
            <Card variant="glass" hover className="category-card fluid-hover slide-up stagger-3">
              <div className="category-icon">⏱️</div>
              <h3 className="category-title">Timeline & Process</h3>
              <p className="category-description">
                Understand how long the process takes and what steps are involved
              </p>
            </Card>
            <Card variant="glass" hover className="category-card fluid-hover slide-up stagger-1">
              <div className="category-icon">💰</div>
              <h3 className="category-title">Costs & Fees</h3>
              <p className="category-description">
                Learn about licensing fees, service costs, and payment options
              </p>
            </Card>
            <Card variant="glass" hover className="category-card fluid-hover slide-up stagger-2">
              <div className="category-icon">🌍</div>
              <h3 className="category-title">Multi-State Licensing</h3>
              <p className="category-description">
                Information about getting licensed in multiple jurisdictions
              </p>
            </Card>
            <Card variant="glass" hover className="category-card fluid-hover slide-up stagger-3">
              <div className="category-icon">🔄</div>
              <h3 className="category-title">Renewals</h3>
              <p className="category-description">
                Everything about license renewal, continuing education, and maintenance
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section faq-cta-section">
        <div className="container">
          <Card variant="gradient" className="faq-cta-card">
            <div className="faq-cta-content">
              <h2 className="faq-cta-title">Still Have Questions?</h2>
              <p className="faq-cta-subtitle">
                Our licensing specialists are here to help. Get personalized answers
                to your specific licensing questions with a free consultation.
              </p>
              <div className="faq-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/process">
                  <Button variant="ghost" size="lg">
                    View Our Process
                  </Button>
                </Link>
              </div>
              <p className="faq-cta-note">
                📞 Call us at +1 (234) 567-890 or email info@trustin.com
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
