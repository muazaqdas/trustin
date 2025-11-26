import React from 'react';
import { Link } from 'react-router-dom';
import { MdGpsFixed, MdHandshake, MdBolt, MdFavorite } from 'react-icons/md';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <MdGpsFixed />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every DHA, DOH and MOH application, ensuring accuracy, completeness, and compliance with UAE regulations.'
    },
    {
      icon: <MdHandshake />,
      title: 'Integrity',
      description: 'Transparent communication and honest guidance throughout your entire UAE licensing journey, from attestation to final approval.'
    },
    {
      icon: <MdBolt />,
      title: 'Efficiency',
      description: 'Streamlined DataFlow verification, Prometric preparation, and expert knowledge to minimize your 3-6 month licensing timeline.'
    },
    {
      icon: <MdFavorite />,
      title: 'Commitment',
      description: 'Dedicated to your success with personalized consultant support and regular updates throughout your entire licensing process.'
    }
  ];

  const team = [
    {
      name: 'Morsal Zamani I.',
      designation: 'Founder',
      bio: 'Leading TrustIn Consultancy with extensive expertise in UAE healthcare licensing, dedicated to helping doctors successfully navigate the , DOH and MOH licensing process.',
      image: null
    }
  ];

  const credentials = [
    {
      title: 'UAE Licensing Experts',
      description: 'Our team specializes in DHA, DOH and MOH licensing for doctors, with deep knowledge of DataFlow, Prometric, and UAE healthcare regulations.'
    },
    {
      title: 'Authority Relationships',
      description: 'Established understanding of DHA, DOH, MOH, DataFlow, and Prometric processes for smoother application processing and faster approvals.'
    },
    {
      title: 'Proven Success Rate',
      description: 'Over 500 successful doctor licensing applications across all specialties with a 95% success rate in the UAE market.'
    },
    {
      title: 'Up-to-Date Knowledge',
      description: 'Our team stays current with all UAE regulatory changes, credential tier updates, and licensing requirement modifications.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content slide-up">
            <h1 className="page-title">About TrustIn Consultancy</h1>
            <p className="page-subtitle">
              Your trusted partner in UAE doctor licensing.
              We simplify the complex DHA, DOH and MOH licensing process so you can focus on what matters most - your medical career in the UAE.
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
                At TrustIn Consultancy, we believe that doctors should spend their time preparing for their medical practice,
                not navigating complex UAE licensing bureaucracy. Our mission is to streamline the DHA, DOH and MOH licensing process,
                making it faster, clearer, and less stressful for General Practitioners, Specialists, and Consultants
                seeking to practice medicine across the United Arab Emirates.
              </p>
              <p className="mission-description">
                Based in Ajman Free Zone, we've helped hundreds of doctors from around the world obtain their , DOH and MOH licenses
                and build successful medical careers in the UAE. We combine expert knowledge of DataFlow verification, Prometric examination,
                attestation requirements, and proven consultancy processes to deliver results that meet your timeline and expectations.
              </p>
            </div>
            <div className="mission-visual slide-in-right">
              {/* <div className="mission-image-container">
                <img
                  src="/images/photos/female-doctor-looking-to-camera.png"
                  alt="TrustIn Consultancy Professional"
                  className="mission-image"
                />
              </div> */}
              <Card variant="glass" className="mission-stats-card" 
                // style={{backgroundImage: `url(${""})`, backgroundRepeat:"no-repeat", back}}
              >
                <div className="mission-stat">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Doctors Licensed</p>
                </div>
                <div className="mission-stat">
                  <h3 className="stat-number">95%</h3>
                  <p className="stat-label">Success Rate</p>
                </div>
                <div className="mission-stat">
                  <h3 className="stat-number">All Emirates</h3>
                  <p className="stat-label">DHA, DOH & MOH Coverage</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Dedicated professionals committed to your licensing success
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
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
                  {member.bio && <p className="team-bio">{member.bio}</p>}
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
                <h3 className="differentiator-title">Personalized Consultancy</h3>
                <p className="differentiator-description">
                  Every doctor receives individual attention with a dedicated consultant and a customized licensing strategy
                  based on their credential tier, specialization, and timeline goals.
                </p>
              </div>
              <div className="differentiator-item">
                <div className="differentiator-number">02</div>
                <h3 className="differentiator-title">UAE Expertise</h3>
                <p className="differentiator-description">
                  Our team specializes in DHA, DOH and MOH requirements, DataFlow processes, Prometric preparation,
                  and all UAE regulatory changes, ensuring accurate and compliant applications.
                </p>
              </div>
              <div className="differentiator-item">
                <div className="differentiator-number">03</div>
                <h3 className="differentiator-title">Proven Success</h3>
                <p className="differentiator-description">
                  95% success rate and realistic 3-6 month timeline demonstrate our
                  effectiveness in guiding doctors through the complex UAE licensing journey.
                </p>
              </div>
              <div className="differentiator-item">
                <div className="differentiator-number">04</div>
                <h3 className="differentiator-title">Complete Support</h3>
                <p className="differentiator-description">
                  From initial consultation through license issuance and beyond - we're here for license renewals,
                  additional emirates, and ongoing compliance support.
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
            <h2 className="about-cta-title">Experience the TrustIn Consultancy Difference</h2>
            <p className="about-cta-subtitle">
              Join hundreds of satisfied doctors who chose TrustIn Consultancy for their UAE DHA, DOH and MOH licensing needs.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Start Your Consultation
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
