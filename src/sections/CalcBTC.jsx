import { useState, useEffect, useRef } from "react";
import { BTCPriceDisplay } from "../components/Calculator/BTCPriceDisplay";
import { HalvingInfo } from "../components/Calculator/HalvingInfo";
import { InvestmentInputs } from "../components/Calculator/InvestmentInputs";
import { ProjectionTable } from "../components/Calculator/ProjectionTable";
import Modal from "../components/Calculator/Modal";
import { BadgeAlert, TriangleAlert } from "lucide-react";
import {
  getCurrentHalvingInfo,
  calculateRetirementHalving,
  generateHalvingTable,
} from "../scripts/CalculateBTC";

const CalcBTC = () => {
  const [btcPrice, setBtcPrice] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [currentHalving, setCurrentHalving] = useState(getCurrentHalvingInfo());
  const [retirementHalving, setRetirementHalving] = useState({
    number: 0,
    year: 0,
    blockReward: 0,
  });
  const [projections, setProjections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const titleRef = useRef(null);
  const alertRef = useRef(null);
  const calcBTCRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    left: false,
    right: false,
    title: false,
    alert: false,
  });
  const [isProjectionVisible, setIsProjectionVisible] = useState(false);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await response.json();
        setBtcPrice(data.bitcoin.usd);
      } catch (error) {
        console.error("Error al obtener precio de BTC:", error);
      }
    };

    fetchPrice();
  }, []);

  useEffect(() => {
    setRetirementHalving(calculateRetirementHalving(investment));
    setProjections(generateHalvingTable(investment, btcPrice));
    setIsProjectionVisible(investment > 0);
  }, [investment, btcPrice]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => setIsVisible((prev) => ({ ...prev, title: true })),
              0
            );
            setTimeout(
              () => setIsVisible((prev) => ({ ...prev, alert: true })),
              200
            );
            setTimeout(
              () => setIsVisible((prev) => ({ ...prev, left: true })),
              400
            );
            setTimeout(
              () => setIsVisible((prev) => ({ ...prev, right: true })),
              600
            );
          } else {
            setIsVisible({
              left: false,
              right: false,
              title: false,
              alert: false,
            });
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
      }
    );

    if (calcBTCRef.current) {
      observer.observe(calcBTCRef.current);
    }

    return () => {
      if (calcBTCRef.current) {
        observer.unobserve(calcBTCRef.current);
      }
    };
  }, []);

  const fadeStyle = (isVisibleProp) => ({
    opacity: isVisibleProp ? 1 : 0,
    transform: isVisibleProp ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
  });

  const leftContainerStyle = fadeStyle(isVisible.left);
  const rightContainerInitialStyle = {
    opacity: isVisible.right ? 1 : 0,
    transform: isVisible.right ? "translateY(0)" : "translateY(20px)",
    transition:
      "opacity 0.5s ease-in-out 0.3s, transform 0.5s ease-in-out 0.3s, height 0.3s ease-in-out",
    overflow: "hidden",
    height: isProjectionVisible ? "auto" : "100px",
  };
  const titleStyle = fadeStyle(isVisible.title);
  const alertStyle = fadeStyle(isVisible.alert);

  return (
    <div className="min-h-screen mt-1 mb-5 p-4 md:p-8" ref={calcBTCRef}>
      <div className="mx-auto max-w-7xl">
        <h1
          ref={titleRef}
          className="mb-8 text-center text-3xl font-bold text-[#141418] text-shadow"
          style={{
            ...titleStyle,
            transform: isVisible.title ? "translateY(0)" : "translateY(-20px)",
          }}
          id="calcBTC"
        >
          Calculadora de Inversión en Bitcoin
        </h1>
        <div
          ref={alertRef}
          className="flex bg-transparent box-shadow p-4 rounded-lg mt-4 mb-10 text-center text-[#141418] text-shadow relative font-bold"
          style={alertStyle}
        >
          <TriangleAlert className="w-30 -ml-2 text-black icon-shadow " />
          Estos valores son especulativos de forma estática sobre un modelo
          estático, pueden cambiar si cambian las condiciones de mercado.
          <TriangleAlert className="w-30 -ml-2 text-black icon-shadow " />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div
            ref={leftContainerRef}
            className="relative space-y-6 rounded-xl bg-transparent p-10 box-shadow shadow-lg"
            style={leftContainerStyle}
          >
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="mt-10 -ml-5">
              <BTCPriceDisplay />
            </div>
            <div className="space-y-4 relative">
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute -right-5 text-white cursor-pointer focus:outline-none"
                aria-label="Abrir información"
              >
                <BadgeAlert className="w-6 h-6 -mt-17.5 text-black icon-shadow" />
              </button>
              <h2 className="text-xl font-semibold text-[#141418] text-shadow">
                Calculadora de Inversión
              </h2>
              <InvestmentInputs
                usdAmount={investment}
                btcPrice={btcPrice}
                onUsdChange={setInvestment}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <HalvingInfo
                title="Halving Actual"
                info={currentHalving}
                className="bg-bitcoin-light"
              />
              <HalvingInfo
                title="Halving Jubilación"
                info={retirementHalving}
                className="bg-bitcoin-light"
              />
            </div>
          </div>
          <div
            ref={rightContainerRef}
            className="rounded-xl box-shadow bg-transparent p-6"
            style={rightContainerInitialStyle}
          >
            <h2 className="mb-4 text-xl font-semibold text-[#141418] text-shadow cursor-pointer">
              Proyecciones de Inversión
            </h2>
            {isProjectionVisible && (
              <ProjectionTable projections={projections} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcBTC;
