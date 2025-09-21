// TopBar.jsx
import React, { useEffect, useState } from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const Logo = () => (
    <svg width="71" height="60" viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_108)">
        <path d="M70.8552 34.1182V59.857H47.2851V51.2774H62.9792V34.1182H70.8552Z" fill="black" stroke="black" strokeMiterlimit="10"/>
        <path d="M70.8263 22.5358H62.9792V31.1154H70.8263V22.5358Z" fill="black" stroke="black" strokeMiterlimit="10"/>
        <path d="M70.8263 0.142993H62.9792V19.5329H70.8263V0.142993Z" fill="black" stroke="black" strokeMiterlimit="10"/>
        <path d="M8.83156 0.371782H0.144775V38.408H8.83156V0.371782Z" fill="black" stroke="black" strokeMiterlimit="10"/>
        <path d="M70.8122 0.143176L0.130737 0.371686L0.159172 8.95129L70.8407 8.72278L70.8122 0.143176Z" fill="black" stroke="black" strokeMiterlimit="10"/>
        <path d="M52.2944 16.959V25.5386H26.2341V34.1182H43.6076V59.857H0.173706V42.6978H8.86049V51.2774H34.9209V42.6978H17.5473V16.959H52.2944Z" fill="black" stroke="black" strokeMiterlimit="10"/>
      </g>
      <defs>
        <clipPath id="clip0_1_108">
          <rect width="71" height="60" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  const navItems = ['Home', 'About Me', 'Work', 'Lets Connect'];


 const scrollToSection=(item)=>{
  let targetDivID=`${item}`;
  let targetElement=document.getElementById(targetDivID);
  if(targetElement){
    targetElement.scrollIntoView({behavior:"smooth"});
  }
 }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (item) => {
    setActiveLink(item);
    setIsMenuOpen(false);
    scrollToSection(item);
  };

  return (
    <nav className="top-bar">
      <div className="nav-container">
        {/* Mobile menu toggle button */}
        
        
        {/* Centered Logo */}
        <div className="logo-container">
          <Logo />
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Navigation Items */}
        <div className={`nav-items ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item, index) => (
            <div 
          
              key={index} 
              className={`nav-item ${item === activeLink ? 'active' : ''}`}
              onClick={() => handleNavItemClick(item)}
            >
              {item}
              <div className="underline" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;