import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SectionPricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sectionPricing");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;

      setIsVisible(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -50,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      title: "Pools De Liquidez",
      description: "Herramienta Gráfica",
      price: "$200",
      payment: "Por Mes",
      features: [
        "Mapa de calor de liquidación",
        "Gráfico de alta frecuencia",
        "Cuadro histórico",
        "TrenDiff: Indicador de tendencia",
        "Complemento BitXpander",
        "ETF y empresas: titulares de Bitcoin",
      ],
      link: "https://tradingdifferent.com/?ref=YELgWNnX",
    },
    {
      title: "Mentoría Premium",
      description: "Precio VIP",
      price: "$150",
      payment: "UN SOLO PAGO",
      features: [
        "Si te equivocas yo te daré una pu#@da",
        "Aprende a Reconocer estafas",
        "Como crear tus wallets",
        "Como guardar tus llaves privadas",
        "Como comprar BTC al mejor precio del mercado",
        "Mis estrategias de inversión",
        "Acceso al grupo de difusión exclusivo para ALUMNOS",
      ],
      link: "https://api.whatsapp.com/send/?phone=593998177135&text=Información+sobre+la+MENTORIA+PREMIUM",
    },
    {
      title: "No Hagas Trading",
      description: "BitMex",
      price: "0$",
      payment: "No Hagas TRADING",
      features: [
        "Si pierdes dinero te P#t3o",
        "No hacer TRADING",
        "Compra y Guarda",
        "Deja de ser P3nd3j0",
        "Si haces Trading te P#t3o",
        "No valgas V3rg4",
      ],
      link: "https://www.bitmex.com/app/register",
    },
  ];

  const middleIndex = Math.floor(services.length / 2);

  return (
    <section
      className="flex flex-col text-center text-shadow font-bold py-20"
      id="sectionPricing"
    >
      <motion.div
        className="py-10"
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.span className="lg:text-xl" variants={titleVariants}>
          Rango de Servicios
        </motion.span>
        <motion.h2
          className="text-3xl lg:text-5xl mt-1"
          variants={titleVariants}
        >
          Lista de Precios
        </motion.h2>
      </motion.div>

      <div className="flex flex-col items-center justify-center w-6/ mx-auto p-5 space-y-10 rounded-2xl lg:flex-row lg:space-x-10">
        <AnimatePresence>
          {isVisible &&
            services.map((service, index) => {
              const isMiddle = index === middleIndex;
              return (
                <motion.div
                  key={service.title}
                  custom={
                    index === middleIndex ? 0 : index < middleIndex ? 1 : 2
                  }
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`
                    group box-shadow rounded-2xl p-10 hover:scale-105 backdrop-blur-2xl hover:text-white transition-all duration-300 cursor-pointer
                    ${
                      isMiddle
                        ? "lg:min-h-[550px] bg-gray-500/60 hover:bg-transparent"
                        : "lg:min-h-[450px] hover:bg-gray-500/60 "
                    }
                    w-full max-w-sm flex flex-col items-center text-center
                  `}
                >
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center items-center"
                  >
                    <div className="mb-2 mt-10">
                      <h1 className="text-xl my-2">{service.title}</h1>
                      <span> {service.description}</span>
                      <strong> {service.price}</strong>
                    </div>
                    <span className="text-xl text-white group-hover:text-black duration-400">
                      {service.payment}
                    </span>
                    <ul className="my-5 text-left w-full">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>- {feature}</li>
                      ))}
                    </ul>
                  </a>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SectionPricing;
