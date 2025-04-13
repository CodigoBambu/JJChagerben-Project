import React, { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    let lastMouseX = 0;
    let lastMouseY = 0;
    const separation = 10;
    const crearBinario = (x, y) => {
      const binario = document.createElement("div");
      binario.textContent = Math.random() > 0.5 ? "1" : "0";
      binario.className = "binario";
      document.body.appendChild(binario);
      binario.style.position = "fixed";
      binario.style.left = `${x}px`;
      binario.style.top = `${y}px`;

      setTimeout(() => binario.remove(), 3000);
    };

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const distX = Math.abs(mouseX - lastMouseX);
      const distY = Math.abs(mouseY - lastMouseY);

      if (distX >= separation || distY >= separation) {
        crearBinario(mouseX, mouseY);
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default CursorEffect;
