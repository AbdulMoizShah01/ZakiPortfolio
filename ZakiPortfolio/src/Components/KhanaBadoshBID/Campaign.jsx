import React from 'react';
import '../KhanaBadoshBID/Campaign.css';
const Campaign = () => {

  const apparelDesigns = [
    { id: 1, image: '/KhanabadoshID/c1.png', alt: 'White logo on black tee' },
    { id: 2, image: '/KhanabadoshID/c2.png', alt: 'Arabic text on red background' },
    { id: 3, image: '/KhanabadoshID/c3.png', alt: 'Small logo placement' },
    { id: 4, image: '/KhanabadoshID/c4.png', alt: 'Arabic text with pattern' },
    { id: 5, image: '/KhanabadoshID/c5.png', alt: 'Arabic text with pattern' },
    { id: 6, image: '/KhanabadoshID/c6.png', alt: 'Arabic text with pattern' }
  ];

  return (
    <div className='campaign'>
        <div className='campaign-container'>
             <h2 className="kbid-section-title">Visual Campaign</h2>
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

export default Campaign;