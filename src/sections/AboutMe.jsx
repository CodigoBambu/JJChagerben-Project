import React, { useRef, useState, useEffect } from "react";
import JJChagerbenIMG from "/assets/jjchagerben.webp";
import BuyAndSave from "/assets/buyandsave.webm";
import Button from "../components/Buttons";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -200px 0px",
  });
  const [animateImageIn, setAnimateImageIn] = useState(false);
  const [animateTextIn, setAnimateTextIn] = useState(false);
  const [animateVideoIn, setAnimateVideoIn] = useState(false);
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
      const timerVideoIn = setTimeout(() => {
        setAnimateVideoIn(true);
      }, 1100);
      return () => {
        clearTimeout(timerImageIn);
        clearTimeout(timerTextIn);
        clearTimeout(timerVideoIn);
      };
    } else if (isVisible && !hasLeftView) {
      setAnimateImageIn(false);
      setAnimateTextIn(false);
      setAnimateVideoIn(false);
      const timerOut = setTimeout(() => {
        setIsVisible(false);
        setHasLeftView(true);
      }, 500);
      return () => clearTimeout(timerOut);
    } else if (!isInView) {
      setAnimateImageIn(false);
      setAnimateTextIn(false);
      setAnimateVideoIn(false);
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
  const listAbout = [
    { id: "Engineer", content: "Petroleum Engineer." },
    { id: "Jubilado", content: "Jubilado gracias a Bitcoin." },
    { id: "Inversionista", content: "Inversionista en Cripto-Activos." },
  ];

  return (
    <section
      ref={ref}
      id="aboutMe"
      className="flex flex-col lg:flex-row w-full py-30 min-h-screen bg-[#222] items-center justify-center text-white p-4"
    >
      <motion.div
        className="flex justify-center items-center  mb-8 lg:w-1/3 lg:justify-start lg:mb-0 lg:pr-8"
        animate={animateImageIn ? "animate" : "initial"}
        exit={!isVisible && hasLeftView ? "exit" : undefined}
        variants={slideInTop}
      >
        <img
          src={JJChagerbenIMG}
          alt="JJChagerben Image"
          className="box-shadow rounded-full max-w-md w-3/4 h-auto object-cover lg:w-auto lg:max-w-xs"
        />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center text-center text-shadow text-black font-bold w-full mb-8 lg:w-1/3"
        animate={animateTextIn ? "animate" : "initial"}
        exit={!isVisible && hasLeftView ? "exit" : undefined}
        variants={slideInTop}
      >
        <h1 className="text-4xl font-bold mb-4">JJChagerben</h1>
        <ul className="list-none p-0">
          {listAbout.map((item) => (
            <li key={item.id} className="text-lg mb-2 text-white">
              - {item.content}
            </li>
          ))}
        </ul>
        <Button text="Redes Sociales" className="hover:text-white" />
      </motion.div>
      <motion.div
        className="flex justify-center items-center lg:w-1/3 lg:justify-end lg:pl-8"
        animate={animateVideoIn ? "animate" : "initial"}
        exit={!isVisible && hasLeftView ? "exit" : undefined}
        variants={slideInTop}
      >
        <video
          src={BuyAndSave}
          controls
          className="max-w-md w-3/4 h-auto box-shadow rounded-md lg:w-auto lg:max-w-xs"
        />
      </motion.div>
    </section>
  );
};

export default AboutMe;
