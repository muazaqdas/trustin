import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdCheck } from 'react-icons/md';
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
    'Select your level',
    'General Practitioner (GP)',
    'Dentist',
    'Specialist - Internal Medicine',
    'Specialist - Pediatrics',
    'Specialist - Surgery',
    'Specialist - Cardiology',
    'Specialist - Radiology',
    'Specialist - Anesthesiology',
    'Specialist - Other',
    'Consultant - Internal Medicine',
    'Consultant - Surgery',
    'Consultant - Other Specialty',
    'Other Medical Professional'
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

    if (!formData.profession || formData.profession === 'Select your level') {
      newErrors.profession = 'Please select your medical level';
    }

    if (!formData.state.trim()) newErrors.state = 'Licensing authority is required';

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
      icon: <MdEmail />,
      title: 'Email Us',
      content: 'info@trustinconsultancy.com',
      link: 'mailto:info@trustinconsultancy.com'
    },
    {
      icon: <MdPhone />,
      title: 'Call Us',
      content: '+971 58 8121 004',
      link: 'tel:+971588121004'
    },
    {
      icon: <MdLocationOn />,
      title: 'Visit Us',
      content: 'Ajman Free Zone C1 Building\nOffice - C1 - 1F\nUnited Arab Emirates',
      link: null
    },
    {
      icon: <MdAccessTime />,
      title: 'Business Hours',
      content: 'Sunday - Thursday: 9AM - 6PM GST\nSaturday: 10AM - 2PM GST',
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content slide-up">
            <h1 className="page-title">Start Your UAE Licensing Journey</h1>
            <p className="page-subtitle">
              Ready to begin your DHA or MOH licensing process? Fill out the form below and our consultancy team
              will contact you within 24 hours with a personalized package recommendation and timeline.
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
                <h2 className="form-title">Start Your Consultation</h2>
                <p className="form-description">
                  Complete the form below for a free consultation, package recommendation, and personalized timeline estimate.
                </p>

                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon"><MdCheck /></div>
                    <h3 className="success-title">Thank You!</h3>
                    <p className="success-text">
                      Your consultation request has been received. Our team will contact you within 24 hours
                      to discuss your DHA/MOH licensing needs, recommend a package, and provide a timeline estimate.
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Request
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
                        Medical Level & Specialization<span className="input-required">*</span>
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
                      label="Target Licensing Authority"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      error={errors.state}
                      required
                      placeholder="e.g., DHA (Dubai) or MOH (Other Emirates)"
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
                        placeholder="Tell us about your credentials tier, current location, timeline expectations, or any questions..."
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
                      {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
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
                  <li><MdCheck /> 24-hour response time</li>
                  <li><MdCheck /> Free initial consultation</li>
                  <li><MdCheck /> Transparent package pricing</li>
                  <li><MdCheck /> No hidden fees</li>
                  <li><MdCheck /> 95% success rate</li>
                  <li><MdCheck /> Personalized consultant support</li>
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
