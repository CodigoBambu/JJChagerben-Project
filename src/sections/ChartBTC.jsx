import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ChartBTC = () => {
  const containerRef = useRef(null);
  const chartContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, 100]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView && chartContainerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          backgroundColor: "#1b1b20",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          calendar: false,
          support_host: "https://www.tradingview.com",
          container_id: chartContainerRef.current.id,
        });
      } else {
        console.error(
          "TradingView is not defined or chart container not found"
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      const scriptTag = document.querySelector(
        'script[src="https://s3.tradingview.com/tv.js"]'
      );
      if (scriptTag) {
        document.body.removeChild(scriptTag);
      }
    };
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{
        opacity,
        y,
      }}
      className="mt-30 w-full h-screen max-w-full transition-all duration-500"
    >
      <div id="chartBTC" className="w-full h-full" ref={chartContainerRef}>
        <div className="w-full h-full"></div>
        <div className="hidden">
          <a
            href="https://www.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-blue-500">
              Track all markets on TradingView
            </span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ChartBTC;
