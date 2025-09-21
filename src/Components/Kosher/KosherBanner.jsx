import { useNavigate } from "react-router-dom";
import "./KosherBanner.css";

function KosherBanner() {
  const navigateTo=useNavigate();
  const goBack=()=>navigateTo(-1);
  return(
    <div className="banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button" onClick={goBack}/>
      </div>
      <div className="main-content">
        <div className="heading">KosherWave Social Media Designs</div>
        <div className="image-container">
          <img src="/Assets/KosherHeader.svg" alt="KosherWave header"/>
        </div>
      </div>
    </div>
  );
}

export default KosherBanner;