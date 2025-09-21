import "../Kosher/KosherBanner.css";
import { useNavigate } from "react-router-dom";

function TDBanner() {
  const navigateTo=useNavigate();
  const goBack=()=>navigateTo(-1);
  return(
    <div className="ki-banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button" onClick={goBack}/>
      </div>
      <div className="main-content">
        <div className="heading">2D Digital Drawing</div>
        <div className="image-container-td">
          <img src="/2D/2Dbanner.png" alt="KosherWave header"/>
        </div>
      </div>
    </div>

  

  );
}

export default TDBanner;