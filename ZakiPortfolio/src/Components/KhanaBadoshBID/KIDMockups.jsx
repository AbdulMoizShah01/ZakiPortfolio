import React from 'react';
import '../KhanaBadoshBID/Campaign.css';
const KIDMockups = () => {

  const apparelDesigns = [
    { id: 1, image: '/KhanabadoshID/M1.png', alt: 'White logo on black tee' },
    { id: 2, image: '/KhanabadoshID/M2.png', alt: 'Arabic text on red background' },
    { id: 3, image: '/KhanabadoshID/M3.png', alt: 'Small logo placement' }
  ];

  return (
    <div className='campaign'>
        <div className='campaign-container'>
             <h2 className="kbid-section-title">MockUps</h2>
          
                <div className="campaign-grid">
                    {apparelDesigns.map((item) => (
                    <div key={item.id} className="kbid-apparel-item">
                        <img 
                        src={item.image} 
                        alt={item.alt}
                        className="campaign-image"
                        />
                    </div>
                    ))}
                </div>
            </div>
    </div>
  );
};

export default KIDMockups;