/**
 * About Us Page Component
 * Contains company overview, mission, and vision
 * Two-container layout with side-by-side mission and vision cards
 */

import React, { useEffect } from 'react';
import { FaCheckCircle, FaEye, FaBullseye } from 'react-icons/fa';
import './About.css';

const About = () => {
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
    <div className="about-page">
      {/* Page Header */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">About SJ Polyzen Industries</h1>
          <p className="page-subtitle">
            Building Excellence in Polypropylene Manufacturing Since 2015
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section about-content">
        <div className="container">
          <div className="content-block fade-in">
            <p className="large-text">
              Founded with a vision to revolutionize the polypropylene yarn industry in 
              central India, SJ Polyzen Industries has grown from a small-scale unit to a 
              recognized name in manufacturing excellence. Our journey began with a commitment 
              to quality, innovation, and customer satisfaction - principles that continue to 
              guide us today.
            </p>
          </div>

          <div className="content-block fade-in">
            <p className="large-text">
              Located in the industrial heartland of Dewar, Madhya Pradesh, our facility spans 
              over 50,000 square feet and houses cutting-edge extrusion and spinning machinery. 
              We employ over 100 skilled workers and technicians who bring craftsmanship and 
              precision to every product. Our strategic location allows us to efficiently serve 
              clients across India while maintaining cost-effective operations.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="about-image-container fade-in">
            {/* TODO: Replace with actual factory/team image */}
            <div className="placeholder-large-image">
              <span>Factory & Team Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission Container */}
            <div className="mission-vision-card mission-card fade-in">
              <div className="card-icon">
                <FaBullseye />
              </div>
              <h2>Our Mission</h2>
              <ul className="mission-vision-list">
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To manufacture world-class polypropylene products that exceed 
                    customer expectations
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To maintain sustainable and environmentally responsible 
                    manufacturing practices
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To continuously innovate and improve our product range and processes
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision Container */}
            <div className="mission-vision-card vision-card fade-in">
              <div className="card-icon">
                <FaEye />
              </div>
              <h2>Our Vision</h2>
              <ul className="mission-vision-list">
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To become the most trusted polypropylene manufacturer in India by 2030
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To expand our product portfolio and serve new markets globally
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To set industry benchmarks for quality, innovation, and customer service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section (Optional Enhancement) */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid fade-in">
            <div className="stat-card">
              <div className="stat-number">2015</div>
              <div className="stat-label">Established</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Sq. Ft. Facility</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Skilled Workers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
