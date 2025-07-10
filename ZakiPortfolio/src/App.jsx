import React, { useState } from 'react';
import CoinMachine from "./Components/CoinMachine"
import Info from "./Components/Info"
import PortfolioBanner from "./Components/PortfolioBanner"
import PowerUpSelector from "./Components/PowerUpSelector"
import TopBar from "./Components/TopBar"
import SplashScreen from "./Components/SplashScreen"

function App() {

  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onClose={() => setShowSplash(false)} />
      ) : (
        <>
          <TopBar/>
          <PortfolioBanner/>
          <CoinMachine/>
          <Info/>
          <PowerUpSelector/>
        </>
      )}
    </>
  )
}


export default App
