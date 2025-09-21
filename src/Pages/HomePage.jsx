import CoinInsertGame from '../Components/CoinMachine';
import Info from '../Components/Info';
import PortfolioBanner from "../Components/PortfolioBanner"
import PowerUpSelector from "../Components/PowerUpSelector";
import WorkSection from '../Components/WorkSection';
import ProfileCard from '../Components/ProfileCard';
import TopBar from '../Components/TopBar';



function HomePage () {


  return(
    <>
    <TopBar/>
    <div className='main-home'>
      
       
          <PortfolioBanner/>
        <CoinInsertGame/>   
        <Info/>
   
        <PowerUpSelector/>
        <WorkSection/>
        <ProfileCard/>
    </div>
    </>
  );
}

export default HomePage;