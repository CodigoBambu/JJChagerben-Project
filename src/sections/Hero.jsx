import React, { useEffect, useState, useRef } from "react";
import { startCountdown } from "../components/CountDownLogic";
import CountdownCircle from "../components/CountdownCircle";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import Button from "../components/Buttons";

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
    const endDate = "04/13/2028 00:00:00";
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
    <header className="header bg-[url('/assets/background.webp')] bg-cover w-full box-shadow lg:h-[150vh]">
      <div className="w-50 flex justify-center items-center">
        <Logo />
      </div>
      <div className="mr-5 -mt-18 ">
        <NavMenu />
      </div>
      <section className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-screen-xl mb-20">
        <div className="flex justify-center items-center mb-8 gap-2 max-w-[400px] mx-auto sm:flex-nowrap sm:max-w-full sm:gap-5">
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
        <div className="text-center">
          <h1 className=" text-3xl text-shadow font-bold py-3 sm:text-5xl">
            <strong className="text-white">Bitcoin</strong> es{" "}
            <strong className="text-white"> Sacarce </strong>la{" "}
            <strong className="text-white">Loteria</strong> en{" "}
            <strong className="text-white">Camara Lenta</strong>
          </h1>
          <h2 className="text-shadow font-semibold py-3">
            No importa el día ni el momento en que lo leas,{" "}
            <strong className="text-white">BITCOIN</strong> siempre será{" "}
            <strong className="text-white">Barato</strong> sin importar en qué
            precio esté.
            <strong className="text-white">
              {" "}
              BITCOIN será lo que pondrá el PAN en tu MESA.
            </strong>{" "}
          </h2>
        </div>
        <Button text="Mentoria Premium" to="/"/>

      </section>
    </header>
  );
};

export default Header;
