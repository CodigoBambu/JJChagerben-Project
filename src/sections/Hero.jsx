import React, { useEffect, useState, useRef } from "react";
import { startCountdown } from "../components/CountDownLogic";
import CountdownCircle from "../components/CountdownCircle";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";

const Header = () => {
  const [timeData, setTimeData] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);
  const dayDotRef = useRef(null);
  const hourDotRef = useRef(null);
  const minDotRef = useRef(null);
  const secDotRef = useRef(null);

  useEffect(() => {
    const endDate = "04/14/2028 00:00:00";
    startCountdown(endDate, setTimeData, {
      daysRef,
      hoursRef,
      minutesRef,
      secondsRef,
      dayDotRef,
      hourDotRef,
      minDotRef,
      secDotRef,
    });
  }, []);

  return (
    <header className="bg-[url('/assets/background.webp')] bg-cover h-screen w-full">
      <div className="w-50 flex justify-center items-center">
        <Logo />
      </div>
      <div className="mr-5 -mt-18 ">
        <NavMenu />
      </div>
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-screen-xl mb-20">
        <div className="flex justify-center items-center gap-1 max-w-[400px] mx-auto sm:flex-nowrap sm:max-w-full">
          <CountdownCircle
            id="days"
            label="Días"
            value={timeData.days}
            dotTransform={`rotateZ(${timeData.days * 0.986}deg)`}
            strokeDashoffset={440 - (440 * timeData.days) / 365}
          />
          <CountdownCircle
            id="hours"
            label="Horas"
            value={timeData.hours}
            dotTransform={`rotateZ(${timeData.hours * 15}deg)`}
            strokeDashoffset={440 - (440 * timeData.hours) / 24}
          />
          <CountdownCircle
            id="minutes"
            label="Minutos"
            value={timeData.minutes}
            dotTransform={`rotateZ(${timeData.minutes * 6}deg)`}
            strokeDashoffset={440 - (440 * timeData.minutes) / 60}
          />
          <CountdownCircle
            id="seconds"
            label="Segundos"
            value={timeData.seconds}
            dotTransform={`rotateZ(${timeData.seconds * 6}deg)`}
            strokeDashoffset={440 - (440 * timeData.seconds) / 60}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
