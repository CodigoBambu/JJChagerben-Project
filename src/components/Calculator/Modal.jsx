import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen]);

  const modalOverlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalContentVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      scale: 1,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full font-bold text-black text-shadow backdrop-blur-xs bg-black/30 flex justify-center items-center z-50"
          variants={modalOverlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="backdrop-blur-3xl bg-black/80 box-shadow rounded-md shadow-lg p-6 w-5/6 relative"
            variants={modalContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-2 text-white icon-shadow hover:text-black hover:scale-105 cursor-pointer transition-all duration-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl -mt-4 mb-10 cursor-pointer hover:text-white transition-all duration-300 inline-block">
              Nomenclatura
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center text-xl -mt-5 mb-2">
                <span className="mr-2">PBTC =</span>
                <div className="flex flex-col items-center">
                  <div className="mb-1">
                    (RI * CP) * 2<sup>NH</sup>
                  </div>
                  <div className="w-full border-1 border-transpatent box-shadow"></div>
                  <div className="mt-1">RF</div>
                </div>
              </div>
              <div className="text-lg space-y-1 text-center">
                <p>RI = Recompensa Inicial</p>
                <p>RF = Recompensa Final</p>
                <p>NH = Número de Halvings</p>
                <p>CP = Costo de Producción</p>
                <p>PBTC = Precio de Bitcoin</p>
              </div>
            </div>
            <div className="lg:w-3xl border-1 mt-5 border-transparent box-shadow mx-auto"></div>
            <div className="pt-4">
              <p className="italic text-lg text-center">
                "No importa cuando leas esto, Bitcoin siempre será barato"
              </p>
              <p className="text-center mt-6 cursor-pointer hover:scale-105 text-shadow hover:text-white transition-all duration-300">
                <span className="text-2xl inline-block">-</span> JJ CHAGERBEN{" "}
                <span className="text-2xl inline-block">-</span>{" "}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
