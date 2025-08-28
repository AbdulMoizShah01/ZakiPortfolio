import KABanner from "../Components/KhanaBadoshAnimation/KABanner";
import KAContribution from "../Components/KhanaBadoshAnimation/KAContribution";
import KADescription from "../Components/KhanaBadoshAnimation/KADescription";
import ConnectSection from "../Components/Kosher/ConnectSection";
import SabarVideo from "../Components/Sabar/SabarVideo";
import "../Pages/Pages.css";


function KhanaBadoshAnimation (){
  return(
    <>
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
        <SabarVideo/>
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