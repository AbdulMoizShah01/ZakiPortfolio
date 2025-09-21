import React from 'react';
import "./KosherMockups.css"
const KosherMockups = () => {
  return (
    <div className="k-mockups-showcase">
      <div className="k-mockups-designlabel">Mock-Ups</div>
      
      <div className="k-mockups-container">
        {/* Left Container */}
        <div className="k-mockups-left-container">
          <div className="k-mockups-mobile-frame">
            <img src='/Kosher/cover11.png' alt="Mobile app screen" />
          </div>
          <div className="k-mockups-instagram-post">
            <img src='/Kosher/cover13.png' alt="Instagram post" />
          </div>
        </div>

        {/* Right Container */}
        <div className="k-mockups-right-container">
          <div className="k-mockups-mobile-frame">
            <img src='/Kosher/cover12.png' alt="Mobile app screen" />
          </div>
          <div className="k-mockups-instagram-post">
            <img src='/Kosher/cover14.png' alt="Instagram post" />
          </div>
        </div>

        {/* Bottom Container */}
        <div className="k-mockups-bottom-container">
          <div className="k-mockups-hand-phone-section">
            <img src='/Kosher/cover15.png' alt="Hand holding phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KosherMockups;