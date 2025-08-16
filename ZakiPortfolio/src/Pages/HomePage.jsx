import CoinInsertGame from '../Components/CoinMachine';
import Info from '../Components/Info';
import PortfolioBanner from "../Components/PortfolioBanner"
import PowerUpSelector from "../Components/PowerUpSelector";
import WorkSection from '../Components/WorkSection';
import ProfileCard from '../Components/ProfileCard';



function HomePage () {


  return(
    <>
        <PortfolioBanner/>
        <CoinInsertGame/>
        <Info/>
        <PowerUpSelector/>
        <WorkSection/>
        <ProfileCard/>
    </>
  );
}

export default HomePage;