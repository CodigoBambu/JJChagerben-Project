import React from "react";
import { ChartNoAxesCombined, GlobeLock, ServerOff } from "lucide-react";

const TrilemaCrypto = () => {
  const trilemaItems = [
    {
      id: "Escalabilidad",
      icon: <ChartNoAxesCombined className="w-8 h-6 icon-shadow" />,
      title: "Escalabilidad:",
      description:
        "La escalabilidad se refiere al objetivo de construir una blockchain que pueda admitir más y más transacciones por segundo.",
    },
    {
      id: "Seguridad",
      icon: <GlobeLock className="w-8 h-6 icon-shadow" />,
      title: "Seguridad:",
      description:
        "Una buena red de blockchain debe ser resistente a los ataques de entidades maliciosas.",
    },
    {
      id: "Descentralización",
      icon: <ServerOff className="w-8 h-6 icon-shadow" />,
      title: "Descentralización:",
      description:
        "Toda la estructura está organizada para que no haya una única persona u organización a cargo, sino que es descentralizada.",
    },
  ];
  return (
    <div className="relative items-center justify-center py-10 text-shadow lg:bg-[#181818]">
      <div className="relative flex flex-col gap-6 cursor-pointer lg:flex-row lg:gap-0 lg:justify-center lg:-mt-35 z-20">
        {trilemaItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg p-6 mx-5 box-shadow bg-[#0f0f0f] hover:scale-105 transition-all duration-500 hover:text-white"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4">
              <strong>{item.title}</strong>
            </h3>
            <p className="mt-2 font-bold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrilemaCrypto;
