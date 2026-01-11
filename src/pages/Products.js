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
      id: 'black-ppcp-granules',
      name: 'Black PPCP Injection Grade Granules',
      description: 'Black PPCP recycled granules suitable for general injection moulding applications requiring good impact strength and stable flow.',
      image: null // TODO: Add actual product image
    },
    {
      id: 'premium-ppcp-granules',
      name: 'Colour/Black Granules',
      description: 'Low-filler recycled PPCP granules developed for applications requiring higher impact strength, better surface finish, and improved consistency.',
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
            Injection-Grade Recycled PPCP Granules
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
                <h4>Consistent Quality</h4>
                <p>Injection-grade recycled PPCP granules engineered for stable processing and minimal rejection rates</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✓</div>
                <h4>Application-Focused Grades</h4>
                <p>Purpose-built materials for crates, bins, chairs, stools, and general injection moulding applications</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✓</div>
                <h4>Fair & Competitive Pricing</h4>
                <p>Transparent pricing structure balancing cost efficiency with dependable performance</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✓</div>
                <h4>Dependable Supply</h4>
                <p>Consistent deliveries and responsive service to keep your production running without interruption</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
