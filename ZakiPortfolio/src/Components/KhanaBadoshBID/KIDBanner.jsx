import "../Kosher/KosherBanner.css";

function KIDBanner() {
  return(
    <div className="ki-banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button"/>
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