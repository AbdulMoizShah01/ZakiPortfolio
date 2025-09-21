import "../Kosher/KosherBanner.css";
import { useNavigate } from "react-router-dom";
function JugaadBanner() {
  const navigateTo=useNavigate();
  const goBack=()=>navigateTo(-1);
  return(
    <div className="ki-banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button" onClick={goBack}/>
      </div>
      <div className="main-content">
        <div className="heading">JUGAAD 3D PROJECT</div>
        <div className="image-container-kbid">
          <img src="/Jugaad/JugaadBanner.png" alt="KosherWave header"/>
        </div>
      </div>
    </div>
  );
}

export default JugaadBanner;