import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  Calculator,
  LineChart,
  Cast,
  Play,
  UserRound,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sectionOffsets = menuItem
        .map((item) => {
          const section = document.querySelector(item.link);
          if (section) {
            const rect = section.getBoundingClientRect();
            return {
              id: item.id,
              offsetTop: rect.top + window.scrollY,
            };
          }
          return null;
        })
        .filter(Boolean);

      const current = sectionOffsets.findLast(
        (section) => window.scrollY >= section.offsetTop - 100
      );

      if (current) {
        setActiveSection(current.id);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItem = [
    {
      id: "Calculadora",
      icon: <Calculator className="icon-shadow lg:w-5 lg:h-5" />,
      link: "#calcBTC",
    },
    {
      id: "Grafico",
      icon: <LineChart className="icon-shadow lg:w-5 lg:h-5" />,
      link: "#chartBTC",
    },
    {
      id: "Directos",
      icon: <Cast className="icon-shadow lg:w-5 lg:h-5" />,
      link: "#liveStreams",
    },
    {
      id: "Trabaja Conmigo",
      icon: <Play className="icon-shadow lg:w-5 lg:h-5" />,
      link: "#workWithMe",
    },
    {
      id: "Redes Sociales",
      icon: <UserRound className="icon-shadow lg:w-5 lg:h-5" />,
      link: "#socialMedia",
    },
    {
      id: "Mercaderia",
      icon: <ShoppingCart className="icon-shadow lg:w-5 lg:h-5" />,
      link: "#merch",
    },
  ];

  return (
    <nav className="relative p-4 z-30 -mb-5">
      <div
        className={`fixed -top-2 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-black/40 shadow-md" : "bg-transparent"
        } flex justify-between items-center`}
      >
        <motion.div
          className="flex items-center ml-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1,
          }}
        >
          <Logo />
        </motion.div>
        <motion.div
          className="lg:hidden absolute top-4 right-4 icon-shadow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 25,
            duration: 0.5,
          }}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-8 h-8 -mr-2 mt-2" />
            ) : (
              <Menu className="w-8 h-8 -mr-2 mt-2" />
            )}
          </button>
        </motion.div>
        <div className="hidden mr-5 lg:flex lg:space-x-6 justify-end lg:mt-1.5">
          {menuItem.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              className={`flex items-center space-x-2 text-shadow lg:text-[15px] font-bold hover:text-white hover:scale-108 transition-all duration-500 ${
                activeSection === item.id ? "text-white scale-110" : ""
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              {item.icon}
              <span>{item.id}</span>
            </motion.a>
          ))}
        </div>
        <motion.div
          className={`absolute top-20 left-0 right-0 w-full z-20 p-4 flex flex-col items-center justify-center space-y-2 lg:hidden backdrop-blur-md bg-black/80`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 1,
          }}
        >
          {menuItem.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              className={`flex items-center justify-center space-x-2 text-shadow font-bold w-full text-center ${
                activeSection === item.id ? "text-white scale-110" : ""
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.id}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default NavMenu;
