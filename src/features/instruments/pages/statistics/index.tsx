import { useSearchParams } from "react-router";

import { CouponRatesFilters } from "../../components/organisms/coupon-rates-filters";
import { CouponRatesChart } from "../../components/organisms/coupon-rates-chart";
import { useInstruments } from "../../hooks/use-instruments";

import { StatisticsPageSkeleton } from "./skeleton";

export function StatisticsPage() {
  const [searchParams] = useSearchParams();

  const { loading, instruments } = useInstruments();

  const issuer = searchParams.get("issuer") ?? "all";
  const currency = searchParams.get("currency") ?? "all";
  const maturity = searchParams.get("maturity") ?? "all";

  const filtered = instruments.filter((instrument) => {
    const issuerMatch = issuer === "all" || instrument.issuer === issuer;

    const currencyMatch =
      currency === "all" || instrument.currency === currency;

    const yearMatch =
      maturity === "all" ||
      String(new Date(instrument.maturityDate).getFullYear()) === maturity;

    return issuerMatch && currencyMatch && yearMatch;
  });

  if (loading) return <StatisticsPageSkeleton />;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Gráfico de Tasas de Cupón</h1>

      <CouponRatesFilters instruments={instruments} />
      <CouponRatesChart instruments={filtered} />
    </div>
  );
}

export default StatisticsPage;
