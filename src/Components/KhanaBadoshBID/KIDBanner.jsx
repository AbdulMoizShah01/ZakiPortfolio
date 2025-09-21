import "../Kosher/KosherBanner.css";
import { useNavigate } from "react-router-dom";
function KIDBanner() {
  const navigateTo=useNavigate();
  const goBack=()=>navigateTo(-1);
  return(
    <div className="ki-banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button" onClick={goBack}/>
      </div>
      <div className="main-content">
        <div className="heading">KhanaBadosh Brand Identity</div>
        <div className="image-container-kbid">
          <img src="/KhanabadoshID/banner.svg" alt="KhanaBadosh Banner"/>
        </div>
      </div>
    </div>
  );
}

export default KIDBanner;