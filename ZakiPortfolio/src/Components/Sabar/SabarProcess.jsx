import React from 'react';
import '../Sabar/SabarProcess.css';
const SabarProcess = () => {
  // You can replace these placeholder URLs with your actual PNG image paths
  const images = [
    '/Sabar/P1.png',
    '/Sabar/P2.png', 
    '/Sabar/P3.png'
  ];

  return (
    <div className="sabar-process-container">
      
        <div className="sabar-process-title">Process
      </div>
      
      <div className="sabar-image-grid">
        <div className="sabar-grid-item sabar-left-panel">
          <div className="sabar-image-placeholder">
            <img 
              src={images[0]} 
              alt="Character final design"
              className="sabar-process-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="sabar-placeholder-text" style={{ display: 'none' }}>
              Final Character
            </div>
          </div>
        </div>
        
        <div className="sabar-grid-item sabar-top-right-panel">
          <div className="sabar-image-placeholder">
            <img 
              src={images[1]} 
              alt="Character sketches"
              className="sabar-process-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="sabar-placeholder-text" style={{ display: 'none' }}>
              Character Sketches
            </div>
          </div>
        </div>
        
        <div className="sabar-grid-item sabar-bottom-right-panel">
          <div className="sabar-image-placeholder">
            <img 
              src={images[2]} 
              alt="Animation workspace"
              className="sabar-process-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="sabar-placeholder-text" style={{ display: 'none' }}>
              Animation Workspace
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SabarProcess;