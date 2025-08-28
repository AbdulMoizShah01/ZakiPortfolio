import React from 'react';
import '../Jojo2D/JojoProcess.css';

const JoJoProcess = () => {
  // You can replace these placeholder URLs with your actual PNG image paths
  const images = [
    '/Jojo2D/P1.png',
    '/Jojo2D/P2.png', 
    '/Jojo2D/P3.png'
  ];

  return (
    <div className="jojo-process-container">
        <div className="jojo-process-title">Process</div>
      
      <div className="jojo-image-grid">
        {images.map((imageSrc, index) => (
          <div key={index} className={`jojo-grid-item ${index < 2 ? 'jojo-top-panel' : 'jojo-bottom-panel'}`}>
            <div className="jojo-image-placeholder">
              <img 
                src={imageSrc} 
                alt={`Process step ${index + 1}`}
                className="jojo-process-image"
                onError={(e) => {
                  // Fallback for missing images
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="jojo-placeholder-text" style={{ display: 'none' }}>
                Image {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoJoProcess;