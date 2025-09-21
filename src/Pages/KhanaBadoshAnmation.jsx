import KABanner from "../Components/KhanaBadoshAnimation/KABanner";
import KAContribution from "../Components/KhanaBadoshAnimation/KAContribution";
import KADescription from "../Components/KhanaBadoshAnimation/KADescription";
import KaVideo from "../Components/KhanaBadoshAnimation/KaVideo";
import ConnectSection from "../Components/Kosher/ConnectSection";

import "../Pages/Pages.css";
import ScrollToTop from "./ScrollToTop";


function KhanaBadoshAnimation (){
  return(
    <>
    <ScrollToTop/>
     <div className="app-container">
      {/* Left Border */}
      <div className="border-svg left-border">
       <img src='/Assets/SidelineLeft.svg'/>
  
      </div>

      {/* Main Content */}
      <div className="content">
        <KABanner/>
        <KADescription/>
        <KAContribution/>
       <KaVideo/>
        <ConnectSection/>
      </div>

      {/* Right Border */}
      <div className="border-svg right-border">
       <img src='/Assets/SidlineRight.svg'/>
      </div>
    </div>
    </>
  );
}
export default KhanaBadoshAnimation;