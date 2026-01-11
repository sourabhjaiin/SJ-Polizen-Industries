/**
 * Footer Component
 * Three-column layout with company info, quick links, and contact details
 * Social media icons and copyright information
 * Appears on every page
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About Us */}
        <div className="footer-column">
          <h3 className="footer-heading">SJ Polyzen Industries</h3>
          {/* TODO: Replace with actual company logo */}
          <div className="footer-logo-placeholder">
            <div className="footer-logo-box">Logo</div>
          </div>
          <p className="footer-description">
            Manufacturer of recycled PPCP injection-grade granules, delivering consistent 
            quality and reliable supply for injection moulding applications since 2024.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/quality">Quality Policy</Link></li>
            <li><Link to="/applications">Applications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <p>399 LIG Mukharjee Nagar</p>
                <p>Dewar, Madhya Pradesh</p>
                <p>PIN: 455001, India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:sjpolyzen@gmail.com">sjpolyzen@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <a href="tel:+918719824566">+91 8719824566</a>
                <a href="tel:+919628517463">+91 9628517463</a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
              {/* TODO: Add actual Instagram and LinkedIn URLs */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2024 SJ Polyzen Industries. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
