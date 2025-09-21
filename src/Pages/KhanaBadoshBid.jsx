import "../Pages/Pages.css";
import KIDBanner from "../Components/KhanaBadoshBID/KIDBanner";
import KIDDescription from "../Components/KhanaBadoshBID/KIDDescription";
import BIdSection from "../Components/KhanaBadoshBID/BIdSection";
import Campaign from "../Components/KhanaBadoshBID/Campaign";
import KIDMockups from "../Components/KhanaBadoshBID/KIDMockups";
import ConnectSection from "../Components/Kosher/ConnectSection";
import ScrollToTop from "./ScrollToTop";


function KhanaBadoshBid (){
  return(
    <>
    <ScrollToTop/>
     <div className="app-container">
      {/* Left Border */}
      <div className="border-svg left-border">
       <img src='/KhanabadoshID/Sideline-left.svg'/>
       <img src='/KhanabadoshID/Sideline-left-bottom.svg'/>
      </div>

      {/* Main Content */}
      <div className="content">
        <KIDBanner/>
        <KIDDescription/>
        <BIdSection/>
        <Campaign/>
        <KIDMockups/>
        <ConnectSection/>
      </div>

      {/* Right Border */}
      <div className="border-svg right-border">
       <img src='/KhanabadoshID/Sideline-right.svg'/>
       <img src='/KhanabadoshID/Sideline-right-bottom.svg'/>
      </div>
    </div>
    </>
  );
}
export default KhanaBadoshBid;