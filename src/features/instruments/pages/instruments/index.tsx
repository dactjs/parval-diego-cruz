import { InstrumentTable } from "../../components/organisms/instrument-table";
import { useInstruments } from "../../hooks/use-instruments";

import { InstrumentsPageSkeleton } from "./skeleton";

export function InstrumentsPage() {
  const { loading, instruments } = useInstruments();

  if (loading) return <InstrumentsPageSkeleton />;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Panel Principal</h1>
      <InstrumentTable instruments={instruments} />
    </div>
  );
}

export default InstrumentsPage;
