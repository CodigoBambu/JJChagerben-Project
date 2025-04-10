import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import LivesIMG from "/assets/lives.webp";
import Buttons from "../components/Buttons";

const LiveSteams = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -200px 0px",
  });
  const [animateImage, setAnimateImage] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    let imageTimeout;
    let textTimeout;

    if (isInView) {
      imageTimeout = setTimeout(() => {
        setAnimateImage(true);
      }, 100);
      textTimeout = setTimeout(() => {
        setAnimateText(true);
      }, 600);
    } else {
      setAnimateImage(false);
      setAnimateText(false);
    }

    return () => {
      clearTimeout(imageTimeout);
      clearTimeout(textTimeout);
    };
  }, [isInView]);

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

  const listLives = [
    { id: "Horario", content: " Hora de los directos: 20:00 PM" },
    { id: "Zona Horaria", content: "Zona Horaria: UTC - 05:00." },
    {
      id: "Directos",
      content: "Directos en mis redes sociales: (TikTok - Twitch - YouTube)",
    },
  ];

  return (
    <section
      ref={ref}
      id="liveStreams"
      className="flex flex-col w-full min-h-screen  text-black text-shadow items-center justify-center p-4 text-center lg:flex-row lg:space-x-20"
    >
      <motion.div
        className="flex flex-col justify-center items-center text-center text-shadow text-black font-bold w-full mb-8 lg:w-1/2 lg:items-start lg:pr-8"
        variants={slideInTop}
        initial="initial"
        animate={animateText ? "animate" : "initial"}
        exit="exit"
      >
        <div className="mt-10 mb-3">
          <h1 className="text-2xl font-bold lg:text-left">
            Directos De Lunes a Domingos
          </h1>
        </div>
        <ul className="list-none p-0 lg:text-left">
          {listLives.map((item) => (
            <li key={item.id} className="text-lg mb-2 text-white">
              - {item.content}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center w-full mt-4 lg:flex-row">
          <div className="flex justify-center">
            <Buttons text="Youtube" />
            <Buttons text="Twitch" />
          </div>
          <div className="flex justify-center">
            <Buttons text="TikTok" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        variants={slideInTop}
        initial="initial"
        animate={animateImage ? "animate" : "initial"}
        exit="exit"
      >
        <img
          src={LivesIMG}
          alt="Lives Image"
          className="box-shadow rounded-2xl h-auto object-cover mb-10"
        />
      </motion.div>
    </section>
  );
};

export default LiveSteams;
