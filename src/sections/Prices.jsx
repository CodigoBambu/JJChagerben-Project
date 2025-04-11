import React from "react";

const Price = () => {
  const services = [
    {
      title: "Pools De Liquidez",
      description: "Herramienta Gráfica",
      price: "$200",
      payment: "Por Mes",
      features: [
        "Mapa de calor de liquidación",
        "Gráfico de alta frecuencia",
        "Cuadro histórico",
        "TrenDiff: Indicador de tendencia",
        "Complemento BitXpander",
        "ETF y empresas: titulares de Bitcoin",
      ],
      link: "https://tradingdifferent.com/?ref=YELgWNnX",
    },
    {
      title: "Mentoría Premium",
      description: "Precio VIP",
      price: "$150",
      payment: "UN SOLO PAGO",
      features: [
        "Si te equivocas yo te daré una pu#@da",
        "Aprende a Reconocer estafas",
        "Como crear tus wallets",
        "Como guardar tus llaves privadas",
        "Como comprar BTC al mejor precio del mercado",
        "Mis estrategias de inversión",
        "Acceso al grupo de difusión exclusivo para ALUMNOS",
      ],
      link: "https://api.whatsapp.com/send/?phone=593998177135&text=Información+sobre+la+MENTORIA+PREMIUM",
    },
    {
      title: "No Hagas Trading",
      description: "BitMex",
      price: "0$",
      payment: "No Hagas TRADING",
      features: [
        "Si pierdes dinero te P#t3o",
        "No hacer TRADING",
        "Compra y Guarda",
        "Deja de ser P3nd3j0",
        "Si haces Trading te vuelvo a P#t3o",
        "No valgas V3rg4",
      ],
      link: "https://www.bitmex.com/app/register",
    },
  ];
  return (
    <section className="text-shadow text-center font-bold bg-[#222] text-black py-16 h-full">
    <div className="py-10">
      <span>Rango de Servicios</span>
      <h1 className="text-4xl font-extrabold ">Lista de Precios</h1>
    </div>
    <div className="mt-10 space-y-6 w-full md:w-5/6 mx-auto lg:flex lg:gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="rounded-lg box-shadow-animated w-5/6 mx-auto hover:text-white transition duration-300 text-center"
        >
          <a
            href={service.link}
            className="block p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className=" text-sm mb-3">{service.description}</p>
            <div className="flex justify-center items-center mb-4"> 
              <span className="text-2xl font-bold mr-2">{service.price}</span>
              <span className="text-sm">{service.payment}</span>
            </div>
            <ul className="pl-5 text-sm">
              {service.features.map((feature, featuresIndex) => (
                <li key={featuresIndex}>{feature}</li>
              ))}
            </ul>
          </a>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Price;