import MetricCard from "../components/MetricCard";
import { mockCryptoMetrics } from "../mockData";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-7">
      {mockCryptoMetrics.map((crypto, idx) => (
        <MetricCard key={idx} {...crypto} />
      ))}
    </div>
  );
}
