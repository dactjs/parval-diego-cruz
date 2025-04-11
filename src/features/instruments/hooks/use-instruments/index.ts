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

  useEffect(() => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setInstruments(INSTRUMENTS);
    });
  }, []);

  return { loading, instruments };
}
