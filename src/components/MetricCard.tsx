import { FC } from "react";
import { CryptoMetricCard } from "../types";

const MetricCard: FC<CryptoMetricCard> = ({
  name,
  symbol,
  price,
  change,
  iconPath,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-gray-700 h-[200px] text-white rounded-xl p-10 shadow-md ring-1 ring-[#212e49] flex justify-between items-center space-x-4">
      <img
        src={iconPath}
        alt={`${name} icon`}
        className="w-16 h-16 object-contain"
      />
      <div>
        <div className="text-xl text-gray-400 mb-3">
          {name} ({symbol})
        </div>
        <div className="text-3xl font-bold mb-3">${price.toFixed(2)}</div>
        <div
          className={`text-lg ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
