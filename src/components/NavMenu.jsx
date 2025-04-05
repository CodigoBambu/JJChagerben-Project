import React, { useState } from "react";
import { motion } from "framer-motion";
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

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    {
      id: "Calculadora",
      icon: <Calculator className="icon-shadow lg:w-5 lg:h-5" />,
      link: "/",
    },
    {
      id: "Grafico",
      icon: <LineChart className="icon-shadow lg:w-5 lg:h-5" />,
      link: "/",
    },
    {
      id: "Directos",
      icon: <Cast className="icon-shadow lg:w-5 lg:h-5" />,
      link: "/",
    },
    {
      id: "Trabaja Conmigo",
      icon: <Play className="icon-shadow lg:w-5 lg:h-5" />,
      link: "/",
    },
    {
      id: "Redes Sociales",
      icon: <UserRound className="icon-shadow lg:w-5 lg:h-5" />,
      link: "/",
    },
    {
      id: "Mercaderia",
      icon: <ShoppingCart className="icon-shadow lg:w-5 lg:h-5" />,
      link: "/",
    },
  ];

  return (
    <nav className="relative p-4 justify-center z-10">
      <div className="lg:hidden absolute top-4 right-4 icon-shadow ">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8 -mr-2" />
          )}
        </button>
      </div>
      <div className="hidden lg:flex lg:space-x-6 justify-end lg:mt-1.5">
        {menuItem.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex items-center space-x-2 text-shadow lg:text-[15px] font-bold hover:text-white transtiton-all duration-500 "
          >
            {item.icon}
            <span>{item.id}</span>
          </a>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute top-16 right-0 w-screen left-0 bg-[#222] z-10 content-center items-center justify-center p-4 flex flex-col space-y-2 lg:hidden 
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        {menuItem.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex items-center space-x-2 text-shadow font-bold"
          >
            {item.icon}
            <span>{item.id}</span>
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default NavMenu;
