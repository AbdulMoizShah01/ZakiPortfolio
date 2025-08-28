import "../Kosher/KosherBanner.css";

function KABanner() {
  return(
    <div className="banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button"/>
      </div>
      <div className="main-content">
        <div className="heading">KHANABADOSH LOGO ANIMATON</div>
        <div className="ka-image-container">
          <img src="/KhanabadoshID/KhanaBadoshCover.png" alt="KosherWave header"/>
        </div>
      </div>
    </div>
  );
}

export default KABanner;