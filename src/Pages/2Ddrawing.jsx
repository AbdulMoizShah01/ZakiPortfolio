import TDBanner from "../Components/2Ddrawing/2Dbanner";
import TDContribution from "../Components/2Ddrawing/2DContribution";
import TdDescription from "../Components/2Ddrawing/2dDescription";
import TDMockups from "../Components/2Ddrawing/2DMockups";
import TDProcess from "../Components/2Ddrawing/2DProcess";
import ConnectSection from "../Components/Kosher/ConnectSection";
import "../Pages/Pages.css";
import ScrollToTop from "./ScrollToTop";



function Ddrawing (){
  return(
    <>
    <ScrollToTop/>
     <div className="app-container">
      {/* Left Border */}
      <div className="border-svg left-border">
       <img src='/2D/2DSideline-left.svg'/>
      </div>

      {/* Main Content */}
      <div className="content">
      <TDBanner/>
      <TdDescription/>
      <TDContribution/>
      <TDProcess/>
      <TDMockups/>
      <ConnectSection/>

      </div>

      {/* Right Border */}
      <div className="border-svg right-border">
       <img src='/2D/2DSideline-right.svg'/>
      </div>
    </div>
    </>
  );
}
export default Ddrawing;