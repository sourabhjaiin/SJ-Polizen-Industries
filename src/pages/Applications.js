/**
 * Applications Page Component
 * Interactive gallery showcasing various applications of products
 * Responsive grid layout with hover effects and image zoom
 */

import React, { useEffect } from 'react';
import './Applications.css';

const Applications = () => {
  /**
   * Intersection Observer for staggered fade-in animations
   */
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100); // Staggered animation
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Applications data
  const applications = [
    { id: 1, name: 'Fishing Nets', description: 'Durable nets for commercial and recreational fishing' },
    { id: 2, name: 'Geo-textiles', description: 'Soil stabilization and erosion control solutions' },
    { id: 3, name: 'PP Carpet Mats', description: 'Heavy-duty carpets for industrial and commercial use' },
    { id: 4, name: 'Agriculture Twines', description: 'Strong binding twines for agricultural applications' },
    { id: 5, name: 'Safety Nets', description: 'Protective netting for construction and safety' },
    { id: 6, name: 'Construction Ropes', description: 'High-strength ropes for construction projects' },
    { id: 7, name: 'Industrial Slings', description: 'Heavy-duty lifting and cargo securing slings' },
    { id: 8, name: 'Packaging Materials', description: 'Secure packaging solutions for various industries' },
    { id: 9, name: 'Sutli & Ropes', description: 'Versatile cords for binding and bundling' },
    { id: 10, name: 'Tarpaulin Fabrics', description: 'Weather-resistant covering materials' }
  ];

  return (
    <div className="applications-page">
      {/* Page Header */}
      <section className="applications-header">
        <div className="container">
          <h1 className="page-title">Applications of Our Products</h1>
          <p className="page-subtitle">
            Serving Diverse Industries with Tailored Solutions
          </p>
        </div>
      </section>

      {/* Applications Gallery */}
      <section className="section applications-section">
        <div className="container">
          <div className="applications-grid">
            {applications.map((app, index) => (
              <div 
                key={app.id} 
                className="application-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* TODO: Replace with actual application images */}
                <div className="application-image">
                  <div className="image-overlay">
                    <span className="overlay-text">Learn More</span>
                  </div>
                  <div className="image-placeholder">
                    <span>{app.name}</span>
                  </div>
                </div>
                
                <div className="application-info">
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="applications-info-section fade-in">
            <h2>Custom Solutions for Your Industry</h2>
            <p>
              Our polypropylene products are engineered to meet the specific demands 
              of various industries. Whether you need custom colors, specific tensile 
              strengths, or specialized packaging, we work closely with you to deliver 
              products that perfectly match your requirements.
            </p>
            <div className="info-features">
              <div className="feature-box">
                <span className="feature-icon">🎨</span>
                <h4>Custom Colors</h4>
                <p>Wide range of color options available</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon">💪</span>
                <h4>Variable Strength</h4>
                <p>Tailored tensile strength specifications</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon">📦</span>
                <h4>Flexible Packaging</h4>
                <p>Custom packaging to suit your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;
