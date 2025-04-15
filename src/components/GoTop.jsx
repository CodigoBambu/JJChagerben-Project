import React, { useEffect, useState } from "react";

const GoTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <a
      href="#top"
      className={`fixed bottom-5 right-5 w-14 h-14 backdrop-blur-2xl rounded-full flex justify-center items-center text-black 
                  box-shadow-animated opacity-0 visibility-hidden transition-all duration-500 z-50 
                  ${
                    visible
                      ? "opacity-100 visibility-visible pointer-events-auto"
                      : "opacity-0 visibility-hidden pointer-events-none"
                  } 
                  hover:scale-110 hover:bg-black/60 hover:text-white`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up text-2xl text-shadow"></i>{" "}
    </a>
  );
};

export default GoTop;
