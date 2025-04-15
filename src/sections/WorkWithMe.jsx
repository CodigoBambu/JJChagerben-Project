import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Buttons from "../components/Buttons";
import WorkIMG from "/assets/workwithme.webp";

const WorkWithMe = () => {
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
  const listWork = [
    {
      id: "Directos",
      content: "Estar pendiente de los Directos en mis Redes Sociales.",
    },
    {
      id: "Reglas",
      content: "Reglas para el Trabajo en el Grupo de Editores.",
    },
    {
      id: "Edicion",
      content:
        "Tener conocimientos en Programas de Edición como CapCut u otros Editores.",
    },
  ];

  return (
    <section
      ref={ref}
      id="workWithMe"
      className="flex flex-col w-full min-h-screen p-4 text-center text-shadow text-black font-bold bg-[#3b3b3b] lg:flex-row lg:items-center lg:justify-between"
    >
      <motion.div
        className="flex justify-center mb-8 lg:justify-start lg:mb-0 lg:ml-8 order-last lg:order-first"
        variants={slideInTop}
        initial="initial"
        animate={animateImage ? "animate" : "initial"}
        exit="exit"
      >
        <img
          src={WorkIMG}
          alt="Work Image"
          className="box-shadow rounded-2xl h-auto w-[80%]"
        />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center w-full mb-8 lg:w-1/2 lg:items-start lg:text-left lg:mb-0 lg:pl-8"
        variants={slideInTop}
        initial="initial"
        animate={animateText ? "animate" : "initial"}
        exit="exit"
      >
        <div className="text-center lg:text-left mb-5">
          <span className="text-lg text-white">¿Sabes Sobre Edicion?</span>
          <h1 className="text-4xl text-black">Trabaja Conmigo</h1>
        </div>
        <ul className="list-none p-0">
          {listWork.map((item) => (
            <li key={item.id} className="text-lg mb-2 text-white">
              - {item.content}
            </li>
          ))}
        </ul>
        <div className="mt-4 lg:mt-8 hover:scale-105 transition-all duration-300">
          <Buttons text="Grupo de Editores" className="hover:text-white" externalLink="https://api.whatsapp.com/send?phone=593961612048" />
        </div>
      </motion.div>
    </section>
  );
};

export default WorkWithMe;
