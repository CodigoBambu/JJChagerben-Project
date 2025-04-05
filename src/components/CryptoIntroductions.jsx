import React from "react";
import cryptoImage from "../../public/assets/btc.webp";

const CryptopIntrudictions = () => {
  return (
    <section className="text-center text-shadow bg-[#181818] py-10 relative">
      <span className="font-bold">Introducción a las Criptomonedas</span>
      <h1 className="font-extrabold text-4xl my-5">
        ¿Qué son las <strong className="text-white">Criptomonedas?</strong>
      </h1>
      <p className="font-semibold">
        Una criptomoneda{" "}
        <strong className="text-white">
          (también llamada criptoactivo o criptodivisa)
        </strong>{" "}
        es un medio digital de intercambio que utiliza criptografía fuerte para
        asegurar las transacciones, controlar la creación de unidades
        adicionales y verificar la transferencia de activos usando tecnologías
        de registro distribuido.{" "}
        <strong className="text-white">
          Las criptomonedas son un tipo de divisa alternativa o moneda digital.
        </strong>
      </p>
      <div className="flex justify-center items-center w-full h-50">
        <img
          src={cryptoImage}
          alt="Imagen de criptomonedas"
          className="w-3/4 rounded-2xl box-shadow-animated"
        />
      </div>
    </section>
  );
};

export default CryptopIntrudictions;