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
    { id: 1, name: 'Crates & Pallets', description: 'Durable injection-moulded crates and pallets for logistics, storage, and industrial handling.' },
    { id: 2, name: 'Dustbins & Waste Management Products', description: 'Injection-moulded bins and containers designed for municipal, commercial, and industrial use.' },
    { id: 3, name: 'Chairs & Furniture Components', description: 'Chair bases, legs, wheels, and structural components requiring good impact strength and durability.' },
    { id: 4, name: 'Household Utility Products', description: 'Buckets, tubs, containers, and general household moulded items for daily use.' },
    { id: 5, name: 'Industrial Injection Moulded Parts', description: 'General-purpose industrial components where consistent processing and cost efficiency are critical.' },
    { id: 6, name: 'Storage Boxes & Containers', description: 'Injection-moulded storage solutions used in homes, warehouses, and factories.' },
    { id: 7, name: 'Automotive Non-Critical Components', description: 'Non-load bearing and interior plastic parts where recycled PPCP is suitable (selective use).' },
    { id: 8, name: 'Custom Injection Moulded Applications', description: 'Application-specific moulded products developed in consultation with customer requirements.' }
  ];

  return (
    <div className="applications-page">
      {/* Page Header */}
      <section className="applications-header">
        <div className="container">
          <h1 className="page-title">Applications of Our Products</h1>
          <p className="page-subtitle">
            Supporting Everyday Injection Moulding Applications
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
            <h2>Custom Solutions for Injection Moulding</h2>
            <p>
              Our recycled PPCP granules are tailored to meet the practical needs of 
              injection moulders, with flexibility in grade, appearance, and supply.
            </p>
            <div className="info-features">
              <div className="feature-box">
                <span className="feature-icon">🎨</span>
                <h4>Colour Options</h4>
                <p>Black and select application-specific colours available on trial approval.</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon">⚙️</span>
                <h4>Application-Focused Grades</h4>
                <p>Material tuned for flow behaviour, impact performance, and stable processing.</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon">📦</span>
                <h4>Flexible Supply</h4>
                <p>Packaging and order quantities adjusted to suit production requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;
