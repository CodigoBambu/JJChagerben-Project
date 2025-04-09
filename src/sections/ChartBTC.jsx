import React, { useEffect } from "react";

const ChartBTC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
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
          container_id: "tradingview-chart",
        });
      } else {
        console.error("TradingView is not defined");
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
    <section className="pt-8 my-10 w-full h-[610px] max-w-full">
      <div id="chartBTC" className="w-full h-full">
        <div className="w-full h-[calc(100% - 32px)]"></div>
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
    </section>
  );
};

export default ChartBTC;
