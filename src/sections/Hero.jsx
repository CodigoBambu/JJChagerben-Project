import React, { useEffect, useState, useRef } from "react";
import { startCountdown } from "../scripts/CountDownLogic";
import CountdownCircle from "../components/CountdownCircle";
import NavMenu from "../components/NavMenu";
import Button from "../components/Buttons";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const Header = () => {
  const [timeData, setTimeData] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
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
    <header className="header bg-[url('/assets/background.webp')] bg-fixed bg-cover w-full box-shadow lg:h-[150vh]">
      <div className="z-50">
        <NavMenu />
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.section
            className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-screen-xl mb-20"
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
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <motion.h1
                className="text-3xl text-shadow font-bold py-3 sm:text-5xl lg:text-7xl"
                variants={itemVariants}
              >
                <strong className="text-white">Bitcoin</strong> es{" "}
                <strong className="text-white">Sacarce</strong> la{" "}
                <strong className="text-white">Loteria</strong> en{" "}
                <strong className="text-white">Camara Lenta</strong>
              </motion.h1>
              <motion.h2
                className="text-shadow font-semibold py-3"
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
              <Button text="Mentoria Premium" to="/" />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
