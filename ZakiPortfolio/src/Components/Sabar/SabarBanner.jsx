import "../Kosher/KosherBanner.css";

function SabarBanner() {
  return(
    <div className="banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button"/>
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