/**
 * Home Page Component
 * Contains: Hero Section, Who We Are, Products Preview, Quality Commitment,
 * Contact Brief, and FAQ Section
 * Features parallax effects, animations, and interactive elements
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Home.css';

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
      answer: "SJ Polyzen Industries was established in 2015, bringing over 8 years of manufacturing excellence to the polypropylene industry."
    },
    {
      question: "Where is the company located?",
      answer: "We are located at 399 LIG Mukharjee Nagar, Dewar, Madhya Pradesh, 455001, India."
    },
    {
      question: "What products do you manufacture?",
      answer: "We specialize in polypropylene multifilament yarns and bag closing threads for various industrial applications."
    },
    {
      question: "Do you provide customized solutions?",
      answer: "Yes, we offer customized yarn specifications based on client requirements including color, denier, and tensile strength."
    },
    {
      question: "What is your delivery time?",
      answer: "Standard delivery time is 7-10 business days, depending on order volume and location."
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
              <div className="placeholder-image">
                <span>Company Image</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="content-column fade-in">
              <p>
                SJ Polyzen Industries is a leading manufacturer of high-quality polypropylene 
                multifilament yarns and bag closing threads, based in Dewar, Madhya Pradesh. 
                With years of expertise in the textile industry, we pride ourselves on delivering 
                products that meet international quality standards while maintaining competitive pricing.
              </p>
              <p>
                Our state-of-the-art manufacturing facility is equipped with advanced machinery and 
                operated by skilled professionals who ensure every product meets stringent quality 
                benchmarks. We serve diverse industries including agriculture, packaging, construction, 
                and fishing, providing customized solutions that cater to specific client requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Products Preview */}
      <section id="products-preview" className="section products-preview">
        <div className="container">
          <h2 className="section-title fade-in">Our Products</h2>
          
          <div className="products-grid fade-in">
            {/* Product Card 1: Polypropylene Multifilament */}
            <div className="product-card">
              {/* TODO: Replace with actual product image */}
              <div className="product-image">
                <span>Multifilament Yarn</span>
              </div>
              <div className="product-info">
                <h3>Polypropylene Multifilament</h3>
                <p>
                  High-tenacity multifilament yarns designed for durability and 
                  versatility across multiple applications.
                </p>
                <Link to="/products/multifilament" className="btn btn-secondary">
                  View More
                </Link>
              </div>
            </div>

            {/* Product Card 2: Bag Closing Thread */}
            <div className="product-card">
              {/* TODO: Replace with actual product image */}
              <div className="product-image">
                <span>Bag Closing Thread</span>
              </div>
              <div className="product-info">
                <h3>Bag Closing Thread</h3>
                <p>
                  Strong, reliable threads specifically engineered for industrial 
                  bag closing and stitching operations.
                </p>
                <Link to="/products/bag-closing-thread" className="btn btn-secondary">
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

      {/* Section 4: Quality Commitment */}
      <section className="section quality-commitment">
        <div className="container">
          <div className="quality-banner fade-in">
            {/* TODO: Replace with actual factory image */}
            <div className="quality-image-overlay">
              <div className="quality-content">
                <h2>Our Commitment to Quality</h2>
                <ul className="quality-points">
                  <li>✓ ISO 9001:2015 certified quality management</li>
                  <li>✓ Rigorous testing of every batch before dispatch</li>
                  <li>✓ Virgin-grade raw materials from certified suppliers</li>
                </ul>
                <Link to="/quality" className="btn btn-primary">
                  Read Our Complete Quality Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact Us Brief */}
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

      {/* Section 6: FAQ Section */}
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
