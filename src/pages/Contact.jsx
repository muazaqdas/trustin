import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdCheck } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { useTranslation } from '../hooks/useTranslation';
import { emailJSConfig, isEmailJSConfigured } from '../config/emailjs';
import './Contact.css';

const Contact = () => {
  // Get translated content
  const { t } = useTranslation();
  const contactContent = t.contactContent.contactContent;

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
  const [submissionError, setSubmissionError] = useState('');

  // Icon mapping for contact info
  const iconMap = {
    MdEmail: <MdEmail />,
    MdPhone: <MdPhone />,
    MdLocationOn: <MdLocationOn />,
    MdAccessTime: <MdAccessTime />
  };

  const contactInfo = contactContent.contactInfo.map(item => ({
    ...item,
    icon: iconMap[item.iconName]
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    // Clear submission error when user makes changes
    if (submissionError) {
      setSubmissionError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = contactContent.form.errors.firstName;
    if (!formData.lastName.trim()) newErrors.lastName = contactContent.form.errors.lastName;

    if (!formData.email.trim()) {
      newErrors.email = contactContent.form.errors.email.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = contactContent.form.errors.email.invalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = contactContent.form.errors.phone.required;
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = contactContent.form.errors.phone.invalid;
    }

    if (!formData.profession || formData.profession === contactContent.form.fields.profession.options[0]) {
      newErrors.profession = contactContent.form.errors.profession;
    }

    if (!formData.state.trim()) newErrors.state = contactContent.form.errors.state;

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous submission errors
    setSubmissionError('');

    // Validate form fields
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      setSubmissionError(
        contactContent.form.errors.submission?.serviceError ||
        'Email service is not configured. Please contact us directly.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_firstName: formData.firstName,
        from_lastName: formData.lastName,
        from_email: formData.email,
        from_phone: formData.phone,
        from_profession: formData.profession,
        from_state: formData.state,
        message: formData.message || 'No message provided',
        // Additional helpful info
        to_name: 'TrustIn Team',
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        templateParams,
        emailJSConfig.publicKey
      );

      if (response.status === 200) {
        // Success
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
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);

      // Handle different types of errors
      let errorMessage = contactContent.form.errors.submission?.generic ||
        'Failed to send message. Please try again or contact us directly.';

      if (error.text) {
        // EmailJS specific errors
        if (error.text.includes('rate limit')) {
          errorMessage = contactContent.form.errors.submission?.rateLimited || errorMessage;
        } else if (error.text.includes('Invalid')) {
          errorMessage = contactContent.form.errors.submission?.serviceError || errorMessage;
        }
      } else if (error.message) {
        // Network or other errors
        if (error.message.includes('network') || error.message.includes('Failed to fetch')) {
          errorMessage = contactContent.form.errors.submission?.network || errorMessage;
        } else if (error.message.includes('timeout')) {
          errorMessage = contactContent.form.errors.submission?.timeout || errorMessage;
        }
      }

      setSubmissionError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content slide-up">
            <h1 className="page-title">{contactContent.hero.title}</h1>
            <p className="page-subtitle">
              {contactContent.hero.subtitle}
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
              {
                !isSubmitted && 
                <>
                  <h2 className="form-title">{contactContent.form.title}</h2>
                  <p className="form-description">
                    {contactContent.form.description}
                  </p>
                </>
              }

                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon"><MdCheck /></div>
                    <h3 className="success-title">{contactContent.form.successMessage.title}</h3>
                    <p className="success-text">
                      {contactContent.form.successMessage.text}
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                    >
                      {contactContent.form.successMessage.buttonText}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <Input
                        label={contactContent.form.fields.firstName.label}
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        required={contactContent.form.fields.firstName.required}
                        placeholder={contactContent.form.fields.firstName.placeholder}
                      />
                      <Input
                        label={contactContent.form.fields.lastName.label}
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        required={contactContent.form.fields.lastName.required}
                        placeholder={contactContent.form.fields.lastName.placeholder}
                      />
                    </div>

                    <Input
                      type="email"
                      label={contactContent.form.fields.email.label}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required={contactContent.form.fields.email.required}
                      placeholder={contactContent.form.fields.email.placeholder}
                    />

                    <Input
                      type="tel"
                      label={contactContent.form.fields.phone.label}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      required={contactContent.form.fields.phone.required}
                      placeholder={contactContent.form.fields.phone.placeholder}
                    />

                    <div className="input-wrapper">
                      <label htmlFor="profession" className="input-label">
                        {contactContent.form.fields.profession.label}
                        {contactContent.form.fields.profession.required && <span className="input-required">*</span>}
                      </label>
                      <select
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className={`input ${errors.profession ? 'input-error' : ''}`}
                        required={contactContent.form.fields.profession.required}
                      >
                        {contactContent.form.fields.profession.options.map((prof, index) => (
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
                      label={contactContent.form.fields.state.label}
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      error={errors.state}
                      required={contactContent.form.fields.state.required}
                      placeholder={contactContent.form.fields.state.placeholder}
                    />

                    <div className="input-wrapper">
                      <label htmlFor="message" className="input-label">
                        {contactContent.form.fields.message.label}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="input"
                        placeholder={contactContent.form.fields.message.placeholder}
                        rows="5"
                      />
                    </div>

                    <div className="form-privacy">
                      <p>
                        {contactContent.form.privacy}
                      </p>
                    </div>

                    {submissionError && (
                      <div className="submission-error-message">
                        {submissionError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      className={isSubmitting ? 'btn-loading' : ''}
                    >
                      {isSubmitting ? contactContent.form.buttons.submitting : contactContent.form.buttons.submit}
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
                <h3 className="guarantee-title">{contactContent.guarantee.title}</h3>
                <ul className="guarantee-list">
                  {contactContent.guarantee.items.map((item, index) => (
                    <li key={index}><MdCheck /> {item}</li>
                  ))}
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
