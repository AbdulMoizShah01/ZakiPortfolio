import React from 'react';
import '../Kosher/KosherDescription.css';
const JojoDescription = () => {
  return (
    <div className="jojo-project-description-container">
      <div className="description-card">
        <div className="title-badge">
          <h2 className="section-title">Project Description</h2>
        </div>
        
        <div className="description-content">
          <p className="description-paragraph">
            This project was a freelance commission for Jojo Gymkhana, a local boxing club based in Sargodha. The goal was to create a short, high-energy promotional animation capturing the grit and spirit of the club. I kept the style minimal, focusing on bold motion and strong silhouettes to bring the boxing scene to life.
           </p>
          <p className="description-paragraph">
            The animation works as a quick brand punch — something that reflects both the attitude and passion behind the club while staying visually clean and impactful. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default JojoDescription;