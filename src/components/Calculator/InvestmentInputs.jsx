import { calculateBTCAmount } from "../../scripts/CalculateBTC";

export const InvestmentInputs = ({ usdAmount, btcPrice, onUsdChange }) => {
  const handleUsdChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    onUsdChange(value);
  };

  const btcAmount = calculateBTCAmount(usdAmount, btcPrice);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <label htmlFor="usd-input" className="sr-only">
          Cantidad en USD
        </label>
        <span className="z-10 absolute left-3 top-1/2 -translate-y-1/2 text-black font-bold text-shadow">
          $
        </span>
        <input
          id="usd-input"
          type="number"
          value={usdAmount || ""}
          onChange={handleUsdChange}
          className="w-full rounded-lg border font-bold box-shadow text-white backdrop-blur-[10px] p-2 pl-8"
          placeholder="Ingrese cantidad en USD"
        />
      </div>
      <div className="relative">
        <label htmlFor="btc-input" className="sr-only">
          Cantidad en BTC
        </label>
        <span className="z-10 absolute left-3 top-1/2 -translate-y-1/2 text-black text-shadow font-bold">
          ₿
        </span>
        <input
          id="btc-input"
          type="text"
          value={btcAmount.toFixed(8)}
          readOnly
          className="w-full rounded-lg border box-shadow p-2 pl-8 text-white "
        />
      </div>
    </div>
  );
};
