import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    const scrollToConnect = (item) => {
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


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
            <div className="footer-nav-column" style={{background:"black"}}>
           <button onClick={() => scrollToConnect("#")} className="footer-btn"  style={{background:"black", border:"none"}}>Home</button>
<button onClick={() => scrollToConnect("About Me")} className="footer-btn"  style={{background:"black", border:"none"}}>About Me</button>
<button onClick={() => scrollToConnect("Work")} className="footer-btn"  style={{background:"black", border:"none"}}>Work</button>
<button onClick={() => scrollToConnect("Lets Connect")} className="footer-btn" style={{background:"black", border:"none"}}>Contact</button>

            </div>
            
            {/* Vertical divider */}
            <div className="footer-divider-vertical"></div>
            
            {/* Second column */}
            <div className="footer-nav-column">
              <a href="https://www.instagram.com/zaki_themovie/" className="footer-nav-link">Instagram</a>
              <a href="https://www.linkedin.com/in/zakria-sajid-b4b02627b/" className="footer-nav-link">LinkedIn</a>
              <a href="https://www.behance.net/zakriasajid" className="footer-nav-link">Behance</a>
              <a href="http://youtube.com/@zakriasajid2560" className="footer-nav-link">Youtube</a>
            </div>
          </div>
          
          {/* Vertical divider */}
          
          
          {/* Right section - Logo */}
          <div className="footer-logo">
            <img src='/Assets/logo-footer.svg'/>
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