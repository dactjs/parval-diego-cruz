import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";

import { INSTRUMENT_HISTORY } from "@/features/instruments/db";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  type DialogProps,
} from "@/components/molecules/dialog";

export interface HistoryDialogProps extends DialogProps {
  ticker: string;
}

export function HistoryDialog({ ticker, ...rest }: HistoryDialogProps) {
  const data = INSTRUMENT_HISTORY.find((item) => item.ticker === ticker);

  return (
    <Dialog {...rest}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Histórico de Precios - {ticker}</DialogTitle>
        </DialogHeader>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data?.history ?? []}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="date"
                angle={-45}
                textAnchor="end"
                height={60}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getDate()}/${date.getMonth() + 1}`;
                }}
              />

              <YAxis
                domain={["dataMin - 0.5", "dataMax + 0.5"]}
                tickFormatter={(value) => value.toFixed(2)}
              />

              <Tooltip
                formatter={(value: number) => [value.toFixed(2), "Precio"]}
                labelFormatter={(label) => {
                  const date = new Date(label);
                  return `Fecha: ${date.toLocaleDateString("es-do")}`;
                }}
              />

              <Line
                type="monotone"
                dataKey="price"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
}
