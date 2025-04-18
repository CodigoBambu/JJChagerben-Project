import { useState } from "react";
import "./styles/App.css";
import TrilemaCrypto from "./components/TrilemaCrypto";
import CursorEffect from "./scripts/CursorEffect";
import Hero from "./sections/Hero";
import CryptopIntrudictions from "./sections/CryptoIntroductions";
import CalcBTC from "./sections/CalcBTC";
import ChartBTC from "./sections/ChartBTC";
import AboutMe from "./sections/AboutMe";
import Lives from "./sections/LiveSteams";
import WorkWithMe from "./sections/WorkWithMe";
import SocialMedia from "./sections/SocialMedia";
import MerchSection from "./sections/Merch";
import SectionPricing from "./sections/Pricing";
import LoadingScreen from "./components/LoadingScreen";
import NavMenu from "./components/NavMenu";
import GoTop from "./components/GoTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <CursorEffect />
          <NavMenu />
          <Hero />
          <TrilemaCrypto />
          <CryptopIntrudictions />
          <CalcBTC />
          <ChartBTC />
          <AboutMe />
          <Lives />
          <WorkWithMe />
          <SocialMedia />
          <SectionPricing />
          <MerchSection />
          <GoTop />
        </>
      )}
    </>
  );
}

export default App;
