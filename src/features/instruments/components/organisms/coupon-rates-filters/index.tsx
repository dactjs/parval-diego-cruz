import { useMemo } from "react";
import { useSearchParams } from "react-router";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/atoms/select";
import { Label } from "@/components/atoms/label";

import type { Instrument } from "../../../schemas/instruments";

export interface CouponRatesFiltersProps {
  instruments: Instrument[];
}

export function CouponRatesFilters({ instruments }: CouponRatesFiltersProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const issuers = useMemo(
    () => [
      "all",
      ...new Set(instruments.map((instrument) => instrument.issuer)),
    ],
    [instruments]
  );

  const currencies = useMemo(
    () => [
      "all",
      ...new Set(instruments.map((instrument) => instrument.currency)),
    ],
    [instruments]
  );

  const maturities = useMemo(() => {
    const draft = [
      ...new Set(
        instruments.map((instrument) =>
          String(new Date(instrument.maturityDate).getFullYear())
        )
      ),
    ];

    return ["all", ...draft.sort()];
  }, [instruments]);

  const issuer = searchParams.get("issuer") ?? "all";
  const currency = searchParams.get("currency") ?? "all";
  const maturity = searchParams.get("maturity") ?? "all";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="space-y-2">
        <Label htmlFor="issuer-filter">Filtrar por Emisor</Label>

        <Select
          value={issuer}
          onValueChange={(value) =>
            setSearchParams((prev) => {
              prev.set("issuer", value);
              return prev;
            })
          }
        >
          <SelectTrigger id="issuer-filter">
            <SelectValue placeholder="Seleccionar Emisor" />
          </SelectTrigger>

          <SelectContent>
            {issuers.map((issuer) => (
              <SelectItem key={issuer} value={issuer}>
                {issuer === "all" ? "Todos los Emisores" : issuer}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="currency-filter">Filtrar por Moneda</Label>

        <Select
          value={currency}
          onValueChange={(value) =>
            setSearchParams((prev) => {
              prev.set("currency", value);
              return prev;
            })
          }
        >
          <SelectTrigger id="currency-filter">
            <SelectValue placeholder="Seleccionar Moneda" />
          </SelectTrigger>

          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency} value={currency}>
                {currency === "all" ? "Todas las Monedas" : currency}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="maturity-filter">Filtrar por Año de Vencimiento</Label>

        <Select
          value={maturity}
          onValueChange={(value) =>
            setSearchParams((prev) => {
              prev.set("maturity", value);
              return prev;
            })
          }
        >
          <SelectTrigger id="maturity-filter">
            <SelectValue placeholder="Seleccionar Año" />
          </SelectTrigger>

          <SelectContent>
            {maturities.map((year) => (
              <SelectItem key={year} value={year}>
                {year === "all" ? "Todos los Años" : year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
