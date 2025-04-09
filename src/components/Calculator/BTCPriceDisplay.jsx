import { useEffect, useState } from "react";

export const BTCPriceDisplay = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await response.json();
        setPrice(data.bitcoin.usd);
      } catch (error) {
        console.error("Error fetching BTC price:", error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-2xl font-bold text-[#141418] text-shadow">
      <span className="calc-text text-3xl text-[#141418] text-shadow -mt-16">
        ₿
      </span>
      <span className="calc-text text-[#141418] text-shadow -mt-16">
        ${price.toLocaleString()}
      </span>
    </div>
  );
};
