/**
 * Product Detail Page Component
 * Displays detailed information about specific products
 * Includes specifications table with interactive hover effects
 */

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

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

  // Product data with specifications
  const productData = {
    'multifilament': {
      name: 'Polypropylene Multifilament',
      description: 'Our polypropylene multifilament yarns are manufactured using virgin-grade raw materials and advanced spinning technology. These yarns offer exceptional tensile strength, UV resistance, and color fastness, making them ideal for outdoor and industrial applications. Available in various deniers and colors, our multifilament yarns serve industries ranging from fishing and agriculture to geotextiles and construction.',
      specifications: [
        { property: 'Denier Range', specification: '500D - 5000D' },
        { property: 'Tensile Strength', specification: '3.5 - 5.5 g/d' },
        { property: 'Elongation', specification: '20% - 25%' },
        { property: 'UV Stabilization', specification: 'Available' },
        { property: 'Color Options', specification: 'Custom & Standard' }
      ]
    },
    'bag-closing-thread': {
      name: 'Bag Closing Thread',
      description: 'Our bag closing threads are engineered for high-speed industrial sewing machines, providing consistent performance and minimal breakage. Made from premium polypropylene, these threads offer excellent knot strength and abrasion resistance, ensuring secure bag closures for cement, fertilizers, and agricultural products.',
      specifications: [
        { property: 'Thread Count', specification: '2/18, 2/24, 2/36' },
        { property: 'Breaking Load', specification: '8-12 kg' },
        { property: 'Twist', specification: 'S/Z Twist Available' },
        { property: 'Lubrication', specification: 'Pre-lubricated' },
        { property: 'Packaging', specification: 'Cone/Spool' }
      ]
    }
  };

  // Get current product data
  const product = productData[productId];

  // If product not found, redirect to products page
  if (!product) {
    navigate('/products');
    return null;
  }

  return (
    <div className="product-detail-page">
      {/* Back Button */}
      <section className="back-button-section">
        <div className="container">
          <Link to="/products" className="back-button">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </section>

      {/* Product Header */}
      <section className="product-detail-header">
        <div className="container">
          <h1 className="page-title fade-in">{product.name}</h1>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section product-details-section">
        <div className="container">
          {/* Product Image and Description */}
          <div className="product-detail-content fade-in">
            <div className="product-detail-image">
              {/* TODO: Replace with actual product image */}
              <div className="detail-placeholder-image">
                <span>{product.name}</span>
              </div>
            </div>
            
            <div className="product-detail-text">
              <h2>Product Description</h2>
              <p>{product.description}</p>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="specifications-section fade-in">
            <h2 className="section-title">Key Properties & Specifications</h2>
            
            <div className="specifications-table-container">
              <table className="specifications-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td className="property-cell">{spec.property}</td>
                      <td className="specification-cell">{spec.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="product-cta fade-in">
            <h3>Interested in this product?</h3>
            <p>Contact us today to discuss your requirements and get a customized quote.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
