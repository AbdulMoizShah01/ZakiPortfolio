import React from 'react';
import '../2Ddrawing/2DProcess.css';

const TDProcess = ({ imagePaths = [] }) => {
  // Default placeholder paths if none provided
  const defaultPaths = [
    '/2D/P1.png',
    '/2D/P2.png', 
    '/2D/P3.png',
    '/2D/P4.png'
  ];

  const paths = imagePaths.length === 4 ? imagePaths : defaultPaths;

  return (
    <div className="phases-container">
      <div className="phases-header">
        <span className="phases-label">Process</span>
      </div>
      <div style={{overflow:"hidden", borderRadius:"50px"}}>
      <div className="phases-grid" >
        <div className="phase-item">
          <img src={paths[0]} alt="Phase 1" className="phase-image" />
        </div>
        <div className="phase-item">
          <img src={paths[1]} alt="Phase 2" className="phase-image" />
        </div>
        <div className="phase-item">
          <img src={paths[2]} alt="Phase 3" className="phase-image" />
        </div>
        <div className="phase-item">
          <img src={paths[3]} alt="Phase 4" className="phase-image" />
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

export default TDProcess;