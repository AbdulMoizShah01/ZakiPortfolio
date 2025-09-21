 import React from 'react';
 import Container from './Vectors/Container';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card-container" id='Lets Connect'>
      
      <section className="vector-section">
        <div className="vector-wrapper">
          {/* SVG Container */}
          <Container/>
          
          {/* Avatar GIF Overlay */}
          <div className="avatar-container">
            <img 
              src="/Splash.gif" 
              alt="Animated Avatar"
              className="avatar-gif"
            />
          </div>
        </div>
      </section>
      </div>
  );
};

export default ProfileCard;