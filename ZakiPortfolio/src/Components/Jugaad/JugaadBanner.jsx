import "../Kosher/KosherBanner.css";

function JugaadBanner() {
  return(
    <div className="banner-container">
      <div className="back-button">
        <img src="/Assets/backbutton.svg" alt="Back button"/>
      </div>
      <div className="main-content">
        <div className="heading">JUGAAD 3D PROJECT</div>
        <div className="image-container">
          <img src="/Jugaad/JugaadBanner.png" alt="KosherWave header"/>
        </div>
      </div>
    </div>
  );
}

export default JugaadBanner;