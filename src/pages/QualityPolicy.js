/**
 * Quality Policy Page Component
 * Displays company's commitment to quality standards
 * Features hero image and quality policy bullet points
 */

import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './QualityPolicy.css';

const QualityPolicy = () => {
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

  // Quality policy points
  const qualityPoints = [
    'We adhere to ISO 9001:2015 quality management standards in all our manufacturing processes',
    'Every batch undergoes rigorous testing for tensile strength, elongation, and uniformity before dispatch',
    'We source only virgin-grade raw materials from certified suppliers to ensure product consistency',
    'Our quality control team conducts regular audits and maintains detailed documentation for traceability',
    'Continuous training programs ensure our workforce stays updated with latest quality protocols and best practices'
  ];

  return (
    <div className="quality-policy-page">
      {/* Hero Image Section */}
      <section className="quality-hero">
        {/* TODO: Replace with actual factory/manufacturing process image */}
        <div className="quality-hero-overlay">
          <div className="quality-hero-content">
            <h1 className="quality-hero-title">Quality is Our Promise</h1>
          </div>
        </div>
      </section>

      {/* Quality Policy Content */}
      <section className="section quality-content-section">
        <div className="container">
          <div className="quality-intro fade-in">
            <h2 className="section-title">Our Quality Policy</h2>
            <p className="section-subtitle">
              Committed to Excellence at Every Step
            </p>
          </div>

          {/* Quality Points Grid */}
          <div className="quality-points-container fade-in">
            {qualityPoints.map((point, index) => (
              <div key={index} className="quality-point-card">
                <div className="quality-point-icon">
                  <FaCheckCircle />
                </div>
                <p className="quality-point-text">{point}</p>
              </div>
            ))}
          </div>

          {/* Additional Quality Information */}
          <div className="quality-additional-info fade-in">
            <h3>Our Quality Assurance Process</h3>
            <div className="process-grid">
              <div className="process-card">
                <div className="process-number">1</div>
                <h4>Raw Material Inspection</h4>
                <p>
                  Stringent quality checks on all incoming raw materials from 
                  certified suppliers
                </p>
              </div>
              
              <div className="process-card">
                <div className="process-number">2</div>
                <h4>In-Process Monitoring</h4>
                <p>
                  Continuous monitoring during production to maintain consistent 
                  quality standards
                </p>
              </div>
              
              <div className="process-card">
                <div className="process-number">3</div>
                <h4>Final Product Testing</h4>
                <p>
                  Comprehensive testing of finished products including tensile 
                  strength and durability
                </p>
              </div>
              
              <div className="process-card">
                <div className="process-number">4</div>
                <h4>Documentation & Traceability</h4>
                <p>
                  Complete documentation of all quality parameters for full 
                  product traceability
                </p>
              </div>
            </div>
          </div>

          {/* Quality Certifications */}
          <div className="quality-certifications fade-in">
            <h3>Certifications & Standards</h3>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="certification-badge">ISO</div>
                <h4>ISO 9001:2015</h4>
                <p>Quality Management Systems</p>
              </div>
              {/* Add more certifications as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;