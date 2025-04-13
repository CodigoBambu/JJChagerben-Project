<<<<<<< HEAD
import React from "react";
import MerchContent from "./sections/MerchContent";
import Header from "./sections/Header";
import PriceMentoring from "./sections/PriceMentoring";
import CryptoContent from "./sections/CryptoContent";
import CalcBTC from "./sections/CalcBTC";
import CryptoChart from "./sections/CryptoChart";
import AboutJJChagerben from "./sections/AboutJJChagerben";
import LivesContent from "./sections/LivesContent";
import WorkWithMeContent from "./sections/WorkWithMe";
import MenuNav from "./components/layout/NavMenu";
import SocialMediaContent from "./components/common/SocialMediaContent";
import TrilemaContent from "./components/layout/TrilemaContent";
import SmoothScroll from "./utils/SmootScroll";
import PointerEffect from "./utils/PointerEfects";

const App = () => {
  return (
    <div>
      <MenuNav />
      <PointerEffect />
      <SmoothScroll />
      <div id="main-content" data-scroll-section>
        <Header />
        <TrilemaContent />
        <CryptoContent />
        <CalcBTC />
        <CryptoChart />
        <AboutJJChagerben />
        <LivesContent />
        <WorkWithMeContent />
        <SocialMediaContent />
        <MerchContent />
        <PriceMentoring />
      </div>
    </div>
  );
};
=======
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
        </>
      )}
    </>
  );
}
>>>>>>> develop

export default App;
