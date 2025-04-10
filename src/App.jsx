import { useState } from "react";
import "./styles/App.css";
import Hero from "./sections/Hero";
import TrilemaCrypto from "./components/TrilemaCrypto";
import CryptopIntrudictions from "./sections/CryptoIntroductions";
import CalcBTC from "./sections/CalcBTC";
import ChartBTC from "./sections/ChartBTC";
import AboutMe from "./sections/AboutMe";
import Lives from "./sections/LiveSteams";
import WorkWithMe from "./sections/WorkWithMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <TrilemaCrypto />
      <CryptopIntrudictions />
      <CalcBTC />
      <ChartBTC />
      <AboutMe />
      <Lives />
      <WorkWithMe />
    </>
  );
}

export default App;
