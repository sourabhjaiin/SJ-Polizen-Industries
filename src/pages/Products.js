/**
 * Products Page Component
 * Displays all products in a grid layout with product cards
 * Each card has hover effects and links to detailed product pages
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
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

  // Product data
  const products = [
    {
      id: 'multifilament',
      name: 'Polypropylene Multifilament',
      description: 'High-tenacity multifilament yarns designed for durability and versatility across multiple applications.',
      image: null // TODO: Add actual product image
    },
    {
      id: 'bag-closing-thread',
      name: 'Bag Closing Thread',
      description: 'Strong, reliable threads specifically engineered for industrial bag closing and stitching operations.',
      image: null // TODO: Add actual product image
    }
  ];

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="products-header">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Premium Polypropylene Solutions for Every Industry
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="section products-section">
        <div className="container">
          <div className="products-main-grid">
            {products.map((product, index) => (
              <div key={product.id} className="product-main-card fade-in">
                {/* Product Image - TODO: Replace with actual images */}
                <div className="product-main-image">
                  <span>{product.name}</span>
                </div>

                {/* Product Information */}
                <div className="product-main-info">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  
                  <Link 
                    to={`/products/${product.id}`} 
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="products-additional-info fade-in">
            <h3>Why Choose Our Products?</h3>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">✓</div>
                <h4>Premium Quality</h4>
                <p>Virgin-grade raw materials ensure superior product quality</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✓</div>
                <h4>Customization</h4>
                <p>Tailored specifications to meet your exact requirements</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✓</div>
                <h4>Competitive Pricing</h4>
                <p>Best value without compromising on quality</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✓</div>
                <h4>Timely Delivery</h4>
                <p>Reliable supply chain and on-time deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
