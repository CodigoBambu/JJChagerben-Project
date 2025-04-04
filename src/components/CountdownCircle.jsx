import React from "react";

const CountdownCircle = ({ label, value, dotTransform, strokeDashoffset }) => {
  return (
    <div className="relative w-20 h-40 sm:w-40 flex items-center justify-center text-shadow ">
      <svg
        className="w-full h-full transform rotate-[-90deg]"
        viewBox="0 0 160 160"
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          className="stroke-[#282828] stroke-[8] fill-transparent stroke-linecap-round"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
          className="stroke-current stroke-[8] fill-transparent stroke-linecap-round"
          style={{ strokeDasharray: "440", strokeDashoffset }}
        />
      </svg>
      <div className="absolute text-center text-[#141418] font-bold text-2xl">
        {value}
        <span className="block text-lg font-bold -mt-1">{label}</span>
      </div>
      <div
        className="absolute w-full h-full rounded-full flex justify-center items-start overflow-visible"
        style={{ transform: dotTransform }}
      >
        <div className="absolute top-[40px] sm:top-[4px] w-3 h-3 rounded-full bg-current shadow-[0_0_20px_currentColor,0_0_60px_currentColor]" />
      </div>
    </div>
  );
};

export default CountdownCircle;
