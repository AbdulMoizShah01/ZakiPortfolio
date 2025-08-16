import React, { useState, useEffect, useRef } from 'react';
import CoinSVG from './CoinSVG';
import SlotBoxSVG from './SlotBoxSVG';
import './CoinInsertGame.css';

const CoinInsertGame = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setTimeout(() => setIsAnimated(true), 1800);
        } else {
          setIsInView(false);
          setIsAnimated(false);
        }
      },
      { threshold: 0.5, rootMargin: '-50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
      <div className="coin-slot-section" ref={sectionRef}>
      {/* Corner Decorations - updated with consistent styling */}
      <div className="cornerdeco tl"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>
      <div className="cornerdeco tr"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>
      <div className="cornerdeco bl"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>
      <div className="cornerdeco br"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>
      
      <div className="main-container">
        <div className="animation-container">
          <div className="coin-container">
            <CoinSVG isAnimated={isAnimated} />
          </div>
          <div className="slot-container">
            <SlotBoxSVG />
          </div>
        </div>
        
        <div className="text-container">
          <div className={`text-content ${isAnimated ? 'animated' : ''}`}>
            <div className="text-initial">
              INSERT<br />COIN TO<br />PLAY
            </div>
            <div className="text-final">
              LET'S<br />START
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInsertGame;