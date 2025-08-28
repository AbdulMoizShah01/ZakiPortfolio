import React from 'react';
import '../Jugaad/JugaadProcess.css';

const JugaadProcess = () => {
  // You can replace these placeholder URLs with your actual PNG image paths
  const images = [
    '/Jugaad/P1.png',
    '/Jugaad/P2.png', 
    '/Jugaad/P3.png',
    '/Jugaad/P4.png'
  ];

  return (
    <div className="process-container">
        <div className="process-title">Process
      </div>
      
      <div className="image-grid">
        {images.map((imageSrc, index) => (
          <div key={index} className={`grid-item ${index === 0 ? 'has-blue-border' : ''}`}>
            <div className="image-placeholder">
              <img 
                src={imageSrc} 
                alt={`Process step ${index + 1}`}
                className="process-image"
                onError={(e) => {
                  // Fallback for missing images
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-text" style={{ display: 'none' }}>
                Image {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JugaadProcess;

