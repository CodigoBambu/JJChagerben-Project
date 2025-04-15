import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Buttons";

const MerchSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("merchBTC");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsVisible(inView);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const products = [
    {
      id: 1,
      name: "BTC Save My Life",
      image: "/assets/btc-save-my-life.webp",
    },
    {
      id: 2,
      name: "Its Time For Plan",
      image: "/assets/its-time-for-plan.webp",
    },
  ];

  const tallas = ["S", "M", "L", "XL", "XXL"];

  return (
    <section id="merchBTC" className="content-center py-20 h-full bg-[#3b3b3b]">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-10 px-4 text-black text-shadow font-bold"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Merch Oficial</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="group relative box-shadow-animated rounded-2xl bg-black/30 overflow-hidden transform transition-transform duration-300 hover:scale-102 cursor-pointer"
            >
              <div className="flex justify-center items-center h-[300px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[300px] h-[300px] object-cover merch-img-shadow transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">
                  {product.name}
                </h3>
              </div>
              <div className="absolute inset-0 backdrop-blur-2xl bg-black/20 bg-opacity-90 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="mb-2">{product.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <h4 className="mt-1">Tallas</h4>
                  {tallas.map((talla) => (
                    <span
                      key={talla}
                      className="px-3 py-1 box-shadow backdrop-blur-3xl text-white bg-black/50 rounded-md text-sm hover:scale-105 hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      {talla}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col justify-center items-center my-3">
                  <h1>Precio</h1>
                  <span className="text-white">30$</span>
                </div>
                <Button
                  text="Pidelo Aqui"
                  className="bg-black/80 text-white hover:text-black"
                  externalLink="https://api.whatsapp.com/send?phone=593999864446&text=La%20quiero%20AHORA!%2C%20la%20camisa%20Inconfiscable!"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MerchSection;
