import "../Pages/Pages.css";
import KosherBanner from "../Components/Kosher/KosherBanner";
import KosherDescription from "../Components/Kosher/KosherDescription";
import ContributionSection from "../Components/Kosher/Contribution";
import KosherDesigns from "../Components/Kosher/KosherDesigns";
import KosherMockups from "../Components/Kosher/KosherMockups";
import ConnectSection from "../Components/Kosher/ConnectSection";
import ScrollToTop from "./ScrollToTop";

function KosherWave (){
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
        <KosherBanner/>
        <KosherDescription/>
        <ContributionSection/>
        <KosherDesigns/>
        <KosherMockups/>
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
export default KosherWave;