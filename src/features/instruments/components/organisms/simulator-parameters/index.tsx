import { useSearchParams } from "react-router";

import { Card, CardContent } from "@/components/molecules/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/atoms/select";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";

import type { Instrument } from "../../../schemas/instruments";

export interface SimulatorParametersProps {
  instruments: Instrument[];
}

export function SimulatorParameters({ instruments }: SimulatorParametersProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const instrument = searchParams.get("instrument") ?? undefined;
  const nominal = searchParams.get("nominal") ?? "";
  const days = searchParams.get("days") ?? "";

  const options = instruments.map((instrument) => ({
    value: instrument.id,
    label: `${instrument.issuer} - ${instrument.ticker} (${
      instrument.currency
    }) - ${instrument.couponRate.toFixed(3)}%`,
  }));

  return (
    <Card>
      <header className="bg-green-600">
        <h2 className="text-white text-center">Parámetros de Simulación</h2>
      </header>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="instrument-select">Seleccionar Instrumento</Label>

          <Select
            value={instrument}
            onValueChange={(value) =>
              setSearchParams((prev) => {
                prev.set("instrument", value);
                return prev;
              })
            }
          >
            <SelectTrigger id="instrument-select">
              <SelectValue placeholder="Seleccionar instrumento financiero" />
            </SelectTrigger>

            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="nominal-value">Valor Nominal</Label>

          <Input
            id="nominal-value"
            type="number"
            placeholder="Ingrese el valor nominal"
            defaultValue={nominal}
            onChange={(event) =>
              setSearchParams((prev) => {
                prev.set("nominal", event.target.value);
                return prev;
              })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="days">Días</Label>

          <Input
            id="days"
            type="number"
            placeholder="Ingrese la cantidad de días"
            defaultValue={days}
            onChange={(event) =>
              setSearchParams((prev) => {
                prev.set("days", event.target.value);
                return prev;
              })
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
