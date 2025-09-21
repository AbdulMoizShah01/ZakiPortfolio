import { useEffect, useState } from "react";
import "./PowerUpSelector.css";


const Dots = () => {
const [dots, setDots] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev === '...' ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
      <h2 className="powerup-subtitle">
                POWER-UP<span className="loading-dots">{dots}</span>
              </h2>
  )
}

export default Dots