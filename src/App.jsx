import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Kosherwave from "./Pages/Kosherwave";
import KhanaBadoshBid from "./Pages/KhanaBadoshBid";
import Ddrawing from "./Pages/2Ddrawing";
import Jugaad3D from "./Pages/Jugaad3D";
import Jojo2D from "./Pages/Jojo2D";
import Sabar from "./Pages/Sabar";
import KhanaBadoshAnimation from "./Pages/KhanaBadoshAnmation";
import ProfileCard from "./Components/ProfileCard";

// 🔹 Handles scrolling to element when hash is present (e.g. /#contact)
function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onClose={() => setShowSplash(false)} />
      ) : (
        <>
        
          {/* 🔹 Inject scroll helper */}
          <ScrollToHashElement />

          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/kosherwave" element={<Kosherwave/>} />
            <Route path="/khanabadosh-brand-id" element={<KhanaBadoshBid />} />
            <Route path="/2d-digital-drawing" element={<Ddrawing />} />
            <Route path="/jugaad" element={<Jugaad3D/>} />
            <Route path="/jojo-gym-2d" element={<Jojo2D />} />
            <Route path="/Sabar" element={<Sabar />} />
            <Route path="/khanabadosh-logo-animaton" element={<KhanaBadoshAnimation />} />
            <Route path="/profile-card" element={<ProfileCard/>} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
