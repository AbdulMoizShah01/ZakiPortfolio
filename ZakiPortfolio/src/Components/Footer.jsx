import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top divider */}
        <div className="footer-top-divider"></div>
        
        {/* Main footer content */}
        <div className="footer-main">
          {/* Left section - Copyright */}
          <div className="footer-copyright">
            ZAKRIA SAJID © 2025
          </div>
          
          {/* Middle sections - Navigation */}
          <div className="footer-nav-wrapper">
            {/* Vertical divider */}
            <div className="footer-divider-vertical"></div>
            
            {/* First column */}
            <div className="footer-nav-column">
              <a href="#" className="footer-nav-link">Home</a>
              <a href="#" className="footer-nav-link">About Me</a>
              <a href="#" className="footer-nav-link">Work</a>
              <a href="#" className="footer-nav-link">Contact</a>
            </div>
            
            {/* Vertical divider */}
            <div className="footer-divider-vertical"></div>
            
            {/* Second column */}
            <div className="footer-nav-column">
              <a href="#" className="footer-nav-link">Instagram</a>
              <a href="#" className="footer-nav-link">LinkedIn</a>
              <a href="#" className="footer-nav-link">Behance</a>
              <a href="#" className="footer-nav-link">Email</a>
            </div>
          </div>
          
          {/* Vertical divider */}
          
          
          {/* Right section - Logo */}
          <div className="footer-logo">
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 60 60" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Geometric logo design */}
              <rect x="8" y="8" width="20" height="4" fill="white"/>
              <rect x="8" y="16" width="20" height="4" fill="white"/>
              <rect x="8" y="24" width="12" height="4" fill="white"/>
              <rect x="8" y="32" width="20" height="4" fill="white"/>
              <rect x="8" y="40" width="20" height="4" fill="white"/>
              
              <rect x="32" y="8" width="4" height="36" fill="white"/>
              <rect x="40" y="8" width="12" height="4" fill="white"/>
              <rect x="40" y="24" width="12" height="4" fill="white"/>
              <rect x="40" y="40" width="12" height="4" fill="white"/>
              <rect x="48" y="16" width="4" height="8" fill="white"/>
              <rect x="48" y="32" width="4" height="8" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Bottom divider */}
        <div className="footer-bottom-divider">
          <div className="footer-rights">
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;