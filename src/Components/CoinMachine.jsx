import React, { useState, useEffect, useRef } from 'react';
import CoinSVG from './CoinSVG';
import SlotBoxSVG from './SlotBoxSVG';
import './CoinInsertGame.css';

const CoinInsertGame = () => {
  const sectionRef = useRef(null);
  const coinRef = useRef(null);
  const slotRef = useRef(null);

  const [coinOffset, setCoinOffset] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0); // scroll progress (0 → 1)

  useEffect(() => {
    if (coinRef.current && slotRef.current) {
      const coinRect = coinRef.current.getBoundingClientRect();
      const slotRect = slotRef.current.getBoundingClientRect();

      // absolute offset calculation will be adjusted on scroll
      const x = slotRect.left - coinRect.left;
      const y = (slotRect.top - coinRect.top) +15;
      setCoinOffset({ x, y });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // how much of the section has scrolled through viewport
      let ratio = 1.6 - rect.bottom / windowHeight; 
      ratio = Math.min(Math.max(ratio, 0), 1); // clamp between 0–1
      setProgress(ratio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // interpolate transform
  const coinStyle = {
    transform: `translate(${coinOffset.x * progress}px, ${coinOffset.y * progress}px)`,
    opacity: progress < 1 ? 1 : 0,
    transition: "opacity 0.3s ease-out"
  };

  return (
    <div className="coin-slot-section" ref={sectionRef}>
      {/* Corner Decorations */}
      <div className="cornerdeco tl"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>
      <div className="cornerdeco tr"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>
      <div className="cornerdeco bl"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>
      <div className="cornerdeco br"><img src='/Assets/Decor.svg' alt="corner decoration"/></div>

      <div className="main-container">
        <div className="animation-container">
          <div className="coin-container" ref={coinRef}>
            <div style={coinStyle}>
              <CoinSVG />
            </div>
          </div>
          <div className="slot-container" ref={slotRef}>
            <SlotBoxSVG />
          </div>
        </div>

        <div className="text-container">
          <div className={`text-content ${progress > 0.8 ? 'animated' : ''}`}>
            <div className="text-initial">
              INSERT<br /><span style={{ fontWeight: "300" }}>COIN TO</span><br />PLAY
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
