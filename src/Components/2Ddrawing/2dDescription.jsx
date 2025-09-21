import React from 'react';
import '../Kosher/KosherDescription.css';
const TdDescription = () => {
  return (
    <div className="project-description-container">
      <div className="description-card">
        <div className="title-badge">
          <h2 className="section-title">Project Description</h2>
        </div>
        
        <div className="description-content">
          <p className="description-paragraph">
            This digital portrait is a personal project close to my heart, capturing the essence of childhood innocence and cultural pride. Inspired by the everyday beauty of tradition, I illustrated a young boy wearing a Sindhi topi, holding a colorful pinwheel — a simple yet powerful symbol of joy and curiosity. 
            </p>

          <p className="description-paragraph">
           The artwork reflects how cultural identity can live within the smallest moments of a child’s life. With soft detailing, expressive tones, and a bold orange backdrop, the piece balances tradition with a sense of playful freedom. It’s a visual reminder of where we come from — and the imagination we carry forward.
          </p>

        </div>
      </div>
    </div>
  );
};

export default TdDescription;