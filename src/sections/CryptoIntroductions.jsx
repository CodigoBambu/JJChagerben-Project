import { useRef, useState, useEffect } from "react";
import cryptoImage from "/assets/btc.webp";
import { motion, useInView } from "framer-motion";

const CryptopIntrudictions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -200px 0px",
  });
  const [animateImageIn, setAnimateImageIn] = useState(false);
  const [animateTextIn, setAnimateTextIn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLeftView, setHasLeftView] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      setHasLeftView(false);
      const timerImageIn = setTimeout(() => {
        setAnimateImageIn(true);
      }, 100);
      const timerTextIn = setTimeout(() => {
        setAnimateTextIn(true);
      }, 600);
      return () => {
        clearTimeout(timerImageIn);
        clearTimeout(timerTextIn);
      };
    } else if (isVisible && !hasLeftView) {
      setAnimateImageIn(false);
      setAnimateTextIn(false);
      const timerOut = setTimeout(() => {
        setIsVisible(false);
        setHasLeftView(true);
      }, 500);
      return () => clearTimeout(timerOut);
    } else if (!isInView) {
      setAnimateImageIn(false);
      setAnimateTextIn(false);
    }
  }, [isInView, isVisible, hasLeftView]);

  const slideInTop = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="text-center text-shadow bg-[#222] pb-15 relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center p-5 my-5 lg:mt-20">
        <motion.div
          className="order-2 lg:order-1 mt-5 lg:mt-0 "
          initial="initial"
          animate={animateImageIn ? "animate" : "initial"}
          exit={!isVisible && hasLeftView ? "exit" : undefined}
          variants={slideInTop}
        >
          <img
            src={cryptoImage}
            alt="CryptoImg"
            className="box-shadow rounded-2xl h-auto object-cover"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left lg:ml-15 order-1 lg:order-2"
          initial="initial"
          animate={animateTextIn ? "animate" : "initial"}
          exit={!isVisible && hasLeftView ? "exit" : undefined}
          variants={slideInTop}
        >
          <span className="font-bold">Introducción a las Criptomonedas</span>
          <h1 className="font-extrabold text-4xl my-5">
            ¿Qué son las <strong className="text-white">Criptomonedas?</strong>
          </h1>
          <p className="font-semibold">
            Una criptomoneda{" "}
            <strong className="text-white">
              (también llamada criptoactivo o criptodivisa)
            </strong>{" "}
            es un medio digital de intercambio que utiliza criptografía fuerte
            para asegurar las transacciones, controlar la creación de unidades
            adicionales y verificar la transferencia de activos usando
            tecnologías de registro distribuido.{" "}
            <strong className="text-white">
              Las criptomonedas son un tipo de divisa alternativa o moneda
              digital.
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptopIntrudictions;
