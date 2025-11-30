import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdSearch,
  MdClose,
  MdHelpOutline,
  MdAssignment,
  MdDescription,
  MdSchedule,
  MdAttachMoney,
  MdPublic,
  MdAutorenew,
  MdPhone
} from 'react-icons/md';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';
import Card from '../components/ui/Card';
import { useTranslation } from '../hooks/useTranslation';
import './FAQ.css';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Get translated content
  const { t } = useTranslation();
  const faqData = t.faqData.faqData;
  const faqContent = t.faqContent.faqContent;

  // Icon mapping for categories
  const iconMap = {
    MdAssignment: <MdAssignment />,
    MdDescription: <MdDescription />,
    MdSchedule: <MdSchedule />,
    MdAttachMoney: <MdAttachMoney />,
    MdPublic: <MdPublic />,
    MdAutorenew: <MdAutorenew />
  };

  const categories = faqContent.categories.items.map(item => ({
    ...item,
    icon: iconMap[item.iconName]
  }));

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
            <h1 className="page-title">{faqContent.hero.title}</h1>
            <p className="page-subtitle">
              {faqContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section faq-search-section">
        <div className="container">
          <div className="faq-search-wrapper slide-up">
            <div className="search-icon"><MdSearch /></div>
            <input
              type="text"
              className="faq-search-input"
              placeholder={faqContent.search.placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <MdClose />
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
                <div className="no-results-icon"><MdHelpOutline /></div>
                <h3 className="no-results-title">{faqContent.noResults.title}</h3>
                <p className="no-results-text">
                  {faqContent.noResults.text.replace('{searchTerm}', searchTerm)}
                </p>
                <Button variant="primary" size="md" onClick={() => setSearchTerm('')}>
                  {faqContent.noResults.buttonText}
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
            <h2 className="section-title">{faqContent.categories.header.title}</h2>
            <p className="section-subtitle">
              {faqContent.categories.header.subtitle}
            </p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className={`category-card fluid-hover slide-up stagger-${(index % 3) + 1}`}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section faq-cta-section">
        <div className="container">
          <Card variant="gradient" className="faq-cta-card">
            <div className="faq-cta-content">
              <h2 className="faq-cta-title">{faqContent.cta.title}</h2>
              <p className="faq-cta-subtitle">
                {faqContent.cta.subtitle}
              </p>
              <div className="faq-cta-buttons">
                <Link to="/contact">
                  <Button variant="white" size="lg">
                    {faqContent.cta.buttons.primary}
                  </Button>
                </Link>
                <Link to="/process">
                  <Button variant="ghost" size="lg">
                    {faqContent.cta.buttons.secondary}
                  </Button>
                </Link>
              </div>
              <p className="faq-cta-note">
                <MdPhone /> {faqContent.cta.note.split('**')[0]}
                <strong>{faqContent.cta.note.split('**')[1]}</strong>
                {faqContent.cta.note.split('**')[2]}
                <strong>{faqContent.cta.note.split('**')[3]}</strong>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
