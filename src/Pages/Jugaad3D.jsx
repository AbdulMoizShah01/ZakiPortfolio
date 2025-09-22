import JugaadBanner from "../Components/Jugaad/JugaadBanner";
import JugaadContribution from "../Components/Jugaad/JugaadContribution";
import JugaadDescription from "../Components/Jugaad/JugaadDescrption";
import JugaadProcess from "../Components/Jugaad/JugaadProcess";
import JugaadVideo from "../Components/Jugaad/JugaadVideo";
import ConnectSection from "../Components/Kosher/ConnectSection";
import "../Pages/Pages.css";
import ScrollToTop from "./ScrollToTop";


function Jugaad3D (){
  return(
    <>
    <ScrollToTop/>
     <div className="app-container">
      {/* Left Border */}
      <div className="border-svg left-border">
       <img src='/Jugaad/jugaad-s-left.svg'/>
  
      </div>

      {/* Main Content */}
      <div className="content">
            <JugaadBanner/>
            <JugaadDescription/>
            <JugaadContribution/>
            <JugaadProcess/>
            <JugaadVideo/>
            <ConnectSection/>
      </div>

      {/* Right Border */}
      <div className="border-svg right-border">
       <img src='/Jugaad/jugaad-s-right.svg'/>
      </div>
    </div>
    </>
  );
}
export default Jugaad3D;