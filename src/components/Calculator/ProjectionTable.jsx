export const ProjectionTable = ({ projections }) => {
  return (
    <div className="overflow-x-auto rounded-lg box-shadow text-shadow text-black font-bold">
      <table className="w-full">
        <thead className="bg-[#282830]">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold ">Año</th>
            <th className="px-4 py-2 text-right text-sm font-semibold ">
              PBTC
            </th>
            <th className="px-4 py-2 text-right text-sm font-semibold ">
              Inversión
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200/50">
          {projections.map((row) => (
            <tr key={row.year} className="animate-fade-in">
              <td className="px-4 py-2 text-sm ">{row.year}</td>
              <td className="px-4 py-2 text-right text-sm ">
                $
                {row.pbtc.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </td>
              <td className="px-4 py-2 text-right text-sm ">
                $
                {row.investment.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
