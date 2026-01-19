/**
 * Contact Page Component
 * Three-container layout for address, email, and phone
 * Contact form with email sending functionality using EmailJS
 * Real-time form validation with error handling
 */

import React, { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaInstagram, 
  FaLinkedin,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    mobile: '',
    message: ''
  });

  // Form validation errors
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  /**
   * Intersection Observer for fade-in animations
   */
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /**
   * Handle input changes with real-time validation
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Validate individual field
   */
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      
      case 'city':
        return value.trim().length < 2 ? 'City is required' : '';
      
      case 'mobile':
        const phoneRegex = /^[0-9]{10}$/;
        return !phoneRegex.test(value) ? 'Mobile number must be exactly 10 digits' : '';
      
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      
      default:
        return '';
    }
  };

  /**
   * Validate entire form
   */
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  /**
   * Handle form submission
   * IMPORTANT: Email sending functionality using EmailJS
   * Sends email to: jainsourabh2@johndeere.com
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Configure EmailJS with your credentials
      // Sign up at https://www.emailjs.com/
      // Create a service, template, and get your public key
      
      // EmailJS configuration (Replace with your actual credentials)
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Prepare email parameters
      const emailParams = {
        to_email: 'jainsourabh2@johndeere.com',
        from_name: formData.name,
        from_email: formData.email,
        city: formData.city,
        mobile: formData.mobile,
        message: formData.message
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, emailParams, publicKey);

      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        city: '',
        mobile: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Check if form is valid
   */
  const isFormValid = () => {
    return Object.keys(formData).every(key => {
      return formData[key].trim() !== '' && !validateField(key, formData[key]);
    });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd Love to Hear From You
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid fade-in">
            {/* Container 1: Address */}
            <div className="contact-info-card">
              <div className="info-card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Address</h3>
              <div className="info-card-content">
                <p>SJ Polyzen Industries</p>
                <p>399 LIG Mukharjee Nagar</p>
                <p>Dewar, Madhya Pradesh</p>
                <p>PIN: 455001, India</p>
              </div>
            </div>

            {/* Container 2: Email */}
            <div className="contact-info-card">
              <div className="info-card-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <div className="info-card-content">
                <a href="mailto:sjpolyzen@gmail.com">sjpolyzen@gmail.com</a>
              </div>
            </div>

            {/* Container 3: Phone */}
            <div className="contact-info-card">
              <div className="info-card-icon">
                <FaPhoneAlt />
              </div>
              <h3>Phone</h3>
              <div className="info-card-content">
                <a href="tel:+918719824566">+91 8719824566</a>
                <a href="tel:+919628517463">+91 9628517463</a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="social-media-section fade-in">
            <h3>Connect With Us</h3>
            <div className="social-links">
              {/* TODO: Add actual Instagram and LinkedIn URLs */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="form-container fade-in">
            <h2 className="form-heading">Send Us a Message</h2>
            <p className="form-subheading">
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <span className="error-message">
                    <FaExclamationCircle /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <span className="error-message">
                    <FaExclamationCircle /> {errors.email}
                  </span>
                )}
              </div>

              {/* City Field */}
              <div className="form-group">
                <label htmlFor="city">City <span className="required">*</span></label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? 'error' : ''}
                  placeholder="Enter your city"
                />
                {errors.city && (
                  <span className="error-message">
                    <FaExclamationCircle /> {errors.city}
                  </span>
                )}
              </div>

              {/* Mobile Field */}
              <div className="form-group">
                <label htmlFor="mobile">Mobile <span className="required">*</span></label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={errors.mobile ? 'error' : ''}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                />
                {errors.mobile && (
                  <span className="error-message">
                    <FaExclamationCircle /> {errors.mobile}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group full-width">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
                {errors.message && (
                  <span className="error-message">
                    <FaExclamationCircle /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={!isFormValid() || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-small"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <FaCheckCircle /> Thank you! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <FaExclamationCircle /> Oops! Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;