/**
 * Main Application Component
 * Sets up routing for all pages and includes the navigation bar and footer
 * Uses React Router for multi-page navigation
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import QualityPolicy from './pages/QualityPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import './App.css';

/**
 * ScrollToTop Component
 * Automatically scrolls to top when route changes
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Sticky Navigation Bar - appears on all pages */}
        <Navbar />
        
        {/* Main content area with all routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/quality" element={<QualityPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer - appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
