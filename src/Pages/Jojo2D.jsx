
import JojoBanner from "../Components/Jojo2D/JojoBanner";
import JojoContribution from "../Components/Jojo2D/JojoContribution";
import JojoDescription from "../Components/Jojo2D/JojoDescription";
import JojoProcess from "../Components/Jojo2D/JojoProcess";
import JojoVideo from "../Components/Jojo2D/JojoVideo";
import ConnectSection from "../Components/Kosher/ConnectSection";
import "../Pages/Pages.css";
import ScrollToTop from "./ScrollToTop";


function Jojo2D (){
  return(
    <>
    <ScrollToTop/>
     <div className="app-container">
      {/* Left Border */}
      <div className="border-svg left-border">
       <img src='/Jojo2D/jojo-s-left.svg'/>
  
      </div>

      {/* Main Content */}
      <div className="content">
          <JojoBanner/>
          <JojoDescription/>
          <JojoContribution/>
          <JojoProcess/>
          <JojoVideo/>
          <ConnectSection/>
      </div>

      {/* Right Border */}
      <div className="border-svg right-border">
       <img src='/Jojo2D/jojo-s-right.svg'/>
      </div>
    </div>
    </>
  );
}
export default Jojo2D;