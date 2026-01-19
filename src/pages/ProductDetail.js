
/**
 * Product Detail Page Component
 * Displays detailed information about specific products
 * Includes specifications table with interactive hover effects
 */

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './ProductDetail.css';
import black from '../assets/Products_img/black.png'
import colored from '../assets/Products_img/colored.png'

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
    'black-ppcp-granules': {
      name: 'Black PPCP Injection Grade Granules',
      description: 'Black PPCP recycled granules suitable for general injection moulding applications requiring good impact strength and stable flow. These granules deliver consistent quality for injection moulding, making them ideal for manufacturers producing crates, bins, chairs, and other moulded products.',
      image:black,
      specifications: [
        { property: 'MFI', specification: '8–12' },
        { property: 'Application', specification: 'Crates, bins, chairs' },
        { property: 'Price Range', specification: '₹75–95/kg (grade & volume dependent)' },
        { property: 'Packaging', specification: '25 kg bags' },
        { property: 'MOQ', specification: '500 kg' },
        { property: 'Trial Samples', specification: 'Available' }
      ]
    },
    'premium-ppcp-granules': {
      name: 'Coloured PPCP Granules',
      description: 'Low-filler recycled Coloured/Black PPCP granules developed for injection moulding applications that require higher impact strength, better surface finish, and improved consistency compared to standard grades. This grade is suitable for moulders looking to reduce breakage, improve cycle stability, and maintain consistent performance across batches.',
      image:colored,
      specifications: [
        { property: 'MFI', specification: '8–11' },
        { property: 'Application', specification: 'Heavy-duty crates, chair components, thick-wall moulded products' },
        { property: 'Filler Content', specification: 'Controlled, low filler' },
        { property: 'Price Range', specification: '₹90–110/kg (grade & volume dependent)' },
        { property: 'Packaging', specification: '25 kg bags' },
        { property: 'MOQ', specification: '500 kg' },
        { property: 'Trial Samples', specification: 'Available' }
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
              {product.image?(
                <img src={product.image} alt={product.name} className='detail-product-img'/>
              ):(<div className="detail-placeholder-image">
                <span>{product.name}</span>
              </div>)}
              
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