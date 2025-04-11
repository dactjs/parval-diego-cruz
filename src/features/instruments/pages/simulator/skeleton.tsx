import { Card, CardContent } from "@/components/molecules/card";
import { Label } from "@/components/atoms/label";
import { Skeleton } from "@/components/atoms/skeleton";

export function SimulatorPageSkeleton() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Simulador de Inversiones</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <header className="bg-green-600">
            <h2 className="text-white text-center">Parámetros de Simulación</h2>
          </header>

          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="instrument-select">Seleccionar Instrumento</Label>
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nominal-value">Valor Nominal</Label>
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="days">Días</Label>
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <header className="bg-green-600">
            <h2 className="text-white text-center">Resultados</h2>
          </header>

          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-center h-[300px] text-gray-500">
              <p>Seleccione un instrumento y calcule para ver los resultados</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
