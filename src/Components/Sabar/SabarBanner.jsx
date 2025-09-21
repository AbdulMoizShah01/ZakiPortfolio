import { useNavigate } from "react-router-dom";
import "../Kosher/KosherBanner.css";

function SabarBanner() {
   const navigateTo=useNavigate();
  const goBack=()=>navigateTo(-1);
  return(
    <div className="banner-container">
      <div className="back-button" >
        <img src="/Assets/backbutton.svg" alt="Back button" onClick={goBack} />
      </div>
      <div className="main-content">
   
        <div className="image-container">
          <img src="/Sabar/SabarTitle.svg" alt="KosherWave header"/>
        </div>
      </div>
    </div>
  );
}

export default SabarBanner;