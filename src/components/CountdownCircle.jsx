import React from "react";

const CountdownCircle = ({
  label,
  value,
  dotTransform,
  strokeDashoffset,
  dotRef,
}) => {
  return (
    <div className="relative w-full h-full sm:w-40 flex items-center justify-center text-shadow z-10">
      <svg
        className="w-full h-full transform rotate-[-90deg] circle-shadow"
        viewBox="0 0 140 140"
      >
        <circle
          cx="70"
          cy="70"
          r="70"
          className="stroke-[#585858] stroke-[15] fill-black/40 backdrop-blur-2xl"
        />
        <circle
          cx="70"
          cy="70"
          r="70"
          className="stroke-[#a8a8a8] stroke-[15] fill-transparent"
          style={{ strokeDasharray: "440", strokeDashoffset }}
        />
      </svg>
      <div className="absolute text-center font-bold text-lg sm:text-3xl">
        {value}
        <span className="block text-[10px] font-bold -mt-2 sm:text-lg">
          {label}
        </span>
      </div>
      <div
        className="absolute w-full h-full rounded-full flex justify-center items-start overflow-visible"
        style={{ transform: dotTransform }}
        ref={dotRef}
      >
        <div className="absolute w-2 h-2 rounded-full bg-[#a8a8a8] top-[calc(-30px*0.057)] sm:top-[calc(-60px*0.057)] sm:w-3.5 sm:h-3.5" />
      </div>
    </div>
  );
};

export default CountdownCircle;
