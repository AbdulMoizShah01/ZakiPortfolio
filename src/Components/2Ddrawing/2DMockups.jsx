import React from 'react';
import '../2Ddrawing/2DProcess.css';

const TDMockups = ({ imagePaths = [] }) => {
  // Default placeholder paths if none provided
  const defaultPaths = [
    '/2D/M1.png',
    '/2D/M2.png', 
    '/2D/M3.png'
  ];

  const paths = imagePaths.length === 3 ? imagePaths : defaultPaths;

  return (
    <div className="phases-container ">
      <div className="phases-header">
        <span className="phases-label">Mockups</span>
      </div>
      <div style={{borderRadius:"50px", overflow:"hidden"}}>
      <div className="phase-item">
          <img src={paths[0]} alt="Phase 1" className="phase-image" />
        </div>
      <div className="phases-grid">
        
        <div className="phase-item">
          <img src={paths[1]} alt="Phase 2" className="phase-image" />
        </div>
        <div className="phase-item">
          <img src={paths[2]} alt="Phase 3" className="phase-image" />
        </div>
      </div>
      </div>
    </div>
  );
};

// Example usage - you can pass your image paths like this:
// <PhasesContainer imagePaths={[
//   '/your/path/to/image1.png',
//   '/your/path/to/image2.png',
//   '/your/path/to/image3.png',
//   '/your/path/to/image4.png'
// ]} />

export default TDMockups;