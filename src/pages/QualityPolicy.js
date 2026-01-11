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
    {
      title: 'Controlled Processing',
      description: 'Disciplined sourcing, blending, and processing to ensure reliable injection-grade performance.'
    },
    {
      title: 'Batch-Wise Checks',
      description: 'Each batch is verified for visual consistency and stable melt behaviour before dispatch.'
    },
    {
      title: 'Selected Raw Materials',
      description: 'Carefully chosen PPCP scrap suitable for injection moulding with controlled filler levels.'
    },
    {
      title: 'Traceability',
      description: 'Every batch is identified and documented for accountability and review.'
    },
    {
      title: 'Continuous Improvement',
      description: 'Customer feedback is used to refine quality and process consistency.'
    }
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
              Committed to Consistent Performance
            </p>
          </div>

          {/* Quality Points Grid */}
          <div className="quality-points-container fade-in">
            {qualityPoints.map((point, index) => (
              <div key={index} className="quality-point-card">
                <div className="quality-point-icon">
                  <FaCheckCircle />
                </div>
                <div className="quality-point-content">
                  <h4 className="quality-point-title">{point.title}</h4>
                  <p className="quality-point-text">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Quality Information */}
          <div className="quality-additional-info fade-in">
            <h3>Our Quality Assurance Process</h3>
            <div className="process-grid">
              <div className="process-card">
                <div className="process-number">1</div>
                <h4>Raw Material Evaluation</h4>
                <p>
                  Incoming PPCP scrap is checked for type, contamination, moisture, 
                  and injection suitability
                </p>
              </div>
              
              <div className="process-card">
                <div className="process-number">2</div>
                <h4>Controlled Processing</h4>
                <p>
                  Blending and processing with controlled filler levels and proper 
                  filtration for consistent melt flow
                </p>
              </div>
              
              <div className="process-card">
                <div className="process-number">3</div>
                <h4>Batch-wise Quality Checks</h4>
                <p>
                  Finished granules verified for visual uniformity, melt behaviour, 
                  and processing stability before dispatch
                </p>
              </div>
              
              <div className="process-card">
                <div className="process-number">4</div>
                <h4>Batch Identification</h4>
                <p>
                  Each batch is identified and documented to ensure traceability 
                  and accountability
                </p>
              </div>

              <div className="process-card">
                <div className="process-number">5</div>
                <h4>Continuous Improvement</h4>
                <p>
                  Customer feedback and production observations used to continuously 
                  refine quality and consistency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;