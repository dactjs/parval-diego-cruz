import { useMemo } from "react";
import { useSearchParams } from "react-router";
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Card, CardContent } from "@/components/molecules/card";

import type { Instrument } from "../../../schemas/instruments";

export interface SimulatorResultProps {
  instruments: Instrument[];
}

export function SimulatorResult({ instruments }: SimulatorResultProps) {
  const [searchParams] = useSearchParams();

  const nominal = Number(searchParams.get("nominal") ?? 0);
  const days = Number(searchParams.get("days") ?? 0);

  const instrument = instruments.find(
    (instrument) => instrument.id === searchParams.get("instrument")
  );

  const amount = instrument
    ? (nominal * (instrument.couponRate / 100) * days) / 365
    : 0;

  const results = useMemo(() => {
    if (!instrument || !nominal || !days) return [];

    const periods = [30, 60, 90, 180, 270, 365];

    return periods.map((period) => ({
      days: period,
      amount: (nominal * (instrument.couponRate / 100) * period) / 365,
    }));
  }, [instrument, nominal, days]);

  return (
    <Card>
      <header className="bg-green-600">
        <h2 className="text-white text-center">Resultados</h2>
      </header>

      <CardContent className="p-6">
        {instrument && results.length > 0 ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-md">
              <h3 className="font-semibold text-lg mb-2">
                Resumen de Inversión
              </h3>

              <p>
                {`Instrumento: ${instrument.issuer} - ${instrument.ticker}`}
              </p>

              <p>
                {`Valor Nominal: ${nominal.toLocaleString("es-do", {
                  style: "currency",
                  currency: instrument.currency,
                })}`}
              </p>

              <p>{`Tasa de Cupón: ${instrument.couponRate.toFixed(3)}%`}</p>
              <p>{`Período: ${days} días`}</p>

              <p className="font-bold mt-2">
                {`Monto del Cupón: ${amount.toLocaleString("es-do", {
                  style: "currency",
                  currency: instrument.currency,
                })}`}
              </p>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={results}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="days"
                    label={{
                      value: "Días",
                      position: "insideBottom",
                      offset: -10,
                    }}
                  />

                  <YAxis
                    label={{
                      value: "Monto del Cupón",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    tickFormatter={(value) =>
                      value.toLocaleString("es-do", {
                        style: "currency",
                        currency: instrument.currency,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })
                    }
                  />

                  <Tooltip
                    formatter={(value: number) => [
                      value.toLocaleString("es-do", {
                        style: "currency",
                        currency: instrument.currency,
                      }),
                      "Monto del Cupón",
                    ]}
                    labelFormatter={(label) => `Período: ${label} días`}
                  />

                  <Bar dataKey="amount" name="Monto del Cupón" fill="#16a34a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[300px] text-gray-500">
            <p>Seleccione un instrumento y calcule para ver los resultados</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
