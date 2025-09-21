import "../Kosher/KosherBanner.css";
import { useNavigate } from "react-router-dom";
function KABanner() {
  const navigateTo=useNavigate();
  const goBack=()=>navigateTo(-1);
  return(
    <div className="ki-banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button" onClick={goBack}/>
      </div>
      <div className="main-content">
        <div className="heading">KHANABADOSH LOGO ANIMATON</div>
        <div className="image-container-td" style={{marginTop:"10%"}}>
          <img src="/KhanabadoshID/KhanaBadoshCover.png" alt="KosherWave header"/>
        </div>
      </div>
    </div>
  );
}

export default KABanner;