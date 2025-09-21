import "../Kosher/KosherBanner.css";
import { useNavigate } from "react-router-dom";
function JojoBanner() {
  const navigateTo=useNavigate();
  const goBack=()=>navigateTo(-1);
  return(
    <div className="banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button" onClick={goBack}/>
      </div>
      <div className="main-content">
        <div className="heading">JOJO GYMKHANA 2D ANIMATION</div>
        <div className="image-container">
          <img src="/Jojo2D/JojoBanner.png" alt="KosherWave header"/>
        </div>
      </div>
    </div>
  );
}

export default JojoBanner;