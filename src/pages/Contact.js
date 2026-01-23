/**
 * Contact Page Component
 * Three-container layout for address, email, and phone
 * Contact form with email sending functionality using EmailJS
 * Real-time form validation with error handling
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaInstagram, 
  FaLinkedin,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  // Form ref for EmailJS
  const formRef = useRef();
  
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
    
    // Map EmailJS form field names to our state field names
    const fieldMap = {
      'from_name': 'name',
      'from_email': 'email',
      'city': 'city',
      'mobile': 'mobile',
      'message': 'message'
    };
    
    const stateField = fieldMap[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateField]: value
    }));

    // Clear error for this field
    if (errors[stateField]) {
      setErrors(prev => ({
        ...prev,
        [stateField]: ''
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
   * Handle form submission using sendForm (more reliable)
   * IMPORTANT: Email sending functionality using EmailJS
   * Sends email to: sourabhsj1970@gmail.com
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = 'service_8t7oc9m';
    const templateId = 'template_xyezwzc';
    const publicKey = 'uEat1G4ulm-5MQ7rc';

    console.log('Attempting to send email using sendForm...');

    // Use sendForm instead of send - it's more reliable
    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (response) => {
          console.log('✅ Email sent successfully:', response);
          
          // Success
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            city: '',
            mobile: '',
            message: ''
          });
          setIsSubmitting(false);

          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('❌ Error sending email:', error);
          
          // More detailed error logging
          if (error.status === 0) {
            console.error('Network error - request blocked. Possible causes:');
            console.error('1. Browser extension (ad blocker) is blocking the request');
            console.error('2. Firewall/antivirus blocking api.emailjs.com');
            console.error('3. Invalid EmailJS credentials');
            console.error('4. Network connectivity issue');
            alert('Email sending failed due to network blocking.\n\nPlease try:\n1. Disable ad blockers/privacy extensions\n2. Try in incognito mode\n3. Check if api.emailjs.com is accessible\n4. Verify EmailJS credentials in dashboard');
          } else {
            console.error('Error details:', error.text || error.message);
            alert(`Failed to send email: ${error.text || error.message || 'Unknown error'}`);
          }
          
          setSubmitStatus('error');
          setIsSubmitting(false);
          
          // Clear error message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
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
                <FaPhone />
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

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              {/* Hidden field for recipient email */}
              <input type="hidden" name="to_email" value="sourabhsj1970@gmail.com" />
              
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
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
                  name="from_email"
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