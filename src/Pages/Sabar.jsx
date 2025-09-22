import ConnectSection from "../Components/Kosher/ConnectSection";
import SabarBanner from "../Components/Sabar/SabarBanner";
import SabarContribution from "../Components/Sabar/SabarContribution";
import SabarDescription from "../Components/Sabar/SabarDescription";
import SabarProcess from "../Components/Sabar/SabarProcess";
import SabarVideo from "../Components/Sabar/SabarVideo";
import "../Pages/Pages.css";
import ScrollToTop from "./ScrollToTop";

function Sabar (){
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
        <SabarBanner/>
        <SabarDescription/>
        <SabarContribution/>
        <SabarProcess/>
        <SabarVideo/>
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
export default Sabar;