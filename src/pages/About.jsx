import React from 'react';
import { Link } from 'react-router-dom';
import { MdGpsFixed, MdHandshake, MdBolt, MdFavorite } from 'react-icons/md';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useTranslation } from '../hooks/useTranslation';
import './About.css';

const About = () => {
  // Get translated content
  const { t } = useTranslation();
  const aboutContent = t.aboutContent.aboutContent;

  // Icon mapping for values section
  const iconMap = {
    MdGpsFixed: <MdGpsFixed />,
    MdHandshake: <MdHandshake />,
    MdBolt: <MdBolt />,
    MdFavorite: <MdFavorite />
  };

  // Map value items with their icons
  const values = aboutContent.values.items.map(item => ({
    ...item,
    icon: iconMap[item.iconName]
  }));

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content slide-up">
            <h1 className="page-title">{aboutContent.hero.title}</h1>
            <p className="page-subtitle">
              {aboutContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text slide-in-left">
              <h2 className="mission-title">{aboutContent.mission.title}</h2>
              {aboutContent.mission.paragraphs.map((paragraph, index) => (
                <p key={index} className="mission-description">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mission-visual slide-in-right">
              <Card variant="glass" className="mission-stats-card">
                {aboutContent.mission.stats.map((stat, index) => (
                  <div key={index} className="mission-stat">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{aboutContent.team.header.title}</h2>
            <p className="section-subtitle">
              {aboutContent.team.header.subtitle}
            </p>
          </div>
          <div className="team-grid">
            {aboutContent.team.members.map((member, index) => (
              <Card key={index} variant="glass" hover className="team-card slide-up">
                <div className="team-image-wrapper">
                  {member.image ? (
                    <div className="team-image-container">
                      <img src={member.image} alt={member.name} className="team-image" />
                    </div>
                  ) : (
                    <div className="team-image-placeholder">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-designation">{member.designation}</p>
                  {member.subDesignation && (
                    <p className="team-sub-designation">{member.subDesignation}</p>
                  )}
                  {member.bio && (
                    <p className="team-bio">
                      {member.bio.split('\n\n').map((paragraph, idx) => (
                        <span key={idx}>
                          {paragraph}
                          {idx < member.bio.split('\n\n').length - 1 && <><br /><br /></>}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{aboutContent.values.header.title}</h2>
            <p className="section-subtitle">
              {aboutContent.values.header.subtitle}
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
            <h2 className="section-title">{aboutContent.credentials.header.title}</h2>
            <p className="section-subtitle">
              {aboutContent.credentials.header.subtitle}
            </p>
          </div>
          <div className="credentials-grid">
            {aboutContent.credentials.items.map((cred, index) => (
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
            <h2 className="differentiators-title">{aboutContent.differentiators.title}</h2>
            <div className="differentiators-grid">
              {aboutContent.differentiators.items.map((item, index) => (
                <div key={index} className="differentiator-item">
                  <div className="differentiator-number">{item.number}</div>
                  <h3 className="differentiator-title">{item.title}</h3>
                  <p className="differentiator-description">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">{aboutContent.cta.title}</h2>
            <p className="about-cta-subtitle">
              {aboutContent.cta.subtitle}
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  {aboutContent.cta.buttons.primary}
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="secondary" size="lg">
                  {aboutContent.cta.buttons.secondary}
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
