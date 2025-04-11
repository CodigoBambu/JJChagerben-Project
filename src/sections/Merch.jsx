import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Button from "../components/Buttons";

const MerchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -5% 0px",
  });

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

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [activeProductId, setActiveProductId] = useState(null);

  const toggleProduct = (id) => {
    if (activeProductId === id) {
      setActiveProductId(null);
    } else {
      setActiveProductId(id);
    }
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isInView) {
      products.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProducts((prev) => {
            const ids = prev.map((p) => p.id);
            if (!ids.includes(products[index].id)) {
              return [...prev, products[index]];
            }
            return prev;
          });
        }, index * 300);
      });
    } else {
      setVisibleProducts([]);
    }
  }, [isInView]);

  const slideInEach = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.4 },
    },
  };

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

  const tallas = ["S", "M", "L", "XL", "XXL"];

  return (
    <section ref={ref} id="merchBTC" className="content-center py-20 h-full">
      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "exit"}
        variants={slideInTop}
        className="py-10 px-4 text-black text-shadow font-bold"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Merch Oficial</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {visibleProducts.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideInEach}
                onClick={() => isMobile && toggleProduct(product.id)}
                className="group relative box-shadow-animated rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-102 cursor-pointer"
              >
                <div className="flex justify-center items-center h-[300px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[300px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center">
                    {product.name}
                  </h3>
                </div>

                {/* Detalles (hover/clic) */}
                <div
                  className={`absolute inset-0 backdrop-blur-2xl bg-opacity-90 flex flex-col items-center justify-center p-4 transition-opacity duration-300 
                    ${
                      isMobile
                        ? activeProductId === product.id
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                >
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
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default MerchSection;
