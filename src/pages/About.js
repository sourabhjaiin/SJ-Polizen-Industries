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
            Recycled PPCP Injection-Grade Granules Manufacturer
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section about-content">
        <div className="container">
          <div className="content-block fade-in">
            <p className="large-text">
              SJ Polyzen Industries is a manufacturer and supplier of recycled PPCP 
              (Polypropylene Copolymer) injection-grade granules, focused on delivering 
              consistent and dependable material for everyday injection moulding applications. 
              We develop practical grades suited for products such as crates, dustbins, chairs, 
              and general household and industrial moulded items, with an emphasis on stable 
              melt flow and predictable machine performance.
            </p>
          </div>

          <div className="content-block fade-in">
            <p className="large-text">
              Established in 2024 and located in Sanwer, Indore, SJ Polyzen Industries operates 
              with a process-driven approach centered on controlled sourcing, disciplined 
              processing, and batch-wise quality checks. Our objective is to support injection 
              moulders with reliable supply, reduced rejection, and long-term consistency, 
              while contributing responsibly to the circular plastics economy.
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
                    To manufacture consistent and reliable recycled PPCP injection-grade 
                    granules that help injection moulders achieve stable production with 
                    minimal rejection
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To promote responsible plastic recycling by converting PPCP waste into 
                    dependable raw material through disciplined processes and continuous improvement
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
                    To become a trusted recycled PPCP granules supplier in India, known for 
                    consistency, transparency, and long-term reliability
                  </span>
                </li>
                <li>
                  <FaCheckCircle className="list-icon" />
                  <span>
                    To expand into higher-consistency recycled grades while setting practical 
                    benchmarks for quality and sustainability in the plastics industry
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
              <div className="stat-number">2024</div>
              <div className="stat-label">Established</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Sq. Ft. Facility</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Skilled Workers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
