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

function App() {
  const [count, setCount] = useState(0);

  return (
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
    </>
  );
}

export default App;
