/**
 * Privacy Policy Page Component
 * Displays company's privacy policy and data protection practices
 */

import React, { useEffect } from 'react';
import { FaShieldAlt, FaInfoCircle, FaUserLock, FaShareAlt, FaFileContract } from 'react-icons/fa';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
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

  return (
    <div className="privacy-policy-page">
      {/* Page Header */}
      <section className="privacy-header">
        <div className="container">
          <div className="privacy-header-content">
            <FaShieldAlt className="privacy-main-icon" />
            <h1 className="page-title">Privacy Policy</h1>
            <p className="last-updated">Last updated: 13/01/2026</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section privacy-intro-section">
        <div className="container">
          <div className="privacy-intro fade-in">
            <p className="intro-text">
              SJ Polyzen Industries ("we", "our", "us") respects your privacy and is committed 
              to protecting the personal information you share with us through our website.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content Sections */}
      <section className="section privacy-content-section">
        <div className="container">
          {/* Information We Collect */}
          <div className="privacy-block fade-in">
            <div className="privacy-block-header">
              <FaInfoCircle className="privacy-icon" />
              <h2>Information We Collect</h2>
            </div>
            <div className="privacy-block-content">
              <p>We may collect limited personal information such as:</p>
              <ul className="privacy-list">
                <li>Name, company name</li>
                <li>Phone number, email address</li>
                <li>Enquiry details submitted via forms or email</li>
              </ul>
              <p className="note-text">
                We do not collect sensitive personal data such as financial or biometric 
                information through this website.
              </p>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="privacy-block fade-in">
            <div className="privacy-block-header">
              <FaFileContract className="privacy-icon" />
              <h2>How We Use Information</h2>
            </div>
            <div className="privacy-block-content">
              <p>Information collected is used only to:</p>
              <ul className="privacy-list">
                <li>Respond to enquiries and requests</li>
                <li>Provide product or service information</li>
                <li>Improve our website and communication</li>
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="privacy-block fade-in">
            <div className="privacy-block-header">
              <FaShareAlt className="privacy-icon" />
              <h2>Data Sharing</h2>
            </div>
            <div className="privacy-block-content">
              <p>
                We do not sell, rent, or trade your personal information. Data may be shared 
                only if required by law or to protect our legal rights.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="privacy-block fade-in">
            <div className="privacy-block-header">
              <FaUserLock className="privacy-icon" />
              <h2>Data Security</h2>
            </div>
            <div className="privacy-block-content">
              <p>
                We take reasonable measures to protect your information from unauthorized 
                access, misuse, or disclosure.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="privacy-block fade-in">
            <div className="privacy-block-header">
              <FaInfoCircle className="privacy-icon" />
              <h2>Third-Party Links</h2>
            </div>
            <div className="privacy-block-content">
              <p>
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices of those sites.
              </p>
            </div>
          </div>

          {/* Your Consent */}
          <div className="privacy-block fade-in">
            <div className="privacy-block-header">
              <FaFileContract className="privacy-icon" />
              <h2>Your Consent</h2>
            </div>
            <div className="privacy-block-content">
              <p>By using our website, you consent to this Privacy Policy.</p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="privacy-block fade-in">
            <div className="privacy-block-header">
              <FaInfoCircle className="privacy-icon" />
              <h2>Changes to This Policy</h2>
            </div>
            <div className="privacy-block-content">
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted 
                on this page.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="privacy-contact fade-in">
            <h2>Contact Us</h2>
            <p>For any questions regarding this Privacy Policy, please contact:</p>
            <div className="contact-details">
              <p className="company-name">SJ Polyzen Industries</p>
              <p>📍 Sanwer, Indore</p>
              <p>📧 sourabhsj1970@gmail.com</p>
              <p>📞 8719824566</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
