export const HalvingInfo = ({ title, info, className = "" }) => {
  if (!info.year) {
    return (
      <div
        className={`rounded-lg border box-shadow text-black font-bold text-shadow p-4 ${className}`}
      >
        <h3 className="mb-2 text-lg">{title}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Halving #</span>
            <span>0</span>
          </div>
          <div className="flex justify-between">
            <span>Año</span>
            <span>0</span>
          </div>
          <div className="flex justify-between">
            <span>Recompensa por Bloque</span>
            <span>0 BTC</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg border box-shadow text-black font-bold text-shadow p-4 ${className}`}
    >
      <h3 className="mb-2 text-lg">{title}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Halving #</span>
          <span>{info.number}</span>
        </div>
        <div className="flex justify-between">
          <span>Año</span>
          <span>{info.year}</span>
        </div>
        <div className="flex justify-between">
          <span>Recompensa por Bloque</span>
          <span>{info.blockReward} BTC</span>
        </div>
      </div>
    </div>
  );
};
