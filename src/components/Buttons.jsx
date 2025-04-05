import React from "react";

const Button = ({
  text,
  onClick,
  internalLink,
  externalLink,
  type = "button",
  className = "",
}) => {
  const defaultStyles = `
    px-8 py-4 font-bold rounded-xl relative z-20 m-5
    transition-all duration-500
    box-shadow backdrop-blur-2xl cursor-pointer text-white hover:bg-black/50  text-[#141418] text-shadow hover:scale-105 hover:text-black
  `;

  const combinedStyles = `${defaultStyles} ${className}`;

  if (internalLink) {
    const handleScroll = () => {
      const element = document.getElementById(internalLink);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <button onClick={handleScroll} type={type} className={combinedStyles}>
        {text}
      </button>
    );
  }

  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={combinedStyles}>
      {text}
    </button>
  );
};

export default Button;
