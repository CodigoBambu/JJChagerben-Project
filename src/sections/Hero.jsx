import React, { useEffect, useState, useRef } from "react";
import { startCountdown } from "../scripts/CountDownLogic";
import CountdownCircle from "../components/CountdownCircle";
import Button from "../components/Buttons";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import "../styles/HeaderBG.css";

const Hero = () => {
  const [timeData, setTimeData] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    transforms: {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    },
    offsets: {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    },
  });
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const headerY = useTransform(scrollY, [0, 300], [0, -100]);
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
    startCountdown(endDate, setTimeData);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header className="header relative bg-fixed bg-cover w-full box-shadow">
      <div className="area z-10">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.section
            className="absolute top-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-screen-xl mb-20 sm:mt-10 lg:top-75"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ opacity: headerOpacity, y: headerY }}
          >
            <motion.div
              className="flex justify-center items-center mb-8 gap-2 max-w-[400px] mx-auto sm:flex-nowrap sm:max-w-full sm:gap-5 lg:mt-30"
              variants={itemVariants}
            >
              <CountdownCircle
                label="Días"
                value={timeData.days}
                dotTransform={timeData.transforms.days}
                strokeDashoffset={timeData.offsets.days}
              />
              <CountdownCircle
                label="Horas"
                value={timeData.hours}
                dotTransform={timeData.transforms.hours}
                strokeDashoffset={timeData.offsets.hours}
              />
              <CountdownCircle
                label="Minutos"
                value={timeData.minutes}
                dotTransform={timeData.transforms.minutes}
                strokeDashoffset={timeData.offsets.minutes}
              />
              <CountdownCircle
                label="Segundos"
                value={timeData.seconds}
                dotTransform={timeData.transforms.seconds}
                strokeDashoffset={timeData.offsets.seconds}
              />
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <motion.h1
                className="text-3xl text-shadow font-bold py-3 px-4 sm:text-5xl lg:text-7xl"
                variants={itemVariants}
              >
                <strong className="text-white">Bitcoin</strong> es{" "}
                <strong className="text-white">Sacarce</strong> la{" "}
                <strong className="text-white">Loteria</strong> en{" "}
                <strong className="text-white">Camara Lenta</strong>
              </motion.h1>
              <motion.h2
                className="text-shadow w-5/6 font-semibold py-3 lg:w-2/3 mx-auto"
                variants={itemVariants}
              >
                No importa el día ni el momento en que lo leas,{" "}
                <strong className="text-white">BITCOIN</strong> siempre será{" "}
                <strong className="text-white">Barato</strong> sin importar en
                qué precio esté.
                <strong className="text-white">
                  {" "}
                  BITCOIN será lo que pondrá el PAN en tu MESA.
                </strong>{" "}
              </motion.h2>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                text="Mentoria Premium"
                internalLink="sectionPricing"
                className="text-black hover:text-white"
              />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Hero;
