import { SimulatorParameters } from "../../components/organisms/simulator-parameters";
import { SimulatorResult } from "../../components/organisms/simulator-result";
import { useInstruments } from "../../hooks/use-instruments";

import { SimulatorPageSkeleton } from "./skeleton";

export function SimulatorPage() {
  const { loading, instruments } = useInstruments();

  if (loading) return <SimulatorPageSkeleton />;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Simulador de Inversiones</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SimulatorParameters instruments={instruments} />
        <SimulatorResult instruments={instruments} />
      </div>
    </div>
  );
}

export default SimulatorPage;
