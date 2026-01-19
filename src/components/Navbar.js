/**
 * Navigation Bar Component
 * Sticky navbar with logo on left and navigation links on right
 * Responsive hamburger menu for mobile devices
 * Active page indicator with blue underline
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /**
   * Handle scroll event to add shadow to navbar when scrolled
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  /**
   * Toggle mobile menu open/close
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Check if current path matches the link
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section - Left Side */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt='SJ Polyzen Industries' className='logo-img'/>
          <span className="logo-text">SJ Polyzen Industries</span>
        </Link>

        {/* Navigation Links - Right Side (Desktop) */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/products" 
              className={`nav-link ${isActive('/products') ? 'active' : ''}`}
            >
              Our Products
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/quality" 
              className={`nav-link ${isActive('/quality') ? 'active' : ''}`}
            >
              Quality Policy
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/applications" 
              className={`nav-link ${isActive('/applications') ? 'active' : ''}`}
            >
              Applications
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
