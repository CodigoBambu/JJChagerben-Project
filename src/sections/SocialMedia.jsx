import React, { useState, useEffect } from "react";
import TikTok from "/assets/tiktok.webp";
import WhatsApp from "/assets/whatsapp.webp";
import Telegram from "/assets/telegram.webp";
import Instagram from "/assets/instagram.webp";
import Facebook from "/assets/facebook.webp";
import X from "/assets/x.webp";
import { motion } from "framer-motion";

const SocialMedia = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#socialMedia");
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const socialItems = [
    {
      id: 1,
      title: "TikTok",
      link: "https://www.tiktok.com/@jjchagerben753",
      divClassName: "tiktok",
      background: TikTok,
    },
    {
      id: 2,
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send/?phone=593998177135&text=Información+sobre+la+MENTORIA+PREMIUM",
      divClassName: "whatsapp",
      background: WhatsApp,
    },
    {
      id: 3,
      title: "Telegram",
      link: "https://t.me/jjchagerben357",
      divClassName: "telegram",
      background: Telegram,
    },
    {
      id: 4,
      title: "Instagram",
      link: "https://www.instagram.com/jjchagerben",
      divClassName: "instagram",
      background: Instagram,
    },
    {
      id: 5,
      title: "Facebook",
      link: "https://www.facebook.com/people/JJChagerben/61557765639522/?mibextid=ZbWKwL",
      divClassName: "facebook",
      background: Facebook,
    },
    {
      id: 6,
      title: "X",
      link: "https://x.com/LOKI747",
      divClassName: "x",
      background: X,
    },
  ];

  return (
    <motion.section
      id="socialMedia"
      className="social-media relative w-full min-h-screen pb-10 z-10 text-black text-shadow font-bold overflow-hidden bg-[url('/assets/background-redes.webp')] bg-cover bg-no-repeat justify-center content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="text-2xl box-shadow justify-center bg-black/50 backdrop-blur-2xl mx-auto text-center my-10 w-4/5 rounded-lg p-2 relative z-20"
        initial={{ y: -30, opacity: 0 }}
        animate={
          isInView
            ? { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 } }
            : {}
        }
        exit={{ y: -30, opacity: 0, transition: { duration: 0.2 } }}
      >
        <h1>Redes Sociales</h1>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 justify-center items-center text-center content-center lg:grid-cols-3 lg:mx-auto lg:w-6/7 relative z-10">
        {socialItems.map((item, index) => (
          <motion.a
            className="block hover:text-white transition-all duration-300 hover:scale-105"
            href={item.link}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: -100, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: index * 0.2 },
                  }
                : {}
            }
            exit={{ opacity: 0, y: 100 }}
            transition={{ delay: isInView ? index * 0.1 : 0 }}
          >
            <div
              className={`${item.divClassName} social-a box-shadow p-8 mt-6 w-5/6 mx-auto rounded-2xl relative overflow-hidden group`}
            >
              <img
                src={item.background}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm z-0 pointer-events-none"
              />
              <h3 className="relative z-10 text-black text-xl p-6 group-hover:text-white transition-all duration-300">
                {item.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default SocialMedia;
