/**
 * Home Page Component
 * Contains: Hero Section, Who We Are, Products Preview, Quality Commitment,
 * Contact Brief, and FAQ Section
 * Features parallax effects, animations, and interactive elements
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaRecycle, FaLeaf, FaSeedling, FaWater, FaIndustry, FaHandHoldingHeart } from 'react-icons/fa';
import './Home.css';
import companyImage from '../assets/ind.jpeg'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  /**
   * Intersection Observer for fade-in animations
   * Triggers when elements come into viewport
   */
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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
   * FAQ Toggle Handler
   * Expands/collapses FAQ accordion items
   */
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: "When was SJ Polyzen established?",
      answer: "SJ Polyzen Industries was established in 2024 with a focus on manufacturing reliable recycled PPCP injection-grade granules."
    },
    {
      question: "Where is SJ Polyzen located?",
      answer: "We are located in Sanwer, Indore (Madhya Pradesh, India), serving customers across major injection moulding clusters."
    },
    {
      question: "What products does SJ Polyzen manufacture?",
      answer: "We manufacture recycled PPCP (Polypropylene Copolymer) injection-grade granules, primarily in black and application-specific grades."
    },
    {
      question: "What applications are your recycled PPCP granules suitable for?",
      answer: "Our products are suitable for crates, dustbins, chairs, furniture components, storage containers, and general household and industrial injection-moulded items."
    },
    {
      question: "Do you offer customized or application-specific grades?",
      answer: "Yes. We offer application-focused grades with controlled filler levels and processing behaviour, developed based on customer requirements and trial approval."
    },
    {
      question: "What colour options are available?",
      answer: "We primarily supply black PPCP granules, along with select application-specific colour options based on feasibility and order volume."
    },
    {
      question: "What is the typical melt flow range of your products?",
      answer: "Our recycled PPCP injection grades typically fall within an MFI range of 8–12, depending on application requirements."
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "The standard minimum order quantity is 100 kg, depending on grade and availability."
    },
    {
      question: "Do you provide trial samples before bulk supply?",
      answer: "Yes. We encourage trial samples so customers can evaluate material performance on their own machines before confirming bulk orders."
    },
    {
      question: "What are your delivery timelines?",
      answer: "Delivery timelines depend on order quantity, grade, and location, but we aim for prompt and reliable dispatch to support uninterrupted production."
    }
  ];

  return (
    <div className="home-page">
      {/* Section 1: Hero Section with Parallax Effect */}
      <section className="hero-section">
        {/* Parallax Background - TODO: Replace with actual industrial images */}
        <div className="hero-background"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SJ Polyzen Industries</h1>
          <p className="hero-slogan">
            Weaving Excellence, Delivering Quality - Your Trusted Partner in Polypropylene Solutions
          </p>
          <a href="#products-preview" className="btn btn-primary hero-cta">
            Explore Our Products
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <FaChevronDown />
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="section who-we-are">
        <div className="container">
          <h2 className="section-title fade-in">Who We Are</h2>
          <div className="two-column-layout">
            {/* Image Column - TODO: Replace with actual company/factory image */}
            <div className="image-column fade-in">
              <img src={companyImage} alt='SJ Polyzen Industries' className='company-image'/>    
            </div>

            {/* Content Column */}
            <div className="content-column fade-in">
              <p>
                SJ Polyzen Industries is a recycled PPCP (Polypropylene Copolymer) injection-grade granules company, 
                focused on supplying dependable material for everyday injection moulding applications. 
                Our products are developed for manufacturers producing crates, dustbins, chairs, stools, 
                and other general household and industrial moulded items where consistent machine 
                performance and cost efficiency matter. We specialize in recycled PPCP grades that are 
                practical, workable, and aligned with real shop-floor requirements rather than theoretical claims.
              </p>
              <p>
                Our approach is built on process discipline, controlled sourcing, and honest grade 
                positioning. We focus on stable melt flow, controlled filler content, and repeatable 
                batch behavior so that moulders experience fewer machine issues and lower rejection. 
                Instead of selling "generic recycled plastic," we aim to be a reliable supply partner, 
                offering materials that perform predictably and support long-term manufacturing 
                relationships based on trust, clarity, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Making a Difference - Environmental Impact */}
      <section className="section environmental-impact">
        <div className="container">
          <div className="environmental-header fade-in">
            <FaLeaf className="env-main-icon" />
            <h2 className="section-title">Making a Difference to the World We Live In</h2>
            <p className="section-subtitle">
              Every kilogram of recycled PPCP granule we produce is a step towards a cleaner planet. 
              By choosing recycled materials, we're not just making products—we're protecting our environment 
              for future generations.
            </p>
          </div>

          <div className="impact-grid fade-in">
            <div className="impact-card">
              <div className="impact-icon">
                <FaRecycle />
              </div>
              <h3>Waste Reduction</h3>
              <p>
                Diverting plastic waste from landfills and converting it into valuable raw material, 
                reducing environmental pollution and conserving natural resources.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-icon">
                <FaSeedling />
              </div>
              <h3>Carbon Footprint</h3>
              <p>
                Recycled plastic production uses significantly less energy compared to virgin plastic 
                manufacturing, helping reduce greenhouse gas emissions.
              </p>
            </div>

            <div className="impact-card">
              <div className="impact-icon">
                <FaHandHoldingHeart />
              </div>
              <h3>Circular Economy</h3>
              <p>
                Contributing to a sustainable circular economy by keeping materials in use longer, 
                minimizing waste, and promoting responsible consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Recycle Today for Better Tomorrow */}
      <section className="section recycle-process">
        <div className="container">
          <div className="recycle-header fade-in">
            <h2 className="section-title">Recycle Today for a Better Tomorrow</h2>
            <p className="section-subtitle">
              Our comprehensive recycling process ensures the highest quality while protecting the environment
            </p>
          </div>

          <div className="process-steps fade-in">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <FaRecycle />
              </div>
              <h4>Source Segregation</h4>
              <p>Carefully selected PPCP waste material collection from verified sources</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <FaIndustry />
              </div>
              <h4>Sorting & Inspection</h4>
              <p>Rigorous manual sorting to remove contaminants and ensure material purity</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <FaWater />
              </div>
              <h4>Triple Hot Washing</h4>
              <p>Hot washed 3 times with industrial-grade chemicals for thorough cleaning</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon">
                <FaRecycle />
              </div>
              <h4>Granulation</h4>
              <p>Advanced processing to convert cleaned material into consistent injection-grade granules</p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-icon">
                <FaLeaf />
              </div>
              <h4>Zero Landfilling</h4>
              <p>100% material utilization—no waste goes to landfills, ensuring complete sustainability</p>
            </div>
          </div>

          <div className="sustainability-stats fade-in">
            <div className="stat-item">
              <div className="stat-icon">♻️</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Recycled Material</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">🌱</div>
              <div className="stat-number">Zero</div>
              <div className="stat-label">Landfill Waste</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">💧</div>
              <div className="stat-number">3x</div>
              <div className="stat-label">Hot Washed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Products Preview */}
      <section id="products-preview" className="section products-preview">
        <div className="container">
          <h2 className="section-title fade-in">Our Products</h2>
          
          <div className="products-grid fade-in">
            {/* Product Card 1: Black PPCP Injection Grade Granules */}
            <div className="product-card">
              {/* TODO: Replace with actual product image */}
              <div className="product-image">
                <span>Black PPCP Granules</span>
              </div>
              <div className="product-info">
                <h3>Black PPCP Injection Grade Granules</h3>
                <p>
                  Black PPCP recycled granules suitable for general injection moulding 
                  applications requiring good impact strength and stable flow.
                </p>
                <Link to="/products/black-ppcp-granules" className="btn btn-secondary">
                  View More
                </Link>
              </div>
            </div>

            {/* Product Card 2: Colour/Black Granules */}
            <div className="product-card">
              {/* TODO: Replace with actual product image */}
              <div className="product-image">
                <span>Colour/Black Granules</span>
              </div>
              <div className="product-info">
                <h3>Colour/Black Granules</h3>
                <p>
                  Low-filler recycled PPCP granules for applications requiring higher 
                  impact strength, better surface finish, and improved consistency.
                </p>
                <Link to="/products/premium-ppcp-granules" className="btn btn-secondary">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Commitment */}
      <section className="section quality-commitment">
        <div className="container">
          <div className="quality-banner fade-in">
            {/* TODO: Replace with actual factory image */}
            <div className="quality-image-overlay">
              <div className="quality-content">
                <h2>Our Commitment to Quality</h2>
                <ul className="quality-points">
                  <li>✓ Process-driven quality control at every stage</li>
                  <li>✓ Batch-wise inspection before dispatch</li>
                  <li>✓ Controlled raw material sourcing</li>
                  <li>✓ Focus on repeatability, not one-time supply</li>
                  <li>✓ Trial-based approval philosophy</li>
                </ul>
                <Link to="/quality" className="btn btn-primary">
                  Read Our Complete Quality Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Contact Us Brief */}
      <section className="section contact-brief">
        <div className="container">
          <div className="contact-brief-content fade-in">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have questions about our products or services? We're here to help! 
              Contact us today and let's discuss how we can meet your requirements.
            </p>
            
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="info-icon">📧</div>
                <h4>Email</h4>
                <p>sjpolyzen@gmail.com</p>
              </div>
              
              <div className="contact-info-item">
                <div className="info-icon">📞</div>
                <h4>Phone</h4>
                <p>+91 8719824566</p>
                <p>+91 9628517463</p>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title fade-in">Frequently Asked Questions</h2>
          
          <div className="faq-container fade-in">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

