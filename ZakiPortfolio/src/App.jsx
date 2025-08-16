import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import SplashScreen from "./Components/SplashScreen";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";

function App() {

  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onClose={() => setShowSplash(false)} />
      ) : (
        <>
          <TopBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
          <Footer/>
        </>
      )}
    </>
  )
}


export default App;
