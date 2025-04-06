import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    <div className="relative items-center justify-center py-10 my-10 text-shadow lg:bg-[#181818] lg:my-0">
      <div className="relative flex flex-col gap-6 cursor-pointer lg:flex-row lg:gap-0 lg:justify-center z-20">
        {trilemaItems.map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { amount: 0.3 });

          return (
            <motion.div
              key={item.id}
              ref={ref}
              initial={{ y: -50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.3,
              }}
              className="relative rounded-lg p-6 mx-5 box-shadow backdrop-blur-2xl hover:scale-105 transition-all duration-500 hover:text-white lg:-mt-35"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">
                <strong>{item.title}</strong>
              </h3>
              <p className="mt-2 font-bold">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TrilemaCrypto;
