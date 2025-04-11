import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

import { Card, CardContent } from "@/components/molecules/card";

import type { Instrument } from "../../../schemas/instruments";

export interface CouponRatesChartProps {
  instruments: Instrument[];
}

export function CouponRatesChart({ instruments }: CouponRatesChartProps) {
  const data = instruments.map((item) => ({
    name: item.ticker || `${item.issuer}-${item.maturityDate}`,
    couponRate: item.couponRate,
    issuer: item.issuer,
    currency: item.currency,
  }));

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />

              <YAxis
                label={{
                  position: "insideLeft",
                  angle: -90,
                  value: "Tasa de Cupón (%)",
                }}
              />

              <Legend />

              <Tooltip
                formatter={(value: number) => [
                  `${value.toFixed(3)}%`,
                  "Tasa de Cupón",
                ]}
                labelFormatter={(label) => `Instrumento: ${label}`}
              />

              <Bar dataKey="couponRate" name="Tasa de Cupón" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
