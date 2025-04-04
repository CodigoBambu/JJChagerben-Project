import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-4">
        <div className="relative w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.days || "00"}</span>
          <span className="absolute bottom-0 text-sm">Días</span>
          <div
            className="absolute w-2 h-2 rounded-full bg-blue-700"
            style={{
              top: `calc(50% - 1px)`,
              left: `calc(50% - 1px)`,
              transform: `rotate(${
                timeLeft.days * 0.986
              }deg) translateY(-11px)`,
            }}
          ></div>
        </div>
        <div className="relative w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.hours || "00"}</span>
          <span className="absolute bottom-0 text-sm">Horas</span>
          <div
            className="absolute w-2 h-2 rounded-full bg-green-700"
            style={{
              top: `calc(50% - 1px)`,
              left: `calc(50% - 1px)`,
              transform: `rotate(${timeLeft.hours * 15}deg) translateY(-11px)`,
            }}
          ></div>
        </div>
        <div className="relative w-24 h-24 rounded-full border-4 border-yellow-500 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.minutes || "00"}</span>
          <span className="absolute bottom-0 text-sm">Minutos</span>
          <div
            className="absolute w-2 h-2 rounded-full bg-yellow-700"
            style={{
              top: `calc(50% - 1px)`,
              left: `calc(50% - 1px)`,
              transform: `rotate(${timeLeft.minutes * 6}deg) translateY(-11px)`,
            }}
          ></div>
        </div>
        <div className="relative w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">
          <span className="text-2xl font-bold">{timeLeft.seconds || "00"}</span>
          <span className="absolute bottom-0 text-sm">Segundos</span>
          <div
            className="absolute w-2 h-2 rounded-full bg-red-700"
            style={{
              top: `calc(50% - 1px)`,
              left: `calc(50% - 1px)`,
              transform: `rotate(${timeLeft.seconds * 6}deg) translateY(-11px)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
