import React from 'react';
import '../Kosher/KosherDescription.css';
const KIDDescription = () => {
  return (
    <div className="ki-project-description-container">
      <div className="description-card">
        <div className="title-badge">
          <h2 className="section-title">Project Description</h2>
        </div>
        
        <div className="description-content">
          <p className="description-paragraph">
           Khanabadosh is my personal startup born from a simple idea — that old clothes can be brought back to life.Instead of letting fabric go to waste, I recycle and redesign it into bold, expressive streetwear. 
          </p>

          <p className="description-paragraph">
           This brand is my way of blending creativity with responsibility. It reflects my belief that fashion should tell a story — of culture, identity, and sustainability.
         </p>
          <p className="description-paragraph">
           Every piece represents the idea that nothing is ever truly useless — it just needs a new perspective. Khanabadosh isn’t just about style. It’s about making fashion more thoughtful, more personal, and more conscious of the world around us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KIDDescription;