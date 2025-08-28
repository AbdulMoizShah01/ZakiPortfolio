import React from 'react';
import '../Kosher/KosherDescription.css';
const JugaadDescription = () => {
  return (
    <div className="project-description-container">
      <div className="description-card">
        <div className="title-badge">
          <h2 className="section-title">Project Description</h2>
        </div>
        
        <div className="description-content">
          <p className="description-paragraph">
           "Jugaad" is a popular South Asian term for finding clever fixes using what’s available. This project takes that idea into the world of 3D animation — I created a robot built entirely from scrap parts, symbolizing resilience, creativity, and resourcefulness.
           </p>
          <p className="description-paragraph">
          The animation follows this DIY robot as it awakens and begins a journey through various landscapes, blending raw machinery with cultural undertones. It’s a reflection of how innovation can rise from simplicity and limitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JugaadDescription;