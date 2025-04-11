import { useState, useEffect, useTransition } from "react";

import type { Instrument } from "../../schemas/instruments";
import { INSTRUMENTS } from "../../db";

export interface UseInstrumentsReturn {
  loading: boolean;
  instruments: Instrument[];
}

export function useInstruments(): UseInstrumentsReturn {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loading, startTransition] = useTransition();

  const parseDate = (date: string): string => {
    const [day, month, year] = date.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  useEffect(() => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));

      const normalized = INSTRUMENTS.map((instrument, index) => ({
        ...instrument,
        id: `${index}.${instrument.ticker}`,
        issueDate: parseDate(instrument.issueDate),
        maturityDate: parseDate(instrument.maturityDate),
        lastOperationDate: parseDate(instrument.lastOperationDate),
      }));

      setInstruments(normalized);
    });
  }, []);

  return { loading, instruments };
}
