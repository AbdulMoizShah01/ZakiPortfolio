import React from 'react';
import './KosherDesigns.css';

const KosherDesigns = () => {
  return (
    <div className="social-media-posts">
      <div className="design-label">DESIGN</div>
      
      {/* Row 1: Single Image */}
      <div className="row-single">
        <div className="post-container">
          <img src='/Kosher/cover1.png' alt="Design 1" />
        </div>
      </div>

      {/* Row 2: Double Images */}
      <div className="row-double">
        <div className="post-container">
          <img src='/Kosher/cover2.png' alt="Design 2" />
        </div>
        <div className="post-container">
          <img src='/Kosher/cover3.png' alt="Design 3" />
        </div>
      </div>

      {/* Row 3: Single Image */}
      <div className="row-single">
        <div className="post-container">
          <img src='/Kosher/cover4.png' alt="Design 4" />
        </div>
      </div>

      {/* Row 4: Grid Images */}
      <div className="row-grid">
        <div className="post-container">
          <img src='/Kosher/cover5.png' alt="Design 5" />
        </div>
        <div className="post-container">
          <img src='/Kosher/cover6.png' alt="Design 6" />
        </div>
        <div className="post-container">
          <img src='/Kosher/cover7.png' alt="Design 7" />
        </div>
        <div className="post-container">
          <img src='/Kosher/cover8.png' alt="Design 8" />
        </div>
        <div className="post-container">
          <img src='/Kosher/cover9.png' alt="Design 9" />
        </div>
        <div className="post-container">
          <img src='/Kosher/cover10.png' alt="Design 10" />
        </div>
      </div>
    </div>
  );
};

export default KosherDesigns;