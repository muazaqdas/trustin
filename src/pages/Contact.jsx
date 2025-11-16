import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
    state: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const professions = [
    'Select your profession',
    'Physician (MD/DO)',
    'Registered Nurse (RN)',
    'Licensed Practical Nurse (LPN)',
    'Nurse Practitioner (NP)',
    'Physician Assistant (PA)',
    'Physical Therapist (PT)',
    'Occupational Therapist (OT)',
    'Pharmacist',
    'Dentist',
    'Psychologist',
    'Social Worker',
    'Other Healthcare Professional'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.profession || formData.profession === 'Select your profession') {
      newErrors.profession = 'Please select your profession';
    }

    if (!formData.state.trim()) newErrors.state = 'Target state is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        profession: '',
        state: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      content: 'info@trustin.com',
      link: 'mailto:info@trustin.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      content: '123 Healthcare Plaza, Suite 100\nMedical District, State 12345',
      link: null
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      content: 'Monday - Friday: 8AM - 6PM EST\nSaturday: 9AM - 2PM EST',
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content slide-up">
            <h1 className="page-title">Get Started Today</h1>
            <p className="page-subtitle">
              Ready to simplify your licensing journey? Fill out the form below and our team
              will contact you within 24 hours with a personalized licensing strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper slide-in-left">
              <Card variant="default" className="contact-form-card">
                <h2 className="form-title">Start Your Application</h2>
                <p className="form-description">
                  Complete the form below for a free consultation and personalized quote.
                </p>

                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h3 className="success-title">Thank You!</h3>
                    <p className="success-text">
                      Your application has been received. Our team will contact you within 24 hours
                      to discuss your licensing needs and provide a customized quote.
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        required
                        placeholder="John"
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        required
                        placeholder="Doe"
                      />
                    </div>

                    <Input
                      type="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="john.doe@email.com"
                    />

                    <Input
                      type="tel"
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      required
                      placeholder="(234) 567-890"
                    />

                    <div className="input-wrapper">
                      <label htmlFor="profession" className="input-label">
                        Profession<span className="input-required">*</span>
                      </label>
                      <select
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className={`input ${errors.profession ? 'input-error' : ''}`}
                        required
                      >
                        {professions.map((prof, index) => (
                          <option key={index} value={prof}>
                            {prof}
                          </option>
                        ))}
                      </select>
                      {errors.profession && (
                        <span className="input-error-message">{errors.profession}</span>
                      )}
                    </div>

                    <Input
                      label="Target State for Licensing"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      error={errors.state}
                      required
                      placeholder="e.g., California"
                    />

                    <div className="input-wrapper">
                      <label htmlFor="message" className="input-label">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="input"
                        placeholder="Tell us about any specific requirements or questions you have..."
                        rows="5"
                      />
                    </div>

                    <div className="form-privacy">
                      <p>
                        By submitting this form, you agree to our privacy policy.
                        Your information is secure and will never be shared.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      className={isSubmitting ? 'btn-loading' : ''}
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Your Free Consultation'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Information */}
            <div className="contact-info-wrapper slide-in-right">
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <Card key={index} variant="glass" hover className={`contact-info-card stagger-${(index % 2) + 1}`}>
                    <div className="contact-info-icon">{info.icon}</div>
                    <h3 className="contact-info-title">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-info-content link">
                        {info.content}
                      </a>
                    ) : (
                      <p className="contact-info-content">
                        {info.content.split('\n').map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < info.content.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    )}
                  </Card>
                ))}
              </div>

              <Card variant="gradient" className="contact-guarantee-card">
                <h3 className="guarantee-title">Our Commitment to You</h3>
                <ul className="guarantee-list">
                  <li>✓ 24-hour response time</li>
                  <li>✓ Free initial consultation</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ No hidden fees</li>
                  <li>✓ 98% approval rate</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
