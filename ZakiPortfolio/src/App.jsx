import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import SplashScreen from "./Components/SplashScreen";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Kosherwave from "./Pages/Kosherwave";
import KhanaBadoshBid from "./Pages/KhanaBadoshBid";
import Ddrawing from "./Pages/2Ddrawing";


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
            <Route path="/kosherwave" element={<Kosherwave/>} />
            <Route path="/khanabadosh-brand-id" element={<KhanaBadoshBid/>} />
            <Route path="/2d-digital-drawing" element={<Ddrawing/>} />
          </Routes>
          <Footer/>
        </>
      )}
    </>
  )
}


export default App;
