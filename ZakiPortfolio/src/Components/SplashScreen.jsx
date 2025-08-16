import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const SplashScreen = ({ onClose }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const greetingsRef = useRef(null);
  
  const greetings = [
    { text: "Hello", language: "English" },
    { text: "नमस्ते", language: "Hindi" },
     { text: "مرحبا", language: "Arabic" },
    { text: "Hola", language: "Spanish" },
    { text: "Bonjour", language: "French" },
    { text: "Ciao", language: "Italian" },
    { text: "Hallo", language: "German" },
    { text: "こんにちは", language: "Japanese" },
    { text: "안녕하세요", language: "Korean" },
    { text: "你好", language: "Chinese" },
    
   
    { text: "Olá", language: "Portuguese" },
    { text: "Привет", language: "Russian" },
    { text: "Merhaba", language: "Turkish" },
    { text: "Sawubona", language: "Zulu" },
    { text: "Hej", language: "Swedish" },
  ];

  // Cycle through greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 1200);
    
    return () => clearInterval(interval);
  }, [greetings.length]);

  // Close splash screen after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 800); // Wait for animation to complete
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  // Handle manual close
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 800);
  };

  return (
    <SplashContainer $isVisible={isVisible} onClick={handleClose}>
      <Background />
      <Content>
        <GreetingContainer ref={greetingsRef}>
          <Greeting key={currentGreeting}>
            {greetings[currentGreeting].text}
          </Greeting>
          <Language>{greetings[currentGreeting].language}</Language>
        </GreetingContainer>
        
        <LoaderContainer>
          <CoinLoader src="/Splash.gif" alt="Loading" />
        </LoaderContainer>
        
        <Hint>Click anywhere to continue</Hint>
      </Content>
    </SplashContainer>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Styled components
const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? 'none' : fadeOut)} 0.8s ease forwards;
  overflow: hidden;
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 90%;
  text-align: center;
`;

const GreetingContainer = styled.div`
  margin-bottom: 2rem;
  perspective: 1000px;
`;

const Greeting = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color:rgb(0, 0, 0);
  margin: 0;
  animation: ${scaleIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Language = styled.p`
  font-size: 1.2rem;
  color:rgb(0, 0, 0);
  margin-top: 0.5rem;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

const LoaderContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 2rem;
  position: relative;
`;

const CoinLoader = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Hint = styled.p`
  color:rgb(0, 0, 0);
  margin-top: 2rem;
  font-size: 0.9rem;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 1.5s;
  opacity: 0;
`;

export default SplashScreen;