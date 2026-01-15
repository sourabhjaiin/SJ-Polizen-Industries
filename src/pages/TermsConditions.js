/**
 * Terms & Conditions Page Component
 * Displays website terms of use and legal information
 */

import React, { useEffect } from 'react';
import { FaFileContract, FaGlobe, FaShoppingCart, FaCopyright, FaShieldAlt, FaGavel, FaExclamationTriangle } from 'react-icons/fa';
import './TermsConditions.css';

const TermsConditions = () => {
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
    <div className="terms-conditions-page">
      {/* Page Header */}
      <section className="terms-header">
        <div className="container">
          <div className="terms-header-content">
            <FaFileContract className="terms-main-icon" />
            <h1 className="page-title">Terms & Conditions</h1>
            <p className="last-updated">Last updated: 13/01/2026</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section terms-intro-section">
        <div className="container">
          <div className="terms-intro fade-in">
            <p className="intro-text">
              By accessing or using the SJ Polyzen Industries website, you agree to the following 
              terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content Sections */}
      <section className="section terms-content-section">
        <div className="container">
          {/* Use of Website */}
          <div className="terms-block fade-in">
            <div className="terms-block-header">
              <FaGlobe className="terms-icon" />
              <h2>Use of Website</h2>
            </div>
            <div className="terms-block-content">
              <p>
                This website is intended to provide general information about our products and 
                services. Content is subject to change without notice.
              </p>
            </div>
          </div>

          {/* Product Information */}
          <div className="terms-block fade-in">
            <div className="terms-block-header">
              <FaShoppingCart className="terms-icon" />
              <h2>Product Information</h2>
            </div>
            <div className="terms-block-content">
              <p>
                All product descriptions, specifications, prices, and availability mentioned on 
                the website are indicative and may vary based on grade, volume, and market 
                conditions. Final details are confirmed at the time of order.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="terms-block fade-in">
            <div className="terms-block-header">
              <FaCopyright className="terms-icon" />
              <h2>Intellectual Property</h2>
            </div>
            <div className="terms-block-content">
              <p>
                All content on this website—including text, images, logos, and graphics—is the 
                property of SJ Polyzen Industries and may not be copied or used without prior 
                written permission.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="terms-block fade-in">
            <div className="terms-block-header">
              <FaShieldAlt className="terms-icon" />
              <h2>Limitation of Liability</h2>
            </div>
            <div className="terms-block-content">
              <p>
                We are not liable for any direct or indirect damages arising from the use of 
                this website or reliance on its content.
              </p>
            </div>
          </div>

          {/* No Warranty */}
          <div className="terms-block fade-in">
            <div className="terms-block-header">
              <FaExclamationTriangle className="terms-icon" />
              <h2>No Warranty</h2>
            </div>
            <div className="terms-block-content">
              <p>
                Information on this website is provided "as is" without any warranties, express 
                or implied.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="terms-block fade-in">
            <div className="terms-block-header">
              <FaGavel className="terms-icon" />
              <h2>Governing Law</h2>
            </div>
            <div className="terms-block-content">
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to 
                the jurisdiction of courts in Indore, Madhya Pradesh.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="terms-block fade-in">
            <div className="terms-block-header">
              <FaFileContract className="terms-icon" />
              <h2>Changes to Terms</h2>
            </div>
            <div className="terms-block-content">
              <p>
                SJ Polyzen Industries reserves the right to modify these Terms & Conditions at 
                any time. Continued use of the website implies acceptance of updated terms.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="terms-contact fade-in">
            <h2>Contact</h2>
            <p>
              For questions regarding these Terms & Conditions, please contact us using the 
              details provided on the website.
            </p>
            <div className="contact-signature">
              <p className="signature-text">Thanks and Regards</p>
              <p className="signature-name">Sourabh Jain</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
